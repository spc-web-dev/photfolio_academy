"use client";


import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GetUsers } from "@/lib/action-users";
import { TableUserType } from "@/drizzle/table-type";
import Link from "next/link";


export default function UserCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [users, setUsers] = React.useState<TableUserType[] | null>(null);
  React.useEffect(() => {
    async function handle() {
      const res = await GetUsers();
      setUsers(res.data as TableUserType[]);
    }
    handle();
  }, [value]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min-w-[200px] w-fit justify-between"
        >
          {value
            ? users && users.find((us) => us.id === value)?.username
            : "Select username..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-[200px] p-0">
        <Command>
          <CommandInput name="role" placeholder="Search username..." className="h-9" />
          <CommandList>
            <CommandEmpty>No username found.</CommandEmpty>
            <CommandGroup>
              {users &&
                users.map((us) => (
                  <CommandItem
                    key={us.username}
                    value={us.id}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                    asChild
                  >
                    <Link
                      href={`/dashboard/users?tabs=update&user_id=${us.id}`}
                      className="cursor-pointer"
                    >
                      {us.username}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === us.id ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </Link>
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
