function Vertex({ number }) {
    return (
        <div className={`p-4 rounded-full bg-purple-600 text-3xl font-semibold  text-white h-16 w-16 flex items-center justify-center hover:bg-rose-500`}>
            {number}
        </div>
    );
}

export default Vertex;
