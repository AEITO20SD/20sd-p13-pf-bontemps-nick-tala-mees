import express, { Application, Request, Response, NextFunction} from 'express';
var cors = require('cors')

const app: Application = express();

app.use(cors()) // Use this after the variable declaration

app.get('/', (req: Request, res: Response, next: NextFunction) => {
});

app.get("/api", (req: Request, res: Response, next: NextFunction) => {
    // res.json({
    //     "statusMessage": 'Success'
    // })
    res.send({
        message: 'Success'
    }  
    );
});

app.listen(3080, () => {
    console.log('Server running on port 3080');
});