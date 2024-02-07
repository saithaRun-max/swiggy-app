// import "./shimmer.css";
import { v4 as uuidv4 } from 'uuid';
const Shimmer = () => {
  const uId = uuidv4();
  return (
    <>
      <p>
        USE{" "}
        <a href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf">
          CORS extension
        </a>{" "}
        for further Loading..
      </p>
    
        {/*  10 divs are created by this  easily*/}

        {Array(20)
          .fill("")
          .map((e, index) => (
            <div
            className="mx-2 ml-16 rounded-sm flex  justify-items-start flex-wrap"
            key={index}
          >


            <div
              role="status"
              className="space-y-8 animate-pulse mt-20 md:space-y-0 md:space-x-8 rtl:space-x-reverse"
            >
              <div className="h-40 w-60 m-5 bg-gray-200 rounded-lg sm:w-60 dark:bg-gray-400"></div>
              <div className="w-60 mx-7 ">
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-400 w-44 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-48 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-52 mb-2.5"></div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>

</div>

          ))}

       
      
    </>
  );
};
export default Shimmer;
