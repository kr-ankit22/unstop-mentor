import React, { useState } from 'react';
import { Flame, Star, Zap, ChevronRight } from 'lucide-react';
import TaskModal from './TaskModal';
import AIMentor from './AIMentor';

const GrowthTracker = ({ streak, setStreak }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAIOpen, setIsAIOpen] = useState(false);
    const [heatmapData, setHeatmapData] = useState([
        { day: 'M', status: 'completed' },
        { day: 'T', status: 'completed' },
        { day: 'W', status: 'completed' },
        { day: 'T', status: 'completed' },
        { day: 'F', status: 'today' },
        { day: 'S', status: 'upcoming' },
        { day: 'S', status: 'upcoming' },
    ]);

    const handleCompleteTask = (task) => {
        setStreak(prev => prev + 1);
        setHeatmapData(prev => prev.map(d => d.status === 'today' ? { ...d, status: 'completed' } : d));
        setIsModalOpen(false);
        // Dispatch event for confetti or other effects
        window.dispatchEvent(new CustomEvent('task-completed', { detail: { xp: task.xp } }));
    };

    return (
        <>
            <div style={{
                background: 'linear-gradient(135deg, #1C4980 0%, #0F2D52 100%)',
                borderRadius: 'var(--radius-base)',
                padding: '24px',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(28, 73, 128, 0.3)'
            }}>
                {/* Background Pattern */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 20%)',
                    pointerEvents: 'none'
                }} />

                {/* Header: Level & XP */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <div>
                        <div style={{ fontSize: '12px', opacity: 0.8, fontWeight: 600, letterSpacing: '0.5px' }}>LEVEL 5</div>
                        <div style={{ fontSize: '24px', fontWeight: 800 }}>Product Ninja</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '18px', fontWeight: 700, color: '#FCD34D' }}>
                            <Zap size={20} fill="#FCD34D" /> 1,250 XP
                        </div>
                        <div style={{ fontSize: '11px', opacity: 0.7 }}>130 XP to Level 6</div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px', marginBottom: '24px' }}>
                    <div style={{ width: '75%', height: '100%', background: '#F7941D', borderRadius: '3px', boxShadow: '0 0 10px rgba(247, 148, 29, 0.5)' }} />
                </div>

                {/* Heatmap & Streak */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '12px' }}>
                        {heatmapData.map((day, index) => (
                            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                                <div style={{
                                    width: '28px',
                                    height: '28px',
                                    borderRadius: '50%',
                                    background: day.status === 'completed' ? '#10B981' : day.status === 'today' ? 'white' : 'rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: day.status === 'today' ? '#1C4980' : 'white',
                                    fontWeight: 700,
                                    fontSize: '12px',
                                    border: day.status === 'today' ? '2px solid #F7941D' : 'none'
                                }}>
                                    {day.status === 'completed' ? '✓' : day.day}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', padding: '0 12px' }}>
                        <div style={{ fontSize: '32px', fontWeight: 800, lineHeight: 1, color: '#F7941D', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            {streak} <Flame size={28} fill="#F7941D" />
                        </div>
                        <div style={{ fontSize: '11px', opacity: 0.8, fontWeight: 600 }}>DAY STREAK</div>
                    </div>
                </div>

                {/* CTA */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="pulse-animation"
                    style={{
                        width: '100%',
                        padding: '14px',
                        background: 'white',
                        color: '#1C4980',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: '15px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        transition: 'transform 0.2s'
                    }}
                >
                    <Star size={18} fill="#F7941D" color="#F7941D" /> Maintain Streak (+50 XP)
                </button>
            </div>

            <TaskModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCompleteTask={handleCompleteTask}
            />

            <AIMentor
                isOpen={isAIOpen}
                onClose={() => setIsAIOpen(!isAIOpen)}
                streak={streak}
                track="Product Management"
                onOpenGold={() => {
                    setIsAIOpen(false);
                    window.dispatchEvent(new CustomEvent('open-gold-modal'));
                }}
            />
        </>
    );
};

export default GrowthTracker;
