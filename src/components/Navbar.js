import React from 'react'

const Navbar = () => {
  return (
    <header className="py-6 fixed z-10 w-full  backdrop-blur-lg backdrop-opacity-90 lg:px-24 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center justify-between lg:w-1/2">
          <div>
            <a className="text-violet-500 font-bold md:text-2xl" href="/">
              Rentit
            </a>
          </div>
          <div>
            <div className="flex sm:gap-4 text-gray-500 text-lg lg:gap-10 text">
              {['Rent', 'Buy', 'Sell', 'Manage Property', 'Resources'].map(
                (item, index) => {
                  return (
                    <a
                      href={`/${item}`}
                      className="cursor-pointer hover:underline decoration-violet-400"
                      key={index}
                    >
                      {item}
                    </a>
                  )
                },
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a
            className="text-violet-500 border-purple-700 border-[1px] rounded-lg	  px-4 py-2 transition"
            href="/"
          >
            Log in
          </a>
          <a
            className="bg-violet-500 hover:bg-violet-700 text-white px-4 py-2 rounded-lg transition"
            href="/"
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
