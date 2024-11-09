import {
  SearchIcon,
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
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
  CommandShortcut,
} from "@/components/ui/command";
import { DialogTitle } from "@radix-ui/react-dialog";
import { NetworkingData, ProgrammingData } from "@/lib/data";
import { FcDocument, FcHome } from "react-icons/fc";


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
        <DialogTitle></DialogTitle>
        <div>
          <Command className="">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="General">
              <CommandItem>
                    <FcHome />
                    <span className=" capitalize">Homepage</span>
                  </CommandItem>
                    <CommandItem>
                    <FcDocument />
                    <span className=" capitalize">Docs</span>
                  </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Programing">
                {ProgrammingData.map(pro=>(
                    <CommandItem key={pro.id}>
                    {pro.icon}
                    <span className=" capitalize">{pro.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Networking">
                {NetworkingData.map(net=>(
                <CommandItem key={net.id}>
                  {net.icon}
                  <span className="capitalize">{net.title}</span>
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
