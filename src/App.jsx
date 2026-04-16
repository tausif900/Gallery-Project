import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=3&limit=30",
    );
    setUserData(response.data);
  };

  let printUserData = "No Data Available";

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div>
          <div key={idx} className="h-40 w-44 rounded-2xl overflow-hidden">
            <img src={elem.download_url} className="h-full w-full object-cover " />
          </div>
          <h2 className="font-semibold text-xl">{elem.author}</h2>
        </div>
      );
    });
  }
  return (
    <div className="h-screen p-4 overflow-auto">
      <button
        onClick={getData}
        className="bg-green-400 text-2xl text-white py-2 px-5 rounded-2xl"
      >
        Get Data
      </button>
      <div className="flex flex-wrap gap-2 px-4 py-2">{printUserData}</div>
    </div>
  );
};

export default App;
