// import { ArrowDownIcon } from "@heroicons/react/20/solid";

import { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

const singleFaq = ({ question, answer }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <h1 className="text-xl font-semibold">{question}</h1>
        {/* <ArrowDownIcon className="w-6 h-6" /> */}
        {show ? (
          <span className="text-3xl">-</span>
        ) : (
          <span className="text-3xl">+</span>
        )}
      </div>

      {show && (
        <div className="overflow-clip">
          <p className="text-sm md:text-base ">{answer}</p>
        </div>
      )}
    </>
  );
};

export default singleFaq;
