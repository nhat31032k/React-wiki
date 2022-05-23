import { useState } from "react";
import logo from "./logo.svg";

import "./App.scss";
import ScrollToTop from "react-scroll-to-top";
function App() {
  const [search, setSearch] = useState("");
  const [result, setSult] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});
  const [loading,setLoading] = useState(true);
  const handleSearch = async (e) =>
  {
    setLoading(true);
    if (search === "") return;
    e.preventDefault();
    const enpoint = `https://vi.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=200&srsearch=${search}`;
    const res = await fetch(enpoint);
    console.log(res);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setSult(data.query.search);
    setSearchInfo(data.query.searchinfo);
    setLoading(false);
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
         {loading && (
           <div className="w-8 h-8 mx-auto my-10 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin"></div>
          )}
        {!loading && searchInfo.totalhits ? (
          <p>Kết quả tìm kiếm: {searchInfo.totalhits}</p>
        ) : (
          ""
        )}
      </header>
        
      <div className="results">
        <ScrollToTop smooth color="#6f00ff" />
        {!loading && result.map((item, index) => {
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
