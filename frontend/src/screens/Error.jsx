import { Link, useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaArrowRotateLeft } from "react-icons/fa6";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="w-auto checker rounded-md text-2xl flex flex-col justify-center m-5 p-8 shadow-md">
      <div className="flex flex-col justify-center items-center m-8">
        <h1 className="font-bold text-3xl">ERROR!</h1>

        <p>404 Page Not Found</p>
      </div>
      <div className="flex items-center justify-center gap-8">
        <button
          className="rounded-md bg-gray-200 p-2 hover:bg-gray-300 transition-all duration-300 ease-in-out shadow-md"
          onClick={() => navigate(-1)}
        >
          <div className="flex justify-center items-center gap-2">
            <FaArrowRotateLeft width={20} />
            <span>Go back</span>
          </div>
        </button>

        <Link
          to="/"
          className="rounded-md bg-gray-200 p-2 hover:bg-gray-300 transition-all duration-300 ease-in-out shadow-md"
        >
          <div className="flex justify-center items-center gap-2">
            <IoHome width={20} />
            <span>Go to home</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Error;
