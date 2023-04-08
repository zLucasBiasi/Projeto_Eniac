import Search from "/public/assets/images/iconSearch.svg";
import Cart from "/public/assets/images/iconCart.svg";

export const listNav = [
  {
    category: "Inicio",
    link: "/",
  },
  {
    category: "Produtos",
    link: "/produtos",
  },
  {
    category: "Empresa",
    link: "/empresa",
  },
  {
    category: "Contatos",
    link: "/contatos",
  },
];

export const ListIcons = [
  {
    icon: Search,
    onclick: () => alert("Search em construção"),
    alt: "Icone de pesquisa",
  },

  {
    icon: Cart,
    onclick: () => alert("Cart em construção"),
    alt: "Icone do carrinho de compras",
  },
];
