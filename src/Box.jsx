import React from "react";

function Box({ box, playGame }) {
  return (
    <div id={box.id}>
      <button
        style={{ width: "100px", height: "100px" }}
        onClick={() => playGame(box.id)}
        disabled={box.status}
      >
        {box.value}
      </button>
    </div>
  );
}

export default Box;
