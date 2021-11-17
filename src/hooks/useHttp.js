import { useState, useEffect } from "react";

export default function useHttp(url) {
  const [data, setData] = useState([]);

  const fetchData = async (searchUrl = url) => {
    const res = await fetch(`${searchUrl}`);
    const apiData = await res.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data, fetchData];
}
