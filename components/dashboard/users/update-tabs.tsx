'use client'
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TableUserType } from "@/drizzle/table-type";
import { handleActionFormUpdateUser } from "@/lib/action-users";
import { ActionResponseUser } from "@/lib/type";
import { CheckCircle2 } from "lucide-react";
import React, { useActionState, useEffect, useState } from "react";
import UserCombobox from "./user-combobox";
import UserSelectField from "./user-select-field";


function UpdateTabs({ user }: { user: TableUserType }) {
  const initialStateUpdateUser: ActionResponseUser = {
    success: false,
    data: user as TableUserType,
    message: "",
  };
  const [state, action, isPending] = useActionState(
    handleActionFormUpdateUser,
    initialStateUpdateUser
  );
  const [role,setRole] = useState<'viewer'|'admin'|'student'>('viewer')

  useEffect(()=>{
    if(user) setRole(user.role)
  },[user])


  return (
    <div className="">
     <form action={action} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
          <Label htmlFor="">ID</Label>
          <Input
            defaultValue={state.data ? state.data.id : user ? user.id : ''}
            type="text"
            placeholder="user id"
            name="user_id"
            className={`${state?.errors?.id && "border border-red-500"}`}
          />
          {state?.errors?.id && (
            <p id="id-error" className="text-sm text-red-500">
              {state.errors.id[0]}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="">Username</Label>
          <Input
            defaultValue={state.data ? state.data.username : user ? user.username : ''}
            type="text"
            placeholder="username"
            name="username"
            className={`${state?.errors?.username && "border border-red-500"}`}
          />
          {state?.errors?.username && (
            <p id="username-error" className="text-sm text-red-500">
              {state.errors.username[0]}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="">Email</Label>
          <Input
            defaultValue={state.data ? state.data.email : user ? user.email : ''}
            type="email"
            placeholder="email"
            name="email"
            className={`${state?.errors?.email && "border border-red-500"}`}
          />
          {state?.errors?.email && (
            <p id="email-error" className="text-sm text-red-500">
              {state.errors.email[0]}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="">Password</Label>
          <Input
            defaultValue={state.data ? state.data.password : user ? user.password : ''}
            type="password"
            placeholder="password"
            name="password"
            className={`${state?.errors?.password && "border border-red-500"}`}
          />
          {state?.errors?.password && (
            <p id="password-error" className="text-sm text-red-500">
              {state.errors.password[0]}
            </p>
          )}
        </div>
        <UserSelectField role={state.data ? state.data.role : role}/>
        {state?.message && (
          <Alert variant={state.success ? "default" : "destructive"}>
            {state.success && <CheckCircle2 className="h-4 w-4" />}
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}
        <Button
          variant={"secondary"}
          type="submit"
          className=""
          disabled={isPending ? true : false}
        >
          {isPending ? "loading..." : "Save change"}
        </Button>
      </form>
    </div>
  );
}

export default UpdateTabs;
