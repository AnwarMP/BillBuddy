import ChatSideBar from "@/components/ChatSideBar";
import ChatComponent from "@/components/ChatComponent";
import PDFViewer from "@/components/PDFViewer";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    chatId: string;
  };
};

const ChatPage = async ({ params: { chatId } }: Props) => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/sign-in");
  }
  const _chats = await db.select().from(chats).where(eq(chats.userId, userId));
  if (!_chats) {
    return redirect("/");
  }
  if (!_chats.find((chat) => chat.id === parseInt(chatId))) {
    return redirect("/");
  }

  const currentChat = _chats.find((chat) => chat.id === parseInt(chatId));
//   const isPro = await checkSubscription();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* chat sidebar */}
      <div className="flex flex-col w-1/5 h-full border-r-2">
        <ChatSideBar chats={_chats} chatId={parseInt(chatId)} />
      </div>
      {/* pdf viewer */}
      <div className="flex flex-col w-2/5 h-full p-4 overflow-auto">
        <PDFViewer pdf_url={currentChat?.pdfUrl || ""} />
      </div>
      {/* chat component */}
      <div className="flex flex-col w-2/5 h-full border-l-2">
      <ChatComponent chatId={parseInt(chatId)} />
      </div>
    </div>
  );
};

export default ChatPage;
