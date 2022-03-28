import { useState, useEffect, useCallback } from "react";

export default function useHttp<T>(
  url: string
): [T | null, (searchUrl?: string) => Promise<void>, boolean] {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(data === null);

  const memorizedFetchData = useCallback(async () => {
    const res = await fetch(`${url}`);
    const apiData = await res.json();
    setData(apiData);
  }, [url]);

  useEffect(() => {
    setLoading(true);
    memorizedFetchData();
    setLoading(false);
  }, [memorizedFetchData]);

  return [data, memorizedFetchData, loading];
}
