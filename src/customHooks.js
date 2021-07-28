import { useEffect, useState } from "react";
import axios from "axios";

const useCustomHooks = () => {
  const [dataList, setDataList] = useState([]);
  const fetchData = async () => {
    try {
      const myData = await axios.get("https://reactnative.dev/movies.json");
      setDataList(myData.data.movies);
      console.log(dataList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [dataList];
};

export default useCustomHooks;
