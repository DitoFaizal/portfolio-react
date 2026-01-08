import profile from "../assets/profile.jpg";

export default function Header() {
  return (
    <header className="fade header">
      <img src={profile} className="profile" />
      <h1>Dito Faizal Afif</h1>
      <p>Web Developer | React • JavaScript • PHP</p>
    </header>
  );
}
