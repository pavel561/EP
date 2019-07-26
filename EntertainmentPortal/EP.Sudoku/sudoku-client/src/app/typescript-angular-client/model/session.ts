/**
 * My Title
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Cell } from './cell';
import { DifficultyLevel } from './difficultyLevel';


export interface Session {
  [key: string]: any | any;


    id: number;
    level: DifficultyLevel;
    hint: number;
    score: number;
    error: number;
    isOver: boolean;
    squares?: Array<Cell>;
    playerId: number;
}