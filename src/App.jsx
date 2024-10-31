import { useState } from "react";

import "./App.css";

// const App = () => {
//   const [title, setTitle] = useState("Start Game");
//   const [inputText, setInputText] = useState("");
//   const [showDiv, setShowDiv] = useState(true);

//   const smenititle = (value) => {
//     setTitle(value);
//   };

//   const changeText = (newText) => {
//     setInputText(newText);
//   };

//   const smeniPozadina = () => {
//     document.body.style.backgroundColor = "red";
//     setShowDiv(false);
//   };

//   return (
//     <>
//       {showDiv && (
//         <div>
//           <h1 className="App">{title}</h1>
//           <input
//             type="text"
//             value={inputText}
//             onChange={(e) => changeText(e.target.value)}
//           />
//           {title === "Start Game" && (
//             <button onClick={() => smenititle("inputText")}>
//               Change title
//             </button>
//           )}

//           {title !== "Start Game" && (
//             <button onClick={() => smeniPozadina()}>Press Play</button>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>04-useState Hide and Show</h1>

      <button onClick={toggleVisibility}>{isVisible ? "Hide" : "Show"}</button>

      {isVisible && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "rgb(185, 147, 220)",
          }}
        >
          <h2>When you press hide this will be hidden</h2>
        </div>
      )}
    </div>
  );
}

export default App;
