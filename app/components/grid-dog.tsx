"use client";
import styles from "./grid-dog.module.css";
import Image from "next/image";
import Loading from "./loading";
type gridType = {
  allDogs: any;
  setAllDogs: any;
};
const GridDog = ({ allDogs, setAllDogs }: gridType) => {
  console.log(allDogs);
  if (!allDogs.length) return <Loading />;
  return (
    <div className={styles.allCards}>
      {allDogs?.map((dog: any) => (
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
                {dog?.breeds[0]?.bred_for && dog?.breeds[0]?.bred_for?.length
                  ? dog?.breeds[0]?.bred_for
                  : `_`}
              </div>
            </div>

            {/* <div>Temperament: {dog?.breeds[0]?.temperament}</div> */}
            <div>
              <button className={styles.learnMoreBtn}>Learn more</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridDog;
