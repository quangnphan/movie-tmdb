import TopRated from "@/components/home/TopRated";
import Trending from "@/components/home/Trending";
import Upcoming from "@/components/home/Upcoming";

const Page = () => {
  return (
    <div className="container px-0 py-8">
      <Trending />
      <TopRated />
      <Upcoming />
    </div>
  );
};

export default Page;
