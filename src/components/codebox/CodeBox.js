import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const CodeBox = props => {
  let val = "";

  const runCode = () => {
    props.runCode(val);
  };

  const executeCode = e => {
    if (e.keyCode === 13 && e.ctrlKey) {
      runCode();
      e.preventDefault();
    }
  };

  const onChange = value => {
    console.log(value);
  };

  useEffect(() => {
    window.addEventListener("keydown", executeCode);
    return () => window.removeEventListener("keydown", executeCode);
  });

  return (
    <AceEditor
      placeholder="Enter your code here"
      onChange={onChange}
      mode="javascript"
      theme="monokai"
      name="blah"
      fontSize={12}
      showPrintMargin={true}
      height="70vh"
      width="100vw"
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2
      }}
    />
  );
};

export default CodeBox;
