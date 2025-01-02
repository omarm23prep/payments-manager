// import express, { Request, Response } from 'express';

import App from "./app";
import IndexRoute from "./routes/index.route";
import AuthRoutes from "./routes/auth.route"; 
import UsersRoute from "./routes/users.routes";
import PrediosRoute from "./routes/predios.routes";
import PredioDetailsRoute from "./routes/prediodetails.route";
import ColindasRoute from "./routes/colinda.routes";
import ContribuyentesRoute from "./routes/contribuyentes.route";

// const app = express();
// const port = process.env.PORT || 3001;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, TypeScript Express!');
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

const app = new App([
  new IndexRoute(),
  new AuthRoutes(),
  new UsersRoute(),
  new PrediosRoute(),
  new PredioDetailsRoute(),
  new ColindasRoute(),
  new ContribuyentesRoute(),
])
app.listen()
