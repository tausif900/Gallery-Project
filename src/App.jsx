import axios from "axios";
import React from "react";

const App = () => {
  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100",
    );
    console.log(response.data);
  };

  return (
    <div className="h-screen p-4">
      <button
        onClick={getData}
        className="bg-green-400 text-2xl text-white py-2 px-5 rounded-2xl"
      >
        Get Data
      </button>
    </div>
  );
};

export default App;
