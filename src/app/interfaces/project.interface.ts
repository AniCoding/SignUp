import { ECircleCount } from "../enums/circle-count.enum";
import {ICircle} from "./circle.interface";

export interface IProject {
  id: string;
  name: string;
  circles: ICircle[];
  size: ECircleCount;
}
