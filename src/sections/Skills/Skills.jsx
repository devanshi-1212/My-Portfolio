import React from "react";
import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="Data Structures" />
        <SkillList src={checkMarkIcon} skill="Algorithms" />
        <SkillList src={checkMarkIcon} skill="Problem-Solving" />
      </div>

      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="NodeJS" />
        <SkillList src={checkMarkIcon} skill="ReactJS" />
        <SkillList src={checkMarkIcon} skill="ExpressJS" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="MySQL" />
      </div>

      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="Numpy" />
        <SkillList src={checkMarkIcon} skill="Pandas" />
        <SkillList src={checkMarkIcon} skill="Elaborative Data Analysis" />
      </div>

      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Object-Oriented Programming" />
        <SkillList src={checkMarkIcon} skill="Operating System" />
        <SkillList src={checkMarkIcon} skill="Database Management System" />
      </div>
    </section>
  );
}

export default Skills;
