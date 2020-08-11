export default function botSelection() {
    const random = Math.random()

    if(random < 0.33) {
        return "rock"
    }
    if(random > 0.33 && random < 0.66) {
        return "paper"
    }
    if(random > 0.66) {
        return "scissors"
    }
}