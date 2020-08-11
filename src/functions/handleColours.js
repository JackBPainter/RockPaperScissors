export default function handleColours(result) {
  switch (result) {
    case "win":
      return "background: #228B22; color: black;"; // green
    case "draw":
      return "background: #eeeeee; color: black;";
    case "lose":
      return "background: #000000; color: red;";
    default:
      return "background: #fff; color: black;";
  }
}
