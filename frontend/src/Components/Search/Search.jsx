import React, { useEffect, useState } from "react";
import "firebase/firestore";
import MetaData from "../layouts/MetaData";
import "./Search.css";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { getDisease } from "../../actions/diseaseAction";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";


import searchLogo from "../../Assets/ayurLogo.png";
import searchBtn from "../../Assets/search.gif";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const {error, disease, loading} = useSelector((state) => state.diseases);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const handleSearch = async (event) => {
    event.preventDefault();
    dispatch(getDisease(searchQuery));
    navigate(`/disease/${disease.id}`);
  };

  useEffect(() => {
    if(error){
      alert.info("No such Disease Found");
    }
  }, [])
  
  

  const handleInputChange = async (event) => {
    setSearchQuery(event.target.value);

    // Update suggestions
    if (event.target.value) {
      const dbs = db;
      const diseasesRef = collection(dbs, "diseases");
      const inputValue = event.target.value.trim().toLowerCase();
      const q = query(
        diseasesRef,
        where("Disease_Name", ">=", inputValue),
        where("Disease_Name", "<=", inputValue + "\uf8ff")
      );
      const querySnapshot = await getDocs(q);
      setSuggestions(querySnapshot.docs.map((doc) => doc.data().Disease_Name));
    } else {
      setSuggestions([]);
    }
  };

  // Handle suggestion selection
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
  };

  return (
    <>
      <MetaData title="Search - VedicHeal" />
      <div className="searchContainer">
        <div className="search_logo_container">
          <div className="left_search_logo">
            <img src={searchLogo} className="searchLogo" alt="" />
          </div>
          <div className="right_search_logo">
            <h1 className="header_text">VEDICHEAL</h1>
          </div>
        </div>
        <form className="formSearch" onSubmit={handleSearch}>
          <div className="searchbox_container">
            <div className="searchBox">
                <div className="inputSearch">
                  <input type="text" value={searchQuery} className="searchtext" onChange={handleInputChange} id="" placeholder="e.g. Cough and Cold" />
                </div>
                <div className="srchbtnContainer">
                    <div className="circle_cont">
                      {/* <img src={searchBtn} className="searchBtn" alt="" type="submit" value="Search" /> */}
                      <input type="image" src={searchBtn} className="searchBtn" alt="" value="Search" />
                    </div>
                </div>
            </div>
          </div>
          {suggestions.length > 0 && (
          <div className="suggestionData">
            <ul className="unorderSuggest">
            {suggestions.map((suggestion) => (
              <li className="listSuggest" onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
          </div>
        )}
        </form>
      </div>
    </>
  );
};

export default Search;



{/* <form className="searchBox" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search the Disease..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <input type="submit" value="Search" />
        {suggestions.length > 0 && (
          <div className="suggestionData">
            <ul>
            {suggestions.map((suggestion) => (
              <li onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
          </div>
        )}
      </form> */}