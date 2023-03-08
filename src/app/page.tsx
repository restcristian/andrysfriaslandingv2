import { Inter } from "@next/font/google";
import Page from "@/components/Page/Page";
import styles from "./page.module.scss";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import Arrow from "@/components/Icons/Arrow";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page>
      <div className={styles.Home}>
        <div className={styles.wrapper}>
          <h1 className={styles.heading}>
            <span>Hello There!</span>
            <span className={styles.light}>My Name is</span>
            <span>Andrys Frias.</span>
          </h1>
          <div>
            <span className={styles.subline}>
              I am a Digital Product Designer based in Berlin, Germany
            </span>
          </div>
          <div>
            <span className={styles.description}>
              And I could help you with the design of
              <AnimatedText />
              for you. If you are a king/queen from a savage forest interested
              in what I do just say{" "}
              <a
                className={styles.linkEmail}
                href="mailto:andrysfrias@gmail.com"
              >
                Hi Back!
              </a>
            </span>
          </div>
          <div className={styles.arrowContainer}>
            <Arrow width="24px" />
          </div>
        </div>
      </div>
    </Page>
  );
}
