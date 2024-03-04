//localStorage is client-side
"use client";
import NotFound from "@/components/NotFound";
import styles from "./article.module.css";
import Image from "next/image";

const Article = () => {
  const dogArticle = sessionStorage.getItem("dogArticle");
  const article = JSON.parse(dogArticle || "{}");

  return (
    <main className={styles.articleBg}>
      {Object.keys(article).length === 0 ? (
        <div className={styles.notFoundBox}>
          <NotFound />
        </div>
      ) : (
        <div className={styles.article}>
          <div>
            <div>Dogs as Beloved Companions</div>
            <div>
              Dogs, known as man's best friend, come in various shapes, sizes,
              and temperaments, but they all share a common bond with humans
              that transcends differences. As loyal companions, dogs offer
              unwavering affection, companionship, and protection to their
              owners. Whether as devoted pets, diligent working partners, or
              compassionate therapy animals, dogs continue to hold a special
              place in our hearts as cherished companions, bringing joy and
              companionship to people of all ages and walks of life.
            </div>
            <div>
              Discover the Majestic {article.breeds[0].name}: A Powerful{" "}
              {article.breeds[0].breed_group} Breed
            </div>
            {/* <div className={styles.articleImage}> */}
              <Image
                src={`${article?.url}`}
                alt={`${article?.breeds[0]?.name}`}
                // layout="responsive"
                width={500}
                height={300}
                className={styles.imageContainer}
                priority={true}
              />
            {/* </div> */}
            <div>Characteristics and Attributes:</div>
            <div>
              Physical Attributes: The {article.breeds[0].name} boasts a robust
              physique, with weights ranging from{" "}
              {article.breeds[0].weight.imperial} pounds (
              {article.breeds[0].weight.metric} kilograms) and heights reaching
              between {article.breeds[0].height.imperial} inches (
              {article.breeds[0].height.metric} centimeters).
            </div>
            <div>Temperament: They are {article.breeds[0].temperament}.</div>
            {article.breeds[0]?.bred_for?.length && (
              <div>
                Purpose: Originally bred for {article?.breeds[0]?.bred_for}
              </div>
            )}
          </div>
          <div>
            breed Group: They are classified under the{" "}
            {article.breeds[0].breed_group} breed.
          </div>
          <div>
            life Span: {article.breeds[0].name} typically live for{" "}
            {article.breeds[0].life_span}
          </div>
        </div>
      )}
    </main>
  );
};

export default Article;
