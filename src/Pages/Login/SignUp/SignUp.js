import React, { useContext, useState } from "react";
import UseTitle from "../../Hooks/UseTitle";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/UserContext/UserContext";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { FaBeer, FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

const SignUp = () => {
  const [error, setError] = useState(" ");
  const [accepted, setAccepted] = useState(false);
  const { createUser, googleSignIn, githubSingIn, userUpdateProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  UseTitle("Signup");


  // user profile update
  const updateProfileInfo = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    userUpdateProfile(profile)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((err) => console.error("Error", err));
  };



  // signIn with email, password
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const PhotoURL = form.PhotoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, PhotoURL, email, password);
    

    // userCreate
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfileInfo(name, PhotoURL);
        console.log(user);
        form.reset();
        navigate("/");
        error("");
      })
      .catch((err) => {
        console.error(err);
        setError(error.message);
      });
  };


  // google signIn
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
        setError(error.message);
      });
  };


  // github signIn
  const githubProvider = new GithubAuthProvider();
  const handleGithubSingIn = () => {
    githubSingIn(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("user successfully login");
      })
      .catch((e) => alert(e.message));
  };

  const handleAccepted = (e) => {
    setAccepted(e.target.checked)
 }



  return (
    <div>
      <section className="bg-gray-100 mb-12 mt-16 rounded-lg">
        <div className="mx-auto lg:w-2/5 px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8">
            <div className="rounded-lgp-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-4 p-5">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    name="name"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    name="email"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Photo Link
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Profile Image Link"
                    name="PhotoURL"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    name="phone"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Password
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Password"
                    type="password"
                    name="password"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Confirm Password
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Confirm Password"
                    type="password"
                    name="ConfirmPassword"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 w-3/4 mx-auto">
                    Create an account
                  </button>

                  {/* condition btn */}
                    <span>
                    <label className="sr-only" htmlFor="phone">
                     <div>
                     <input type="checkbox" checked className="checkbox checkbox-xs" /> 
                     <p onClick={handleAccepted} className="mt-4 text-sm text-gray-500 sm:mt-0 text-center">{<>Accept <Link to="/terms" className="text-slate-700">terms and condition</Link></> }</p> 
                     </div>
                     <button className="btn btn-xs text-blue-800"disabled={!accepted}>signup</button>
                   </label>
                    </span>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0 text-center">
                    Already have an account?
                    <Link
                      to="/login"
                      className="text-sky-700 font-semibold underline" >
                      Log in
                    </Link>
                    .

                    {/* icons */}
                    <span className=" flex justify-center  text-3xl gap-4 mt-3 text-center">
                      <Link
                        onClick={handleGoogleSignIn}
                        className="text-blue-500"
                      >
                        <FaGoogle></FaGoogle>{" "}
                      </Link>
                      <Link onClick={handleGithubSingIn} className="text-black ">
                        <FaGithub></FaGithub>
                      </Link>
                      <Link className="text-blue-500">
                        <FaFacebook></FaFacebook>
                      </Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
