import { TypeAnimation } from "react-type-animation";
import { HashLoader } from 'react-spinners';
import { useEffect, useState } from "react";
function ProcessingPage({flag,setFlag}) {
  const [countDown, setCountDown] = useState(3);
  useEffect(() => {
    const TimeOut = setInterval(() => {
      setCountDown((precnt) => {
        if (precnt === 1) {
          clearInterval(TimeOut);
          setFlag(2);
        }
        return precnt - 1;
      });
    }, 1000);
    return () => {
      clearInterval(TimeOut);
    };
  }, [flag]);
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
      <center>
      <div  style={{ marginLeft: '20px' }} className="mt-5">
        <HashLoader color="#36d7b7" />
      </div>
      </center>
      
    </>
  );
}
export default ProcessingPage;