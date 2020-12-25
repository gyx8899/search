import Author from './author';

export const name = 'Search';
export const displayName = 'Search';
const keywords = [
  'react',
  'nextjs',
  '@daybyday',
  'app',
  'template',
  'yx',
];

export default {
  name,
  displayName,
  github: {
    repo: `${Author.github.home}/${name}`,
  },
  npm: {
    url: `https://www.npmjs.com/package/@daybyday/${name}`,
  },
  header: {
    title: `${displayName} `,
    description: `${displayName}: A app project based on React, NextJs.`,
    keywords: [...keywords].join(', '),
    themeColor: '#1890FF',
    bgColor: '#ffffff',
    gaTrackingId: null,
  },
};
