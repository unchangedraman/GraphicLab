import { UserButton } from "@clerk/nextjs";


export default function Home()
{
  return(
    <div>
      <div>
        this is user authentication screen
      </div>
      <UserButton />
    </div>
  )
}
