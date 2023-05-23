import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface LikeProps {
  onClick: () => void;
}

const Like = ({ onClick }: LikeProps) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart color="red" size={20} onClick={toggle} />;
  return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default Like;
