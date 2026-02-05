"use client";
import Script from 'next/script';
import { useEffect } from 'react';

export default function ChatbaseBot() {
    const chatbotId = process.env.NEXT_PUBLIC_CHATBASE_ID;

    if (!chatbotId || chatbotId.includes('YOUR_CHATBASE_ID_HERE')) {
        return null; // Don't verify or render anything if ID is missing
    }

    return (
        <Script
            src="https://www.chatbase.co/embed.min.js"
            id={chatbotId}
            defer
            strategy="lazyOnload"
        />
    );
}
