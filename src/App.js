import { useState } from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import Manufacturers from "./pages/Manufacturers/Manufacturers";

function App() {
  const [token, settoken] = useState(null);
  return (
    <div className="App">
      {token ? (
        <>
          <Manufacturers token={token} />
        </>
      ) : (
        <Login settoken={settoken} />
      )}
    </div>
  );
}

export default App;
