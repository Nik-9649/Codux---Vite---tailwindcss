import { createBoard } from "@wixc3/react-board";
import App from "app/app";

export default createBoard({
  name: "New Board",
  Board: () => <App />,
});
