import React from "react";
import Button from "@components/generics/Button";

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <div>
      <div>HI THIS IS THE LANDING PAGE</div>
      <Button variant="contained">TESTING</Button>
    </div>
  );
};

export default Home;
