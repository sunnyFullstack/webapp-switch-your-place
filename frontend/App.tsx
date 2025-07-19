import React from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./src/routing";
import { Provider } from "react-redux";
import { store } from "./src/app/store";

const App = () => {
  console.log("re render");

  return (
    <div className="bg-white">
      <Provider store={store}>
        <RouterProvider
          router={routers}
          fallbackElement={<div>Loading...</div>}
        />
      </Provider>
    </div>
  );
};

export default App;
