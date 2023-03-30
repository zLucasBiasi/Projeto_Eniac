import Search from "/public/assets/images/iconSearch.svg";
import Cart from "/public/assets/images/iconCart.svg";

export const listNav = [
  {
    category: "Inicio",
    link: "/Inicio",
  },
  {
    category: "Produtos",
    link: "/Produtos",
  },
  {
    category: "Empresa",
    link: "/Empresa",
  },
  {
    category: "Contatos",
    link: "/Contatos",
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
