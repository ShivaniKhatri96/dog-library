import Lottie from "lottie-react";
import animationData from "@/public/assets/not-found-animation.json";
import styles from "./Animation.module.css";

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
