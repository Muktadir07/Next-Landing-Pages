// import axios from "axios";
import Head from "next/head";
import { useEffect } from "react";

// Common CSS
import Theme1 from "./theme_1/index";
// import Theme2 from "./theme_2/index";
const index = () => {
	const headers = {
		domain: 'testuser10',
		Authorization: 'Bearer B5eOrgunU7u0TRp3t2GNKVeCs9IymiQREjUACJ1o4LZVRm3tfoTvsaHN4fQjUiE3'
	};
	const getShopInfo = async () => {
		const shopInfo = await axios.post(`${process.env.API_URL}v1/client/shops/info`, {}, { headers: headers });
		const shopData = shopInfo?.data?.data
		console.log(shopData);
		localStorage.setItem('shop_id', shopData.shop_id);
		localStorage.setItem('shop_name', shopData.name);
	}
	useEffect(() => {
		if (localStorage.getItem('shop_id') !== undefined) {
			getShopInfo();
		}
	}, [])
	const shopInfo = {
		theme: 1,
		landing: null,
		shop_id: 1
	}
	return (
		<>
			{shopInfo.theme === 1 && shopInfo.landing === null && <Theme1 />}
			{shopInfo.theme === 2 && shopInfo.landing === null && <Theme2 />}
			{shopInfo.theme === null && shopInfo.landing === null && <h1>Please Select a theme first!</h1>}
		</>
	);
};

export default index;
