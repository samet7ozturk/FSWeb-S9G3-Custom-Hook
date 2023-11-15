import useLocalStorage from "./localStorageKullan";

const useGeceModuAc = () => {
  const [geceModu, setGeceModu] = useLocalStorage("geceModu", false);
  return [geceModu, setGeceModu];
};

export default useGeceModuAc;
