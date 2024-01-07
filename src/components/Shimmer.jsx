import "./shimmer.css";

const Shimmer = () => {
  return (
    <div className="container">

{/*  10 divs are created by this  easily*/}


{
  Array(16).fill("").map((e, index)=> <div className="shimmer" key={index}></div> )
}





      {/* <div className="shimmer"></div>
      <div className="shimmer"></div> */}
    </div>
  );
};
export default Shimmer;
