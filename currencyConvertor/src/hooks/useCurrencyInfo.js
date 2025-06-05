import { useEffect, useState } from "react";
import axios from "axios";

function useCurrencyInfo(currency) {
    const [currencyInfo, setCurrencyInfo] = useState({});

    useEffect(() => {
        const fetchCurrencyInfo = async () => {
            try {
                const response = await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
                setCurrencyInfo(response.data[currency] || {});
            } catch (error){
                console.error("Error fetching currency info:", error);
                setCurrencyInfo({});
            }
        }
        fetchCurrencyInfo();
    }, [ currency ]);

    return currencyInfo;
}

export default useCurrencyInfo;
// This custom hook fetches currency information based on the provided currency code.
