import React from 'react'
import { Link } from "react-router-dom";
import backgroundImage from './assets/ali.jpg'
import Logo from './assets/logo.png'


export default function Login() {
  return (
    <div className="bg-white dark:bg-gray-900">
  <div className="flex justify-center h-screen">
    <div
      className="hidden bg-cover lg:block lg:w-2/3"
      style={{
        backgroundImage: `url(${backgroundImage})` // Memanggil gambar yang diimpor
      }}
    >
      <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            April Learning Institute
          </h2>
          <p className="max-w-xl mt-3 text-gray-300">
           April Learning Institute is one of APRIL Group's  
           effort to provide training of develop capabilities, increase knowledge and skills of employes in the
           pulp and paper industry. As well as meeting your career development needs, with a focus on innovation
           and technology
          </p>
        </div>
      </div>
    </div>
    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
      <div className="flex-1">
        <div className="text-center">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src={Logo}
              alt=""
            />
          </div>
          <p className="mt-3 text-gray-500 dark:text-gray-300">
            Sign in to access your account
          </p>
        </div>
        <div className="mt-8">
          <form>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >
               username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="your username"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <label
                  htmlFor="password"
                  className="text-sm text-gray-600 dark:text-gray-200"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
                
                
                <Link to="/budget">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign in
              </button>
                </Link>
              
            </div>
          </form>
          <p className="mt-6 text-sm text-center text-gray-400">
            Don't have an account yet?{" "}
            <a
              href="#"
              className="text-blue-500 focus:outline-none focus:underline hover:underline"
            >
              Sign up
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}