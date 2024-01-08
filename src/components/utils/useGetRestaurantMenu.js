import { Restaurant_Menu_CDN } from "../constants";

const useGetRestaurantMenu = (resId) => {

    const [restaurantMenu, setRestaurantMenu] = useState({}) ;

    useEffect(() => {
        getData();
      }, []);
    
      async function getData() {
        const data = await fetch( Restaurant_Menu_CDN + resId );

        // `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.2472528&lng=80.1514447&restaurantId= dollor {resId} &catalog_qa=undefined&submitAction=ENTER`
    
        const json = await data.json();
        setRestaurantMenu(json?.data?.cards);
      };

    return restaurantMenu;
};

export default useGetRestaurantMenu;