import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LogIn } from "lucide-react";
import FileUpload from "@/components/FileUpload";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { eq } from "drizzle-orm";


export default async function Home() {
  const {userId} = await auth();
  const isAuth = !!userId;
  let firstChat;
  if (userId) {
    firstChat = await db.select().from(chats).where(eq(chats.userId, userId));
    if (firstChat) {
      firstChat = firstChat[0];
    }
  }
  
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-blue-100 to-yellow-100">
      <div className="flex justify-center items-center w-full h-16 bg-black">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4 text-white">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="hover:text-gray-400 p-2">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className="hover:text-gray-400 p-2">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact" className="hover:text-gray-400 p-2">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuIndicator />
          <NavigationMenuViewport />
        </NavigationMenu>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
        <div className="flex mt-0.5 mb-10" >
           <Image src={"/iconthin.svg"} alt="BillBuddy Logo" width={500} height={500} />
        </div>
          <div className="flex items-center">
            <h2 className="mr-3 text-5xl font-semibold">Healthcare, demystified.</h2>
            <UserButton afterSignOutUrl="/" />
          </div>

          <div className="flex mt-8">
            {/* {isAuth &&
              <Button>
                    Go to Chats 
                  </Button>
              }  */}

            {isAuth && firstChat && (
              <>
                <Link href={`/chat/${firstChat.id}`}>
                  <Button>
                    Go to Chats <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <div className="ml-3">
                </div>
              </>
            )}
          </div>

          <p className="max-w-xl mt-1 text-lg text-slate-600">
            Quickly gain insights and answer questions about your healthcare plan with the power of AI
          </p>

          <div className="w-full mt-4">
            {isAuth ? (
              <FileUpload />
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login to get Started!
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
            {/* {isAuth ? (<h1> File Upload</h1>) :
              (
                <Link href='/sign-in'>
              <Button> Login to get Started! 
              <LogIn className="w-4 h-4 ml-2" />
              </Button>
              </Link>
            )
            } */}
          </div>
        </div>
      </div>
    </div>
  );

}