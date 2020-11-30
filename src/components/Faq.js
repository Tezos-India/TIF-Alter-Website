import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import faqStyles from "../styles/Faq.module.css";
import FaqCard from "../constants/FAQCard";
import MobileFaqCard from "../constants/MobileFAQCards";
import {faq} from "../constants/constant";

function FAQ() {
  return (
    <div className={faqStyles.container}>
      <p className={faqStyles.header}>
        Frequently asked question
      </p>
      <p className={faqStyles.faqDesc}>
        Jobs that are available from us and looking for their own people! Browse
        our <br /> vacancies and find the one that is right for you!
      </p>
<Hidden smDown>
      <Grid container className={faqStyles.faqCard}>
        <Grid
          item
          className={faqStyles.faqAlignCard}
          xs={12}
          sm={12}
          md={4}
          lg={4}
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid container>
                {faq.faqRowOne.map((faqDesc) => (
                  <Grid
                    className={faqStyles.faqCardMargin}
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <FaqCard>{faqDesc.title}</FaqCard>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={faqStyles.marginTwoCard}
            >
              <Grid container>
                {faq.faqRowTwo.map((faqDesc) => (
                  <Grid
                    item
                    className={faqStyles.faqCardMargin}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <FaqCard>{faqDesc.title}</FaqCard>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Hidden>

      <Hidden smUp>
      <Grid container className={faqStyles.faqCard}>
        <Grid
          item
          className={faqStyles.faqAlignCard}
          xs={12}
          sm={12}
          md={4}
          lg={4}
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid container>
                {faq.faqRowOne.map((faqDesc) => (
                  <Grid
                    className={faqStyles.faqCardMargin}
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <MobileFaqCard>{faqDesc.title}</MobileFaqCard>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={faqStyles.marginTwoCard}
            >
              <Grid container>
                {faq.faqRowTwo.map((faqDesc) => (
                  <Grid
                    item
                    className={faqStyles.faqCardMargin}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                  >
                    <MobileFaqCard>{faqDesc.title}</MobileFaqCard>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Hidden>

      <Button className={faqStyles.btn}>
        Still have unanswered questions? Get in touch
      </Button>
    </div>
  );
}

export default FAQ;