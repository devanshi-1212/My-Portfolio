import React from "react";
import styles from "./EducationStyles.module.css";

function Education() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.heading}>Education</h1>

      <div className={styles.abouttxt}>
        <div className={styles.list}>
          <p>
            <b> Bachelor of Technology</b>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            2021-Present
          </p>
          <p>The LNM Institute Of Information Technology, Jaipur</p>
          <p>Branch: Communication and Computer Engineering (CCE)</p>
          <p>CGPA: 7.15</p>
        </div>

        <div className={styles.list}>
          <p>
            <b>CBSE Class 12th</b>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             2020-2021
          </p>
          <p>RSM International School, Jodhpur</p>
          <p>Stream: Physics, Chemistry, Mathematics (PCM)</p>
          <p>Percentage: 85.8%</p>
        </div>

        <div className={styles.list}>
          <p>
            <b>CBSE Class 10th</b>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             2018-2019
          </p>
          <p>Delhi Public School, Jodhpur</p>
          <p>Percentage: 96.2%</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
