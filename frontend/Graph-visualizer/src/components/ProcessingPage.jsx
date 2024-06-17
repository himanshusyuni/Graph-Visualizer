import { TypeAnimation } from "react-type-animation";

function ProcessingPage() {
  return (
    <>
      <div className="flex justify-center  mt-[40%] ml-10">
        <div className="bg-slate-200 text-blue-700 p-2 ">
          <TypeAnimation
            className="font-mono font-bold text-4xl sm:text-5xl md:text-6xl lg:text-3xl text-center"
            sequence={[
             
              "Creating your graph...",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={2}
          />
        </div>
      </div>{" "}
    </>
  );
}
export default ProcessingPage;
