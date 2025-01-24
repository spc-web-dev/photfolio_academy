"use client";
import { useAppSelector } from "@/lib/redux/hooks";
import { Button } from "../ui/button";
import Link from "next/link";
import { ProjectType } from "@/lib/type";

type Props = {
  data: ProjectType[];
};

function DocsProgrammingSidebar({ data }: Props) {
  const { in_view_id } = useAppSelector((state) => state.scroll);

  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-sm">Projects</h4>
      <div className="flex flex-col gap-2">
        {data &&
          data.map((val, index) => {
            return (
              <Button
                className={`${
                  in_view_id === 'id'+val.id
                    ? "text-blue-500 hover:text-blue-500 font-normal"
                    : "font-light"
                } capitalize text-sm font-sans justify-start text-left whitespace-normal`}
                key={index}
                variant={"ghost"}
                asChild
              >
                <Link href={"#id" + val.id} className="">
                  {val.name}
                </Link>
              </Button>
            )
          })}
      </div>
    </div>
  );
}

export default DocsProgrammingSidebar;
