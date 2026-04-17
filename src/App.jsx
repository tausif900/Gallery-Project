import axios from "axios";
import React, { useEffect, useState } from "react";

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
    <h3 className="text-gray-600 text-2xl">No Data Available</h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div>
          <a href={elem.url} target="_blank">
            <div key={idx} className="h-60 w-70 rounded-2xl overflow-hidden">
              <img
                src={elem.download_url}
                className="h-full w-full object-cover "
              />
            </div>
            <h2 className="font-semibold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }
  return (
    <div className="h-screen p-4 overflow-auto">
      <h1 className="fixed text-6xl bg-green-300 rounded">{index}</h1>
      <div className="flex flex-wrap gap-2 px-4 py-2">{printUserData}</div>
      <div className="flex justify-center p-4 gap-6">
        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
            }
          }}
          className="bg-amber-400 py-2 px-4 cursor-pointer active:scale-95 rounded font-semibold"
        >
          Prev
        </button>
        <button
          onClick={() => {
            setIndex(index + 1);
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
