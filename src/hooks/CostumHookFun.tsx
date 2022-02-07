import { useEffect, useMemo, useState } from "react";

const useCostumHookFun = (url: string) => {
  const [data, setData] = useState([]);

  // const DataUpdate = useMemo(() => {
  //   console.log("a");

  //   console.log(data);
  // }, [data]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((res) => setData(res))
      .catch((error: ErrorEvent) => console.log(error.message));
  }, []);

  return [data, setData];
};

export default useCostumHookFun;
