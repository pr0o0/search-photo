import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Lovepho = ({ p, setlovepic, lovepic, ps }) => {
  // let [bede, setbede] = useState(JSON.parse(localStorage.getItem("l")));
  // console.log(bede);
  const de = () => {
    let ps = JSON.parse(localStorage.getItem("l"));
    // const s = ps.filter((i) => i.id !== p.id);
    // setlovepic(s);
    // localStorage.setItem("l", JSON.stringify(s));
    ps.forEach((i, index) => {
      if (i.id === p.id) {
        ps.splice(index, 1);
        localStorage.setItem("l", JSON.stringify(ps));
        setlovepic(ps);
      }
    });
  };
  //---------------------------------------------
  // const s = bede.filter((i) => i.id !== p.id);
  // localStorage.setItem("l", JSON.stringify(s));
  // setbede(s);
  // setlovepic(bede);
  // window.location.reload();
  // useEffect(() => {
  //   setlovepic(JSON.parse(localStorage.getItem("l")));
  // }, [lovepic]);

  return (
    <div className="ppp">
      <p>{p.photographer}</p>
      <div className="imgcontainerppp">
        <img className="imgppp" src={p.src.large} alt="" />
      </div>
      <div className="icon">
        <a tager="_blank" href={p.src.large}>
          <i style={{ color: "orange" }} className="fa-solid fa-download"></i>
        </a>
        <i
          style={{ color: "orange" }}
          className="fa-solid fa-trash"
          onClick={de}
        ></i>
      </div>
    </div>
  );
};

export default Lovepho;
