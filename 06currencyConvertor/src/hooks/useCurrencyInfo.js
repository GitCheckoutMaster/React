import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(
			`https://api.currencyapi.com/v3/latest?apikey=cur_live_Z77QH4toHDwj6IMK2KNh750T3FrogGeJtGiXd502&currencies=&base_currency=${currency}`
		)
			.then((res) => res.json())
			.then((res) => setData(res["data"]));
    }, [currency]);

    // console.log(data);

    return data;
}

export default useCurrencyInfo;
