/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsNotEmpty } from 'class-validator';
export default class Project {
  id?: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
