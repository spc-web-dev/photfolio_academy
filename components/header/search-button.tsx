import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { DialogTitle } from "@radix-ui/react-dialog";
import { NetworkingData, ProgrammingData } from "@/lib/data";
import { FcDocument, FcHome } from "react-icons/fc";
import Link from "next/link";

function SearchButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          asChild
          variant={"outline"}
          size={"icon"}
          className="cursor-pointer"
        >
          <span>
            <SearchIcon />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className=" md:max-w-[450px] max-w-[90%] rounded-md">
        <DialogTitle className="hidden">search content</DialogTitle>
        <div>
          <Command className="">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="General">
                <CommandItem asChild className=" cursor-pointer">
                  <Link href={'/'}>
                    <FcHome />
                    <span className=" capitalize">Homepage</span>
                  </Link>
                </CommandItem>
                <CommandItem asChild className=" cursor-pointer">
                  <Link href={'/docs'}>
                    <FcDocument />
                    <span className=" capitalize">Docs</span>
                  </Link>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Programing">
                {ProgrammingData.map((pro) => (
                  <CommandItem key={pro.id} asChild className=" cursor-pointer">
                    <Link href={pro.link}>
                      {pro.icon}
                      <span className=" capitalize">{pro.title}</span>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Networking">
                {NetworkingData.map((net) => (
                  <CommandItem key={net.id} asChild className=" cursor-pointer">
                    <Link href={net.link}>
                      {net.icon}
                      <span className="capitalize">{net.title}</span>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SearchButton;
