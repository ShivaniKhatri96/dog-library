import Lottie from "lottie-react";
import animationData from "@/public/loading-animation.json";
import styles from "./loading.module.css";
const Loading = () => {
  return (
    <div className={styles.animationBox}>
      <Lottie animationData={animationData} loop={true} className={styles.animationStyle}/>
    </div>
  );
};

export default Loading;
