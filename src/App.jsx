import React from "react";
import { useState } from "react";
import Form from "./Form";
import Articles from "./Articles";

function App() {
  const [articles, setArticles] = useState([]);

  const addArticle = (article) => {
    setArticles((prev) => {
      return [...prev, article];
    });
  };
  // console.log(articles);

  return (
    <>
      <h1>Add New Article</h1>
      <Form addArticle={addArticle} />
      <Articles articles={articles} />
    </>
  );
}

export default App;
