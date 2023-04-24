import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { blog, testimony } from "../../data";
import BlogCard from "./BlogCard";

const BlogPage = () => {
  const [isSelected, setIsSelected] = useState(1);
  const categoriesList = [
    { name: "Tout les articles", id: 1 },
    { name: "Actualités", id: 2 },
    { name: "Témoignages", id: 3 },
  ];

  const blogArticle = blog;
  const blogTestimony = testimony;
  const returnBlogCategory = () => {
    return categoriesList.map((cat: any) => {
      return (
        <button key={cat.id} onClick={() => setIsSelected(cat.id)}>
          {cat.name}
        </button>
      );
    });
  };

  const returnArticleOrTestimony = () => {
    if (isSelected === 1) {
      return blogArticle.map((article: any) => {
        return <BlogCard key={article.id} blogArticle={article} />;
      });
    } else if (isSelected === 2) {
      return blogArticle.map((article: any) => {
        return <BlogCard key={article.id} blogArticle={article} />;
      });
    } else if (isSelected === 3) {
      return blogTestimony.map((testimony: any) => {
        return <BlogCard key={testimony.id} blogArticle={testimony} />;
      });
    }
  };

  return (
    <div className="flex flex-col w-full justify-between  pt-[15vh] static">
      <Navbar />
      <div className="flex flex-col  justify-start items-center gap-[20px] pb-[100px]">
        <h1>Blog</h1>
        <div className="flex flex-row w-full justify-center gap-[10px]">
          {returnBlogCategory()}
        </div>
        <div className="flex flex-row flex-wrap  justify-center items-center gap-[50px] p-[20px] ">
          {returnArticleOrTestimony()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
