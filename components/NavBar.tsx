import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import {
  LogoLight,
  Close,
  Menus,
} from "../components";
import { Menu, Transition } from "@headlessui/react";
import { User, ChevronDown, Settings, LogOut, Book } from "react-feather";

type NavProps = {
  hasSet?: any;
  className?: any;
};
export const NavBar = ({ hasSet, className }: NavProps) => {
  const [navbar, setNavbar] = useState(false);
  const [activeOne, setActiveOne] = useState("");


  const setNavValue = () => {
    if (navbar) {
      hasSet(false);
      setNavbar(false);
    } else {
      hasSet(true);
      setNavbar(true);
    }
  };
 

  return (
    <nav
      className={`fixed bg-white font-redex w-full  h-[120px] py-4 ${className} border-b border-b-blackAlpha-880`}
    >
      <div>
        <div className="lg:flex space-x-9  lg:space-x-16  md:items-center px-6 lg:px-[50px] xl:px-[100px]">
          <div className="flex items-center justify-between  py-2 mmd:py-7 mmd:flex">
            <a href="/">
              <div className="block mt-3 md:mt-0 lg:hidden">
                <LogoLight width={71} height={32} />
              </div>
              <div className="hidden  -mt-1 lg:block">
                <LogoLight width={114} height={36} />
              </div>
            </a>
            <div className="lg:hidden ">
              <button
                className="p-2 text-blackAlpha pr-1 rounded-md outline-none focus:border-gray-400 focus:border-none"
                onClick={() => setNavValue()}
              >
                {navbar ? (
                  <Close
                    width={17}
                    height={17}
                    className="text-blackAlpha  mt-3"
                  />
                ) : (
                  <Menus
                    width={24}
                    height={24}
                    className="text-blackAlpha  mt-4"
                  />
                )}
              </button>
            </div>
          </div>

          <div className="w-full  flex justify-between">
            <div
              className={` justify-start  py-2 pb-3 mt-8 lg:block md:pb-0 md:mt-0 hidden`}
            >
              <ul className="items-center font-semibold justify-center space-y-8 md:flex sm:space-x-8 md:space-y-0">
                <li className="text-blackAlphaOne hover:text-footer">
                  <Link
                    href="/shop"
                    className="text-[16px]"
                    //   onClick={() => setActiveOne("works")}
                  >
                    Shop
                  </Link>
                </li>
                <li
                  className={`${
                    activeOne ? "text-footer" : "text-blackAlphaOne"
                  }  cursor-pointer`}
                  onClick={() => setActiveOne("marketplace")}
                >
                  <Link
                    href="/affiliate"
                    //   onClick={() => setActiveOne("marketplace")}
                  >
                    Affiliates
                  </Link>
                </li>
                <li
                  className={`${"text-blackAlphaOne "} hover:text-footer`}
                  onClick={() => setActiveOne("pricing")}
                >
                  <Link
                    href="/pricing"
                    className={`text-[16px] ${
                      activeOne === "pricing"
                        ? "active:text-footer"
                        : "text-blackAlphaOne "
                    } hover:text-footer`}
                  >
                    Leaderboards
                  </Link>
                </li>
                <li
                  className={`${"text-blackAlphaOne "} hover:text-footer`}
                  onClick={() => setActiveOne("pricing")}
                >
                  <Link
                    href="/support"
                    className={`text-[16px] text-blackAlphaOne hover:text-footer`}
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pb-3 mt-8 lg:block md:pb-0 md:mt-0 hidden">
              <div className="w-full flex space-x-10">
                <div className="flex">
                  <div className="w-400 border px-7 border-blackAlpha-880 py-2 text-purple-700  hover:bg-purple hover:text-white border-r-0   rounded-l-[30px]">
                    <div className="flex space-x-1  ">
                      <h4 className="">2500</h4>
                      <div className="w-5 h-5 bg-bermuda rounded mt-[1px]"></div>
                    </div>
                  </div>
                  <div className="w-400 border px-5 py-2 border-blackAlpha-880  rounded-r-[30px]">
                    <div className="flex space-x-1  ">
                      <h4 className="text-blackAlpha-400">2500 USD</h4>
                    </div>
                  </div>
                </div>
                <div>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex justify-center w-full   bg-transparent text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-0">
                        <div className="flex space-x-2">
                          <div className="w-9 h-9 bg-purple rounded-[100%] p-1 ">
                            <User className="text-white ml-[1.5px]" />
                          </div>
                          <h2 className="text-talentBlue-200 text-[18px] xl:block sm:hidden mt-[8px]">
                            Thompson Ball
                          </h2>
                        </div>
                        <ChevronDown
                          className="-mr-1 ml-2 mt-2 h-5 w-5 text-talentBlue-200"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5  focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`${
                                active
                                  ? "bg-white text-blackAlpha-800 "
                                  : "text-gray-700"
                              } block px-4 py-4 text-[16px] border-r-0 border-l-0 border-t-0   border border-b-blackAlpha-880 rounded hover:bg-purple-900 hover:text-white`}
                            >
                              <div className="flex ">
                                <User className="mt-[2px] mr-5 w-5 h-5" />{" "}
                                Profile
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`${
                                active
                                  ? "bg-white text-blackAlpha-800 "
                                  : "text-gray-700"
                              } block px-4 py-4 text-[16px] border-r-0 border-l-0 border-t-0   border border-b-blackAlpha-880 rounded hover:bg-purple-900 hover:text-white`}
                            >
                              <div className="flex ">
                                <Book className="mt-[2px] mr-5 w-5 h-5" />{" "}
                                History
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`${
                                active
                                  ? "bg-white text-blackAlpha-800 "
                                  : "text-gray-700"
                              } block px-4 py-4 text-[16px] border-r-0 border-l-0 border-t-0   border border-b-blackAlpha-880 rounded hover:bg-purple-900 hover:text-white`}
                            >
                              <div className="flex ">
                                <Settings className="mt-[2px] mr-5 w-5 h-5" />{" "}
                                Settings
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`${
                                active
                                  ? "bg-white text-red-500"
                                  : "text-gray-700"
                              } block px-4 py-4 text-[16px] text-red-500 border-r-0 border-l-0 border-t-0   border border-b-blackAlpha-880 rounded hover:bg-purple-900 hover:text-white`}
                            >
                              <div className="flex ">
                                <LogOut className="mt-[2px] mr-5 w-5 h-5" /> Log
                                Out
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
