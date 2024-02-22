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
            width={250}
            height={160}
            className={styles.imageContainer}
            priority={true}
          />
          <div>
            <div>Name: {dog?.breeds[0]?.name}</div>
            <div>Breed group: {dog?.breeds[0]?.breed_group}</div>
            <div>Breed for: {dog?.breeds[0]?.bred_for}</div>
            <div>life span: {dog?.breeds[0]?.life_span}</div>
            {/* <div>Temperament: {dog?.breeds[0]?.temperament}</div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridDog;
