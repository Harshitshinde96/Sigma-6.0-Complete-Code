import "./App.css";
import { sum } from "./helper";
import LotteryGame from "./LotteryGame";
import Ticket from "./Ticket";
import TicketNum from "./TicketNum";

function App() {
  let winCondition = (ticket) => {
    return sum(ticket)===15
  };
  return (
    <>
      <LotteryGame n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
