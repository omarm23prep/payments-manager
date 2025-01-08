import App from "./app";
import IndexRoutes from "./routes/index.routes";
import AuthRoutes from "./routes/auth.routes"; 
import UsersRoutes from "./routes/users.routes";
import PrediosRoutes from "./routes/predios.routes";
import PredioDetailsRoutes from "./routes/prediodetails.routes";
import ColindasRoutes from "./routes/colinda.routes";
import ContribuyentesRoutes from "./routes/contribuyentes.routes";
import PotablesRoutes from "./routes/potables.routes";
import DrenajesRoutes from "./routes/drenajes.routes";

const app = new App([
  new IndexRoutes(),
  new AuthRoutes(),
  new UsersRoutes(),
  new PrediosRoutes(),
  new PredioDetailsRoutes(),
  new ColindasRoutes(),
  new ContribuyentesRoutes(),
  new PotablesRoutes(),
  new DrenajesRoutes(),
])
app.listen();
