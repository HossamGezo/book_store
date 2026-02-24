// React Icons
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

// Types
type RatingProps = { rating: number };

// Main Component
const Rating = ({ rating }: RatingProps) => {
  // Star Calculations
  const fullStars = Math.trunc(rating);
  const halfStar = rating - fullStars >= 0.5 ? true : false;
  const emptyStars = 5 - (fullStars + +halfStar);

  // Resturn JSX
  return (
    <div className="*:text-yellow-500 *:text-lg flex gap-0.5">
      {Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={index} />
      ))}

      {halfStar && <FaStarHalfAlt />}

      {Array.from({ length: emptyStars }, (_, index) => (
        <FaRegStar key={index} />
      ))}
    </div>
  );
};

export default Rating;
