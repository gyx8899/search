#!/bin/bash

npm config set access public
npm run prepack
if [ $? = 0 ]; then
    echo
  else
    exit 1
fi

if [[ -n $(git diff --stat) ]]; then
  echo "some files has changed in your local"
  exit 1
fi

if [ -z $(git status -s) ]; then
    echo
  else
    echo 'some files modified/untracked'
    exit 1
fi

branch=$(git rev-parse --abbrev-ref HEAD)

if [ $branch == 'master' ]; then
  git pull origin $branch
else
  read -r -p "do you publish the $branch origin? [Y/n] " input
  if [ $? == 1 ]; then
    git pull origin $branch
  else
    exit 1
  fi
fi

PS3='Please enter your release choice: '
select opt in "major" "minor" "patch" "premajor" "preminor" "prepatch" "prerelease"; do
  case $opt in
  "minor" | "major" | "patch" | "premajor" | "preminor" | "prepatch" | "prerelease")
    echo "you chose choice $REPLY which is $opt"
    break
    ;;
  *)
    echo "invalid option $REPLY, don't support $opt"
    exit 1
    break
    ;;
  esac
done

if [ $opt == "premajor" -o $opt == "preminor" -o $opt == "prepatch" -o $opt == "prerelease" ]; then
  npm version $opt --preid="beta" -m "release v%s"
else
  npm version $opt -m "release v%s"
fi

TAG=$(git describe --tags $(git rev-list --tags --max-count=1))

conventional-changelog -p angular -i changelog.md -s -r 0

if [ $? = 0 ]; then
    echo
  else
    npm install conventional-changelog-cli -g
    conventional-changelog -p angular -i changelog.md -s -r 0
fi

git add changelog.md
git commit -m "docs: add $TAG changelog"
git push origin $branch

rm -rf dist

if [ $opt == "premajor" -o $opt == "preminor" -o $opt == "prepatch" -o $opt == "prerelease" ]; then
  npm publish --tag=beta
else
  git push origin $TAG
  npm publish
fi

echo success
