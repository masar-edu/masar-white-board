import "./MasarLogo.scss";

const LogoIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="MasarLogo-icon"
  >
    <image href="/masar.svg" width="40" height="40" />
  </svg>
);

const LogoText = () => (
  <svg
    viewBox="0 0 450 55"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="MasarLogo-text"
  >
    <text
      x="225"
      y="35"
      textAnchor="middle"
      fontSize="32"
      fontFamily="Excalifont, Xiaolai, cursive"
      fill="currentColor"
      fontWeight="bold"
    >
      MASAR
    </text>
  </svg>
);

type LogoSize = "xs" | "small" | "normal" | "large" | "custom";

interface LogoProps {
  size?: LogoSize;
  withText?: boolean;
  style?: React.CSSProperties;
  /**
   * If true, the logo will not be wrapped in a Link component.
   * The link prop will be ignored as well.
   * It will merely be a plain div.
   */
  isNotLink?: boolean;
}

export const MasarLogo = ({
  style,
  size = "small",
  withText,
}: LogoProps) => {
  return (
    <div className={`MasarLogo is-${size}`} style={style}>
      <LogoIcon />
      {withText && <LogoText />}
    </div>
  );
};
