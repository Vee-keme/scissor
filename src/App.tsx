import "./App.css";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.My_URLs
  );
  return (
    <div className="app bg-primary-100">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
