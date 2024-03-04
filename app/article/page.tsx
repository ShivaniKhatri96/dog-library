//localStorage is client-side
"use client";
import NotFound from "@/components/NotFound";
import styles from "./article.module.css";

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
        <div className={styles.article}>Article</div>
      )}
    </main>
  );
};

export default Article;
