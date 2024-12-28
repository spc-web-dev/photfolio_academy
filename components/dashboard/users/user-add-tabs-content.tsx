"use client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { handleActionFormUser } from "@/lib/action-users";
import { ActionResponseUser } from "@/lib/type";
import { CheckCircle2 } from "lucide-react";
import { useActionState } from "react";

export const initialStateUser: ActionResponseUser = {
    success: false,
    data: {
      username: '',
      email: '',
      password: '',
      role: 'viewer',
    },
    message: '', 
  };

function UserAddTabsContent() {

  const [state, action, isPending] = useActionState(
    handleActionFormUser,
    initialStateUser
  );

  return (
    <TabsContent value="add_new">
      <div className="">
        <form action={action} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="">Username</Label>
            <Input defaultValue={state.data.username} type="text" placeholder="username" name="username" className={`${state?.errors?.username && 'border border-red-500'}`}/>
            {state?.errors?.username && (
                <p id="username-error" className="text-sm text-red-500">
                  {state.errors.username[0]}
                </p>
              )}
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="">Email</Label>
            <Input defaultValue={state.data.email} type="email" placeholder="email" name="email" className={`${state?.errors?.email && 'border border-red-500'}`} />
            {state?.errors?.email && (
                <p id="email-error" className="text-sm text-red-500">
                  {state.errors.email[0]}
                </p>
              )}
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="">Password</Label>
            <Input defaultValue={state.data.password} type="password" placeholder="password" name="password" className={`${state?.errors?.password && 'border border-red-500'}`} />
            {state?.errors?.password && (
                <p id="password-error" className="text-sm text-red-500">
                  {state.errors.password[0]}
                </p>
              )}
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="">Role</Label>
            <select name="role" id="" defaultValue={state.data.role} className={`${state?.errors?.role && ' border-red-500'} px-2 py-2 rounded-md border border-input max-w-sm outline-1 `} >
              <option value="viewer">Viewer</option>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
            </select>
          </div>
          {state?.message && (
            <Alert variant={state.success ? "default" : "destructive"}>
              {state.success && <CheckCircle2 className="h-4 w-4" />}
              <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          )}
          <Button variant={'secondary'} type="submit" className="" disabled={isPending ? true : false}>{isPending ? "loading..." : "Add user"}</Button>
        </form>
      </div>
    </TabsContent>
  );
}

export default UserAddTabsContent;
