import React, { useState } from "react";
import Home from "./pages/home/Home";
import Loader from "./components/common/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Loader onLoadingComplete={() => setIsLoading(false)} />
      <div className={`transition-opacity duration-700 ${isLoading ? "opacity-90 scale-[0.99]" : "opacity-100 scale-100"}`}>
        <Home />
      </div>
    </>
  );
};

export default App;