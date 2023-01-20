import React, { useEffect, useState } from "react";

const Pics = ({ data, lovepic, setlovepic }) => {
  //----------------useState way---------------------------

  //----------------useState way---------------------------
  let h = lovepic.some(function (n) {
    return n.id == data.id;
  });
  const [loved, setloved] = useState(!h);
  const savelove = () => {
    // ps.push(data);
    // localStorage.setItem("l", JSON.stringify(ps));
    // setlovepic(ps);
    //--------------------------useState----------------
    let n = JSON.parse(localStorage.getItem("l"));
    let f = n.some(function (n) {
      return n.id === data.id;
    });
    if (!f) {
      setlovepic([...lovepic, data]);
      localStorage.setItem("l", JSON.stringify([...lovepic, data]));
      setloved(!loved);
    } else {
      let ps = JSON.parse(localStorage.getItem("l"));
      ps.forEach((i, index) => {
        if (i.id === data.id) {
          ps.splice(index, 1);
          localStorage.setItem("l", JSON.stringify(ps));
          setlovepic(ps);
          setloved(!loved);
        }
      });
    }
  };
  useEffect(() => {
    localStorage.setItem("l", JSON.stringify(lovepic));
  }, [lovepic]);
  //--------------------------useState----------------

  return (
    <div className="pic">
      <p>{data.photographer}</p>
      <div className="imgcontainer">
        <img src={data.src.large} alt="" />
      </div>
      <div className="icon">
        <div className="i2">
          <a tager="_blank" href={data.src.large}>
            <i className="fa-solid fa-download"></i>
          </a>
        </div>
        <div className="i2">
          <i
            id={loved ? "o" : "x"}
            className="fa-solid fa-heart"
            onClick={savelove}
          ></i>
          {/* {h && <i style={{ color: "red" }} className="fa-solid fa-heart"></i>} */}
        </div>
      </div>
    </div>
  );
};

export default Pics;
