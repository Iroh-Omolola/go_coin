import Link from "next/link";
import { useState } from "react";
import { BarChart } from "react-feather";
import { Card, WideCard } from "../components";
import Layout from "../components/Layout";

const IndexPage = () => {
  const [show, setShow]=useState(false)

return (
  <Layout title="Home | Next.js">
    <div className="bg-no-repeat mb-10 pt-36 w-[100vw]    bg-white  ">
      <div className="xl:px-[120px]  sm:px-[50px] h-[100%] px-[20px]">
        <h6 className="text-[24px]  text-talentBlue mb-10">Welcome Back!</h6>
        <h1 className="lg:text-[50px] md:text-[40px] text-[36px] mb-10  text-blue-800 font-semibold">
          Thomas Henry
        </h1>
        <div className="flex sm:flex-row flex-col justify-between">
          <div className="flex space-x-4 ml-1 mb-20">
            <div className="h-10 w-10 bg-purple rounded-full">
              <BarChart className="text-white w-7 h-7 ml-1 mt-1" />
            </div>
            <h4 className="text-[24px] text-talentBlue">Earn Possibilities</h4>
          </div>
          <div
            className="pr-10 justify-end flex cursor-pointer"
            onClick={() => setShow(!show)}
          >
            <p className="text-green-500 text-[20px]">See all</p>
          </div>
        </div>
        <div className="flex flex-col w-full align-middle    justify-center xs:justify-between">
          <div className="grid  md:grid-cols-3 grid-cols-1 xs:grid-cols-2    lg:grid-cols-4 xl:grid-cols-5 justify-center content-center  2xl:grid-cols-5 gap-y-8   gap-x-8">
            <Card
              groupColor="group-hover:bg-red-500"
              groupColors="hover:border-red-500  hover:bg-white mr-2  xs:w-72 mmd:w-60 lg:w-60 2xl:w-72"
            />
            <Card
              groupColor="group-hover:bg-purple-700"
              groupColors="hover:border-purple-700 hover:bg-white mr-2  w-50 mmd:w-60 lg:w-60 2xl:w-72"
            />
            <Card
              groupColor="group-hover:bg-bubble-gum"
              groupColors="hover:border-bubble-gum hover:bg-white mr-2  w-50 mmd:w-60 lg:w-60 2xl:w-72"
            />
            <Card
              groupColor="group-hover:bg-green-500"
              groupColors="hover:border-green-500 hover:bg-white mr-2 mmd:w-[150%]   w-50 mmd:w-60 lg:w-60 2xl:w-72"
            />
            <Card
              groupColor="group-hover:bg-red-500"
              groupColors="hover:border-red-500 hover:bg-white  sm:w-[210%]  mmd:w-[150%] lg:ml-0 mmd:ml-36 md:w-56 xl:w-60  mr-2  lg:w-[440%] 2xl:w-72  "
            />
            <div />
          </div>
          <div
            className={` ${
              show ? "hidden" : "grid"
            } mt-12 md:grid-cols-3 grid-cols-1 xs:grid-cols-2    lg:grid-cols-4 xl:grid-cols-5 justify-center content-center  2xl:grid-cols-5 gap-y-8   gap-x-8`}
          >
            <Card
              groupColor="group-hover:bg-red-500"
              groupColors="hover:border-red-500  hover:bg-white mr-2  xs:w-72 mmd:w-60 lg:w-60 2xl:w-72"
            />
            <Card
              groupColor="group-hover:bg-purple-700"
              groupColors="hover:border-purple-700 hover:bg-white mr-2  w-50 mmd:w-60 lg:w-60 2xl:w-72"
            />
            <Card
              groupColor="group-hover:bg-bubble-gum"
              groupColors="hover:border-bubble-gum hover:bg-white mr-2  w-50 mmd:w-60 lg:w-60 2xl:w-72"
            />
            <Card
              groupColor="group-hover:bg-green-500"
              groupColors="hover:border-green-500 hover:bg-white mr-2 mmd:w-[150%]   w-50 mmd:w-60 lg:w-60 2xl:w-72"
            />
            <Card
              groupColor="group-hover:bg-red-500"
              groupColors="hover:border-red-500 hover:bg-white w-70 sm:w-[210%]  mmd:w-[150%] lg:ml-0 mmd:ml-36 md:w-56 xl:w-60  mr-2  lg:w-[440%] 2xl:w-72  "
            />
            <div />
          </div>
        </div>

        <div className="flex w-[100%]  xl:flex-row  flex-col space-x-4 xl:space-y-0 space-y-9 justify-between   mt-12 text-purple-900">
          <div className="flex md:flex-row  flex-col h-full xl:w-full w-full   ">
            <div className="flex md:flex-row flex-col xl:flex-col md:space-x-3 md:space-y-0 space-y-10  xl:space-y-10">
              <WideCard
                groupColor="bg-blue-700"
                groupColors="hover:border-none  hover:bg-purple-900"
              />
              <WideCard
                groupColor="bg-red-500"
                groupColors="hover:border-none  hover:bg-purple-900"
              />
            </div>
          </div>
          <div className="flex h-full w-full  ">
            <div className="h-full w-full  mt-4 md:mt-0  ">
              <div className="xs:flex-row flex-col flex w-full mx-auto ml-[-20px] xl:ml-0 rounded-2xl   border border-blackAlpha-880">
                <div className="w-full mt-3 h-[550px] bg-white shadow shadow-blackAlpha-880 2xl:px-4  3xl:px-8">
                  <div className="flex  xs:flex-row flex-col w-full  space-x-1 border-b  border-b-blackAlpha-880 py-11 mb-2">
                    <div className="flex xs:flex-row w-[90%] justify-center md:w-[100%] 2xl:w-[90%]  flex-col  space-x-3 space-y-3   mx-auto ">
                      <div className="flex space-x-3">
                        <div className="">
                          <div className="md:w-20 w-10 h-10 rounded-lg md:h-20 bg-red-500"></div>
                        </div>{" "}
                        <div className="md:w-full ">
                          <p className="text-blackAlpha-400 w-full text-[20px]">
                            Follow us
                          </p>
                          <h4 className="text-blackAlpha-800 md:whitespace-nowrap w-full md:text-[22px] 3xl:text-[26px]">
                            on Twitter @CoinGain
                          </h4>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <div className="md:w-full ">
                          <div className="flex space-x-1 whitespace-nowrap justify-center ">
                            <h4 className="text-[18px] text-tahiti">
                              Earn Coin
                            </h4>
                            <div className="w-5 h-5 rounded-full mt-0.5 bg-blue-700"></div>
                          </div>
                        </div>
                        <div className="">
                          <div
                            className={`w-24 cursor-pointer  md:w-40 h-[35px] md:h-[50px]  rounded-full bg-blue-700`}
                          >
                            <h6 className="text-center text-white text-[12px]  md:text-[19px] pt-2 md:pt-2.5">
                              Complete
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex xs:flex-row flex-col w-full  space-x-1 border-b border-b-blackAlpha-880 py-11 mb-2">
                    <div className="flex  xs:flex-row w-[90%] justify-center md:w-[100%] 2xl:w-[90%] flex-col  space-x-3 space-y-3  mx-auto">
                      <div className="flex space-x-3">
                        <div className="">
                          <div className="md:w-20 w-10 h-10 rounded-lg md:h-20 bg-red-500"></div>
                        </div>{" "}
                        <div className="md:w-full ">
                          <p className="text-blackAlpha-400 w-full text-[20px]">
                            Follow us
                          </p>
                          <h4 className="text-blackAlpha-800 md:whitespace-nowrap w-full md:text-[22px] 3xl:text-[26px]">
                            on Twitter @CoinGain
                          </h4>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <div className="md:w-full ">
                          <div className="flex space-x-1 whitespace-nowrap justify-center ">
                            <h4 className="text-[18px] text-tahiti">
                              Earn Coin
                            </h4>
                            <div className="w-5 h-5 rounded-full mt-0.5 bg-blue-700"></div>
                          </div>
                        </div>
                        <div className="">
                          <div
                            className={`w-24 cursor-pointer md:w-40 h-[35px] md:h-[50px]  rounded-full bg-blue-700`}
                          >
                            <h6 className="text-center text-white text-[12px]  md:text-[19px] pt-2 md:pt-2.5">
                              Complete
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex xs:flex-row flex-col w-full  space-x-1 py-11 mb-2">
                    <div className="flex xs:flex-row w-[90%] md:w-[100%] 2xl:w-[90%] justify-center flex-col  space-x-3 space-y-3   mx-auto ">
                      <div className="flex space-x-3">
                        <div className="">
                          <div className="md:w-20 w-10 h-10 rounded-lg md:h-20 bg-red-500"></div>
                        </div>{" "}
                        <div className="md:w-full ">
                          <p className="text-blackAlpha-400 w-full text-[20px]">
                            Follow us
                          </p>
                          <h4 className="text-blackAlpha-800 md:whitespace-nowrap w-full md:text-[22px] 3xl:text-[26px]">
                            on Twitter @CoinGain
                          </h4>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <div className="md:w-full ">
                          <div className="flex space-x-1 whitespace-nowrap justify-center ">
                            <h4 className="text-[18px] text-tahiti">
                              Earn Coin
                            </h4>
                            <div className="w-5 h-5 rounded-full mt-0.5 bg-blue-700"></div>
                          </div>
                        </div>
                        <div className="">
                          <div
                            className={`w-24 cursor-pointer  md:w-40 h-[35px] md:h-[50px]  rounded-full bg-blue-700`}
                          >
                            <h6 className="text-center text-white text-[12px]  md:text-[19px] pt-2 md:pt-2.5">
                              Complete
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);};

export default IndexPage;
