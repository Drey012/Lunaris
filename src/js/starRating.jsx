import React, { useState } from "react";
import "../css/StarRating.scss";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-rating">
      <div className="star">
        {stars.map((star) => (
          <label
            key={star}
            className={`star-item star-item-${star} ${
              rating >= star ? "active" : ""
            }`}
            onClick={() => setRating(star)}
          >
            ★
          </label>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
