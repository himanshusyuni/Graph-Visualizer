import { createContext } from "react";

const StoreContext= createContext({
    shape: Array,
      Vertex: Number,
      setVertex: Function,
      type: String,
      setType: Function,
      AlgoToshow: String,
      setAlgo: Function,
      CompToShow :String,
      setComp: Function,
      Edges:Array,
      setEdges:Function,
      src:Number,
      setSrc:Function,
      destination:Number,
      setDest: Function,
});
export default StoreContext;