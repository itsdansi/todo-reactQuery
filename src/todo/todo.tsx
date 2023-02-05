import {Link} from "react-router-dom";
import NavBar from "../Navbar/navbar";
import {useState, Fragment} from "react";
// import {Accordion, AccordionHeader, AccordionBody} from "@material-tailwind/react";
import CreateToDo from "./createTodo";
import DropDown from "./dropdown";
import Accordian from "./accordian";

function Todo() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col w-100 items-center mt-3">
        <CreateToDo />
        <div className="my-center-class flex justify-center flex-col items-center mt-3">
          <hr />
          <DropDown />
          {/* </div> */}
          <li className="border border-gray-400 rounded-lg p-2 mb-2 flex justify-between">
            <Accordian />
          </li>
          <li className="border border-gray-400 rounded-lg p-2 mb-2 flex justify-between">
            <Accordian />
          </li>
          <li className="border border-gray-400 rounded-lg p-2 mb-2 flex justify-between">
            <Accordian />
          </li>
        </div>
      </div>
    </>
  );
}

export default Todo;
