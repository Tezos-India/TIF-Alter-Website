import React from "react";
import Hidden from "@material-ui/core/Hidden";
import activityStyles from "../styles/Activity.module.css";
import Card from "../constants/AboutCard";
import MobileCard from "../constants/AboutMobile";
import tezos from "../constants/constant";

function Activity() {
  return (
    <div className={activityStyles.container}>
        <Hidden smDown>
      <div className={activityStyles.alignCard}>
        {tezos.activityOne.map((cardDesc) => (
          <div className={activityStyles.marginLeft}>
            <Card>
              <img
                src={cardDesc.image}
                alt=""
                className={activityStyles.cardImg}
              />
              <p className={activityStyles.title}>{cardDesc.title}</p>
              <p className={activityStyles.desc}>{cardDesc.desc}</p>
            </Card>
          </div>
        ))}
      </div>

      <div className={activityStyles.alignCard}>
        {tezos.activityTwo.map((cardDesc) => (
          <div className={activityStyles.marginLeft}>
            <Card>
              <img
                src={cardDesc.image}
                alt=""
                className={activityStyles.cardImg}
              />
              <p className={activityStyles.title}>{cardDesc.title}</p>
              <p className={activityStyles.desc}>{cardDesc.desc}</p>
            </Card>
          </div>
        ))}
      </div>
      </Hidden>
      <Hidden smUp>
      <div className={activityStyles.alignCard}>
        {tezos.activityOne.map((cardDesc) => (
          <div className={activityStyles.marginLeft}>
            <MobileCard>
              <img
                src={cardDesc.image}
                alt=""
                className={activityStyles.cardImg}
              />
              <p className={activityStyles.title}>{cardDesc.title}</p>
              <p className={activityStyles.desc}>{cardDesc.desc}</p>
            </MobileCard>
          </div>
        ))}
      </div>

      <div className={activityStyles.alignCard}>
        {tezos.activityTwo.map((cardDesc) => (
          <div className={activityStyles.marginLeft}>
            <MobileCard>
              <img
                src={cardDesc.image}
                alt=""
                className={activityStyles.cardImg}
              />
              <p className={activityStyles.title}>{cardDesc.title}</p>
              <p className={activityStyles.desc}>{cardDesc.desc}</p>
            </MobileCard>
          </div>
        ))}
      </div>
      </Hidden>
    </div>
  );
}

export default Activity;
