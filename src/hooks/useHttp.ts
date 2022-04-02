import { useState, useEffect, useCallback } from "react";
import { HttpRequestError } from "../util/errors";

export default function useHttp<T>(
  url: string
): [T | null, (searchUrl?: string) => Promise<void>, HttpRequestError | null] {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<HttpRequestError | null>(null);

  const memorizedFetchData = useCallback(async () => {
    const res = await fetch(`${url}`);
    if (!res.ok) {
      throw new HttpRequestError(
        res.status,
        res.statusText || res.status === 404
          ? "No se han encontrado coincidencias 😅"
          : "Error Inesperado 🤖"
      );
    }
    const apiData = await res.json();
    setData(apiData);
    setError(null);
  }, [url]);

  useEffect(() => {
    setData(null);
    memorizedFetchData().catch((err: HttpRequestError) => setError(err));
  }, [memorizedFetchData]);

  return [data, memorizedFetchData, error];
}
