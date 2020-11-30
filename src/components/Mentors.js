import React from "react";
import mentorStyles from "../styles/Mentor.module.css";
import MentorCard from "../constants/MentorCard";
import { mentor } from "../constants/constant";
import insta from "../assets/instagram.svg";
import dribbble from "../assets/dribbble.svg";
import linkedin from "../assets/linkedin.svg";

function Mentors() {
  return (
    <div className={mentorStyles.container}>
      <div>
        <h1 className={mentorStyles.header}>Your Mentors</h1>
      </div>
      <div className={mentorStyles.flexDiv}>
        <div>
          {mentor.mentorRowOne.map((mentorList) => (
            <div className={mentorStyles.alignCard}>
              <MentorCard>
                <div className={mentorStyles.alignContent}>
                  <div>
                    <img
                      src={mentorList.img}
                      alt=""
                      className={mentorStyles.mentorImg}
                    />
                  </div>
                  <div className={mentorStyles.alignText}>
                    <p className={mentorStyles.mentorName}>{mentorList.name}</p>
                    <p className={mentorStyles.mentorDesignation}>
                      {mentorList.designation}
                    </p>
                    <p className={mentorStyles.mentorTestimony}>
                      {mentorList.testimony}
                    </p>
                  </div>
                </div>
                <div className={mentorStyles.alignSocial}>
                  <img src={insta} alt="" />
                  <img src={dribbble} alt="" />
                  <img src={linkedin} alt="" />
                </div>
              </MentorCard>
            </div>
          ))}
        </div>
        <div>
          {mentor.mentorRowTwo.map((mentorList) => (
            <div className={mentorStyles.alignCardTwo}>
              <MentorCard>
                <div className={mentorStyles.alignContent}>
                  <div>
                    <img
                      src={mentorList.img}
                      alt=""
                      className={mentorStyles.mentorImg}
                    />
                  </div>
                  <div className={mentorStyles.alignText}>
                    <p className={mentorStyles.mentorName}>{mentorList.name}</p>
                    <p className={mentorStyles.mentorDesignation}>
                      {mentorList.designation}
                    </p>
                    <p className={mentorStyles.mentorTestimony}>
                      {mentorList.testimony}
                    </p>
                  </div>
                </div>
                <div className={mentorStyles.alignSocial}>
                  <img src={insta} alt="" />
                  <img src={dribbble} alt="" />
                  <img src={linkedin} alt="" />
                </div>
              </MentorCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mentors;
