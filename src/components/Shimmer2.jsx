import "./shimmer.css";

const Shimmer2 =()=> {

    return (
        <>
        <div className="">

            <div
              className="space-y-8 animate-pulse mt-20 md:space-y-0 md:space-x-8 rtl:space-x-reverse"
              role="status"
            >
              <div className="h-60  m-5 bg-gray-200 rounded-lg sm:w-60 dark:bg-gray-400"></div>
             
              </div>

        </div>
        </>
    )
}

export default Shimmer2;