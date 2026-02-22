// React Icons
import { PiArrowFatLineRightFill } from "react-icons/pi";
import { PiArrowFatLineLeftFill } from "react-icons/pi";

// Components
import Button from "../buttons/Button";

// Types
type PaginationProps = {
  paginateNumbers: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

// Main Component
const Pagination = ({ paginateNumbers, page, setPage }: PaginationProps) => {
  // Previous And Next Functions
  const handlePrevious = () => {
    const next = Math.max(page - 1, 1);
    setPage(next);
  };
  const handleNext = () => {
    const previous = Math.min(page + 1, paginateNumbers);
    setPage(previous);
  };

  // Return JSX
  return (
    <div className="pagination mx-auto w-full flex flex-wrap items-center justify-center">
      <Button
        size="sm"
        radius="none"
        className="rounded-l-sm border-r border-r-blue-500"
        disabled={page === 1}
        onClick={handlePrevious}
      >
        <PiArrowFatLineLeftFill />
      </Button>
      {Array.from({ length: paginateNumbers }, (_, index) => (
        <Button
          size="sm"
          radius="none"
          key={index + 1}
          className={`border-r border-r-blue-500 ${
            page === index + 1 ? "active" : ""
          }`}
          onClick={() => setPage(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        size="sm"
        radius="none"
        className="rounded-r-sm"
        disabled={page === paginateNumbers}
        onClick={handleNext}
      >
        <PiArrowFatLineRightFill />
      </Button>
    </div>
  );
};
export default Pagination;
