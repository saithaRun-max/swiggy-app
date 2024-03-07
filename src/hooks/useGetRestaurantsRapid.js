import { useEffect } from "react";

const useGetRestaurantsRapid = () => {
  const getData = async () => {
    const url = 'https://community-food2fork.p.rapidapi.com/get?key=%3CREQUIRED%3E&rId=37859';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cde5fead4emsh65639eecd73dcb9p102aa7jsnc6b381b0c4fd',
            'X-RapidAPI-Host': 'community-food2fork.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useGetRestaurantsRapid;
