import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import ConcernsComponent from "@/components/ConcernsComponent";

type Props = {
  params: {
    chatId: string;
  };
};

const ConcernsPage = async ({ params: { chatId } }: Props) => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/sign-in");
  }

  const _chats = await db.select().from(chats).where(eq(chats.userId, userId));
  if (!_chats.find((chat) => chat.id === parseInt(chatId))) {
    return redirect("/");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ConcernsComponent chatId={parseInt(chatId)} />
    </div>
  );
};

export default ConcernsPage;