function Arrow({rotate}) {
    return (
      <svg
      id="Layer_1"
      height="100%"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      style={{ transform: `rotate(${rotate})` }}>
        <defs>
          <style>{`.cls-4 { fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 10.92px; }`}</style>
        </defs>
          <path className="cls-4" d="M9.26,22,32,36.74,54.74,22"/>
      </svg>
    );
  }
  
  export default Arrow;
  