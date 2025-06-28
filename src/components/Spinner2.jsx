import React from "react";
import { Spinner } from "flowbite-react";

const Spinner2 = () => {
  return (
    <>
      <Spinner
        color="purple"
        aria-label="Purple spinner example"
        className="w-7 h-7 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-600"
      />
    </>
  );
};

export default Spinner2;
