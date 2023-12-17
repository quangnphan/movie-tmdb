import TopRated from "@/components/home/TopRated";
import Trending from "@/components/home/Trending";

const Page = () => {
  return (
    <div className="container px-0 py-8">
      <Trending />
      <TopRated />
    </div>
  );
};

export default Page;
