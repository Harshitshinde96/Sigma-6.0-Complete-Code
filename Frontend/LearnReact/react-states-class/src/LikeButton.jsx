import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [clicked, setClicked] = useState(0);

  let toggleLike = () => {
    setClicked(clicked+ 1);
    setIsLiked(!isLiked);
  };
  return (
    <div>
        <p>Clicks = {clicked}</p>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={{ color: " #ff0000" }}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
