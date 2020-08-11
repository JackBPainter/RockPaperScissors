export default function handleBackground(result) {
    switch (result) {
      case "win":
        return "#228B22"
      case "draw":
        return "#eeeeee"
      case "lose":
        return "#000000"
      default: 
        return "#fff"
    }
  }