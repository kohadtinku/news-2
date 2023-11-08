import React, { useState } from "react";
import Header from "./components/Header";
import NewsBoard from "./components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");
  const [page, setPage] = useState(10);

  return (
    <>
      <Header setCategory={setCategory}  />
      <NewsBoard category={category}  />
    </>
  );
};

export default App;
