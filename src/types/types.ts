import type { IconType } from "react-icons";

export type BookType = {
  id: number;
  price: number;
  rating: number;
  title: string;
  author: string;
  reviews: number;
  image: string;
  printLength: number;
  language: string;
  publicationDate: string;
  inStock: boolean;
  description: string;
};

export type AuthorType = {
  id: number;
  name: string;
  image: string;
};

export type CartInfoType = {
  id: number;
  bookId: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  author: string;
};

export type ServiceType = {
  id: number;
  title: string;
  Icon: IconType;
  isFlipped: boolean;
};

export type SlideType = {
  id: number;
  title: string;
  description: string;
  image: string;
  gradient: string;
};
