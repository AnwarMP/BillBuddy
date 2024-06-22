import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { LogIn } from "lucide-react";
import FileUpload from "@/components/FileUpload";


export default async function Home() {
  const {userId} = await auth();
  const isAuth = !!userId;
  
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-blue-100 to-yellow-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">Healthcare, demystified.</h1>
            {/* <UserButton afterSignOutUrl="/" /> */}
            <UserButton afterSignOutUrl="/" />
          </div>

          <div className="flex mt-2">
            {isAuth &&
              <Button>
                    Go to Chats 
                  </Button>
              } 

            {/* {isAuth && firstChat && (
              <>
                <Link href={`/chat/${firstChat.id}`}>
                  <Button>
                    Go to Chats <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <div className="ml-3">
                  <SubscriptionButton isPro={isPro} />
                </div>
              </>
            )} */}
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