import { NewItemCartContext } from "@/context/cart";
import { useContext } from "react";

export const useSendOrder = () => {
  const { list } = useContext(NewItemCartContext);

  const items = list
    .map((item) => `${item.name}%20-%20R$${item.value}`)
    .join("%0A");
  const message = `Olá,%20gostaria%20de%20fazer%20o%20pedido%20com%20os%20seguintes%20itens:%0A${items}`;
  const url = `https://wa.me/5511959265463?text=${message}`;
  window.open(url);
};
