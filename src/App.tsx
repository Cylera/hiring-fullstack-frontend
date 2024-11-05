import React from "react";
import classnames from "classnames";
import { Heading } from "@components";

const App = () => {
  return (
    <div
      className={classnames(
        "w-full",
        "h-full",
        "bg-neutral-100",
        "flex",
        "flex-col",
        "space-y-6",
        "overflow-hidden"
      )}
    >
      <header className={classnames("px-8", "py-6", "h-fit")}>
        <Heading variant="h1">Checkout Bot</Heading>
      </header>
    </div>
  );
};

export default App;
