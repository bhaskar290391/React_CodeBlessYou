import React from "react";
import { useSearchParams } from "react-router-dom";

const Articles = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const sortBy = searchParam.get("sortBy");
  const category = searchParam.get("category");
  const sortByView = () => {
    setSearchParam({
      sortBy: "views",
      category,
    });
  };
  return (
    <div>
      <h2>
        Articles
        <p>
          SortBy:{sortBy} Category:{category}
        </p>
      </h2>

      <button onClick={sortByView}> Sort by view</button>
    </div>
  );
};

export default Articles;
