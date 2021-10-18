import { useState, useEffect } from "react";

export default function useHttp(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${url}`);
      const apiData = await res.json();
      setData(apiData);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data];
}
