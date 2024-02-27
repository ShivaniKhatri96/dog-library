import Lottie from "lottie-react";
import animationData from "@/public/not-found.json";
import styles from "./animation.module.css";

const NotFound = () => {
  return (
    <div className={styles.animationBox}>
      <Lottie
        animationData={animationData}
        loop={true}
        className={styles.animationStyle}
      />
    </div>
  );
};

export default NotFound;
