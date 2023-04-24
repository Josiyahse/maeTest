import React from "react";

const BlogCard = ({ blogArticle }: any) => {
  return (
    <div className="flex flex-col w-[500px] justify-between items-start gap-[20px]">
      <img
        alt="blog-image"
        src={blogArticle.image}
        className="w-[500px] h-[500px] object-cover"
      />
      <p>{blogArticle.title}</p>
      <p>{blogArticle.resume}</p>
      <button>{`Voir le ${blogArticle.type.toLowerCase()}`}</button>
    </div>
  );
};

export default BlogCard;
