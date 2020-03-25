import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import SectionPills from "./Sections/SectionPills.js";

import SectionCarousel from "./Sections/SectionCarousel.js";

import SectionGuestbook from "./Sections/SectionGuestbook.js";

import styles from "assets/jss/material-kit-react/views/components.js";

import axios from "axios";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const accountId = props.match.params.aid;
  const { ...rest } = props;
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);
  const [guestbook, setGuestbook] = useState([]);

  useEffect(() => {
    axios(
      `https://us-central1-rose-api.cloudfunctions.net/app/a/${accountId}`
    ).then(result => {
      setData(result.data);
      setImages(result.data.images);
      setGuestbook(result.data.guestbook);
    });
  }, []);

  return (
    <div>
      <Header
        brand="IN MEMORY OF"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>
                  {data.firstname} {data.lastname}
                </h1>
                <h3 className={classes.subtitle}>
                  {" "}
                  {data.dob} {" - "} {data.dod}{" "}
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionPills data={data} guestbook={guestbook} />
        <SectionCarousel data={images} accountId={accountId} />
        <SectionGuestbook accountId={accountId} />
        <GridItem md={12} className={classes.textCenter}></GridItem>
      </div>
      <Footer />
    </div>
  );
}
