import Hero from "./Components/Hero";
import SearchBox from "./Components/SearchBox";
import styled, { keyframes } from "styled-components";
import DropDown from "./Components/DropDown";
import { useState } from "react";
import MapCrimeType from "./Components/MapCrimeType";
import MapCity from "./Components/MapCity";

const BASE_URL = "https://news-api001.herokuapp.com/articles";

const fade = keyframes`
 0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

function App() {
  const [articles, setArticles] = useState([]);
  const [loadMap, setLoadMap] = useState(false);
  const [mapType, setMapType] = useState("");

  const handleSubmit = async (userInput, inputType) => {
    if (userInput !== "") {
      const query = userInput.replace(/ /g, "_");
      await fetchData(query, inputType);
      setLoadMap(true);
      setMapType(inputType);
    }
  };

  const fetchData = async (query, inputType) => {
    try {
      console.log(query)
      const res = await fetch(`${BASE_URL}/${inputType}/${query}`);
      const data = await res.json();
      if (data.length) {
        setArticles(data);
      }
      else{
        setArticles([])
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container loadMap={loadMap}>
      {!loadMap && <Hero />}
      <Input loadMap={loadMap}>
        <SearchBox handleSubmit={handleSubmit} />
        <DropDown handleSubmit={handleSubmit} />
      </Input>
      {loadMap &&
        (mapType === "keyword" ? (
          <MapCrimeType articles={articles} />
        ) : (
          <MapCity articles={articles} />
        ))}
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: ${(props) => (props.loadMap ? "" : "20vh auto")};
`;
const Input = styled.div`
  position: ${(props) => (props.loadMap ? "absolute" : "relative")};
  margin: ${(props) => (props.loadMap ? "" : "")};
  z-index: 5;
  animation: ${fade} 2s linear 1 forwards;
`;
