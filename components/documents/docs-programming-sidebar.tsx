"use client";
import { useAppSelector } from "@/lib/redux/hooks";
import { Button } from "../ui/button";
import Link from "next/link";

function DocsProgrammingSidebar() {
  const { in_view_id } = useAppSelector((state) => state.scroll);
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-sm">Projects</h4>
      <div className="flex flex-col gap-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <Button
            className={`${
              in_view_id === "project" + index
                ? "text-blue-500 hover:text-blue-500 font-normal"
                : "font-light"
            } capitalize text-sm font-sans justify-start text-left whitespace-normal`}
            id={"a" + index}
            key={index}
            variant={"ghost"}
            asChild
          >
            <Link href={"#project" + index}>Photfolio</Link>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default DocsProgrammingSidebar;
