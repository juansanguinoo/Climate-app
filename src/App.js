import Form from "./components/Form";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Climate from "./components/Climate";
import Error from "./components/Error";

function App() {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  const [consult, setConsult] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const consultAPI = async () => {
      if (consult) {
        const appId = "e429d7fa202798a3b3543a1a8d4c1e54";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
        const response = await fetch(url);
        const result = await response.json();

        setResult(result);
        setConsult(false);

        if (result.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    consultAPI();
  }, [consult, city, country]);

  let component;
  if (error) {
    component = <Error message="There is no results" />;
  } else {
    component = <Climate result={result} />;
  }

  return (
    <>
      <Header title="Weather React App" />

      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
              />
            </div>
            <div className="col m6 s12">{component}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
