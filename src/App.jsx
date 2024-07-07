import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import AvatarCom from "./components/AvatorCom";
import Filters from "./components/filters";
import FilterButtons from "./components/filtersbuttons";
import MainCom from "./components/mainCom";

function App() {
  return (
    <>
      <div className="h-screen w-full overflow-scroll md:overflow-hidden">
        <AvatarCom />
        <MainCom />
      </div>
    </>
  );
}

export default App;
