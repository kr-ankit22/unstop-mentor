import React from 'react';
import { Trophy, TrendingUp, Users } from 'lucide-react';

const Leaderboard = () => {
    const classmates = [
        { rank: 1, name: 'Rohan Mehta', xp: 1450, avatar: 'R' },
        { rank: 2, name: 'Priya Singh', xp: 1320, avatar: 'P' },
        { rank: 3, name: 'You', xp: 1250, avatar: 'Y', isMe: true },
        { rank: 4, name: 'Amit Kumar', xp: 1100, avatar: 'A' },
        { rank: 5, name: 'Sneha Roy', xp: 980, avatar: 'S' },
    ];

    return (
        <div style={{
            background: 'white',
            borderRadius: 'var(--radius-base)',
            padding: '20px',
            boxShadow: 'var(--shadow-card)',
            border: '1px solid var(--color-border)',
            height: '100%'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-primary)' }}>College Leaderboard</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                    <Users size={14} />
                    <span>BITS Pilani</span>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {classmates.map((user) => (
                    <div key={user.rank} style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '10px',
                        borderRadius: '12px',
                        background: user.isMe ? '#EFF6FF' : 'transparent',
                        border: user.isMe ? '1px solid #BFDBFE' : '1px solid transparent',
                        transition: 'transform 0.2s'
                    }}>
                        <div style={{
                            width: '24px',
                            fontSize: '14px',
                            fontWeight: 700,
                            color: user.rank <= 3 ? '#F59E0B' : '#9CA3AF',
                            textAlign: 'center'
                        }}>
                            {user.rank <= 3 ? <Trophy size={16} color={user.rank === 1 ? '#F59E0B' : user.rank === 2 ? '#9CA3AF' : '#B45309'} /> : user.rank}
                        </div>

                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: user.isMe ? 'var(--color-primary)' : '#E5E7EB',
                            color: user.isMe ? 'white' : '#6B7280',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px',
                            fontWeight: 600,
                            margin: '0 12px'
                        }}>
                            {user.avatar}
                        </div>

                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '14px', fontWeight: 600, color: user.isMe ? 'var(--color-primary)' : 'var(--color-text)' }}>
                                {user.name} {user.isMe && '(You)'}
                            </div>
                            {user.rank === 2 && user.isMe === false && (
                                <div style={{ fontSize: '10px', color: '#F59E0B', display: 'flex', alignItems: 'center', gap: '2px' }}>
                                    <TrendingUp size={10} /> 200 XP to beat
                                </div>
                            )}
                        </div>

                        <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)' }}>
                            {user.xp} XP
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '16px', textAlign: 'center' }}>
                <button style={{
                    fontSize: '12px',
                    color: 'var(--color-primary)',
                    background: 'none',
                    border: 'none',
                    fontWeight: 600,
                    cursor: 'pointer'
                }}>
                    View Full Rankings
                </button>
            </div>
        </div>
    );
};

export default Leaderboard;
