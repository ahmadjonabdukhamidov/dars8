import React from "react";

function Articles({ articles }) {
  const deleteBtn = (e) => {
    console.log(e);
  };
  return (
    <ul className="card-top">
      {articles.map((article) => {
        return (
          <li className="card-list" key={article.id}>
            <p>Title: {article.title}</p>
            <p>Author: {article.author}</p>
            <p>Data: {article.data}</p>
            <button className="btn">
              Delete
            </button>
            <hr />
          </li>
        );
      })}
    </ul>
  );
}

export default Articles;
