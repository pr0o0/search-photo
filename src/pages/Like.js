import React, { useState } from "react";
import Lovepho from "../components/Lovepho";

const Like = ({ lovepic, setlovepic, ps }) => {
  return (
    <div style={{ minHeight: "90vh" }}>
      <div className="pppp">
        {lovepic.map((p) => {
          return (
            <Lovepho
              p={p}
              key={p.id}
              lovepic={lovepic}
              setlovepic={setlovepic}
              ps={ps}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Like;
