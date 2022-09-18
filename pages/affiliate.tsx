import Layout from "../components/Layout";
import { IoCopyOutline } from 'react-icons/io5';
import { HiOutlinePencil } from 'react-icons/hi';
const ShopPage = () => {
  return (
    <Layout title="Shop | Next.js">
      <div className="bg-no-repeat mb-10 xl:mb-60 pt-40   w-[100vw] h-[100%]">
        <div className="xl:px-[120px] bg-white   sm:px-[50px] px-[20px]">
          <div className="mt-9">
            <h6>Affiliates</h6>
            <h1 className=" text-[30px] font-semibold lg:text-[50px] text-blue-800 mb-16">
              Earn free coins
            </h1>
          </div>
        </div>
        <div className="flex w-full space-x-9 lg:px-[150px] px-[50px]">
          <div className="border  border-blackAlpha-880 rounded-2xl w-[300px] h-[300px]">
            <div className="px-7 py-7">
              <h1 className="text-[25px] text-left mb-9 text-blackAlpha-200">
                Your Credit
              </h1>
              <span className="flex justify-between border-b border-b-blackAlpha-880 mt-5 pb-3">
                <h3>Invited</h3>
                <h3>12</h3>
              </span>
              <span className="flex justify-between mt-3">
                <h3>Earnings</h3>
                <span className="flex space-x-1">
                  <h3>111</h3>
                  <div className="w-4 mt-1 h-4 rounded-full bg-red-500"></div>
                </span>
              </span>
              <div className="flex justify-center cursor-pointer">
                <div
                  className={`w-80 h-[50px] mt-7 rounded-full  bg-purple-900`}
                >
                  <h6 className="text-center text-white text-[16px] pt-3">
                    CLAIM REWARDS
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="rounded-2xl h-auto w-full border shadow-sm shadow-whiteShadow mb-7 ">
              <div className="px-9  pt-7 min-h-[400px] ">
                <h1 className="text-[24px] mb-7">Refferal link</h1>
                <p className="mb-7 text-[18px] border w-full xl:w-[70%] 2xl:w-[50%]">
                  Your earn 5% of the Coins your referrals earn through an offer
                  ! Give them this link to sign up and you’re good to go
                </p>
                <p className="text-[18px]">Your Referral Link</p>
                <div
                  className={`xl:w-[60%] w-full h-[55px] mt-7 rounded-full  bg-purple-900`}
                >
                  <div className="flex justify-between  py-3 mb-5 px-6">
                    <h6 className="text-center text-white text-[20px] ">
                      Your Refferral link
                    </h6>
                    <div className="flex space-x-3">
                      <IoCopyOutline className="text-[28px] cursor-pointer text-white mt-0.5" />
                      <HiOutlinePencil className="text-[28px] cursor-pointer text-white mt-0.5" />
                    </div>
                  </div>
                  <div className="flex space-x-5 ml-2 ">
                    <div className="w-[80px] h-[80px] rounded-full bg-primary"></div>
                    <div className="w-[80px] h-[80px] rounded-full bg-primary"></div>
                    <div className="w-[80px] h-[80px] rounded-full bg-primary"></div>
                    <div className="w-[80px] h-[80px] rounded-full bg-primary"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl h-[400px] w-full  shadow-sm shadow-whiteShadow mb-7 "></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopPage;
