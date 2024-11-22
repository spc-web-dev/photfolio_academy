import HomeAbout from "./home-about";
import MyAvatar from "./my-avatar";

export default function WhoAmI() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row">
      <div className="flex-1 grid place-items-center">
        <MyAvatar />
      </div>
      <div className="flex-1 grid place-items-center">
        <HomeAbout />
      </div>
    </div>
  );
}
