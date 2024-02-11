import TopRated from "@/components/home/TopRated";
import Trending from "@/components/home/Trending";
import Upcoming from "@/components/home/Upcoming";

const Page = () => {
  return (
    <div className="home-page">
      <Trending />
      <TopRated />
      <Upcoming />
    </div>
  );
};

export default Page;
