import Styles from "./Mines.module.css";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import BetPanel from "./BetPanel";
import History from "../../Common/History";
import MinesGame from "./MinesGame/MinesGame";
import { useState } from "react";

const useStyles = makeStyles({
  betPanel: {},
  game: {},
});

const mockHistory = [
  { name: "Game 1", gain: 500, chance: "25%" },
  { name: "Game 2", gain: 500, chance: "25%" },
  { name: "Game 3", gain: 500, chance: "25%" },
  { name: "Game 4", gain: 500, chance: "25%" },
  { name: "Game 5", gain: 500, chance: "25%" },
  { name: "Game 6", gain: 500, chance: "25%" },
  { name: "Game 7", gain: 500, chance: "25%" },
  { name: "Game 8", gain: 500, chance: "25%" },
];

export interface ICards {
  type: string;
  img: string;
  id: number;
  isComplited: boolean;
}

export default function Mines() {
  const mine = "url(/kk_frontend/images/mine.png)";
  const diamond = "url(/kk_frontend/images/diamond.png)";
  const classes = useStyles();
  const [isGameStarted, setGameStarted] = useState(false);
  const [minesCount, setMinesCount] = useState<number>(3);

  const [cards, setCards] = useState<ICards[]>([
    { img: mine, id: 1, isComplited: false, type: "mine" },
    { img: mine, id: 2, isComplited: false, type: "mine" },
    { img: diamond, id: 3, isComplited: false, type: "diamond" },
    { img: mine, id: 4, isComplited: false, type: "mine" },
    { img: mine, id: 5, isComplited: false, type: "mine" },
    { img: diamond, id: 6, isComplited: false, type: "diamond" },
    { img: mine, id: 7, isComplited: false, type: "mine" },
    { img: diamond, id: 8, isComplited: false, type: "diamond" },
    { img: mine, id: 9, isComplited: false, type: "mine" },
    { img: mine, id: 10, isComplited: false, type: "mine" },
    { img: diamond, id: 11, isComplited: false, type: "diamond" },
    { img: mine, id: 12, isComplited: false, type: "mine" },
    { img: diamond, id: 13, isComplited: false, type: "diamond" },
    { img: mine, id: 14, isComplited: false, type: "mine" },
    { img: diamond, id: 15, isComplited: false, type: "diamond" },
    { img: mine, id: 16, isComplited: false, type: "mine" },
    { img: mine, id: 17, isComplited: false, type: "mine" },
    { img: diamond, id: 18, isComplited: false, type: "diamond" },
    { img: mine, id: 19, isComplited: false, type: "mine" },
    { img: diamond, id: 20, isComplited: false, type: "diamond" },
    { img: mine, id: 21, isComplited: false, type: "mine" },
    { img: diamond, id: 22, isComplited: false, type: "diamond" },
    { img: mine, id: 23, isComplited: false, type: "mine" },
    { img: diamond, id: 24, isComplited: false, type: "diamond" },
    { img: mine, id: 25, isComplited: false, type: "mine" },
  ]);

  return (
    <Grid
      className={Styles["mines-wrapper"]}
      container
      justifyContent="space-between"
      spacing={3}
    >
      <Grid>
        <Grid container>
          <MinesGame
            cards={cards}
            setCards={setCards}
            isGameStarted={isGameStarted}
            setGameStarted={setGameStarted}
            minesCount={minesCount}
          />
        </Grid>
      </Grid>

      <Grid>
        <Grid className={classes.betPanel}>
          <BetPanel
            setCards={setCards}
            isGameStarted={isGameStarted}
            setGameStarted={setGameStarted}
            minesCount={minesCount}
            setMinesCount={setMinesCount}
          />
        </Grid>

        <History history={mockHistory} />
      </Grid>
    </Grid>
  );
}
