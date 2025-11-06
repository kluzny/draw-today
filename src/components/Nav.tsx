import { isSameDay, format } from "date-fns";
import type { MouseEventHandler } from "react";

interface NavOptions {
  currentDate: Date;
  increment: MouseEventHandler<HTMLButtonElement>;
  decrement: MouseEventHandler<HTMLButtonElement>;
}

export default function Nav({ currentDate, increment, decrement }: NavOptions) {
  const isToday = isSameDay(currentDate, new Date());
  const humanDate = format(currentDate, "MM/dd/yyy");

  return (
    <nav className="bg-orange-300 rounded flex items-center justify-between py-2 px-4">
      <button onClick={decrement}>⬅️</button>
      {isToday && <h1 className="text-4xl text-center">Draw Today!</h1>}
      {!isToday && <h1 className="text-4xl text-center">Draw {humanDate}</h1>}
      <button onClick={increment}>➡️</button>
    </nav>
  );
}
