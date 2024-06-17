import Vertex from "./Vertex";

function Graph() {
  return (
    <>
      <div >
        <div className="flex">
          <Vertex number={0} />
          <svg width="200" height="50">
            <line
              x1="0"
              y1="30"
              x2="2000"
              y2=""
              stroke="blue"
              strokeWidth="5"
            />
          </svg>
          <Vertex number={1} />
          <svg width="200" height="50">
            <line
              x1="0"
              y1="30"
              x2="2000"
              y2=""
              stroke="orange"
              strokeWidth="5"
            />
          </svg>
          <Vertex number={2} />
        </div>
        <div className="flex">
          <svg width="173.2" height="100">
            <line
              x1="100"
              y1="100"
              x2="30"
              y2="0"
              stroke="brown"
              strokeWidth="5"
            />
          </svg>
          <div className="inline mt-20 ">
            <Vertex number={3} />
          </div>
          <svg width="173.2" height="100">
            <line
              x1="80"
              y1="0"
              x2="0"
              y2="100"
              stroke="green"
              strokeWidth="5"
            />
          </svg>
          <svg width="173" height="100">
            <line
              x1="100"
              y1="100"
              x2="15"
              y2="0"
              stroke="purple"
              strokeWidth="5"
            />
          </svg>
          <div className="inline mt-20 ">
            <Vertex number={4} />
          </div>
          <svg width="173.2" height="100">
            <line
              x1="63"
              y1="0"
              x2="0"
              y2="100"
              stroke="yellow"
              strokeWidth="5"
            />
          </svg>
        </div>
        <div className="flex ">
          <svg width="210" height="100">
            <line
              x1="210"
              y1="100"
              x2="135"
              y2="0"
              stroke="silver"
              strokeWidth="5"
            />
          </svg>
          <div className="inline mt-20">
            <Vertex number={5} />
          </div>
          <svg width="210" height="100">
            <line x1="82" y1="5" x2="0" y2="100" stroke="red" strokeWidth="5" />
          </svg>
        </div>
      </div>
    </>
  );
}
export default Graph;
