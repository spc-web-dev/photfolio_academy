

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import UserViewsTabsContent from "./user-views-tabs-content";
import UserUpdateTabsContent from "./user-update-tabs-content";
import UserAddTabsContent from "./user-add-tabs-content";
import { TableUserType } from "@/drizzle/table-type";




function UserTabs({ tabs, user_id , users }: { tabs: string; user_id: string; users: TableUserType[] }) {

  return (
    <Tabs defaultValue={'views'} value={tabs ? tabs : 'views'} className="w-full ">
      <TabsList>
        <TabsTrigger value="views" asChild>
          <Link href={"/dashboard/users?tabs=views"}>Views</Link>
        </TabsTrigger>
        <TabsTrigger value="update" asChild>
          <Link href={`/dashboard/users?tabs=update&user_id=${user_id || ''}`}>Update</Link>
        </TabsTrigger>
        <TabsTrigger value="add_new" asChild>
          <Link href={"/dashboard/users?tabs=add_new"}>Add new</Link>
        </TabsTrigger>
      </TabsList>

      <UserViewsTabsContent data={users}/>
      <UserUpdateTabsContent userId={user_id} />
      <UserAddTabsContent />
    </Tabs>
  );
}

export default UserTabs;
