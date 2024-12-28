import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TableUserType } from "@/drizzle/table-type";
import { Row } from "@tanstack/react-table";
import Image from "next/image";
import React from "react";

function UserSheetViewer({
  children,
  row,
}: {
  children: React.ReactNode;
  row: Row<TableUserType>;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex flex-col w-full justify-center items-center gap-2">
          <div className=" relative w-[200px] h-[200px] overflow-hidden rounded-full transition-all hover:rounded-lg dark:hover:rounded-lg duration-700 ease-in-out">
            <Image
              src={"/images/avatar.jpg"}
              width={200}
              height={200}
              alt="user"
              className=" object-cover"
            />
          </div>
          <SheetTitle className="w-full">{row.getValue("username")}</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4">
          <SheetDescription>Email: {row.getValue("email")}</SheetDescription>
          <SheetDescription>
            Password: {row.getValue("password")}
          </SheetDescription>
          <SheetDescription>Role: {row.getValue("role")}</SheetDescription>
          <SheetDescription>
            Created At:{" "}
            {new Date(row.getValue("createdAt")).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </SheetDescription>
          <SheetDescription>
            Updated At:{" "}
            {new Date(row.getValue("updatedAt")).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </SheetDescription>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant={'outline'}>Back</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default UserSheetViewer;
