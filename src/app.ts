import dotenv from "dotenv";
import { testFoo } from "./modules/testFoo";

dotenv.config();

const m: string = "Hello";
testFoo(m);
