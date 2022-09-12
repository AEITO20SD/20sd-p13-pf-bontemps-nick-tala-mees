import express, { Application, Request, Response, NextFunction} from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});