import React from "react";
import styles from "./AboutStyles.module.css";

function About() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.heading}>About</h1>

      <div className={styles.abouttxt}>
        <p>
          Hi! I am Devanshi Sharma, a Pre Final year Communication and Computer
          Engineering (CCE) undergraduate at the LNM Institute of Information
          Technology, Jaipur (LNMIIT). <br />
          My passion lies in tackling complex problems and translating them into
          elegant solutions through code.
        </p>

        <br />

        <p className={styles.list}>
          <div>
            <b>Technical Skills:</b>

            <ul>
              <li>Problem-Solving</li>
              <li>Data Structures & Algorithms</li>
              <li>MERN Stack & MySQL</li>
              <li>CS Fundamentals</li>
            </ul>
          </div>

          <div>
            <b>Beyond Coding:</b>
            <ul>
              <li>Quick Learner</li>
              <li>Good adaptability</li>
              <li>Good at communication</li>
              <li>Team player</li>
            </ul>
          </div>

          <div>
            <b>Hobbies:</b>
            <ul>
              <li>Badminton</li>
              <li>Drawing</li>
              <li>Learning Mandarin, Korean & Japanese</li>
            </ul>
          </div>
        </p>
      </div>
    </section>
  );
}

export default About;
