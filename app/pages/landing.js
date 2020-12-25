import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

// @material-ui/icons

// core components
import Header from 'app/components/Header/Header.js';
import Footer from 'app/components/Footer/Footer.js';
import GridContainer from 'app/components/Grid/GridContainer.js';
import GridItem from 'app/components/Grid/GridItem.js';
import Button from 'app/components/CustomButtons/Button.js';
import HeaderLinks from 'app/components/Header/HeaderLinks.js';
import Parallax from 'app/components/Parallax/Parallax.js';

import styles from 'app/assets/jss/nextjs-material-kit/pages/landingPage.js';

// Sections for this page
import ProductSection from 'app/pages/landing/ProductSection.js';
import TeamSection from 'app/pages/landing/TeamSection.js';
import WorkSection from 'app/pages/landing/WorkSection.js';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const {...rest} = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
    <Parallax filter responsive image={require('app/assets/img/landing-bg.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                title, that's why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
    </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
