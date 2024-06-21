import { useContext } from "react";
import StoreContext from "../Store/StoreContext";
import LabeledLine from "./LabelledLine";
import Vertex from "./Vertex";

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;
    for (let vertex in this.adjacencyList) {
      if (vertex == start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest == finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;

            previous[nextNeighbor] = smallest;

            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

function createGraphFromEdges(edges) {
  const graph = new Graph();
  edges.forEach(({ u, v, w }) => {
    graph.addVertex(u);
    graph.addVertex(v);
    graph.addEdge(u, v, w);
  });
  return graph;
}

function ShortDist() {
  const source = useContext(StoreContext).src;
  const destination = useContext(StoreContext).destination;
  const V = useContext(StoreContext).Vertex;
  const edge = useContext(StoreContext).Edges;
  const type = useContext(StoreContext).type;
  const graph = createGraphFromEdges(edge);
  const shortestPath = graph.dijkstra(source, destination);

  const shape = useContext(StoreContext).shape;
  const vertexArray = shape.filter((it) => it.vertNo == V)[0].value;
  return (
    <>
      <div className="absolute lg:ml-[10%]  lg:mt-[10%] md:ml-[20%] mt-[10%]">
        {vertexArray.map((items) => (
          <Vertex
            no={items.no}
            x={items.x}
            y={items.y}
            key={items.no}
            colInd={shortestPath.indexOf(items.no) == -1 ? 0 : 3}
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
export default ShortDist;
