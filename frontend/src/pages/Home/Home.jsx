import { useState } from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import { ExplorMenu } from "../../components/ExploerMenu/ExplorMenu";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExplorMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
