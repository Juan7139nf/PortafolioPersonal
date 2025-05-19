'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

const AnimatedText = ({ text, sizeClass = 'text-4xl' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!containerRef.current) return;

    animate(containerRef.current.querySelectorAll('span'), {
      y: [
        { to: '-2.75rem', ease: 'outExpo', duration: 600 },
        { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
      ],
      rotate: {
        from: '-1turn',
        delay: 0
      },
      delay: (_, i) => i * 50,
      ease: 'easeInOutCirc',
      loopDelay: 1000,
      loop: true
    });
  }, []);

  return (
    <h2
      ref={containerRef}
      className={`${sizeClass} font-semibold text-nowrap text-gray-900 dark:text-white`}
    >
      {text.split('').map((char, i) => (
        <span key={i} className='inline-block'>{char === ' ' ? '\u00A0' : char}</span>
      ))}
    </h2>
  );
};

export default AnimatedText;
