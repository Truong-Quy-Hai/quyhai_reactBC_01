import { CHOICES } from "../../constants/choices";
const { SCISSORS, ROCK, PAPER } = CHOICES;

export default function getImg(choice) {
  switch (choice) {
    case SCISSORS:
      return "./images/keo.png";
    case ROCK:
      return "./images/bua.png";
    case PAPER:
      return "./images/bao.png";
    default:
      return "";
  }
}
