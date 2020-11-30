import React from "react";
import infoStyles from "../styles/Info.module.css";
import infoImg from "../assets/info-img.png";
import { info } from "../constants/constant";
import arrow from "../assets/arrow.svg";

function Info() {
  return (
    <div className={infoStyles.container}>
      <div className={infoStyles.flexDiv}>
        <div className={infoStyles.desc}>
          <h1 className={infoStyles.header}>
            Everything you need in one place
          </h1>
          <p className={infoStyles.subHeader}>
            One stop solution for all your development related need of any kind.
            High end tech community to help you. One stop solution for all your
            development related need of any kind. High end tech community to
            help you.
          </p>
          <div className={infoStyles.infoDiv}>
            <div>
            {info.infoRowOne.map((infoList) => (
              <div className={infoStyles.infoRowOne}>
                <img src={infoList.img} alt="" className={infoStyles.tickImg} />
                <p className={infoStyles.infoDesc}>{infoList.info}</p>
              </div>
            ))}
            </div>
            <div>
              {info.infoRowTwo.map((infoList) => (
                <div className={infoStyles.infoRowOne}>
                  <img
                    src={infoList.img}
                    alt=""
                    className={infoStyles.tickImg}
                  />
                  <p className={infoStyles.infoDesc}>{infoList.info}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={infoStyles.exploreDiv}>
            <p className={infoStyles.explore}>Explore more on Tezos </p>
            <img src={arrow} alt="" className={infoStyles.arrow} />
          </div>
        </div>
        <div>
          <img src={infoImg} alt="" className={infoStyles.infoImg} />
        </div>
      </div>
    </div>
  );
}

export default Info;
