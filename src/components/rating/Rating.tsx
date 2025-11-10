// React Icons
import {FaStar} from "react-icons/fa";
import {FaRegStar} from "react-icons/fa";
import {FaStarHalfAlt} from "react-icons/fa";
// Main Component
const Rating = ({rating}: {rating: number}) => {
  // Full Stars
  const fullStarts = Math.trunc(rating);
  const fullStarsArray = Array(fullStarts).fill(0);
  // Half Star
  const halfStar = rating - fullStarts >= 0.5 ? true : false;
  // Empty Stars
  const emptyStars = 5 - (fullStarts + +halfStar);
  const emptyStarsArray = Array(emptyStars).fill(0);
  // Resturn JSX
  return (
    <div className="rating *:text-yellow-500 *:text-lg flex gap-0.5">
      {fullStarsArray.map((_, index) => (
        <FaStar key={index} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {emptyStarsArray.map((_, index) => (
        <FaRegStar key={index} />
      ))}
    </div>
  );
};

export default Rating;
