import React from "react";
import Five from "./Sections/Five";
import Four from "./Sections/Four";
import One from "./Sections/One";
import Three from "./Sections/Three";
import Two from "./Sections/Two";

type Props = {};

function Homepage({}: Props) {
  return (
    <div>
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
    </div>
  );
}

export default Homepage;
