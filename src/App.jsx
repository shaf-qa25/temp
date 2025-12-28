// import React from 'react'
// import Card from './content/card'
// import Navbar from './content/Navbar'
// import Herosection from './content/Herosection'
// import Hooks from './content/Hooks'
// // import About from './content/About'
// import{  Routes } from 'react-router-dom'
// import Home from "./content/Home";
// import About from "./content/About";
// import Contact from "./content/Contact";
// import NotFound from './content/NotFound';

// // import { getDatabase ,ref ,set } from "firebase/database";
// import { app } from './content/firbase';
// import { getAuth ,createUserWithEmailAndPassword } from 'firebase/auth'
// const auth =getAuth(app); 


// // const db= getDatabase(app);


// // import { useEffect } from 'react';
// // import { getpost } from './API/API.JS'


// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router";




// const App = () => {
//   const signupUser=()=>{
//     createUserWithEmailAndPassword(
//       auth,
//       "nikhilgupta@gmail.com",
//       "nik@123"
//     ).then((value)=> console.log(value));
//   }


//   // this is real time data base 
//   // const putData=()=>{
//   //   set(ref(db,'user/nikhi'),{
//   //     id:1,
//   //     name:"nikhil",
//   //     age:21,
//   //   });
//   // };

//   // useEffect(()=>{
//   //   getpost().then((posts)=>console.log(posts));
//   // },[]);
  
//   const router= createBrowserRouter([
//   {
//     path:"/",
//     element:
//     <div>
//       <Home/>
//       <Navbar/>
//       <Herosection/>
//       </div>,
//   },
//   {
//     path:"/About",
//     element: <div>
//       <Navbar/>
//        <About/>
//     {/* <Card  text="paragraph1"/>
//    <Card  complete={true} text="paragraph2"/>
//    <Card  text="paragraph3"/>
//    <Card  text="paragraph3"/>
//    <Card  text="paragraph4"/>
//    <Card  text="paragraph5"/> */}
//     </div>,
//   },
//   {
//     path:"/Contact",
//     element: <div>
//       <Navbar/>
//       <Contact/>
//       <Hooks/>
//       </div>
//   },
//   {
//     path:"/*",
//     element:<NotFound/>
//   }

// ]


// );
//   return (
//     <>
//     <button onClick={signupUser}>Create user</button>
//    {/* <Navbar/>
//    <Herosection/> */}
//    <Card  text="paragraph1"/>
//    <Card  complete={true} text="paragraph2"/>
//    <Card  text="paragraph3"/>
//    <Card  text="paragraph3"/>
//    <Card  text="paragraph4"/>
//    <Card  text="paragraph5"/>
//    {/* <Hooks/> */}
//    <RouterProvider router={router} />
//   </>
    
//   )
// }

// export default App


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './content/About';
import Card from './content/card'
// import SimpleHome from './content/SimpleHome';
// import SimpleListMachine from './content/SimpleListMachine';
// import SimpleBookMachine from './content/SimpleBookMachine';
import 'bootstrap/dist/css/bootstrap.min.css';

const SimpleApp = () => {
  return (
    <Routes>
      <Route path="/" element={<SimpleHome />} />
      <Route path="/About" element={<About />} />
      <Route path="/Card" element={<Card />} />
    </Routes>
  );
};

export default SimpleApp;
