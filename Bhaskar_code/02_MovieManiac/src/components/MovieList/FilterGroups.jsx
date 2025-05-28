import React from "react";

const FilterGroups = ({ minRating, onRateClicking, rating }) => {
  return (
    <ul className="align_center movie_filter">
      {rating.map((rate) => (
        <li
          className={
            minRating === rate
              ? "movie_filter_item active"
              : "movie_filter_item"
          }
          key={rate}
          onClick={() => onRateClicking(rate)}
        >
          {rate}+ Star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroups;
