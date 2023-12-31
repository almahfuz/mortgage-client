import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthContext';
import "./MenuCSS.css"

const Menubar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const navItems = (
        <>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase text-purple-600 border-b-2 border-purple-600"
                : "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase hover:text-purple-600 hover:border-b-2 hover:border-purple-600"
            }
          >
            Home
          </NavLink>
    
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase text-purple-600 border-b-2 border-purple-600   "
                : "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase text-blueGray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 "
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/allOfToy"
            className={({ isActive }) =>
              isActive
                ? "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase text-purple-600 border-b-2 border-purple-600   "
                : "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase text-blueGray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 "
            }
          >
            All Toys
          </NavLink>
          <NavLink
            to="/alltoy"
            className={({ isActive }) =>
              isActive
                ? "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase text-purple-600 border-b-2 border-purple-600   "
                : "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase text-blueGray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 "
            }
          >
            Gallery
          </NavLink>
         
    
          {user?.email ? (
            <>
              <NavLink
                to="/mytoy"
                className={({ isActive }) =>
                  isActive
                    ? "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase text-purple-600 border-b-2 border-purple-600   "
                    : "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase text-blueGray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 "
                }
              >
                My Toys
              </NavLink>
    
              <NavLink
                to="/AddedNewToy"
                className={({ isActive }) =>
                  isActive
                    ? "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase text-purple-600 border-b-2 border-purple-600   "
                    : "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase text-blueGray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 "
                }
              >
                Add A Toy
              </NavLink>
              <NavLink
                onClick={handleLogOut}
                className={({ isActive }) =>
                  isActive
                    ? "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase text-purple-600 border-b-2 border-purple-600   "
                    : "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase  text-blueGray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 "
                }
              >
                Log Out
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase text-purple-600 border-b-2 border-purple-600   "
                  : "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase text-blueGray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 "
              }
            >
              log in
            </NavLink>
          )}
          {/* <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase text-purple-600 border-b-2  "
                : "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase text-purple-600 "
            }
          >
            {user?.displayName}
          </NavLink> */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase text-purple-600 border-b-2  "
                : "py-1 px-1 m-1 text-xs font-bold  whitespace-nowrap uppercase text-purple-600 outline-none focus:outline-none active:outline-none "
            }
          >
            <NavLink className="px-3 flex items-center text-xs uppercase font-bold leading-snug  text-neutral-700 dark:text-neutral-200 hover:opacity-75">
              <i className=" rounded text-lg leading-lg  text-neutral-700 dark:text-neutral-200 opacity-75">
                <div className="group flex relative">
                  <span className=" text-white px-2 py-1 bg-blueGray-200  outline-none">
                    {/* <img
                      className={`w-8 h-8 border outline-none focus:outline-none active:outline-none rounded-full object-cover  after:shadow-sm`}
                      src={user?.photoURL}
                    /> */}
                  </span>
                  <span
                    className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
        -translate-x-1/2 translate-y-full opacity-0 m-1 mx-auto"
                  >
                    Name Experience 
                    {/* {user?.displayName} */}
                  </span>
                </div>
              </i>
            </NavLink>
          </NavLink>
        </>
      );
    
      return (
        <div className='className="leading-normal tracking-normal text-white gradient"'>
          <div className=" text-black ">
            <div className="bg-blueGray-200 px-2 md:px-4 shadow">
              <div className="container px-1 md:px-4 ">
                <div className="flex items-center justify-between py-4">
                  <Link to="/">
                    <div className="flex items-center">
                      {/* <img className="h-12 w-12 object-contain" src={logo} alt="" /> */}
                      <span className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                        Decode construction toy
                      </span>
                    </div>
                  </Link>
    
                  <div className="hidden  sm:flex sm:items-center">{navItems}</div>
    
                  {/* <div className="hidden sm:flex sm:items-center">{LogSignBtn}</div> */}
    
                  <div className="sm:hidden cursor-pointer">
                    <button
                      aria-label="Open Menu"
                      title="Open Menu"
                      onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-purple-600"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12.9499909,17 C12.7183558,18.1411202 11.709479,19 10.5,19 C9.29052104,19 8.28164422,18.1411202 8.05000906,17 L3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.2238576 3.22385763,16 3.5,16 L8.05000906,16 C8.28164422,14.8588798 9.29052104,14 10.5,14 C11.709479,14 12.7183558,14.8588798 12.9499909,16 L20.5,16 C20.7761424,16 21,16.2238576 21,16.5 C21,16.7761424 20.7761424,17 20.5,17 L12.9499909,17 Z M18.9499909,12 C18.7183558,13.1411202 17.709479,14 16.5,14 C15.290521,14 14.2816442,13.1411202 14.0500091,12 L3.5,12 C3.22385763,12 3,11.7761424 3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L14.0500091,11 C14.2816442,9.85887984 15.290521,9 16.5,9 C17.709479,9 18.7183558,9.85887984 18.9499909,11 L20.5,11 C20.7761424,11 21,11.2238576 21,11.5 C21,11.7761424 20.7761424,12 20.5,12 L18.9499909,12 Z M9.94999094,7 C9.71835578,8.14112016 8.70947896,9 7.5,9 C6.29052104,9 5.28164422,8.14112016 5.05000906,7 L3.5,7 C3.22385763,7 3,6.77614237 3,6.5 C3,6.22385763 3.22385763,6 3.5,6 L5.05000906,6 C5.28164422,4.85887984 6.29052104,4 7.5,4 C8.70947896,4 9.71835578,4.85887984 9.94999094,6 L20.5,6 C20.7761424,6 21,6.22385763 21,6.5 C21,6.77614237 20.7761424,7 20.5,7 L9.94999094,7 Z M7.5,8 C8.32842712,8 9,7.32842712 9,6.5 C9,5.67157288 8.32842712,5 7.5,5 C6.67157288,5 6,5.67157288 6,6.5 C6,7.32842712 6.67157288,8 7.5,8 Z M16.5,13 C17.3284271,13 18,12.3284271 18,11.5 C18,10.6715729 17.3284271,10 16.5,10 C15.6715729,10 15,10.6715729 15,11.5 C15,12.3284271 15.6715729,13 16.5,13 Z M10.5,18 C11.3284271,18 12,17.3284271 12,16.5 C12,15.6715729 11.3284271,15 10.5,15 C9.67157288,15 9,15.6715729 9,16.5 C9,17.3284271 9.67157288,18 10.5,18 Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
    
                {navbarOpen && (
                  <div className=" block  sm:hidden bg-blueGray-200 border-t-2 py-2">
                    <div className="flex flex-col">{navItems}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
};

export default Menubar;