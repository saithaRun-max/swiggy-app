import {useState} from 'react';


const Login = () => {

const [isLoggedin, setLoggedIn] = useState(false);



  return (
    <div>
              {!isLoggedin ? (
            <button
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2  mt-3"
              onClick={() => setLoggedIn(true)}
            >
              Log In{" "}
            </button>
          ) : (
            <button
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 focus:text-sm font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3"
              onClick={() => setLoggedIn(false)}
            >
              Log Out{" "}
            </button>
          )}
      
    </div>
  )
}

export default Login
