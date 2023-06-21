import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLazyImage from "../hooks/useLazyImage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion, useAnimation } from "framer-motion";
import useTurnIdIntoPrice from "../hooks/useTurnIdIntoPrice";

const BookCard = ({ id, title, cover, author }) => {
  const navigate = useNavigate();
  const imageRef = useRef();
  const imageSrc = useLazyImage(imageRef, cover);
  const controls = useAnimation();
  const [ron, bani] = useTurnIdIntoPrice(id);
  console.log(id);
  const handleHoverStart = () => {
    controls.start({
      height: "auto",
      backgroundColor: "rgba(247, 247, 248, 0.6)",
      color: "black",
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      height: "1.5rem",
      backgroundColor: "transparent",
      color: "black",
    });
  };

  return (
    <motion.div
      className="relative h-110 w-48 cursor-pointer card-shadow bg-light-base-100 p-3 rounded-sm outline outline-1 outline-black"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={() => navigate(`/book/${id}`)}
    >
      <img ref={imageRef} src={imageSrc} alt="cover image" className="h-72" />
      <div className="absolute bottom-14 w-40 ml-1 overflow-hidden">
        <motion.div
          initial={{ height: "1.5rem" }}
          animate={controls}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {title}
        </motion.div>
        <hr className="border-light-secondary" />
        <motion.div
          initial={{ height: "1.5rem" }}
          animate={controls}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {author}
        </motion.div>
      </div>
      <div className="absolute flex justify-center rounded-md bottom-2 -right-7 p-2 h-10 w-28 bg-light-accent">
        <span>{ron}.</span>
        <span>{bani}</span>
        <span>ron</span>
      </div>
    </motion.div>
  );
};

export default BookCard;
