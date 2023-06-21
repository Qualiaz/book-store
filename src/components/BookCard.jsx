import React from "react";
import { useNavigate } from "react-router-dom";

const BookCard = ({ id, title, cover, author }) => {
  const navigate = useNavigate();

  return (
    <div className="w-32 h-40" onClick={() => navigate(`/book/${id}`)}>
      <img src={cover} alt="" />
      <div>{title}</div>
    </div>
  );
};

export default BookCard;
