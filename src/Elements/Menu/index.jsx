import { useState } from "react";
import List from "./list";

export default function Menu() {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(!active);
  return (
    <>
      <ul
        className={`bg-indigo-600 top-16 absolute w-full ${
          active ? "flex" : "hidden"
        } flex-col gap-y-5 py-5 left-0 text-center lg:flex-row lg:relative lg:py-0 lg:gap-y-0 lg:w-96 lg:justify-between lg:bg-transparent lg:mr-20 xl:mr-40 lg:top-0 lg:left-0 lg:flex`}
      >
        <List active={true}>Home</List>
        <List>Browse By</List>
        <List>Stories</List>
        <List>Agents</List>
      </ul>
      <img
        src={`./public/icons/${active ? "close.svg" : "hamburger.svg"}`}
        alt="hamburger menu"
        className="mr-8 w-8 h-8 lg:hidden"
        onClick={handleClick}
      />
    </>
  );
}
