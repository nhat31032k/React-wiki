import { useState } from "react";
import logo from "./logo.svg";

import "./App.scss";

function App() {
  const [search, setSearch] = useState("");
  const [result, setSult] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});
  const handleSearch = async (e) => {
    if (search === "") return;
    e.preventDefault();
    const enpoint = `https://vi.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;
    const res = await fetch(enpoint);
    console.log(res);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setSult(data.query.search);
    setSearchInfo(data.query.searchinfo);

    console.log(data);
  };
  return (
    <div className="App">
      <header>
        <h1>Wiki Seeker</h1>
        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="bạn đang tìm kiếm điều gì?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        {searchInfo.totalhits ? (
          <p>Kết quả tìm kiếm: {searchInfo.totalhits}</p>
        ) : (
          ""
        )}
      </header>
      <div className="results">
        {result.map((item, index) => {
          const url = `https://vi.wikipedia.org/?curid=${item.pageid}`;
          return (
            <div className="result" key={index}>
              <h3>{item.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: item.snippet }}></p>
              <a href={url} target="_blank">
                Xem thêm
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
