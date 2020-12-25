import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';
// @material-ui/icons
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from 'app/components/Header/Header.js';
import Footer from 'app/components/Footer/Footer.js';
import Button from 'app/components/CustomButtons/Button.js';
import GridContainer from 'app/components/Grid/GridContainer.js';
import GridItem from 'app/components/Grid/GridItem.js';
import HeaderLinks from 'app/components/Header/HeaderLinks.js';
import NavPills from 'app/components/NavPills/NavPills.js';
import Parallax from 'app/components/Parallax/Parallax.js';

import profile from 'app/assets/img/faces/christian.jpg';

import studio1 from 'app/assets/img/examples/studio-1.jpg';
import studio2 from 'app/assets/img/examples/studio-2.jpg';
import studio3 from 'app/assets/img/examples/studio-3.jpg';
import studio4 from 'app/assets/img/examples/studio-4.jpg';
import studio5 from 'app/assets/img/examples/studio-5.jpg';
import work1 from 'app/assets/img/examples/olu-eletu.jpg';
import work2 from 'app/assets/img/examples/clem-onojeghuo.jpg';
import work3 from 'app/assets/img/examples/cynthia-del-rio.jpg';
import work4 from 'app/assets/img/examples/mariya-georgieva.jpg';
import work5 from 'app/assets/img/examples/clem-onojegaw.jpg';

import styles from 'app/assets/jss/nextjs-material-kit/pages/profilePage.js';

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const {...rest} = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax small filter image={require('app/assets/img/profile-bg.jpg')} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Christian Louboutin</h3>
                    <h6>DESIGNER</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className="fab fa-instagram" />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className="fab fa-facebook" />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{' '}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: 'Studio',
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: 'Work',
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: 'Favorite',
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
