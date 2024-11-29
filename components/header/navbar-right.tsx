import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa";
import ThemeButton from "./theme-button";
import SearchButton from "./search-button";
import UserButtonForm from "./user-button";

function NavbarRight() {
  return (
    <div>
      <div className="flex items-center gap-1 flex-nowrap">
        <SearchButton />
        <UserButtonForm />
        <Button
          asChild
          variant={"outline"}
          size={"icon"}
          className="cursor-pointer"
        >
          <Link href={"https://github.com/ressann"} target="_blank">
            <GitHubLogoIcon />
          </Link>
        </Button>
        <Button
          asChild
          variant={"outline"}
          size={"icon"}
          className="cursor-pointer"
        >
          <Link href={"https://t.me/ressann_la"} target="_blank">
            <FaTelegram />
          </Link>
        </Button>
        
        <ThemeButton />
      </div>
    </div>
  );
}

export default NavbarRight;
