import avatar from "../Assets/Mask Group 6.png";

export default function Avatar(props) {
  return <img src={props.avatar} alt="Avatar" style={props.avatarStyle} onClick={props.click} />;
}
