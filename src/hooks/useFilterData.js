
const useFilterData = (searchText,restarent ) => {
    const filterDatas = restarent.filter((res) =>
    res?.name?.toLowerCase()?.includes(searchText?.toLowerCase())

    // res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );

  return filterDatas;
}

export default useFilterData
