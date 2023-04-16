import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type Cart = { id: number; name: string; value: number; image: string }[];
interface addCart {
  list: Cart;
  setList: Dispatch<SetStateAction<Cart>>;
}

export const NewItemCartContext = createContext<addCart>({} as addCart);

export const NewItemCartProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<Cart>([]);

  return (
    <NewItemCartContext.Provider value={{ list, setList }}>
      {children}
    </NewItemCartContext.Provider>
  );
};
