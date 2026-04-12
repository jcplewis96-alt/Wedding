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
      background: topColor,
      overflow: "hidden",
      flexShrink: 0,
    }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: 0, left: 0,
          width: "100%", height: "100%",
          transform: flip ? "scaleX(-1)" : "none",
        }}
      >
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
