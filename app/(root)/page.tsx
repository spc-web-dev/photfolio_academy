import HomeLeftSide from "@/components/homepage/home-leftside";
import HomeRightSide from "@/components/homepage/home-rightside";
import WhoAmI from "@/components/homepage/who-am-i";




export default async function Home() {
  return (
    <div className="w-full h-full">
      <section className="h-[calc(100vh_-_100px)] max-h-[calc(100vh_-_100px)]">
        <WhoAmI />
      </section>
      <section className="w-full h-screen grid md:grid-cols-2 gap-2">
        <HomeLeftSide />
        <HomeRightSide />
      </section>
    </div>
  );
}
