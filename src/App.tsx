import "./App.css";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";

// enum selectedPage {
//   MyURLs = 'myurls',
//   Features = 'features',

// }
// continue from enums

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("my urls");
  return (
    <div className="app bg-primary-100">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
