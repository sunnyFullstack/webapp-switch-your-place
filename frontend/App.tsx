import React from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./src/routing";

const App = () => {
  console.log("re render");

  return (
    <div className="bg-white">
      <RouterProvider
        router={routers}
        fallbackElement={<div>Loading...</div>}
      />
    </div>
  );
};

export default App;
