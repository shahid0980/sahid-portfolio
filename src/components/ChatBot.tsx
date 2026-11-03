
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
    Bot,
    X,
    Send,
    Minimize2,
    Maximize2,
    MessageCircle,
    Plus,
    User,
    Sparkles,
} from "lucide-react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

interface ChatResponse {
    success: boolean;
    sessionId: string;
    reply: string;
    error?: {
        message?: string;
    };
}

const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000";

const suggestions = [
    "Tell me about yourself",
    "What are your technical skills?",
    "Show me your projects",
    "How can I contact you?",
];

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isMinimized, setIsMinimized] = useState<boolean>(false);
    const [input, setInput] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const [sessionId, setSessionId] = useState<string | null>(() => {
        return localStorage.getItem("portfolio_chat_session");
    });

    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content:
                "Hello! 👋 Welcome to my portfolio. I'm your virtual assistant. Ask me anything about my skills, projects, experience, or background.",
        },
    ]);

    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, loading]);

    useEffect(() => {
        if (isOpen && !isMinimized) {
            inputRef.current?.focus();
        }
    }, [isOpen, isMinimized]);

    const sendMessage = async (text?: string): Promise<void> => {
        const messageText = (text ?? input).trim();
        console.log("Sending message:", messageText);
        if (!messageText || loading) return;

        setInput("");

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: messageText,
            },
        ]);

        setLoading(true);

        try {
            const response = await fetch(`https://sahid-portfolio-server.onrender.com/api/chat/message`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: messageText,
                    ...(sessionId ? { sessionId } : {}),
                }),
            });

            const data: ChatResponse = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(
                    data.error?.message || "Unable to get a response."
                );
            }

            if (data.sessionId) {
                setSessionId(data.sessionId);
                localStorage.setItem(
                    "portfolio_chat_session",
                    data.sessionId
                );
            }

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: data.reply,
                },
            ]);
        } catch (error) {
            const errorMessage =
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again.";

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: errorMessage,
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        void sendMessage();
    };

    const resetChat = (): void => {
        setMessages([
            {
                role: "assistant",
                content:
                    "Hello again! 👋 What would you like to know about my portfolio?",
            },
        ]);

        setSessionId(null);
        localStorage.removeItem("portfolio_chat_session");
        setInput("");
    };

    return (
        <>
            {/* Floating Chat Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    aria-label="Open chat assistant"
                    className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-900/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                >
                    <MessageCircle size={27} />
                    <span className="absolute right-0 top-0 h-4 w-4 rounded-full border-2 border-white bg-green-400" />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div
                    className={`fixed bottom-6 right-6 z-50 flex w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-slate-700/70 bg-[#0b1120] shadow-2xl shadow-black/40 transition-all duration-300 sm:w-[390px] ${isMinimized ? "h-[70px]" : "h-[min(600px,85vh)]"
                        }`}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-blue-700 to-indigo-700 px-4 py-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                                <Bot size={23} className="text-white" />
                            </div>

                            <div>
                                <h3 className="font-semibold text-white">
                                    Sahid Assistant
                                </h3>

                                <div className="flex items-center gap-1.5">
                                    <span className="h-2 w-2 rounded-full bg-green-400" />
                                    <span className="text-xs text-blue-100">
                                        Online · Ready to help
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-white">
                            <button
                                onClick={resetChat}
                                title="New conversation"
                                aria-label="New conversation"
                                className="rounded-lg p-2 transition hover:bg-white/15"
                            >
                                <Plus size={19} />
                            </button>

                            <button
                                onClick={() => setIsMinimized(!isMinimized)}
                                title={isMinimized ? "Expand" : "Minimize"}
                                aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
                                className="rounded-lg p-2 transition hover:bg-white/15"
                            >
                                {isMinimized ? (
                                    <Maximize2 size={18} />
                                ) : (
                                    <Minimize2 size={18} />
                                )}
                            </button>

                            <button
                                onClick={() => setIsOpen(false)}
                                title="Close chat"
                                aria-label="Close chat"
                                className="rounded-lg p-2 transition hover:bg-white/15"
                            >
                                <X size={19} />
                            </button>
                        </div>
                    </div>

                    {!isMinimized && (
                        <>
                            {/* Messages */}
                            <div className="flex-1 space-y-5 overflow-y-auto px-4 py-5">
                                {messages.map((message, index) => (
                                    <div
                                        key={`${index}-${message.role}`}
                                        className={`flex items-end gap-2 ${message.role === "user"
                                            ? "justify-end"
                                            : "justify-start"
                                            }`}
                                    >
                                        {message.role === "assistant" && (
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-blue-400">
                                                <Bot size={17} />
                                            </div>
                                        )}

                                        <div
                                            className={`max-w-[82%] whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user"
                                                ? "rounded-br-sm bg-blue-600 text-white"
                                                : "rounded-bl-sm border border-slate-700 bg-slate-800 text-slate-200"
                                                }`}
                                        >
                                            {message.content}
                                        </div>

                                        {message.role === "user" && (
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600/20 text-indigo-400">
                                                <User size={17} />
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {/* Typing Indicator */}
                                {loading && (
                                    <div className="flex items-end gap-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/20 text-blue-400">
                                            <Bot size={17} />
                                        </div>

                                        <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-slate-700 bg-slate-800 px-4 py-4">
                                            <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400" />
                                            <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400 [animation-delay:150ms]" />
                                            <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400 [animation-delay:300ms]" />
                                        </div>
                                    </div>
                                )}

                                <div ref={messagesEndRef} />
                            </div>

                            {/* Suggestions */}
                            {messages.length === 1 && (
                                <div className="px-4 pb-3">
                                    <div className="mb-2 flex items-center gap-2 text-xs text-slate-400">
                                        <Sparkles size={14} />
                                        Suggested questions
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {suggestions.map((suggestion) => (
                                            <button
                                                key={suggestion}
                                                onClick={() => void sendMessage(suggestion)}
                                                disabled={loading}
                                                className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-2 text-xs text-blue-300 transition hover:border-blue-400 hover:bg-blue-500/20 disabled:opacity-50"
                                            >
                                                {suggestion}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Input */}
                            <form
                                onSubmit={handleSubmit}
                                className="border-t border-white/10 bg-[#0f172a] p-4"
                            >
                                <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(event) => setInput(event.target.value)}
                                        placeholder="Ask me anything..."
                                        disabled={loading}
                                        className="min-w-0 flex-1 bg-transparent py-2 text-sm text-white outline-none placeholder:text-slate-500 disabled:opacity-50"
                                    />

                                    <button
                                        type="submit"
                                        disabled={!input.trim() || loading}
                                        aria-label="Send message"
                                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        <Send size={17} />
                                    </button>
                                </div>

                                <p className="mt-3 text-center text-[10px] text-slate-500">
                                    Powered by AI · Portfolio Virtual Assistant
                                </p>
                            </form>
                        </>
                    )}
                </div>
            )}
        </>
    );
}
