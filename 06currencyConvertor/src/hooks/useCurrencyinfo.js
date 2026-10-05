import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  //fetching API
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`,
    )
      .then((res) => res.json()) // server send the response
      .then((res) => setData(res[currency])); // extract the currency data from the data
  }, [currency]); //'[]' is dependency Array

  return data;
}

export default useCurrencyInfo;