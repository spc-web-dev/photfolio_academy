"use client";
import { TabsContent } from "@/components/ui/tabs";
import UserCombobox from "./user-combobox";
import UpdateTabs from "./update-tabs";
import { useEffect, useState } from "react";
import { TableUserType } from "@/drizzle/table-type";
import { FetchUserById } from "@/lib/action/action-users";


function UserUpdateTabsContent({ userId }: { userId: string }) {
  const [user, setUser] = useState<TableUserType>();

  useEffect(() => {
    async function handle() {
      const data = await FetchUserById(userId);

      if(data.success) setUser(data.data as TableUserType);
    }
    handle();
  }, [userId]);

  return (
    <TabsContent value="update">
      <div className="flex flex-col gap-4">
        <UserCombobox />
        <UpdateTabs user={user as TableUserType} />
      </div>
    </TabsContent>
  );
}

export default UserUpdateTabsContent;
