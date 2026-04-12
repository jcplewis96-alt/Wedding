interface WaveProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
}

export function Wave({ topColor, bottomColor, flip = false }: WaveProps) {
  return (
    <div style={{
      position: "relative",
      height: "80px",
      marginTop: "-2px",
      marginBottom: "-2px",
      overflow: "hidden",
      flexShrink: 0,
      display: "block",
    }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: "100%", height: "100%",
          display: "block",
          transform: flip ? "scaleX(-1)" : "none",
        }}
      >
        {/* Top background rectangle */}
        <rect x="0" y="0" width="1440" height="80" fill={topColor} />
        {/* Wave shape in bottom color */}
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
