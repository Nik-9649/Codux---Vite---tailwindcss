import { createBoard } from "@wixc3/react-board";
import App from "app/app";

export default createBoard({
    name: "App Board",
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1416,
        windowHeight: 1020,
        canvasWidth: 1453
    }
});
