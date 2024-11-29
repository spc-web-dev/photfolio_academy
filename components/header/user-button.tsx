
import { User } from "lucide-react"
import { Button } from "../ui/button"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"



function UserButtonForm() {
  return (
    <>
    <SignedIn>
      <UserButton />
    </SignedIn>
    <SignedOut>
      <SignInButton>
        <Button size={'icon'} variant={'outline'} asChild>
            <span className="cursor-pointer">
            <User />
            </span>
        </Button>
      </SignInButton>
    </SignedOut>
    </>
  )
}

export default UserButtonForm