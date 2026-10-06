import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  //fetching API
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      .then((res) => res.json()) // server send the response
      .then((res) => setData(res[currency])); // extract the currency data from the data
  }, [currency]); //'[]' is dependency Array

  return data;
}

export default useCurrencyInfo;
