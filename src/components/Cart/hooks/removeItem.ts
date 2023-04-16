import { NewItemCartContext } from "@/context/cart";
import { useContext } from "react";

export const useRemoveItem = () => {
  const { list, setList } = useContext(NewItemCartContext);

  const remove = (id: number) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  return { remove, list };
};
