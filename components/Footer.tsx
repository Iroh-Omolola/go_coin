import Link from "next/link";
import { Fragment,  useState } from "react";
import { LogoLight, Close, Menus } from "../components";
import { Menu, Transition } from "@headlessui/react";
import { User, ChevronDown, Settings, LogOut, Book, Instagram, Facebook, Youtube, Twitter } from "react-feather";


export const Footer = () => {



  return (
    <footer
      className={` bg-white font-redex w-full  h-[120px] py-4  border-t border-t-blackAlpha-880`}
    >
      <div>
        <div className="lg:flex-row flex-col flex  sm:space-x-5   xl:space-x-16   px-6 lg:px-[50px] xl:px-[100px]">
          <div className="flex w-full lg:w-[10%] justify-center  lg:justify-start lg:mb-0 mb-3  mmd:flex">
            <a href="/">
              <div className="justify-center  lg:justify-start   ml-4  ">
                <LogoLight width={71} height={32} />
              </div>
            </a>
          </div>

          <div className="w-full lg:flex-row flex-col  flex justify-between">
            <div
              className={`justify-center  md:justify-start   space-y-5 py-2 pb-3   block md:pb-0 md:mt-0 `}
            >
              <ul className="items-center  -mt-1 font-semibold justify-center sm:flex-row flex-col space-y-5  flex space-x-0 sm:space-x-8  md:space-y-0">
                <li className="text-blackAlphaOne hover:text-footer">
                  <Link
                    href="/how-it-works"
                    className="text-[16px]"
                    //   onClick={() => setActiveOne("works")}
                  >
                    Shop
                  </Link>
                </li>
                <li
                  className={`text-blackAlphaOne  cursor-pointer hover:text-footer`}
                >
                  <Link
                    href="/marketplace"
                    //   onClick={() => setActiveOne("marketplace")}
                  >
                    Affiliates
                  </Link>
                </li>
                <li className={`${"text-blackAlphaOne "} hover:text-footer`}>
                  <Link href="/pricing" className={`text-[16px] `}>
                    Leaderboards
                  </Link>
                </li>
                <li className={`${"text-blackAlphaOne "} hover:text-footer`}>
                  <Link href="/pricing">Support</Link>
                </li>
                <li className="text-blackAlphaOne hover:text-footer active:text-footer"></li>
              </ul>
              <div className="justify-center  md:justify-start">
                <p className="text-[14px] lg:block hidden text-blackAlpha-700 text-center  md:text-start">
                  Copyright © 2022 CoinGain. All Rights Reserved
                </p>
              </div>
            </div>

            <div className="pb-3 mt-0  md:pb-0 md:mt-0 block">
              <div className="w-full flex flex-col space-y-5">
                <div className="flex">
                  <div
                    className={`flex w-full justify-center   lg:justify-end  py-2 pb-3  md:pb-0 md:mt-0 `}
                  >
                    <ul className="items-center -mt-1 font-semibold justify-center  sm:flex-row flex-col  space-y-5 flex space-x-0 sm:space-x-8 md:space-y-0">
                      <li className="text-blackAlphaOne hover:text-footer">
                        <Link
                          href="/how-it-works"
                          className="text-[16px]"
                          //   onClick={() => setActiveOne("works")}
                        >
                          About
                        </Link>
                      </li>
                      <li
                        className={`text-blackAlphaOne  cursor-pointer hover:text-footer`}
                      >
                        <Link
                          href="/privacy-policy"
                          //   onClick={() => setActiveOne("marketplace")}
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li
                        className={`${"text-blackAlphaOne "} hover:text-footer`}
                      >
                        <Link
                          href="/terms-condition"
                          className={`text-[16px] `}
                        >
                          Terms & Service
                        </Link>
                      </li>
                      <li
                        className={`${"text-blackAlphaOne "} hover:text-footer`}
                      >
                        <Link href="/pricing">Bug Bounty</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex">
                  <div
                    className={` flex w-full justify-center  lg:justify-end  py-2 pb-3  md:pb-0 md:mt-0 `}
                  >
                    <ul className=" -mt-1 font-semibold justify-center  lg:justify-end space-y-0   flex space-x-5 ">
                      <li className={`text-blackAlphaOne  cursor-pointer`}>
                        <div
                          className={`text-[16px] w-8 h-8 border rounded-full `}
                        >
                          <Facebook className="w-3 h-3  mx-auto mt-2.5 " />
                        </div>
                      </li>
                      <li className={`text-blackAlphaOne  cursor-pointer`}>
                        <div
                          className={`text-[16px] w-8 h-8 border rounded-full `}
                        >
                          <Instagram className="w-3 h-3  mx-auto mt-2.5 " />
                        </div>
                      </li>
                      <li className={`text-blackAlphaOne  cursor-pointer`}>
                        <div
                          className={`text-[16px] w-8 h-8 border rounded-full `}
                        >
                          <Youtube className="w-3 h-3  mx-auto mt-2.5 " />
                        </div>
                      </li>
                      <li className={`text-blackAlphaOne  cursor-pointer`}>
                        <div
                          className={`text-[16px] w-8 h-8 border rounded-full `}
                        >
                          <Twitter className="w-3 h-3  mx-auto mt-2.5 " />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="block lg:hidden justify-center  md:justify-start">
                  <p className="text-[14px] text-blackAlpha-700 text-center  md:text-start">
                    Copyright © 2022 CoinGain. All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
