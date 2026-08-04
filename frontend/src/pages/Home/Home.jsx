import { useState } from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import { ExplorMenu } from "../../components/ExploerMenu/ExplorMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExplorMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <NewsLetter />
    </div>
  );
};

export default Home;
