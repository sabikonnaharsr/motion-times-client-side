import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/UserContext/UserContext';
import Swal from "sweetalert2";
import UseTitle from '../../Hooks/UseTitle';

const Login = () => {
  const [error, setError] = useState([]);
    UseTitle('Login')
    const {logIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
  
    
    const handleLoginSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
  
      logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
        Swal.fire({
          icon: "success",
          title: "Login Success!",
          showConfirmButton: false,
          timer: 1500,
        });
        })
        .catch((error) => {
          setError(error.message);
          console.error("error", error);
        });

      };

    

    return ( 
     <section className="bg-slate-800 rounded-lg">
      <div className="mx-auto lg:w-1/4 px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-x-16 bg-slate-900  min-h-[500px] gap-y-8">
          <div className="rounded-lg shadow-lg lg:col-span-3 p-10">
            <h1 className='text-xl mb-3'>Login</h1>
            <form onSubmit={handleLoginSubmit} className=" space-y-4 ">
            
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 mb-5 text-sm"
                  placeholder="Email address"
                  type="email"
                  name="email"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Password
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 mb-5 p-3 text-sm"
                  placeholder="Password"
                  type="password"
                  name="password"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="phone">
                 {error} Please put valid password
                </label>
                <label className="sr-only" htmlFor="phone">
                  Confirm Password
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 mb-5 p-3 text-sm"
                  placeholder="Confirm Password"
                  type="password"
                  name="ConfirmPassword"
                />
              </div>

              <div className="flex flex-col justify-center">
                <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                   Login
                </button>

               
                <p className="mt-4 text-sm text-gray-500 sm:mt-0 text-center">
              
                  New to create Account
                  <span>
                    {""}
                  <Link to="/signup" className="text-white font-medium underline">
                    {""}
                    Sign Up
                  </Link>
                  .
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
 
    );
};

export default Login;