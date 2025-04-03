import { useState } from "react";
import Button from "./Button";

const Joke = () => {
  const [Joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchApi = () => {
    setLoading(true); 
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke);
        setLoading(false); 
      });
  };

  return (
    <div className="joke text-center p-6">
      <Button callApi={fetchApi} />

      {loading ? (
        <div className="loader mx-auto mt-4">
          <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-t-4 border-yellow-500 rounded-full"></div>
        </div>
      ) : (
        <p className="mt-4 text-2xl text-white font-bold font-mono text-shadow-xl">
          {Joke}
        </p> 
      )}
    </div>
  );
};

export default Joke;
