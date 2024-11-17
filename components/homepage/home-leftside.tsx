import { Button } from "../ui/button";
import ProfileLogo from "./profile-logo";

const HomeLeftSide = () => {
  return (
    <div className="flex justify-center items-center w-full ">
      <div className="flex flex-col gap-2 justify-center items-center">
        <ProfileLogo src="/images/programming.avif" alt="programming" />
        <h1>PROGRAMMING</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          laboriosam dicta quidem explicabo accusamus veniam repudiandae animi
          sit error voluptas!
        </p>
        <Button variant={"outline"}>Learn More</Button>
      </div>
    </div>
  );
};

export default HomeLeftSide;
