import LabeledLine from "./LabelledLine";
import Vertex from "./Vertex";

function Graph() {
  const vertex=[{
    no:0,
    x:50,
    y:50,
  },
  {
    no:1,
    x:250,
    y:50,
  },
  {
    no:2,
    x:450,
    y:50,
  },
  {
    no:3,
    x:150,
    y:150,
  },
  {
    no:4,
    x:350,
    y:150,
  },
  {
    no:5,
    x:250,
    y:250,
  },]
  const edges=[
    {u:0, v:1, w:0},
    {u:1, v:2, w:0},
    {u:0, v:3, w:0},
    {u:1, v:3, w:0},
    {u:1, v:4, w:0},
    {u:2, v:4, w:0},
    {u:3, v:5, w:0},
    {u:3,v:4, w:0},
    {u:4, v:5, w:0},
  ]
  return (
    <>


    <div className="relative ">

      {vertex.map((item)=> <Vertex x={item.x} y={item.y} no={item.no} key={item.no} />)}
      
      
      
      {
        edges.map((item)=> <LabeledLine 
        
        x1={vertex.filter( (items)=> items.no == item.u)[0].x +20} 

        x2={vertex.filter( (items)=> items.no == item.v)[0].x +20}

        y1={vertex.filter( (items)=> items.no == item.u)[0].y +20}

        y2={vertex.filter( (items)=> items.no == item.v)[0].y +20}

        color={"brown"}
        
        />)
      }

    </div>
    </>
  );
}
export default Graph;
