function Vertex({ no, x, y }) {
  const style = {
    top: `${y}px`,
    left: `${x}px`,
  };

  return (
    <div
      style={style}
      className="p-3 rounded-full bg-blue-600 text-3xl font-semibold text-white h-16 w-16 text-center  z-50 hover:bg-rose-500 absolute "
    >
      {no}
    </div>
  );
}

export default Vertex;
