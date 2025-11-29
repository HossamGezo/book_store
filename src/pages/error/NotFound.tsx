// React Router
import {Link} from "react-router";
// Main Component
const NotFound = () => {
  return (
    <div className="ccontainer not-found m-auto flex flex-col justify-center items-center text-center h-screen">
      <h1 className="text-[200px] text-black font-bold">404</h1>
      <p className="text-5xl mb-7">Page Not Found</p>
      <Link
        to="/"
        replace={true}
        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
      >
        Looks like you've reached to non—existent page. <br />
        How about going back to safety?
      </Link>
    </div>
  );
};

export default NotFound;
