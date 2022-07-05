import { useState } from "react";
import logo from "./logo.svg";

import "./App.scss";
<<<<<<< HEAD
<<<<<<< HEAD
import ScrollToTop from "react-scroll-to-top";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
=======
<<<<<<< HEAD
=======
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
import ScrollToTop from "react-scroll-to-top";
=======

>>>>>>> 0129257db25342e0afc1d400441b844161ee7599
<<<<<<< HEAD
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
=======
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
function App() {
  const [search, setSearch] = useState("");
  const [result, setSult] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
=======
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
  const [loading,setLoading] = useState(true);
  const handleSearch = async (e) =>
  {
    setLoading(true);
    if (search === "") return;
    e.preventDefault();
    const enpoint = `https://vi.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=200&srsearch=${search}`;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
=======
  const handleSearch = async (e) => {
    if (search === "") return;
    e.preventDefault();
    const enpoint = `https://vi.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;
>>>>>>> 0129257db25342e0afc1d400441b844161ee7599
<<<<<<< HEAD
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
=======
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
    const res = await fetch(enpoint);
    console.log(res);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setSult(data.query.search);
    setSearchInfo(data.query.searchinfo);
<<<<<<< HEAD
<<<<<<< HEAD
    setLoading(false);
=======
<<<<<<< HEAD
=======
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
    setLoading(false);
=======

>>>>>>> 0129257db25342e0afc1d400441b844161ee7599
<<<<<<< HEAD
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
=======
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
=======
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
         {loading && (
           <div className="w-8 h-8 mx-auto my-10 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin"></div>
          )}
        {!loading && searchInfo.totalhits ? (
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
        {searchInfo.totalhits ? (
>>>>>>> 0129257db25342e0afc1d400441b844161ee7599
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
=======
=======
        {searchInfo.totalhits ? (
>>>>>>> 0129257db25342e0afc1d400441b844161ee7599
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
          <p>Kết quả tìm kiếm: {searchInfo.totalhits}</p>
        ) : (
          ""
        )}
      </header>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
=======
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
        
      <div className="results">
        <ScrollToTop smooth color="#6f00ff" />
        {!loading && result.map((item, index) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
=======
      <div className="results">
        {result.map((item, index) => {
>>>>>>> 0129257db25342e0afc1d400441b844161ee7599
<<<<<<< HEAD
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
=======
>>>>>>> 0a220d5371d1cd5581088bcbf59d65ec4284af66
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
