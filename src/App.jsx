import { useState, useEffect } from "react";
import "./App.scss";
import ScrollToTop from "react-scroll-to-top";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import AppLoading from "./AppLoading";
import useDebounce from "./hooks/useDebounce";
import useSWR from "swr";
import { fetcher } from "./config/config"
// import {updateSearch ,updateResult, updateLoading} from "././store/searchSlice";
// import { useSelector, useDispatch } from "react-redux";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpmxaf8_5WM8D_mVf6GatzOT3lY3NjzUA",
  authDomain: "react-wiki-a02d1.firebaseapp.com",
  projectId: "react-wiki-a02d1",
  storageBucket: "react-wiki-a02d1.appspot.com",
  messagingSenderId: "789714482408",
  appId: "1:789714482408:web:490bc7369c64780a1bc55d",
  measurementId: "G-9QY0HS30XC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App()
{
  const [search, setSearch] = useState("");
  const [result, setSult] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const deBoundSearch = useDebounce(search, 1000);
  const enpoint = `https://vi.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=200&srsearch=${search}`;
  const { data, error } = useSWR(enpoint, fetcher);
  useEffect(() =>
  {
    if (deBoundSearch) {
      const fetchData = async () =>
      {
        setLoading(true);
        if (data.query.search) {
          setSult(data.query.search);

          setLoading(false);
        }
      }
      fetchData();
    }
  }, [deBoundSearch]);
  const handleSearch = async (e) =>
  {
    if (search === "") return;
    e.preventDefault();
    setSearchInfo(data.query.searchinfo);
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
        {!loading && searchInfo.totalhits ? (
          <p>Kết quả tìm kiếm: {searchInfo.totalhits}</p>
        ) : (
          ""
        )}
      </header>
      <div className="results">
        {loading && <AppLoading />}
        <ScrollToTop smooth color="#6f00ff" />
        {!loading && result.map((item, index) =>
        {

          {/* <div className="results">
        {result.map((item, index) => { */}

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
