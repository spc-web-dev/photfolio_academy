import UserTabs from "@/components/dashboard/users/user-tabs"
import { getUsers } from "@/drizzle/func/users";
import { TableUserType } from "@/drizzle/table-type";


async function page({ searchParams }: { searchParams: Promise<{ tabs: string; user_id: string; }> }) {
  
  const users = await getUsers();
  const data= users.data as TableUserType[]
  return (
    <>
      <UserTabs tabs={(await searchParams).tabs} user_id={(await searchParams).user_id} users={data}/>
    </>
  )
}

export default page