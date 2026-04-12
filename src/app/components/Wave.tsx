interface WaveProps {
  color: string;
  flip?: boolean;
}

export function Wave({ color, flip = false }: WaveProps) {
  return (
    <div style={{
      lineHeight: 0,
      fontSize: 0,
      display: "block",
      overflow: "hidden",
      marginTop: "-1px",
      marginBottom: "-1px",
    }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: "60px",
          transform: flip ? "rotate(180deg)" : "none",
        }}
      >
        <path
          d="M0,60 L0,30 C180,0 360,60 540,30 C720,0 900,60 1080,30 C1260,0 1380,45 1440,30 L1440,60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
