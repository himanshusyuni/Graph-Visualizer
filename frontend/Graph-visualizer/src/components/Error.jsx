import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" min-h-screen  justify-center flex flex-col items-center">
        <div className="  flex justify-center items-center ">
          <h1 className="text-9xl text-red-500 font-bold  font-weight  justify-center flex col items-center  mr-24 -translate-x-1 mx-24  tanslate-x-1/2">
            404
          </h1>
        </div>

        <div>
          <h1 className="text-3xl mt-5 mx-32">
            Oops! The page you are looking for could not be found 😢
          </h1>
        </div>
        <div>
          <img className="h-24 w-40 mt-5  " src="pic1.svg" alt="" />
        </div>
        <div>
          <button
            className="mt-8 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={() => {
              navigate("");
            }}
          >
            Go back to Home{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Error;
