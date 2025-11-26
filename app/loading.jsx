import React from "react";
import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <RingLoader color="#3a0cf5" size={130} />
    </div>
  );
};

export default Loading;
