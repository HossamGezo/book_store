// React Icons
import {FaEye} from "react-icons/fa";
import {MdShoppingCart} from "react-icons/md";
// Custom Hook
import {usePopupContext} from "@/context/PopupContext";
// Types
type CardType = {
  id: number;
  price: number;
  rating: number;
  title: string;
  reviews: number;
  image: string;
};
// Components
import Rating from "../rating/Rating";
// Main Component
const Card = ({id, price, rating, title, reviews, image}: CardType) => {
  // Use Popup Context Custom Hook
  const {setTogglePopup} = usePopupContext();
  // Return JSX
  return (
    <div className="card relative group h-[500px] w-[330px] lg:w-[311px] py-1.5 rounded-lg bg-white shadow-normal border-t-2 border-t-transparent hover:scale-[1.01] hover:-translate-y-1.5 hover:shadow-scale hover:border-t-2 hover:border-t-primary/65 transition-all duration-500">
      <div className="card-imge h-[60%] p-1 flex-center">
        <img
          draggable={false}
          src={`/images/books/${image}`}
          alt={title}
          className="h-full object-contain"
        />
      </div>
      <div className="card-desc p-1.5">
        <h3 className="card-title text-lg font-medium h-14">{title}_{id}</h3>
        <div className="rating my-2.5">
          <div className="rating-and-reviews flex items-center gap-2.5">
            <Rating rating={rating} />
            <span className="rating-number text-yellow-500 text-lg">
              {rating}
            </span>
            <span className="rating-reviews text-sm text-gray-500">
              ({reviews} reviews)
            </span>
          </div>
          <div className="rating-price text-center mt-1.5 text-xl text-red-700 font-bold">
            ${price}
          </div>
        </div>
        <div className="card-icons absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex-center gap-5 text-xl pt-3 border-t-2 border-t-primary/45 group-hover:border-t-primary/65">
          <FaEye
            className="text-primary/65 hover:text-primary cursor-pointer"
            onClick={() => setTogglePopup({isOpen: true, bookId: id})}
          />
          <MdShoppingCart className="text-green-600/65 hover:text-green-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Card;
