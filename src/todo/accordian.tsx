import {useState, Fragment} from "react";
import {Accordion, AccordionHeader, AccordionBody} from "@material-tailwind/react";

export default function Accordian() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="my-center-class w-200 flex justify-center flex-col items-center mt-3">
      <Fragment>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            What is Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at. We&apos;re
            constantly growing. We&apos;re constantly making mistakes. We&apos;re
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </Fragment>
      <div className="flex ml-5">
        <button className="font-bold py-2 px-4 rounded-lg mr-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-4 h-4">
            <path d="M13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02-5.56 1.16 1.16-5.58 8.02-8.01c.4-.39 1.18-.43 1.64-.03zm-2.52 2.52l-5.27 5.28 5.27 5.27v-10.55z" />
          </svg>
        </button>
        <button className=" font-bold py-2 px-4 rounded-lg">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
