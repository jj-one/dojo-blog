import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [fetchErr, setFetchErr] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, {signal: abortCont.signal})
        .then((res) => {
          if (!res.ok){
            throw Error("The endpoint doesn't seem to exist");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setFetchErr(null)
          setData(data);
        })
        .catch((err) => {
          if (err.name === "AbortError"){
            console.log("Request Aborted");
          }
          else{
            setIsPending(false);
            setFetchErr(err.message);
          }
        });
      }, 1000);

      return () => abortCont.abort();
    
  }, [url]);

  return { data, isPending, fetchErr };
}

export default useFetch;