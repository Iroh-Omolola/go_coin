import Link from "next/link";
import { GiftCard } from "../components";
import Layout from "../components/Layout";

const CreateTicket = () => {
  return (
    <Layout title="Shop | Next.js">
      <div className="bg-no-repeat pt-40   w-[100vw] h-[100%]">
        <div className="xl:px-[120px] bg-white   sm:px-[50px] px-[20px]">
          <div className="mt-9">
            <h6>{`< Support System`}</h6>
            <h1 className=" text-[30px] font-semibold lg:text-[50px] text-blue-800 mb-20">
              Create Ticket
            </h1>
          </div>
          <div className="mb-20 space-y-14">
            <div className="w-full h-72  rounded-b-md shadow-lg shadow-whiteShadow">
              <div className="flex justify-between px-4 h-20 pt-8 border-b border-b-blackAlpha-880">
                <p className="cursor-pointer text-talentBlue-200 font-medium text-[16px]">
                  Create
                </p>
                <p className="cursor-pointer text-red-500 text-[16px]">
                  Cancel
                </p>
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateTicket;
