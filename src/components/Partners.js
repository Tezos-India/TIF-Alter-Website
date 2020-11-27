import React from "react";
import partnerStyles from "../styles/Partners.module.css";
import partners from "../assets/partners.png";

function Partners() {
  return (
    <div className={partnerStyles.container}>
      <p
        className={partnerStyles.partnerTitle}>
        Tezos India Developer Program Partner
      </p>
      <div className={partnerStyles.line}></div>
        <img src={partners} alt="" className={partnerStyles.partnerLogo} />
    </div>
  );
}

export default Partners;
