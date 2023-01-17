import React from "react";
import "./App.css";
import { useState } from "react";
import { Menu } from "./components/Menu";
import { CreateAnimalPage } from "./pages/CreateAnimal";
import { AnimalListPage } from "./pages/AnimalList";
import { ViewAnimal } from "./pages/ViewAnimal";

function App() {
  const [page, setPage] = useState("List");

  const renderPage = (activepage) => {
    switch (page) {
      case "Create":
        return <CreateAnimalPage />;
      case "List":
        return <AnimalListPage onChange={setPage}/>;
      default:
        return <ViewAnimal id={page} />;
    }
  };

  return (
    <div className="App">
      <Menu active={page} onChange={setPage} />
      {renderPage(page)}
    </div>
  );
}

export default App;
