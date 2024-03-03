//localStorage is client-side
"use client";
import styles from "./article.module.css";

const Article = () => {
  const dogArticle = localStorage.getItem("dogArticle");
  const article = JSON.parse(dogArticle || "{}");
  console.log("article", article);

  return (
    <main className={styles.articleBg}>
      <div className={styles.article}>fdsaf</div>
      {/* <div>Temperament: {dog?.breeds[0]?.temperament}</div> */}
    </main>
  );
};

export default Article;
