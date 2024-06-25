import { useContext } from "react";
import MinSpan from "./MinSpan";
import ShortDist from "./ShortDist";
import StoreContext from "../Store/StoreContext";
import SCC from "./SCC";

function Algorithm() {
  const AlgoToShow = useContext(StoreContext).AlgoToshow;
  return (
    <>
      {AlgoToShow === "ShortestDist" && <ShortDist />}
      {AlgoToShow === "MinSpan" && <MinSpan />}
      {AlgoToShow === "SCC" && <SCC />}
    </>
  );
}
export default Algorithm;
