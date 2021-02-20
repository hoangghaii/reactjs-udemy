export default function useSearch(dataList, searchText) {
	const dataKeys = dataList[0] && Object.keys(dataList[0]);
	return dataList.filter((item) =>
		dataKeys.some(
			(dataKey) =>
				item[dataKey]
					.toString()
					.toLowerCase()
					.indexOf(searchText.toLowerCase()) > -1
		)
	);
}
