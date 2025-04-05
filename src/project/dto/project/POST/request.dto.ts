/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsNotEmpty } from 'class-validator';
export default class Project {
  @IsString()
  @IsNotEmpty()
  name: string;
}
