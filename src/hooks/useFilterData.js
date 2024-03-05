import React from 'react'

const useFilterData = (searchText,restarent ) => {

    const filterDatas = restarent.filter((res) =>
    res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );

  return filterDatas;
}

export default useFilterData
