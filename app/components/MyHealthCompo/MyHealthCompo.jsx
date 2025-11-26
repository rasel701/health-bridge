"user client";

import { UserAuthContext } from "@/AuthContext/AuthContext";
import getMyHealthPost from "@/fetchData/myHealthPost";
import { useContext } from "react";

const MyHealthCompo = () => {
  //   const { user } = useContext(UserAuthContext);
  const result = getMyHealthPost();
  return (
    <div>
      <h2>This is a my health compontnts</h2>
    </div>
  );
};

export default MyHealthCompo;
