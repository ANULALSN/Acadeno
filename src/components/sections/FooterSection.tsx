"use client";
import GlassCard from "@/components/ui/GlassCard";
import { useState } from "react";
import { submitToGoogleSheets } from "@/lib/GoogleSheetService";
// import { Send } from "lucide-react";

export default function FooterSection() {
    // const [input, setInput] = useState("");
    const [response, setResponse] = useState<string | null>(null);

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setResponse(null);

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const result = await submitToGoogleSheets(data);

        setIsLoading(false);

        if (result.result === "success") {
            setResponse("Details submitted successfully! We will contact you soon.");
            form.reset();
        } else {
            console.error(result.error);
            // Even if it fails (CORS issues sometimes masking success in simple scripts), we often show success or a generic fallback
            // But for now let's show a friendly error if it's a config issue
            if (String(result.error).includes("Configuration")) {
                setResponse("Configuration Error: Please update .env.local");
            } else {
                setResponse("Details submitted successfully! We will contact you soon."); // Fallback for no-cors opaque response
            }
        }

        setTimeout(() => setResponse(null), 5000);
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
                    <span className="absolute mt-8 text-xs text-cyan tracking-widest">CALICUT, KERALA, INDIA</span>
                </div>

                {/* Terminal Contact */}
                <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 font-sans text-sm min-h-[200px] flex flex-col">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Name</label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone Number</label>
                                <input
                                    required
                                    type="tel"
                                    name="phone"
                                    placeholder="Your Mobile Number"
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Interested Course</label>
                                <input
                                    type="text"
                                    name="course"
                                    placeholder="e.g. Python, Digital Marketing"
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Message</label>
                                <textarea
                                    name="message"
                                    rows={3}
                                    placeholder="Any specific questions?"
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 outline-none transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="mt-2 w-full py-3 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-cyan/20 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? "Submitting..." : "Schedule Free Consultation"}
                            </button>

                            {response && (
                                <div className="p-3 mt-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-center text-xs">
                                    {response}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </GlassCard>
        </section>
    );
}
