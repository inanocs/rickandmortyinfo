import { useState, useEffect, useCallback } from "react";

export default function useHttp<T>(
  url: string
): [T | null, (searchUrl?: string) => Promise<void>] {
  const [data, setData] = useState<T | null>(null);

  const memorizedFetchData = useCallback(async () => {
    const res = await fetch(`${url}`);
    const apiData = await res.json();
    setData(apiData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    memorizedFetchData();
  }, [memorizedFetchData]);

  return [data, memorizedFetchData];
}
