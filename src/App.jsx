import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);
  let printUserData = (
    <h3 className="text-gray-600 text-xs font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      LOADING..........
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }
  return (
    <div className="h-screen p-4 overflow-auto">
      <h1 className="text-center font-mono font-bold text-5xl">Gallery App</h1>
      <div className="flex h-[82%] flex-wrap gap-2 px-4 py-2">
        {printUserData}
      </div>
      <div className="flex justify-center p-4 gap-6">
        <button
          style={{ opacity: index === 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setUserData([]);
              setIndex(index - 1);
            }
          }}
          className="bg-amber-400 py-2 px-4 cursor-pointer active:scale-95 rounded font-semibold"
        >
          Prev
        </button>
        <h4 className="font-bold text-2xl flex items-center">Page {index}</h4>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
          className="bg-amber-400 py-2 px-4 cursor-pointer active:scale-95 rounded font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
