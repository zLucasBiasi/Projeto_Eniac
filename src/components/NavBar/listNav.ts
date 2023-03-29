import User from "/public/assets/images/iconUser.svg";
import Search from "/public/assets/images/iconSearch.svg";
import Hearth from "/public/assets/images/iconHearth.svg";
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
    icon: User,
    link: "/User",
    alt: "Icone do perfil do usuario",
  },
  {
    icon: Search,
    onclick: () => alert("Search em construção"),
    alt: "Icone de pesquisa",
  },
  {
    icon: Hearth,
    onclick: () => alert("Hearth em construção"),
    alt: "Icone de favoritos",
  },
  {
    icon: Cart,
    onclick: () => alert("Cart em construção"),
    alt: "Icone do carrinho de compras",
  },
];
