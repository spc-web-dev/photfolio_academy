import { SignUp } from "@clerk/nextjs";

export default async function Page(){
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <SignUp />
        </div>
    )
}