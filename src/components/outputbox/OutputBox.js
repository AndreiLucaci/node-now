import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const OutputBox = props => {
  return (
    <AceEditor
      placeholder="This will output the result"
      mode="javascript"
      theme="monokai"
      name="blah1"
      value={props.result}
      height="30vh"
      width="100vw"
      fontSize={12}
      readOnly={true}
      showPrintMargin={false}
      showGutter={false}
      highlightActiveLine={false}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: false,
        tabSize: 2
      }}
    />
  );
};

export default OutputBox;
