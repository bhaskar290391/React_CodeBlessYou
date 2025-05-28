import React from "react";
import { useNavigate, useNavigation, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  const goBack = () => {
    navigation(-1);
  };
  return (
    <div>
      <h2>SingleProduct :{id}</h2>

      <button onClick={goBack}> Go Back</button>
    </div>
  );
};

export default SingleProduct;
