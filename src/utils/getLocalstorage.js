const getLocalstorage = (itemName) => {
	const existing = localStorage.getItem(itemName);

	return existing ? JSON.parse(existing) : [];
};

export default getLocalstorage;
