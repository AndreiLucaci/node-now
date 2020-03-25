const vm = require("vm");

const process = code => {
  let result = "";
  try {
    const sandbox = {};
    const script = new vm.Script(code);

    const context = new vm.createContext(sandbox);
    result = script.runInNewContext(context, {
      displayErrors: true,
      lineOffset: 5,
      columnOffset: 100
    });
  } catch (err) {
    result = err.message;
  }

  return result;
};

export default process;
