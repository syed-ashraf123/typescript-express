import express from "express";
import { Application, Request, Response, NextFunction } from "express";
const app: Application = express();

const add = (a: number, b: number): number => {
  return a + b;
};

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  const result: number = add(5, 2);
  res.send(String(result));
});

app.listen(4000);
