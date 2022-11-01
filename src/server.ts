import { Backend } from './backend';
import { Race } from './models/season-models';
import express, { Express, Request, Response } from 'express';
import { Logger } from './utility/logger';
import { DriverStandingsList } from './models/driver-standings-models';
import { ConstructorStandingsList } from './models/constructor-standings-models';
import { Qualifying } from './models/qualifying-models';

const backend = new Backend();
const logger = new Logger();
const port = 4000;

const app: Express = express();

app.get('/season-schedule', (req: Request, res: Response) => {
    backend.getSessionSchedule().then((races: Race[]) => res.send(races));
});

app.get('/driver-standings', (req: Request, res: Response) => {
    backend.getDriverStandings().then((driverStandings: DriverStandingsList[]) => res.send(driverStandings));
});

app.get('/constructor-standings', (req: Request, res: Response) => {
    backend.getConstructorStandings().then((constructorStandings: ConstructorStandingsList[]) => res.send(constructorStandings));
});

app.get('/quali-results/:year/:round', (req: Request, res: Response) => {
    const year: number = parseInt(req.params.year);
    const round: number = parseInt(req.params.round);
    backend.getQualiResultsByYearAndRound(year, round).then((qualiResults: Qualifying) => res.send(qualiResults));
});
  
app.listen(port, () => {
    logger.log('log', `Server is running at https://localhost:${port}`);
});