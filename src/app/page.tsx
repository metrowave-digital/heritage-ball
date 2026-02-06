'use client';

import { useState } from 'react';
import styles from './UpdatesLanding.module.css';
import { ArrowRight, Zap } from 'lucide-react';

export default function UpdatesLanding() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName || !lastName) return;

    setLoading(true);

    const res = await fetch('/api/heritage-ball-signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
      }),
    });

    if (res.ok) {
      setSubmitted(true);
    }

    setLoading(false);
  };

  return (
    <main className={styles.wrapper}>
      {/* Glow */}
      <div className={styles.glowFuchsia} />
      <div className={styles.glowBlue} />

      <section className={styles.card}>
        <div className={styles.badge}>
          <Zap size={14} /> UPDATES ONLY
        </div>

        <h1 className={styles.title}>
          HERITAGE <span>BALL</span>
        </h1>

        <p className={styles.subhead}>
          Categories. Dates. Judges. Tickets.
          <br />
          <strong>No spam. No delays.</strong>
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={styles.input}
              required
            />

            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={styles.input}
              required
            />

            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />

            <button type="submit" className={styles.button} disabled={loading}>
              {loading ? 'Submitting…' : 'Stay Locked In'} <ArrowRight size={16} />
            </button>
          </form>
        ) : (
          <div className={styles.success}>
            You’re on the list.
            <span>Watch your inbox.</span>
          </div>
        )}

        <footer className={styles.footer}>
          VOL. I • CHARLOTTE • APRIL 8, 2028
        </footer>
      </section>
    </main>
  );
}