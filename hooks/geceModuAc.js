const { useState } = require("react");

const useGeceModuAc = () => {
  const [geceModu, setGeceModu] = useLocalStorage("geceModu", false);
  return [geceModu, setGeceModu];
};

export default useGeceModuAc;
