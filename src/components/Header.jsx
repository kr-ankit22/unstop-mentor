import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import ABTestingControl from './ABTestingControl';

const Header = ({ variant, setVariant }) => {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 20px',
      background: 'white',
      borderBottom: '1px solid var(--color-border)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* Unstop Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src="/logo.png"
            alt="Unstop"
            style={{ height: '28px' }}
          />
        </div>

        {/* Desktop Nav */}
        <div style={{ display: 'none', gap: '20px', fontSize: '14px', fontWeight: 500, color: 'var(--color-text-secondary)', marginLeft: '20px' }}>
          <span>Learn</span>
          <span>Practice</span>
          <span>Mentorship</span>
          <span>Compete</span>
          <span>Jobs</span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ position: 'relative' }}>
          <Search size={20} color="var(--color-text-secondary)" />
        </div>
        <Bell size={20} color="var(--color-text-secondary)" />
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <User size={18} color="var(--color-text-secondary)" />
        </div>

        {/* A/B Toggle Integrated in Header */}
        <div style={{ marginLeft: '10px' }}>
          <ABTestingControl variant={variant} setVariant={setVariant} />
        </div>
      </div>
    </header>
  );
};

export default Header;
