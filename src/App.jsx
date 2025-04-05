import "./App.css";
import { useState } from "react";
import Box from "./Box";
let gridBox = [
  { id: 1, value: "", status: false },
  { id: 2, value: "", status: false },
  { id: 3, value: "", status: false },
  { id: 4, value: "", status: false },
  { id: 5, value: "", status: false },
  { id: 6, value: "", status: false },
  { id: 7, value: "", status: false },
  { id: 8, value: "", status: false },
  { id: 9, value: "", status: false },
];

let winGame=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2 ,5,,8],[3,6,9],[1,5,9],[3,5,7]];
function App() {
  let [grid, setGrid] = useState(gridBox);
  let [chance, setChange] = useState(false);
  function playGame(boxIdx) {
    if (grid[boxIdx - 1].value != "") return;
    setGrid((prev) => {
      prev.map((box) => {
        if (box?.id == boxIdx) {
          return (box.value = chance == true ? "X" : "O");
        } else box;
      });
    });
    setChange((prev) => !prev);
  };
  return (
    <>
      <h1>2-player-game</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: true,
          width: "300px",
          height: "700px",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: true,
            width: "300px",
            height: "700px",
            gap: "10px",
          }}
        >
          {grid.map((box) => (
            <Box id={box.id} box={box} palyGame={playGame}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
