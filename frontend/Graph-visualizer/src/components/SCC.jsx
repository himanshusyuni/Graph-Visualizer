import { useContext } from "react";
import LabeledLine from "./LabelledLine";
import Vertex from "./Vertex";
import StoreContext from "../Store/StoreContext";

class DisjointSetUnion {
  constructor(size) {
    this.parent = new Array(size);
    this.rank = new Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }
}

function SCC() {
  const V = useContext(StoreContext).Vertex;
  const edge = useContext(StoreContext).Edges;
  const type = useContext(StoreContext).type;
  const dsu = new DisjointSetUnion(10);
  for (let i = 0; i < edge.length; i++) {
    dsu.union(edge[i].u, edge[i].v);
    //console.log(dsu.find(edge[i].u),dsu.find(edge[i].v));
  }
  let arr = [];
  for (let i = 0; i < V; i++) {
    if (!arr.includes(dsu.find(i))) arr.push(dsu.find(i));
  }

  const shape = useContext(StoreContext).shape;
  const vertexArray = shape.filter((it) => it.vertNo == V)[0].value;
  return (
    <>
      <div className="absolute lg:ml-[10%]  lg:mt-[10%] md:ml-[20%] mt-[10%] xlg:ml-[6%] xlg:mt-[6%]">
        {vertexArray.map((items) => (
          <Vertex
            no={items.no}
            x={items.x}
            y={items.y}
            key={items.no}
            colInd={arr.indexOf(dsu.find(items.no))}
          />
        ))}
        {edge.map((item, ind) => {
          const vertexU = vertexArray.find((v) => v.no === item.u);
          const vertexV = vertexArray.find((v) => v.no === item.v);
          if (!vertexU || !vertexV) {
            console.error(`Vertices not found for edge: ${item}`);
            return null;
          }
          return (
            <LabeledLine
              x1={vertexU.x + 20}
              x2={vertexV.x + 20}
              y1={vertexU.y + 20}
              y2={vertexV.y + 20}
              color="brown"
              key={ind}
              label={type === 0 ? item.w : ""}
            />
          );
        })}
      </div>
    </>
  );
}
export default SCC;
