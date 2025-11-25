import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import GrowthTracker from './components/GrowthTracker';
import Leaderboard from './components/Leaderboard';
import GoldPlanModal from './components/GoldPlanModal';
import { Briefcase, Award, TrendingUp, ArrowRight, Filter, MapPin, Clock } from 'lucide-react';

function App() {
  const [variant, setVariant] = useState('B'); // Default to Winner for demo
  const [streak, setStreak] = useState(4);
  const [isGoldModalOpen, setIsGoldModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenGold = () => setIsGoldModalOpen(true);
    window.addEventListener('open-gold-modal', handleOpenGold);
    return () => window.removeEventListener('open-gold-modal', handleOpenGold);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <Header variant={variant} setVariant={setVariant} />

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>

        {/* A/B Testing Logic */}
        {variant === 'B' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: '24px' }}>

            {/* Left Column: Growth Engine */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <GrowthTracker streak={streak} setStreak={setStreak} />
              <div style={{ height: '400px' }}>
                <Leaderboard />
              </div>
            </div>

            {/* Right Column: Feed / Opportunities */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

              {/* Banner */}
              <div style={{
                background: 'linear-gradient(90deg, #1C4980 0%, #3B82F6 100%)',
                borderRadius: 'var(--radius-base)',
                padding: '32px',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>Welcome back, Anurhea! 👋</h1>
                  <p style={{ opacity: 0.9 }}>You're on track to crack a Product Management role.</p>
                </div>
                <img src="/logo.png" style={{ height: '60px', opacity: 0.2, filter: 'brightness(0) invert(1)' }} />
              </div>

              {/* Recommended Opportunities */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text)' }}>Recommended for You</h2>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>View All</a>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                  {/* Card 1: ArisInfra */}
                  <div style={{ background: 'white', borderRadius: 'var(--radius-base)', padding: '16px', border: '1px solid var(--color-border)', transition: 'transform 0.2s', cursor: 'pointer' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '8px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                      <img src="/arisinfra_logo.jpg" alt="ArisInfra" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', fontWeight: 600, marginBottom: '4px' }}>HIRING CHALLENGE</div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>ArisInfra Hiring Challenge</h3>
                    <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '16px' }}>Full Stack Developer Role</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                      <span>5 days left</span>
                      <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Apply Now</span>
                    </div>
                  </div>

                  {/* Card 2: BITS Pilani */}
                  <div style={{ background: 'white', borderRadius: 'var(--radius-base)', padding: '16px', border: '1px solid var(--color-border)', transition: 'transform 0.2s', cursor: 'pointer' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '8px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                      <img src="/bits_pilani_management.gif" alt="BITS" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', fontWeight: 600, marginBottom: '4px' }}>COMPETITION</div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>BITS Pilani APOGEE</h3>
                    <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '16px' }}>Product Management Case</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                      <span>2 days left</span>
                      <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Apply Now</span>
                    </div>
                  </div>

                  {/* Card 3: ISB Hyderabad */}
                  <div style={{ background: 'white', borderRadius: 'var(--radius-base)', padding: '16px', border: '1px solid var(--color-border)', transition: 'transform 0.2s', cursor: 'pointer' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '8px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                      <img src="/isb_logo.png" alt="ISB" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', fontWeight: 600, marginBottom: '4px' }}>CASE STUDY</div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>ISB Hyderabad Envision</h3>
                    <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '16px' }}>Strategy & Consulting</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                      <span>10 days left</span>
                      <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Apply Now</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* Control Variant (Standard Homepage - Redesigned) */
          <div style={{ display: 'flex', gap: '24px' }}>
            {/* Sidebar Filters */}
            <div style={{ width: '240px', display: 'none', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontWeight: 600 }}>Filters</span>
                  <Filter size={14} />
                </div>
                {/* Mock Filters */}
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label><input type="checkbox" /> Open to All</label>
                  <label><input type="checkbox" /> Engineering</label>
                  <label><input type="checkbox" /> MBA</label>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: '24px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '8px' }}>Explore Opportunities</h1>
                <p style={{ color: 'var(--color-text-secondary)' }}>Participate in the best competitions and hackathons.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} style={{
                    background: 'white',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <div style={{ height: '140px', background: '#E5E7EB', position: 'relative' }}>
                      <div style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        background: 'white',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '10px',
                        fontWeight: 600
                      }}>
                        <Clock size={10} style={{ display: 'inline', marginRight: '4px' }} />
                        2 Days Left
                      </div>
                    </div>
                    <div style={{ padding: '16px' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px', color: '#1F2937' }}>L'Oréal Brandstorm 2025</h3>
                      <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '12px' }}>L'Oréal India</p>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                        <span style={{ background: '#EFF6FF', color: '#1D4ED8', fontSize: '10px', padding: '2px 6px', borderRadius: '4px' }}>Competition</span>
                        <span style={{ background: '#FFF7ED', color: '#C2410C', fontSize: '10px', padding: '2px 6px', borderRadius: '4px' }}>Innovation</span>
                      </div>
                      <button style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid var(--color-primary)',
                        background: 'white',
                        color: 'var(--color-primary)',
                        borderRadius: '8px',
                        fontWeight: 600,
                        fontSize: '13px',
                        cursor: 'pointer'
                      }}>
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <GoldPlanModal isOpen={isGoldModalOpen} onClose={() => setIsGoldModalOpen(false)} />
    </div>
  );
}

export default App;
