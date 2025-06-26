import { useState } from "react";
import { generateTicket, sum } from "./helper";

import Ticket from "./Ticket";

export default function LotteryGame({ n=3, winCondition }) {
  let [ticket, setTicket] = useState(generateTicket(n));
  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(generateTicket(n));
  };
  return (
    <>
      <div>
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket} />
        <button onClick={buyTicket}>Get New Ticket </button>
        <h3>{isWinning && "Congratulations, you won!"} </h3>
      </div>
    </>
  );
}
