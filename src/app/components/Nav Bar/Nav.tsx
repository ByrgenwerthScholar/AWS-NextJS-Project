import React from "react";
import DropdownLogin from "./Login";
import Logout from "./Logout";
import ssrAuth  from "../../lib/ssrAuth";
import UserProfileInfo from "./UserProfileInfo";
import { useAuth } from "../../hooks/clientAuth";


export default async function Navbar() {
    const SSRuser = await ssrAuth();
    return (
      <nav className="flex items-center justify-between flex-wrap bg-fern p-6">
        <a href="/" className="flex flex-col justify-between flex-shrink-0 text-white mr-6" >
        <img className="w-5 h-5 mx-auto" src="/book-closed-svgrepo-com.svg" alt="Logo"/>
          <span className="font-semibold text-xl tracking-tight">Arena</span>
        </a>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>

          <div className="flex flex-wrap gap-3 items-center">
            {
  SSRuser ? 
  <>
    <UserProfileInfo />
    <Logout />
  </> 
  : 
  <><a href="/auth/st-sign-up" className="inline-flex items-center justify-center px-4 py-2 border-2 rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign Up</a>
  <DropdownLogin /></>
}
          </div>

      </nav>
    )
  
  
}
