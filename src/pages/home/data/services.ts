// React Icons
import {FaTruck} from "react-icons/fa6";
import {FaGift} from "react-icons/fa";
import {ImLoop2} from "react-icons/im";
import {BiSolidMessageDetail} from "react-icons/bi";
import {RiCustomerService2Fill} from "react-icons/ri";
import {GiReceiveMoney} from "react-icons/gi";
import {FaBookOpenReader} from "react-icons/fa6";
// Services Data
const services = [
  {
    id: 1,
    title: "Free Shipping",
    Icon: FaTruck,
    isFlipped: true,
  },
  {
    id: 2,
    title: "Gift Cards",
    Icon: FaGift,
    isFlipped: false,
  },
  {
    id: 3,
    title: "7 Days Return",
    Icon: ImLoop2,
    isFlipped: false,
  },
  {
    id: 4,
    title: "Contact Us",
    Icon: BiSolidMessageDetail,
    isFlipped: false,
  },
  {
    id: 5,
    title: "24/7 Support",
    Icon: RiCustomerService2Fill,
    isFlipped: false,
  },
  {
    id: 6,
    title: "Cash on Delivery",
    Icon: GiReceiveMoney,
    isFlipped: false,
  },
  {
    id: 7,
    title: "Book Recommendations",
    Icon: FaBookOpenReader,
    isFlipped: false,
  },
];

export default services;
