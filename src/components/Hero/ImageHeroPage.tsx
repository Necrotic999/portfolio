const ImageHeroPage = () => {
  return (
    <div className="relative w-[700px] h-[700px] mr-[-55px]">
      <svg
        viewBox="0 0 200 200"
        className="w-[700px] h-[700px] transform animate-float"
        style={{
          filter: "drop-shadow(0 0 20px rgba(255, 0, 0, 0.3))",
        }}
      >
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="url(#gradientBg)"
          strokeWidth="0.5"
          className="animate-spin-slow"
        />
        <g
          className="animate-spin-slow"
          style={{
            transformOrigin: "center",
          }}
        >
          {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
            <path
              key={i}
              d={`M100,30 L${100 + 40 * Math.cos((rotation * Math.PI) / 180)},${
                100 + 40 * Math.sin((rotation * Math.PI) / 180)
              } L${100 + 40 * Math.cos(((rotation + 60) * Math.PI) / 180)},${
                100 + 40 * Math.sin(((rotation + 60) * Math.PI) / 180)
              } Z`}
              fill="none"
              stroke="url(#gradientRed)"
              strokeWidth="1"
              transform={`rotate(${rotation}, 100, 100)`}
              className="animate-pulse-slow"
              style={{
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </g>
        <g
          className="animate-spin-reverse"
          style={{
            transformOrigin: "center",
          }}
        >
          {[0, 45, 90, 135].map((rotation, i) => (
            <rect
              key={i}
              x="70"
              y="70"
              width="60"
              height="60"
              fill="none"
              stroke="url(#gradientWhite)"
              strokeWidth="1"
              transform={`rotate(${rotation}, 100, 100)`}
              className="animate-pulse-slow"
              style={{
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </g>
        <circle
          cx="100"
          cy="100"
          r="20"
          fill="none"
          stroke="url(#gradientCenter)"
          strokeWidth="2"
          className="animate-pulse-slow"
        />
        <g
          className="animate-spin-reverse-slow"
          style={{
            transformOrigin: "center",
          }}
        >
          {[0, 120, 240].map((rotation, i) => (
            <circle
              key={i}
              cx={100 + 50 * Math.cos((rotation * Math.PI) / 180)}
              cy={100 + 50 * Math.sin((rotation * Math.PI) / 180)}
              r="4"
              fill="#ff0000"
              className="animate-pulse"
              style={{
                filter: "drop-shadow(0 0 10px rgba(255, 0, 0, 0.8))",
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </g>
        <defs>
          <linearGradient id="gradientBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff0000" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="gradientRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff0000" />
            <stop offset="100%" stopColor="#ff3333" />
          </linearGradient>
          <linearGradient
            id="gradientWhite"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ff0000" />
          </linearGradient>
          <linearGradient
            id="gradientCenter"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ff0000" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ff0000" />
          </linearGradient>
        </defs>
      </svg>
      <div
        className="absolute top-[350px] left-[350px] transform -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px] bg-red-500 rounded-full"
        style={{
          boxShadow: "0 0 20px #ff0000, 0 0 40px #ff0000, 0 0 60px #ff0000",
          animation: "pulse 2s infinite",
        }}
      />
    </div>
  );
};

export default ImageHeroPage;
