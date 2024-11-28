'use client'
import React, { useRef, useState } from "react";
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

type TypeCmt = {
    id: number;
    username?: string;
    comment: string;
    date?: string;
}
function CommentFormDialog({ children }: { children: React.ReactNode }) {
    const [comments,setComments] = useState<TypeCmt[]>([])
    const cmtRef = useRef<HTMLTextAreaElement | null>(null)
    const handleComment = ()=>{
        if(cmtRef.current?.value !== ''){
            setComments(prev=>([...prev,{
                id: Math.random(),
                comment: cmtRef.current?.value as string,
                username:'commenter',
                date: formatDate(new Date(Date.now())),
            }]))
        }
    }
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>Write your comment here!</DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          <Textarea placeholder="your comment..." defaultValue={""} className="text-sm" ref={cmtRef}/>
          <Button variant={'secondary'} onClick={handleComment}>Comment</Button>
        </div>
        <DialogFooter>
          <div className="flex flex-col w-full gap-4">
            <DialogDescription>Commented</DialogDescription>
            <ul className="w-full flex flex-col gap-4 max-h-52 overflow-hidden overflow-y-auto">
              {comments && comments.map((cmt) => (
                <li className="text-sm flex items-center gap-4" key={cmt.id}>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span>
                    <span className="space-x-2">
                    <small className=" uppercase">{cmt.username}</small>
                    <small className="font-light text-slate-500">{cmt.date}</small>
                    </span>
                    <p>{cmt.comment}</p>
                  </span>
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
