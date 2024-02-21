'use client'
import styles from './grid-dog.module.css'
type gridType = {
  allDogs: any,
  setAllDogs: any
}
const GridDog = ({allDogs, setAllDogs}: gridType) => {
  console.log(allDogs)
  if(!allDogs.length) return
  return (
    <div className={styles.allCards}>
     { allDogs?.map((dog:any) => 
     <div key={dog.id} className={styles.card}>
      {/* dog.url: "https://cdn2.thedogapi.com/images/S1T8Ee9Nm_1280.jpg" */}
      <div>Name: {dog?.breeds[0]?.name}</div>
      <div>Breed group: {dog?.breeds[0]?.breed_group}</div>
      <div>Breed for: {dog?.breeds[0]?.bred_for}</div>
      <div>life span: {dog?.breeds[0]?.life_span}</div>
      {/* <div>Temperament: {dog?.breeds[0]?.temperament}</div> */}
     </div>)}
    </div>
  )
}

export default GridDog