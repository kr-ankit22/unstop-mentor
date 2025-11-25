import React from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

const TaskModal = ({ isOpen, onClose, onCompleteTask }) => {
    if (!isOpen) return null;

    const tasks = [
        {
            id: 1,
            title: "Solve 1 Product Management MCQ",
            desc: "Quick 5-min quiz to test your product sense.",
            xp: 50,
            premium: false
        },
        {
            id: 2,
            title: "Apply to 1 Internship",
            desc: "Find a PM role and hit apply. Don't overthink it!",
            xp: 100,
            premium: false
        },
        {
            id: 3,
            title: "Read 'The Mom Test' Summary",
            desc: "Key takeaways from the classic PM book.",
            xp: 150,
            premium: true
        }
    ];

    return (
        <>
            <div
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 200,
                    animation: 'fadeIn 0.3s ease'
                }}
            />
            <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'var(--color-surface)',
                borderRadius: '20px 20px 0 0',
                padding: 'var(--space-24)',
                zIndex: 201,
                maxHeight: '80vh',
                overflowY: 'auto',
                animation: 'slideUp 0.3s ease',
                boxShadow: '0 -4px 20px rgba(0,0,0,0.1)'
            }}>
                <div style={{
                    width: '40px',
                    height: '4px',
                    background: 'var(--color-grey)',
                    borderRadius: '2px',
                    margin: '0 auto var(--space-20)'
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-20)' }}>
                    <div>
                        <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-text)' }}>Today's Tasks</h2>
                        <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>Complete 1 to maintain your streak!</p>
                    </div>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)' }}>
                        <X size={24} />
                    </button>
                </div>

                {tasks.map(task => (
                    <div key={task.id} style={{
                        background: task.premium ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(251, 191, 36, 0.05) 100%)' : 'var(--color-bg)',
                        border: `1px solid ${task.premium ? '#F59E0B' : 'var(--color-border)'}`,
                        borderRadius: 'var(--radius-base)',
                        padding: 'var(--space-16)',
                        marginBottom: 'var(--space-16)',
                        position: 'relative'
                    }}>
                        {task.premium && (
                            <span style={{
                                position: 'absolute',
                                top: '-10px',
                                right: '10px',
                                background: '#F59E0B',
                                color: 'white',
                                fontSize: '10px',
                                fontWeight: 700,
                                padding: '2px 8px',
                                borderRadius: '10px'
                            }}>PREMIUM</span>
                        )}

                        <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '4px', color: 'var(--color-text)' }}>{task.title}</h3>
                        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '12px' }}>{task.desc}</p>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)' }}>+{task.xp} XP</span>
                            <button
                                onClick={() => onCompleteTask(task)}
                                style={{
                                    background: task.premium ? 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)' : 'var(--color-primary)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 'var(--radius-sm)',
                                    padding: '8px 16px',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                }}
                            >
                                Start <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TaskModal;
