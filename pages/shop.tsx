import { GiftCard } from "../components";
import Layout from "../components/Layout";

const ShopPage = () => {

  return (
    <Layout title="Shop | Next.js">
      <div className="bg-no-repeat mb-10 xl:mb-60 pt-40   w-[100vw] h-[100%]">
        <div className="xl:px-[120px] bg-white   sm:px-[50px] px-[20px]">
          <div className="mt-9">
            <h6>Shop</h6>
            <h1 className=" text-[30px] font-semibold lg:text-[50px] text-blue-800 mb-16">
              Shop Gift Card
            </h1>
          </div>
          <div className="grid xl:grid-cols-4 gap-4 grid-cols-1 ">
            <GiftCard
              companyName="PayPal"
              companyText=" PayPal allows you to easily send or receive payments, making online
          purchases safer and easier than ever"
              primary="bg-red-500"
              groupColor="group-hover:bg-red-500 "
              groupColors="hover:border-purple-50  hover:bg-purple-50   xs:w-[350px] xs:w-full  2xl:w-[350px]"
            />
            <GiftCard
              companyName="Crypto Currencies"
              companyText="Crypto is the world’s largest online retailer. Crypto Gift Cards are redeemable towards millions of items"
              primary="bg-purple"
              groupColor="group-hover:bg-purple"
              groupColors="hover:border-purple-50 hover:bg-purple-50   xs:w-[350px] xs:w-full  2xl:w-[350px]"
            />
            <GiftCard
              companyName="Amazon Giftcards"
              companyText="Amazon is the world’s largest online retailer. Amazon Gift Cards are redeemable towards millions of items"
              primary="bg-red-500"
              groupColor="group-hover:bg-red-500"
              groupColors="hover:border-purple-50 hover:bg-purple-50   xs:w-[350px] xs:w-full 2xl:w-[350px]"
            />
            <GiftCard
              companyName="Virtual items"
              companyText="We partnered up with CSGOShop & Dota Skin,o give you the option to get digital items at the cheapest price."
              primary="bg-purple"
              groupColor="group-hover:bg-purple"
              groupColors="hover:border-purple-50 hover:bg-purple-50  xs:w-[350px] xs:w-full 2xl:w-[350px]"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopPage;
