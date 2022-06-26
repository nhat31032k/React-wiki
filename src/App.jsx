import { useState } from "react";
import logo from "./logo.svg";

import "./App.scss";
<<<<<<< HEAD
import ScrollToTop from "react-scroll-to-top";
=======

>>>>>>> 0129257db25342e0afc1d400441b844161ee7599
function App() {
  const [search, setSearch] = useState("");
  const [result, setSult] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});
<<<<<<< HEAD
  const [loading,setLoading] = useState(true);
  const handleSearch = async (e) =>
  {
    setLoading(true);
    if (search === "") return;
    e.preventDefault();
    const enpoint = `https://vi.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=200&srsearch=${search}`;
=======
  const handleSearch = async (e) => {
    if (search === "") return;
    e.preventDefault();
    const enpoint = `https://vi.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;
>>>>>>> 0129257db25342e0afc1d400441b844161ee7599
    const res = await fetch(enpoint);
    console.log(res);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setSult(data.query.search);
    setSearchInfo(data.query.searchinfo);
<<<<<<< HEAD
    setLoading(false);
=======

>>>>>>> 0129257db25342e0afc1d400441b844161ee7599
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
<<<<<<< HEAD
         {loading && (
           <div className="w-8 h-8 mx-auto my-10 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin"></div>
          )}
        {!loading && searchInfo.totalhits ? (
=======
        {searchInfo.totalhits ? (
>>>>>>> 0129257db25342e0afc1d400441b844161ee7599
          <p>Kết quả tìm kiếm: {searchInfo.totalhits}</p>
        ) : (
          ""
        )}
      </header>
<<<<<<< HEAD
        
      <div className="results">
        <ScrollToTop smooth color="#6f00ff" />
        {!loading && result.map((item, index) => {
=======
      <div className="results">
        {result.map((item, index) => {
>>>>>>> 0129257db25342e0afc1d400441b844161ee7599
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
