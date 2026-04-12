interface WaveProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
}

export function Wave({ topColor, bottomColor, flip = false }: WaveProps) {
  return (
    <div style={{
      position: "relative",
      marginTop: "-3px",
      marginBottom: "-3px",
      lineHeight: 0,
      flexShrink: 0,
      display: "block",
      fontSize: 0,
    }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: "80px",
          transform: flip ? "scaleX(-1)" : "none",
        }}
      >
        <rect x="0" y="0" width="1440" height="80" fill={topColor} />
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
