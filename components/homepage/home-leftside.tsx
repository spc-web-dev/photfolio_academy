import Link from "next/link";
import { Button } from "../ui/button";
import ProfileLogo from "./profile-logo";

const HomeLeftSide = () => {
  return (
    <div className="flex justify-center items-center w-full ">
      <div className="flex flex-col gap-4 justify-center items-center">
        <ProfileLogo src="/images/programming.avif" alt="programming" />
        <h1>PROGRAMMING</h1>
        <p className="text-center dark:text-slate-400 text-sm">
          Click <span className="text-blue-500">Learn More</span> to explore my expertise in programming. You can also
          view my projects and code on my <Link href={''} className="text-blue-500">GitHub</Link>.
        </p>
        <Button variant={"outline"} asChild>
          <Link href={"/docs"}>See More</Link>
        </Button>
      </div>
    </div>
  );
};

export default HomeLeftSide;
