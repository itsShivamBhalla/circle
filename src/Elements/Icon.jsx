export default function Chevron({ iconStyle, icon, click }) {
  return <img src={icon} alt="chevron" style={iconStyle} onClick={click} />;
}
