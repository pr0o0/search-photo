import React, { useState, useEffect } from "react";
import Search from "../components/Search";

import Pics from "../components/Pics";
import axios from "axios";

const Homepage = ({ lovepic, setlovepic }) => {
  //所有圖片資訊
  // let [lovepic, setlovepic] = useState([]);

  let [allphotos, setphotos] = useState([]);
  const [input, setinput] = useState("");
  let [page, setpage] = useState(1);
  let [currentsearch, setcurrentsearch] = useState("");
  //為了讓Search 能使用這些屬性 必須用state lifting
  // const key = "563492ad6f9170000100000165e0e44e7c1740de87c7a37cb2db4886";
  const key = process.env.REACT_APP_KEY;
  const photurl = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchurl = `https://api.pexels.com/v1/search?query=${currentsearch}&per_page=15&page=1`;

  //點button後的method
  const search = async (u) => {
    setpage(2);
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: `Bearer ${key}`,
      Authorization: key,
    };

    const datafetch = await axios({
      method: "GET",
      url: u,
      data: {
        message: "let me success",
      },
      headers: headers,
    });

    setphotos(datafetch.data.photos);

    // const datafetch = await fetch(u, {
    //   method: "GET",
    //   headers: { Accept: "application/json", Authorization: key },
    // });
    // let parsedata = await datafetch.json();
    // setphotos(parsedata.photos);
    // console.log(allphotos);
  };

  //載入更多圖
  const more = async () => {
    let newurl;
    if (currentsearch === "") {
      newurl = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newurl = `https://api.pexels.com/v1/search?query=${currentsearch}&per_page=15&page=${page}`;
    }
    setpage(page + 1);
    const datafetch = await fetch(newurl, {
      method: "GET",
      headers: { Accept: "application/json", Authorization: key },
    });
    let parsedata = await datafetch.json();
    setphotos(allphotos.concat(parsedata.photos));
  };

  useEffect(() => {
    search(photurl);
  }, []);

  useEffect(() => {
    if (currentsearch === "") {
      search(photurl);
    } else {
      search(searchurl);
    }
  }, [currentsearch]);
  //搜尋筐裡得到的

  return (
    <div style={{ minHeight: "90vh" }}>
      <Search
        search={() => {
          setcurrentsearch(input);
          search(searchurl);
        }}
        setinput={setinput}
      />
      <div className="pics">
        {allphotos.map((d) => {
          return (
            <Pics
              data={d}
              key={d.id}
              lovepic={lovepic}
              setlovepic={setlovepic}
            />
          );
        })}
      </div>
      <div className="loadpic">
        <p onClick={more}>load more...</p>
      </div>
    </div>
  );
};

export default Homepage;
