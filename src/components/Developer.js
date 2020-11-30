import React from "react";
import devStyles from "../styles/Developer.module.css";
import dev from "../assets/dev.svg";
import arrow from "../assets/arrow.svg";

function Developer() {
  return (
    <div className={devStyles.container}>
      <div className={devStyles.alignDiv}>
        <div>
          <img src={dev} alt="" className={devStyles.devImg} />
        </div>
        <div className={devStyles.alignText}>
          <h1 className={devStyles.header}>
            Developers doing wonders everyday on Tezos.
          </h1>
          <p className={devStyles.subHeader}>
            One stop solution for all your development related need of any kind.
            High end tech community to help you. One stop solution for all your
            development related need of any kind. High end tech community to
            help you.
          </p>
          <div className={devStyles.alignInfoDiv}>
            <div className={devStyles.marginInfoDiv}>
              <p style={{ color: "#2DCA8C" }} className={devStyles.textSize}>
                3000+
              </p>
              <p className={devStyles.infoDesc}>Dev Community</p>
            </div>
            <div className={devStyles.marginInfoDiv}>
              <p style={{ color: "#377DFF" }} className={devStyles.textSize}>
                300k+
              </p>
              <p className={devStyles.infoDesc}>Project Views</p>
            </div>
            <div className={devStyles.marginInfoDiv}>
              <p style={{ color: "#FFBE3D" }} className={devStyles.textSize}>
                99.99%
              </p>
              <p className={devStyles.infoDesc}>Secured</p>
            </div>
          </div>
          <div className={devStyles.exploreDiv}>
            <p className={devStyles.explore}>View GitHub</p>
            <img src={arrow} alt="" className={devStyles.arrow} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developer;
