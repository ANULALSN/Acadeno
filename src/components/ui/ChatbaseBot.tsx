"use client";
import Script from 'next/script';

export default function ChatbaseBot() {
    const chatbotId = process.env.NEXT_PUBLIC_CHATBASE_ID;

    if (!chatbotId) return null;

    return (
        <Script
            id="chatbase-loader"
            src="https://www.chatbase.co/embed.min.js"
            strategy="afterInteractive"
            defer
            // @ts-ignore - Custom attributes for Chatbase
            chatbotId={chatbotId}
            domain="www.chatbase.co"
        />
    );
}
