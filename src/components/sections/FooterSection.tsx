"use client";
import GlassCard from "@/components/ui/GlassCard";
import { useState } from "react";
import { Send } from "lucide-react";

export default function FooterSection() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setResponse(`> Processing command: ${input}... [REQUEST SENT]`);
        setInput("");
        setTimeout(() => setResponse(null), 3000);
    };

    return (
        <section className="py-20">
            {/* Live Ticker */}
            <div className="w-full overflow-hidden bg-cyan/10 border-y border-cyan/20 py-3 mb-12">
                <div className="animate-marquee whitespace-nowrap text-cyan font-mono text-sm">
                    ALUMNI SUCCESS: John D. @ Google [SDE-1]  ///  Sarah K. @ Microsoft [Data Analyst]  ///  Mike R. @ Tesla [AI Engineer]  ///  ALUMNI SUCCESS: John D. @ Google [SDE-1]
                </div>
            </div>

            <GlassCard className="p-10 flex flex-col md:flex-row gap-10 min-h-[400px]">
                {/* Map Placeholder */}
                <div className="flex-1 bg-black/40 rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center group">
                    <div className="absolute inset-0 bg-[url('/grid.png')] opacity-20" />
                    <div className="w-4 h-4 rounded-full bg-cyan shadow-[0_0_20px_#00F2FF] animate-pulse" />
                    <span className="absolute mt-8 text-xs text-cyan tracking-widest">CYBERPARK HQ</span>
                </div>

                {/* Terminal Contact */}
                <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-6">Initialize Connection</h3>
                    <div className="bg-black/80 rounded-xl p-6 border border-white/10 font-mono text-sm min-h-[200px] flex flex-col">
                        <div className="text-white/50 mb-4">
                            &gt; System ready.<br />
                            &gt; Type &apos;/partner&apos; or &apos;/contact&apos; to begin handshake.
                        </div>
                        {response && <div className="text-cyan mb-4">{response}</div>}
                        <form onSubmit={handleSubmit} className="mt-auto flex items-center gap-2">
                            <span className="text-cyan">{'>'}</span>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="bg-transparent border-none outline-none text-white flex-1 focus:ring-0"
                                placeholder="Enter command..."
                            />
                            <button type="submit" className="text-cyan hover:text-white"><Send size={16} /></button>
                        </form>
                    </div>
                </div>
            </GlassCard>
        </section>
    );
}
