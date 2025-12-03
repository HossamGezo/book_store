// React
import {useState} from "react";
// React Icons
import {CgClose} from "react-icons/cg";
// Data
import {authors} from "../home/data/authors";
// Components
import Pagination from "@/components/ui/pagination/Pagination";
// Main Component
const Authors = () => {
  const [search, setSearch] = useState("");
  // Handle Click Function
  const handleClick = () => {
    setSearch("");
  };
  // Search Logic
  const searchResult = () => {
    const result = authors.filter((author) =>
      author.name.toUpperCase().includes(search.toUpperCase())
    );
    return result;
  };
  // Pagination Logic
  const [page, setPage] = useState(1);
  const paginateNumbers = Math.ceil(authors.length / 8);
  const paginateAuthors =
    search.length === 0
      ? authors.slice((page - 1) * 8, page * 8)
      : searchResult();
  // Return JSX
  return (
    <section
      className={`authors py-10 min-h-[calc(100vh-73.88px)]`}
    >
      <div className="ccontainer">
        {/* Search Bar */}
        <div className="authors-search relative w-[60%] mb-5">
          <input
            className="authors-search-bar border-b-2 border-b-primary w-full pb-1.5 outline-0 caret-primary placeholder:text-sm placeholder:select-none placeholder:text-secondary/70"
            type="text"
            placeholder="Author Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search.length !== 0 && (
            <CgClose
              className="absolute right-0 top-1/2 -translate-y-1/2 text-xl text-red-600 cursor-pointer font-bold"
              onClick={handleClick}
            />
          )}
        </div>
        {/* Authors List */}
        <div className={`authors-list relative ${paginateAuthors.length !== 0 ? "grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5" : "flex-center"} mb-10`}>
          {paginateAuthors.length !== 0 ? (
            paginateAuthors.map((author) => (
              <div
                key={author.id}
                className="author-container group border-b border-b-transparent hover:border-b-secondary/75 bg-white h-[280px] flex-center shadow-(--shadow-normal) hover:shadow-(--shadow-blue) hover:scale-[1.02] transition-all duration-500 rounded-lg"
              >
                <div className="authors-image-title relative">
                  <div className="author-image-wrapper w-[250px] h-[250px] rounded-md overflow-hidden">
                    <img
                      className="author-image w-full h-full object-cover"
                      src={`/images${author.image}`}
                      alt={author.name}
                    />
                  </div>
                  <span className="author-name absolute left-0 bottom-0 bg-primary/75 text-white px-2.5 py-1 rounded-sm rounded-tl-none rounded-br-none group-hover:bg-primary transition-colors duration-500">
                    {author.name}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="authors-not-found flex-center text-3xl md:text-5xl text-red-600 font-jetbrains select-none h-[calc(100vh-600px)]">
              No Authors Found
            </div>
          )}
        </div>
        {/* Pagination */}
        {search.length === 0 && (
          <Pagination
            page={page}
            setPage={setPage}
            paginateNumbers={paginateNumbers}
          />
        )}
      </div>
    </section>
  );
};
export default Authors;
