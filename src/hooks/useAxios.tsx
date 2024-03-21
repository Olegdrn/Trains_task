import { useEffect, useState } from "react";
import axios from "axios";

export function UseAxios<T, P>(url: string, depends?: T) {
  const [data, setData] = useState<P | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, [depends]);
  return { data, isLoading, error };
}
