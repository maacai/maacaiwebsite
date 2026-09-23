import { useCallback, useRef } from 'react';

/**
 * useTilt — reusable 3D mouse-tracking tilt effect.
 */
export default function useTilt({
  max = 12,
  scale = 1.04,
  glare = true,
} = {}) {
  const ref = useRef(null);
  const resetTimer = useRef(null);

  const onMouseMove = useCallback((e) => {
    const card = ref.current;
    if (!card) return;

    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
      resetTimer.current = null;
    }

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;

    const rotX = -y * max * 2;
    const rotY =  x * max * 2;

    // Fast transition while tracking the mouse
    card.style.transition = 'transform 100ms linear';
    
    // Apply the 3D tilt + lift upward
    card.style.transform = `
      perspective(900px)
      translateY(-8px)
      rotateX(${rotX}deg)
      rotateY(${rotY}deg)
      scale3d(${scale}, ${scale}, ${scale})
      translateZ(8px)
    `;

    if (glare) {
      const shine = card.querySelector('.tilt-shine');
      if (shine) {
        shine.style.transition = 'none';
        const sx = (x + 0.5) * 100;
        const sy = (y + 0.5) * 100;
        shine.style.background = `radial-gradient(
          circle at ${sx}% ${sy}%,
          rgba(255,255,255,0.25) 0%,
          rgba(255,255,255,0.08) 40%,
          transparent 70%
        )`;
        shine.style.opacity = '1';
      }
    }
  }, [max, scale, glare]);

  const onMouseLeave = useCallback(() => {
    const card = ref.current;
    if (!card) return;

    // Smooth spring back
    card.style.transition = 'transform 400ms cubic-bezier(.03,.98,.52,.99)';
    
    // Animate to a flat 3D state
    card.style.transform = 'perspective(900px) translateY(0px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)';

    if (glare) {
      const shine = card.querySelector('.tilt-shine');
      if (shine) {
        shine.style.transition = 'opacity 400ms ease';
        shine.style.opacity = '0';
      }
    }

    // After the transition completes, COMPLETELY REMOVE all inline 3D styles
    // so it perfectly matches the CSS layout of untouched cards
    resetTimer.current = setTimeout(() => {
      if (card) {
        card.style.transition = '';
        card.style.transform = '';
      }
    }, 400);

  }, [glare]);

  return { ref, onMouseMove, onMouseLeave };
}
