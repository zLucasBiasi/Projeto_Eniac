import * as S from "./styles";

import { Button } from "../Button";
import { useRemoveItem } from "./hooks/removeItem";

export const Cart = ({
  active,
  setCartActive,
}: {
  active: boolean;
  setCartActive: (arg: boolean) => void;
}) => {
  const { list, remove } = useRemoveItem();
  return (
    <S.Cart active={active}>
      <button onClick={() => setCartActive(false)}>x</button>
      {list.length < 1 ? (
        <p>Não há nada aqui ainda!</p>
      ) : (
        list.map((item) => (
          <S.Wrapper key={item.id}>
            <div>
              <S.ImageStyle src={item.image} alt="" />
            </div>
            <div>
              <S.Informations>{item.name}</S.Informations>
              <S.Informations>R$:{item.value}</S.Informations>
            </div>
            <S.Button onClick={() => remove(item.id)}>x</S.Button>
          </S.Wrapper>
        ))
      )}
      <Button>REALIZAR PEDIDO</Button>
    </S.Cart>
  );
};
