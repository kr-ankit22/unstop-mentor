import React from 'react';

const ABTestingControl = ({ variant, setVariant }) => {
    return (
        <div style={{
            background: '#F3F4F6',
            color: '#1F2937',
            padding: '4px 8px',
            borderRadius: '8px',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid #E5E7EB'
        }}>
            <span style={{ fontWeight: 600, color: '#6B7280' }}>View:</span>
            <div style={{ display: 'flex', gap: '4px' }}>
                <button
                    onClick={() => setVariant('A')}
                    style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        border: 'none',
                        background: variant === 'A' ? 'white' : 'transparent',
                        color: variant === 'A' ? '#1F2937' : '#6B7280',
                        fontWeight: variant === 'A' ? 600 : 400,
                        boxShadow: variant === 'A' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
                        cursor: 'pointer'
                    }}
                >
                    Control
                </button>
                <button
                    onClick={() => setVariant('B')}
                    style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        border: 'none',
                        background: variant === 'B' ? '#1C4980' : 'transparent',
                        color: variant === 'B' ? 'white' : '#6B7280',
                        fontWeight: variant === 'B' ? 600 : 400,
                        boxShadow: variant === 'B' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
                        cursor: 'pointer'
                    }}
                >
                    Winner
                </button>
            </div>
        </div>
    );
};

export default ABTestingControl;
