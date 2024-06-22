import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" min-h-screen  justify-center flex flex-col items-center bg-black overflow-x-auto">
        <div className="  flex justify-center items-center text-red-600 text-[5rem] lg:text-[8rem] font-bold ">
          <p>404</p>
        </div>

        <div class="flex text-center bg-[#fbfae5] mx-10 p-5 text-[1.15rem] lg:text-[1.3rem] rounded-xl">
          <p>
            Oops! This is not the web page you are looking for. Please check you
            path again.
          </p>
        </div>
        <div>
          <img
            className="h-24 w-40 mt-5  "
            src="/images/display-graph.svg"
            alt=""
          />
        </div>
        <div>
          <button
            className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-700"
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
