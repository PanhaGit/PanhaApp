import React from "react";
import { statusCode } from "../../utils/constant";

const NotFound404 = () => {
  const status = statusCode.NOT_FOUND;
  return (
    <div>
      <h1>{status}</h1>
    </div>
  );
};

export default NotFound404;
