import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import heroStyles from "../styles/Hero.module.css";
import Header from "./Header";

function Hero() {
  return (
    <div className={heroStyles.container}>
      <Header />
      <Grid container>
        <Grid
          item
          className={heroStyles.marginHeader}
          xs={12}
          sm={12}
          md={4}
          lg={4}
        >
          <h1 className={heroStyles.header}>
            <span style={{ color: "#2C7DF7" }}>Tezos</span> India Developer
            Portal
          </h1>
          <p className={heroStyles.subHeader}>
            Technical documentation for participating in the Tezos network.
            mostly for developers.
          </p>
          <div className={heroStyles.buttons}>
              <Button className={heroStyles.githubBtn}>Github</Button>
              <p className={heroStyles.learnMoreBtn}>Learn More</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Hero;
