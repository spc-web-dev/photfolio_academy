"use client";
import React, {  useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { formatDate } from "@/lib/format-date";
import { useUser } from "@clerk/nextjs";

type TypeCmt = {
  id: number;
  username?: string;
  comment: string;
  date?: string;
  videoId: string;
};
function CommentFormDialog({
  children,
  videoId,
}: {
  children: React.ReactNode;
  videoId: string;
}) {
  const [comments, setComments] = useState<TypeCmt[]>([]);
  const [text,setText] = useState('')
  const { user } = useUser();

  const handleComment = () => {
    if (text !== "") {
      setComments((prev) => [
        ...prev,
        {
          id: Math.random(),
          comment: text,
          username: user?.fullName as string,
          date: formatDate(new Date(Date.now())),
          videoId,
        },
      ]);
      setText('')
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>Write your comment here!</DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          <Textarea
            placeholder="your comment..."
            defaultValue={text}
            value={text}
            className="text-sm"
            onChange={e=>setText(e.target.value)}
          />
          <Button variant={"secondary"} onClick={handleComment}>
            Comment
          </Button>
        </div>
        <DialogFooter>
          <div className="flex flex-col w-full gap-4">
            <DialogDescription>Commented</DialogDescription>
            <ul className="w-full flex flex-col gap-4 max-h-52 overflow-hidden overflow-y-auto">
              {comments &&
                comments.map((cmt) => (
                  <li className="text-sm flex gap-4 w-full" key={cmt.id}>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="">
                      <span className="space-x-2">
                        <small className=" uppercase">{cmt.username}</small>
                        <small className="font-light text-slate-500">
                          {cmt.date}
                        </small>
                      </span>
                      <p className="dark:text-slate-400  max-w-sm block">{cmt.comment}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CommentFormDialog;
