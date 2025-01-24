import Link from "next/link";
import { Button } from "../ui/button";
import ProfileLogo from "./profile-logo";

const HomeRightSide = () => {
  return (
    <div className="flex justify-center items-center w-full ">
      <div className="flex flex-col gap-4 justify-center items-center">
        <ProfileLogo src="/images/networking.png" alt="networking" />
        <h1>NETWORKING</h1>
        <p className="text-center dark:text-slate-400 text-sm">
          Click <span className="text-blue-500">See More</span> to explore more details about my networking skills.
        </p>
        <Button variant={"outline"} asChild>
          <Link href={"/docs"}>See More</Link>
        </Button>
      </div>
    </div>
  );
};

export default HomeRightSide;
