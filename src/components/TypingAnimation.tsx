import React, { useEffect, useRef, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  holdDelay?: number;
  loopDelay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ 
  text, 
  speed = 70,
  holdDelay = 1800,
  loopDelay = 500,
  className = '',
  onComplete 
}) => {
  const [displayLength, setDisplayLength] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'holding' | 'resetting'>('typing');
  const hasFiredCompleteRef = useRef(false);

  useEffect(() => {
    setDisplayLength(0);
    setPhase('typing');
    hasFiredCompleteRef.current = false;
  }, [text]);

  useEffect(() => {
    const isTyping = phase === 'typing';
    const isHolding = phase === 'holding';
    const isResetting = phase === 'resetting';

    const timeout = window.setTimeout(() => {
      if (isTyping) {
        if (displayLength < text.length) {
          setDisplayLength((prev) => prev + 1);
          return;
        }

        if (!hasFiredCompleteRef.current) {
          hasFiredCompleteRef.current = true;
          onComplete?.();
        }
        setPhase('holding');
        return;
      }

      if (isHolding) {
        setPhase('resetting');
        return;
      }

      if (isResetting) {
        setDisplayLength(0);
        setPhase('typing');
      }
    }, isTyping ? speed : isHolding ? holdDelay : loopDelay);

    return () => window.clearTimeout(timeout);
  }, [displayLength, phase, text.length, speed, holdDelay, loopDelay, onComplete]);

  const displayText = text.slice(0, displayLength);

  return (
    <span
      className={className}
      style={{ minWidth: `${text.length + 1}ch` }}
      aria-label={text}
    >
      {displayText}
      <span className="typing-cursor ml-1 inline-block" aria-hidden="true">|</span>
    </span>
  );
};

export default TypingAnimation;
