import Lottie from "lottie-react";
import animationData from "@/public/assets/loading-animation.json";
import styles from "./Animation.module.css";
const Loading = () => {
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

export default Loading;
