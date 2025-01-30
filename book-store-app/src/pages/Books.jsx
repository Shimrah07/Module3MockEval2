import React, { useEffect, useState } from "react";
import axios from "axios";

import PrivateRoute from "../components/PrivateRoute";



const Books = () => {
  const [books, setBooks] = useState([]);

  // loading
  const [loading, setLoading] = useState(false)

  //error
  const [error, setError] = useState(false);

  


  useEffect(() => {
    setLoading(true)
    axios(`https://political-spot-nyala.glitch.me/books`)
      .then((res) => setBooks(res.data))
      .catch((err) => setError(err.response? err.respone.data : err.message))
      .finally(setLoading(false))
  
  
    console.log(books)
    console.log(error)
  }, [])



  return (
    <div>
      <h1>books page</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong...</h1>}

      {books.length > 0 && 
          <>
              <h2>Name: {books.totalbooks}</h2>

          </>
     
      }




    </div>
  );
};

export default Books;
