import React, { useState } from "react";

import CodeBox from "../../components/codebox";
import OutputBox from "../../components/outputbox";

import engine from "../../engine";

import "./Code.css";

const CodePage = () => {
  const [output, setOutput] = useState("");

  const runCode = code => {
    const result = engine(code);
    setOutput(result);
  };

  return (
    <div className="outer">
      <div className="top">
        <CodeBox runCode={runCode} />
      </div>
      <div className="bottom">
        <OutputBox result={output} />
      </div>
    </div>
  );
};

export default CodePage;
