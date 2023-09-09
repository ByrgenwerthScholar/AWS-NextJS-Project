"use client";
import useAuth from "../hooks/useAuth";

export default function Page()  {

    const { isAuthenticated, user } = useAuth();
    console.log(user);


    return (
        <>
          
            <main className="bg-background flex justify-center items-center h-screen">
              <div className="bg-revolver p-10 rounded-[30px]">
                {
                user === undefined // User is still being checked
                ? <div className="h-5 w-5 mr-3 animate-spin mx-auto"></div> // Replace with your actual loading component
                : isAuthenticated && user// User is authenticated and exists
                  ? <h1 className="text-4xl font-mw justify-center text-background">Welcome, {user.name}!</h1>
                  : <h1>User not signed in</h1>
                }
              </div>
            </main>
          
        </>
      );    
 
        
}