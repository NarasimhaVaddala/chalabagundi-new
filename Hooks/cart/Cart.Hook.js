import { useState } from "react";

export const useCartHook = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleCheckOut = () => {
    setIsLogin(true);
  };

  return {
    isLogin,
    setIsLogin,
    handleCheckOut,
  };
};
