const DecorativeHearts = () => {
  const hearts = [
    { top: '15%', left: '80%', size: 12, delay: 0, opacity: 0.15 },
    { top: '25%', left: '85%', size: 8, delay: 0.5, opacity: 0.1 },
    { top: '60%', left: '90%', size: 10, delay: 1, opacity: 0.12 },
    { top: '40%', left: '75%', size: 6, delay: 1.5, opacity: 0.08 },
    { top: '70%', left: '82%', size: 14, delay: 2, opacity: 0.1 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((h, i) => (
        <svg
          key={i}
          className="absolute animate-float text-primary"
          style={{
            top: h.top,
            left: h.left,
            width: h.size,
            height: h.size,
            opacity: h.opacity,
            animationDelay: `${h.delay}s`,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ))}
    </div>
  );
};

export default DecorativeHearts;
