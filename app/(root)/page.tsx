import HomeLeftSide from "@/components/homepage/home-leftside";
import HomeRightSide from "@/components/homepage/home-rightside";


export default function Home() {
  return (
    <div className="grid md:grid-cols-2 h-[calc(100vh_-_100px)] max-h-[calc(100vh_-_100px)] gap-2">
      <HomeLeftSide />
      <HomeRightSide />
    </div>
  );
}
