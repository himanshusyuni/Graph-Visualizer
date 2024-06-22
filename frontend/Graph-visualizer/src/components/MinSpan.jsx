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
function MinSpan() {
  const V = useContext(StoreContext).Vertex;
  const edge = useContext(StoreContext).Edges;
  const type = useContext(StoreContext).type;
  const setComp = useContext(StoreContext).setComp;
  const Dsu = new DisjointSetUnion(10);
  edge.sort((a, b) => {
    return a.w - b.w;
  });
  var arr = [];
  for (let i = 0; i < edge.length; i++) {
    if (Dsu.find(edge[i].u) != Dsu.find(edge[i].v)) {
      Dsu.union(edge[i].u, edge[i].v);
      arr.push(edge[i]);
    }
  }

  const par = Dsu.find(0);
  for (let i = 0; i < V; i++) {
    if (par != Dsu.find(i)) {
      alert("All the vertices are not accessible i.e. not a connected graph");
      setComp("Graph");
      break;
    }
  }
  const shape = useContext(StoreContext).shape;
  const vertexArray = shape.filter((it) => it.vertNo == V)[0].value;
  return (
    <>
      <div className="absolute lg:ml-[10%]  lg:mt-[10%] md:ml-[20%] mt-[10% xlg:ml-[6%] xlg:mt-[6%]">
        {vertexArray.map((items) => (
          <Vertex
            no={items.no}
            x={items.x}
            y={items.y}
            key={items.no}
            colInd={0}
          />
        ))}
        {arr.map((item, ind) => {
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
export default MinSpan;
