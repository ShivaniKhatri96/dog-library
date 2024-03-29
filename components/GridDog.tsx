"use client";
import styles from "./GridDog.module.css";
import Image from "next/image";
import NotFound from "./NotFound";
import Link from "next/link";

type gridType = {
  updatedOptions: any;
  start: number;
  end: number;
};
const GridDog = ({ updatedOptions, start, end }: gridType) => {
  const handleArticle = (dog: any) => {
    sessionStorage.setItem("dogArticle", JSON.stringify(dog));
  };
  if (!updatedOptions.length) return <NotFound />;
  return (
    <div className={styles.allCards}>
      {/* slicing for pagination use */}
      {updatedOptions?.slice(start, end)?.map((dog: any) => (
        <div key={dog.id} className={styles.card}>
          <Image
            src={`${dog?.url}`}
            alt={`${dog?.breeds[0]?.name}`}
            width={300}
            height={200}
            className={styles.imageContainer}
            priority={true}
          />
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>{dog?.breeds[0]?.name}</div>
            <div className={styles.breedInfoBox}>
              <div className={styles.breedInfoTitle}>Breed group</div>
              <div className={styles.breedInfoContent}>
                {dog?.breeds[0]?.breed_group}
              </div>
            </div>
            <div className={styles.breedInfoBox}>
              <div className={styles.breedInfoTitle}>life span</div>
              <div className={styles.breedInfoContent}>
                {dog?.breeds[0]?.life_span}
              </div>
            </div>
            <div className={styles.breedInfoBox}>
              <div className={styles.breedInfoTitle}>Bred for</div>
              <div className={styles.breedInfoContent}>
                {dog?.breeds[0]?.bred_for?.length
                  ? dog?.breeds[0]?.bred_for
                  : `_`}
              </div>
            </div>
            <Link
              href="/article"
              className={styles.learnMoreBtn}
              onClick={() => handleArticle(dog)}
            >
              Learn more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridDog;
