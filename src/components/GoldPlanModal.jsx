import React from 'react';
import { X, Check, Star, Zap, Crown } from 'lucide-react';

const GoldPlanModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

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
                    background: 'rgba(0, 0, 0, 0.6)',
                    zIndex: 300,
                    animation: 'fadeIn 0.3s ease'
                }}
            />
            <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'var(--color-surface)',
                borderRadius: '20px',
                padding: '0',
                zIndex: 301,
                width: '90%',
                maxWidth: '400px',
                animation: 'scaleUp 0.3s ease',
                boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                overflow: 'hidden'
            }}>
                {/* Header */}
                <div style={{
                    background: 'linear-gradient(135deg, #FFD700 0%, #FDB931 100%)',
                    padding: '24px',
                    textAlign: 'center',
                    position: 'relative'
                }}>
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '16px',
                            right: '16px',
                            background: 'rgba(255,255,255,0.2)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#78350F',
                            cursor: 'pointer'
                        }}
                    >
                        <X size={18} />
                    </button>
                    <div style={{
                        background: 'rgba(255,255,255,0.9)',
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 12px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}>
                        <Crown size={24} color="#D97706" fill="#D97706" />
                    </div>
                    <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#78350F', marginBottom: '4px' }}>Unstop Gold</h2>
                    <p style={{ fontSize: '14px', color: '#92400E', fontWeight: 500 }}>Level up your preparation</p>
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                    <div style={{ marginBottom: '24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <div style={{ background: '#FEF3C7', padding: '8px', borderRadius: '8px' }}>
                                <Zap size={20} color="#D97706" />
                            </div>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: '15px' }}>Unlimited Practice</div>
                                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Access all MCQs & Coding problems</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <div style={{ background: '#FEF3C7', padding: '8px', borderRadius: '8px' }}>
                                <Star size={20} color="#D97706" />
                            </div>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: '15px' }}>Company Specific Mocks</div>
                                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Unlock Google, Uber, Amazon sets</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ background: '#FEF3C7', padding: '8px', borderRadius: '8px' }}>
                                <Check size={20} color="#D97706" />
                            </div>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: '15px' }}>Basic AI Mentorship</div>
                                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Get daily nudges & track guidance</div>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        background: '#F9FAFB',
                        borderRadius: '12px',
                        padding: '16px',
                        textAlign: 'center',
                        marginBottom: '20px',
                        border: '1px solid var(--color-border)'
                    }}>
                        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>Special Launch Offer</div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <span style={{ textDecoration: 'line-through', color: '#9CA3AF', fontSize: '14px' }}>₹999</span>
                            <span style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-text)' }}>₹499</span>
                            <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>/year</span>
                        </div>
                    </div>

                    <button style={{
                        width: '100%',
                        padding: '14px',
                        background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: '16px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(217, 119, 6, 0.3)',
                        transition: 'transform 0.2s'
                    }}>
                        Upgrade to Gold
                    </button>

                    <p style={{ textAlign: 'center', fontSize: '11px', color: '#9CA3AF', marginTop: '12px' }}>
                        Need job applications? Check out <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Unstop Pro</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default GoldPlanModal;
