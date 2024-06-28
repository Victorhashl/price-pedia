import React from 'react'

const NavBar = () => {
  return (
    <div>
      <div className="sticky top-0 flex z-10 place-content-between ">
        <div className="text-white pt-10 pb-10 pl-10">
        </div>
        <ul className='mt-[50px] ml-[74px] absolute'>
          <li><img src="https://framer.com/projects/PricePedia--ihG0sN9SZ5Cpgkg52WKQ-1FpD7?node=MBQOx7vjn" alt="Logo" /></li>
        </ul>
        <ul className="    text-gray-400 flex  w-2/4 pt-10 pb-10  place-items-center  content-between justify-evenly place-content-evenly ">
            <li className=" transition ease-in-out hover:text-white"><a href="">Features</a></li>
            <li className=" transition ease-in-out hover:text-white"><a href="">Discover</a></li>
            <li className=" transition ease-in-out hover:text-white"><a href="">Downloads</a></li>
            <li className=" transition ease-in-out hover:text-white"><a href="">Updates</a></li>
            {/* <button onClick={()=>{router.push('/Login',{shallow: true})}} className=" bg-blue-600 px-3 py-1 text-white hover:bg-blue-700 hover:opacity-90  rounded-md " >Get Started</button> */}
        </ul>
    </div>
    </div>
  )
}

export default NavBar
