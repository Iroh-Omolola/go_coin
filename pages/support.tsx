import Link from "next/link";
import { GiftCard } from "../components";
import Layout from "../components/Layout";

const SupportPage = () => {
  return (
    <Layout title="Shop | Next.js">
      <div className="bg-no-repeat pt-40   w-[100vw] h-[100%]">
        <div className="xl:px-[120px] bg-white   sm:px-[50px] px-[20px]">
          <div className="mt-9">
            <h6>Support</h6>
            <h1 className=" text-[30px] font-semibold lg:text-[50px] text-blue-800 mb-16">
              Support System
            </h1>
          </div>
          <div className="mb-20 space-y-14">
            <div className="w-full h-72  rounded-b-md shadow-lg shadow-whiteShadow">
              <div className="flex justify-between px-4 h-20 pt-8 border-b border-b-blackAlpha-880">
                <p className="cursor-pointer text-talentBlue-200 font-medium text-[16px]">
                  Your Ticket Notification
                </p>
                <p className="cursor-pointer text-red-500 text-[16px]">
                  Clear All Notification
                </p>
              </div>
              <div>
                <p className="text-center text-[18px] text-talentBlue-200 pt-12">
                  Opps sorry, There are no notification to show
                </p>
              </div>
            </div>
            <div className="w-full h-56  rounded-b-md shadow-lg shadow-whiteShadow">
              <div className="flex justify-between px-8 h-20 pt-4 border-b border-b-blackAlpha-880">
                <div className="w-auto h-[50px] bg-transparent rounded-full px-5 pt-3 ">
                  <p className="cursor-pointer text-blue-800 font-medium mb-3 text-[16px]">
                    Your Ticket
                  </p>
                </div>
                <div>
                  <div className="w-auto h-[50px] bg-blackAlpha-880 rounded-full px-5 pt-3 ">
                    <p className="cursor-pointer text-blue-800 font-medium mb-3 text-[16px]">
                      Create Ticket
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-center text-[18px] text-talentBlue-200 pt-12">
                  You have no ticket yet! Create one by hitting the{" "}
                  <span className="text-blue-800">
                    {" "}
                    <Link href="/create-ticket">Create Button</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SupportPage;
