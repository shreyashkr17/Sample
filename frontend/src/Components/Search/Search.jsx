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
      <form className="searchBox" onSubmit={handleSearch}>
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
      </form>
      {/* <div className="display">
        <h1>id</h1>
        <h1>{searchResults.Did}</h1>
      </div>
      {searchResults.length > 0 && (
        <ul>
          <li>{searchResults.Did}</li>
          <li>{searchResults.Dname}</li>
          {searchResults.remedy.map((result) => (
            <li>{result}</li>
          ))}
        </ul>
      )} */}
    </>
  );
};

export default Search;