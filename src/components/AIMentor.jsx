import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Sparkles, Calendar, MapPin, Clock, ArrowRight, Crown, Users, Trophy, RefreshCw, CheckCircle } from 'lucide-react';

const AIMentor = ({ isOpen, onClose, streak, track, onOpenGold }) => {
    const [messages, setMessages] = useState([]);
    const [currentOptions, setCurrentOptions] = useState([]);
    const [quizIndex, setQuizIndex] = useState(0);
    const [isRegistered, setIsRegistered] = useState(false);
    const messagesEndRef = useRef(null);

    const QUIZ_QUESTIONS = [
        { q: "What is the primary metric for a social media feed?", options: ["Daily Active Users", "Time Spent", "Bounce Rate"], answer: "Time Spent" },
        { q: "Which framework is best for SEO?", options: ["React", "Next.js", "Vue"], answer: "Next.js" },
        { q: "What does 'DAU' stand for?", options: ["Daily Active Users", "Digital Asset Usage", "Data Access Unit"], answer: "Daily Active Users" }
    ];

    // Reset Flow
    const resetConversation = () => {
        setMessages([
            {
                id: 1,
                type: 'ai',
                text: `Hey! 🚀 You're 200 XP behind Rohan in the college rank. Ready to catch up?`
            }
        ]);
        setCurrentOptions([
            { label: '🏆 Top Competitions', action: 'competitions' },
            { label: '📊 College Leaderboard', action: 'leaderboard' },
            { label: '⚡ Quick Quiz', action: 'quiz' }
        ]);
        setQuizIndex(0);
        setIsRegistered(false);
    };

    // Reset when opened
    useEffect(() => {
        if (isOpen) {
            resetConversation();
        }
    }, [isOpen]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, currentOptions]);

    const handleOptionClick = (option) => {
        // Add User Message
        const userMsg = { id: Date.now(), type: 'user', text: option.label };
        setMessages(prev => [...prev, userMsg]);
        setCurrentOptions([]); // Clear options while thinking

        // AI Logic
        setTimeout(() => {
            let aiResponse = {};
            let nextOptions = [];

            switch (option.action) {
                case 'competitions':
                    aiResponse = {
                        id: Date.now() + 1,
                        type: 'ai',
                        text: "Trending: 'IIM Bangalore Vista'. 5 classmates have already registered! 🏃‍♂️\n\nDon't let them get all the glory!",
                        widget: 'event'
                    };
                    nextOptions = [
                        { label: 'Register Now (+50 XP)', action: 'register_event' },
                        { label: 'Show me more', action: 'more_events' },
                        { label: '⬅️ Main Menu', action: 'reset' }
                    ];
                    break;
                case 'leaderboard':
                    aiResponse = {
                        id: Date.now() + 1,
                        type: 'ai',
                        text: "Here's the tea ☕. You're close to the Top 3, but Rohan is still flexing that lead. Time to grind? 💪",
                        widget: 'leaderboard_mini'
                    };
                    nextOptions = [
                        { label: 'Earn 100 XP Now', action: 'quiz' },
                        { label: '⬅️ Main Menu', action: 'reset' }
                    ];
                    break;
                case 'quiz':
                    const firstQ = QUIZ_QUESTIONS[0];
                    setQuizIndex(0);
                    aiResponse = {
                        id: Date.now() + 1,
                        type: 'ai',
                        text: `Let's see if you're smarter than an AI (just kidding, maybe). 🧠\n\nQ1: ${firstQ.q}`
                    };
                    nextOptions = firstQ.options.map(opt => ({
                        label: opt,
                        action: opt === firstQ.answer ? 'quiz_correct' : 'quiz_wrong'
                    }));
                    nextOptions.push({ label: '❌ Cancel Quiz', action: 'reset' });
                    break;
                case 'quiz_correct':
                    aiResponse = {
                        id: Date.now() + 1,
                        type: 'ai',
                        text: "Boom! Correct! 🎉 +50 XP. You're a natural!",
                    };
                    if (quizIndex < QUIZ_QUESTIONS.length - 1) {
                        nextOptions = [
                            { label: 'Next Question', action: 'next_question' },
                            { label: '⬅️ Main Menu', action: 'reset' }
                        ];
                    } else {
                        aiResponse.text += "\n\nQuiz Complete! You're on fire! 🔥";
                        nextOptions = [{ label: '⬅️ Main Menu', action: 'reset' }];
                    }
                    break;
                case 'quiz_wrong':
                    aiResponse = {
                        id: Date.now() + 1,
                        type: 'ai',
                        text: "Oof, not quite. 😅 But hey, failure is just data, right?",
                    };
                    if (quizIndex < QUIZ_QUESTIONS.length - 1) {
                        nextOptions = [
                            { label: 'Try Next Question', action: 'next_question' },
                            { label: '⬅️ Main Menu', action: 'reset' }
                        ];
                    } else {
                        aiResponse.text += "\n\nQuiz Complete!";
                        nextOptions = [{ label: '⬅️ Main Menu', action: 'reset' }];
                    }
                    break;
                case 'next_question':
                    const nextIdx = quizIndex + 1;
                    setQuizIndex(nextIdx);
                    const nextQ = QUIZ_QUESTIONS[nextIdx];
                    aiResponse = {
                        id: Date.now() + 1,
                        type: 'ai',
                        text: `Q${nextIdx + 1}: ${nextQ.q}`,
                    };
                    nextOptions = nextQ.options.map(opt => ({
                        label: opt,
                        action: opt === nextQ.answer ? 'quiz_correct' : 'quiz_wrong'
                    }));
                    nextOptions.push({ label: '❌ Cancel Quiz', action: 'reset' });
                    break;

                case 'register_event':
                    setIsRegistered(true);
                    aiResponse = {
                        id: Date.now() + 1,
                        type: 'ai',
                        text: "Registered! ✅ You're one step closer to glory.\n\nWant to actually WIN? 🏆\nUnstop Gold gives you the secret sauce: company-specific mocks.",
                        widget: 'gold'
                    };
                    nextOptions = [
                        { label: 'Unlock Gold Benefits 👑', action: 'open_gold' },
                        { label: '⬅️ Main Menu', action: 'reset' }
                    ];
                    break;
                case 'open_gold':
                    if (onOpenGold) onOpenGold();
                    aiResponse = {
                        id: Date.now() + 1,
                        type: 'ai',
                        text: "Smart move! 🧠 Opening the treasure chest..."
                    };
                    nextOptions = [{ label: '⬅️ Main Menu', action: 'reset' }];
                    break;
                case 'more_events':
                    aiResponse = {
                        id: Date.now() + 1,
                        type: 'ai',
                        text: "Check out 'L'Oréal Brandstorm' and 'Flipkart GRiD'. Both are closing soon! Tick tock! ⏰"
                    };
                    nextOptions = [{ label: '⬅️ Main Menu', action: 'reset' }];
                    break;
                case 'reset':
                    resetConversation();
                    return;
                default:
                    aiResponse = { id: Date.now() + 1, type: 'ai', text: "Got it! Anything else?" };
                    nextOptions = [
                        { label: '🏆 Top Competitions', action: 'competitions' },
                        { label: '📊 College Leaderboard', action: 'leaderboard' }
                    ];
            }

            setMessages(prev => [...prev, aiResponse]);
            setCurrentOptions(nextOptions);
        }, 600);
    };

    // Render Widgets
    const renderWidget = (widgetType) => {
        switch (widgetType) {
            case 'event':
                return (
                    <div style={{ marginTop: '8px', background: 'white', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ background: '#EFF6FF', padding: '10px', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50px' }}>
                                <span style={{ fontSize: '10px', color: '#3B82F6', fontWeight: 600 }}>NOV</span>
                                <span style={{ fontSize: '16px', fontWeight: 700, color: '#1E40AF' }}>28</span>
                            </div>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>IIMB Vista 2024</div>
                                <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}><Users size={10} /> 5 Friends Going</span>
                                </div>
                            </div>
                        </div>
                        <button
                            disabled={isRegistered}
                            style={{
                                marginTop: '12px',
                                width: '100%',
                                padding: '8px',
                                background: isRegistered ? '#10B981' : 'var(--color-primary)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '12px',
                                fontWeight: 600,
                                cursor: isRegistered ? 'default' : 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px'
                            }}
                        >
                            {isRegistered ? <><CheckCircle size={14} /> Registered</> : 'Register Now'}
                        </button>
                    </div>
                );
            case 'leaderboard_mini':
                return (
                    <div style={{ marginTop: '8px', background: '#F9FAFB', borderRadius: '8px', padding: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px', padding: '4px', borderBottom: '1px solid #E5E7EB' }}>
                            <span>2. Priya</span>
                            <span style={{ fontWeight: 600 }}>1320 XP</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', padding: '4px', background: '#EFF6FF', borderRadius: '4px', color: 'var(--color-primary)', fontWeight: 600 }}>
                            <span>3. You</span>
                            <span>1250 XP</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '4px', padding: '4px' }}>
                            <span>4. Amit</span>
                            <span style={{ fontWeight: 600 }}>1100 XP</span>
                        </div>
                    </div>
                );
            case 'gold':
                return (
                    <div style={{ marginTop: '8px', background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)', border: '1px solid #FCD34D', borderRadius: '12px', padding: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                            <Crown size={16} color="#D97706" fill="#D97706" />
                            <span style={{ fontSize: '12px', fontWeight: 700, color: '#92400E' }}>Unstop Gold</span>
                        </div>
                        <p style={{ fontSize: '12px', color: '#92400E', marginBottom: '12px', lineHeight: '1.4' }}>
                            Unlock company-specific mocks and get ahead of the competition.
                        </p>
                        <button
                            onClick={onOpenGold}
                            style={{ width: '100%', padding: '8px', background: '#D97706', color: 'white', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}
                        >
                            View Gold Plan
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    if (!isOpen) return (
        <button
            onClick={onClose}
            className="pulse-animation"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1C4980 0%, #0F2D52 100%)',
                color: 'white',
                border: '4px solid white',
                boxShadow: '0 8px 24px rgba(28, 73, 128, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 150,
                cursor: 'pointer',
                transition: 'transform 0.2s'
            }}
        >
            <Sparkles size={28} />
            <div style={{ position: 'absolute', top: 0, right: 0, width: '16px', height: '16px', background: '#F7941D', borderRadius: '50%', border: '2px solid white' }} />
        </button>
    );

    return (
        <div style={{
            position: 'fixed',
            bottom: '100px',
            right: '30px',
            width: '360px',
            height: '550px',
            background: 'var(--color-surface)',
            borderRadius: '20px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 151,
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            animation: 'slideUp 0.3s ease'
        }}>
            {/* Header */}
            <div style={{
                padding: '16px',
                background: 'var(--color-primary)',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ background: 'white', padding: '6px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="AI" style={{ width: '20px', height: '20px' }} />
                    </div>
                    <div>
                        <div style={{ fontWeight: 700, fontSize: '16px' }}>Nonstop AI</div>
                        <div style={{ fontSize: '11px', opacity: 0.9 }}>Your Career Copilot</div>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={resetConversation} title="Reset Chat" style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', opacity: 0.8 }}>
                        <RefreshCw size={18} />
                    </button>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                        <X size={20} />
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div style={{
                flex: 1,
                padding: '20px',
                overflowY: 'auto',
                background: '#F3F4F6',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
            }}>
                {messages.map(msg => (
                    <div key={msg.id} style={{
                        alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                        maxWidth: '85%',
                    }}>
                        <div style={{
                            background: msg.type === 'user' ? 'var(--color-primary)' : 'white',
                            color: msg.type === 'user' ? 'white' : 'var(--color-text)',
                            padding: '12px 16px',
                            borderRadius: msg.type === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                            fontSize: '14px',
                            lineHeight: '1.5',
                            boxShadow: msg.type === 'ai' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
                            border: msg.type === 'ai' ? '1px solid var(--color-border)' : 'none',
                            whiteSpace: 'pre-wrap'
                        }}>
                            {msg.text}
                        </div>
                        {msg.widget && renderWidget(msg.widget)}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Chips Input */}
            <div style={{
                padding: '16px',
                background: 'white',
                borderTop: '1px solid var(--color-border)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
            }}>
                {currentOptions.length > 0 ? (
                    currentOptions.map((opt, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleOptionClick(opt)}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '20px',
                                border: '1px solid var(--color-primary)',
                                background: 'white',
                                color: 'var(--color-primary)',
                                fontSize: '13px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}
                            onMouseOver={(e) => { e.target.style.background = '#EFF6FF'; }}
                            onMouseOut={(e) => { e.target.style.background = 'white'; }}
                        >
                            {opt.label}
                        </button>
                    ))
                ) : (
                    <div style={{ fontSize: '12px', color: '#9CA3AF', width: '100%', textAlign: 'center', fontStyle: 'italic' }}>
                        Nonstop is typing...
                    </div>
                )}
            </div>
        </div>
    );
};

export default AIMentor;
