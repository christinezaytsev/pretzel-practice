import express, {Application, Request, Response, NextFunction} from 'express';

const app: Application = express();

// function add takes two arguments (numbers a, b) and returns a number
const add = (a: number, b: number): number => a+b;

// create endpoint
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log(add(5,5))
    res.send('Hello world');
});

// create another endpoint
app.get('/test', (req: Request, res: Response) => {
    res.send('Hello test');
});

// listen on port 5000 and log to terminal
app.listen(5000, () => console.log('Server running'));