//localStorage is client-side
"use client";
import NotFound from "@/components/NotFound";
import styles from "./article.module.css";
import Image from "next/image";

const Article = () => {
  const dogArticle = sessionStorage.getItem("dogArticle");
  const article = JSON.parse(dogArticle || "{}");
  console.log("article", article);
  return (
    <main className={styles.articleBg}>
      {Object.keys(article).length === 0 ? (
        <div className={styles.notFoundBox}>
          <NotFound />
        </div>
      ) : (
        <div className={styles.article}>
          <Image
            src={`${article?.url}`}
            alt={`${article?.breeds[0]?.name}`}
            width={300}
            height={200}
            className={styles.imageContainer}
            priority={true}
          />
          <div>height: {article.height}</div>
          <div>width: {article.width}</div>
          <div>
            bred_for:{" "}
            {article.breeds[0]?.bred_for?.length
              ? article?.breeds[0]?.bred_for
              : `_`}
          </div>
          <div>breed_group: {article.breeds[0].breed_group}</div>
          <div>life_span: {article.breeds[0].life_span}</div>
          <div>name: {article.breeds[0].name}</div>
          <div>temperament: {article.breeds[0].temperament}</div>
        </div>
      )}
    </main>
  );
};

export default Article;
