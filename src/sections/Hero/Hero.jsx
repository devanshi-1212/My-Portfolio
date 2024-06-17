import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/my-ai-pic.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import leetcodeLight from "../../assets/leetcode-light.svg";
import leetcodeDark from "../../assets/leetcode-dark.svg";
import codeforces from "../../assets/codeforces.svg";
import codechefLight from "../../assets/codechef-light.svg";
import codechefDark from "../../assets/codechef-dark.svg";
import CV from "../../assets/Devanshi_Sharma_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const leetcodeIcon = theme === "light" ? leetcodeLight : leetcodeDark;
  const codechefIcon = theme === "light" ? codechefLight : codechefDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Devanshi Sharma"
        />

        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Devanshi
          <br />
          Sharma
        </h1>

        <h2>
          Problem-solver, <br /> Full-Stack Development <br /> & <br /> Data
          Science Enthusiast
        </h2>

        <span>
          <a
            href="https://www.linkedin.com/in/devanshisharma1212/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>

          <a href="https://github.com/devanshi-1212" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>

          <a href="https://leetcode.com/u/ds_1212/" target="_blank">
            <img src={leetcodeIcon} alt="Linkedin icon" />
          </a>

          <a href="https://codeforces.com/profile/devanshi1212" target="_blank">
            <img src={codeforces} alt="Linkedin icon" />
          </a>

          <a
            href="https://www.codechef.com/users/devanshisharma"
            target="_blank"
          >
            <img src={codechefIcon} alt="Linkedin icon" />
          </a>
        </span>

        {/* <p className={styles.description}>
          With a passion for developing modern react web apps for commercial
          business.
        </p> */}

        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
