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

  // Return JSX
  return (
    <div
      role="img"
      className="stars flex gap-0.5 text-amber-600 text-lg"
      aria-label={`Rating: ${rating} out of 5`}
    >
      {Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={index} aria-hidden="true" />
      ))}

      {halfStar && <FaStarHalfAlt aria-hidden="true" />}

      {Array.from({ length: emptyStars }, (_, index) => (
        <FaRegStar key={index} aria-hidden="true" />
      ))}
    </div>
  );
};

export default Rating;
