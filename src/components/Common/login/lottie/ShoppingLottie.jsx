import React from "react";
import { useLottie } from "lottie-react";
import shopping from "./Shopping.json";

const ShoppingLottie = () => {
  const options = {
    animationData: shopping,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default ShoppingLottie;