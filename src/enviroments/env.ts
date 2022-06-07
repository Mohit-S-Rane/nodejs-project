import { ProdEnviroment } from "./prod.env";
import { DevEnviroment } from "./dev.env";

export interface Environment {
  db_url: string;
}

export function getEnvironmentVariables() {
  if (process.env.NODE_ENV === "production") {
    return ProdEnviroment;
  } else {
    return DevEnviroment;
  }
}
