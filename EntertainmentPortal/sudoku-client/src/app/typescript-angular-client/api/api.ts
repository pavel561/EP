export * from './players.service';
import { PlayersService } from './players.service';
export * from './sessions.service';
import { SessionsService } from './sessions.service';
export const APIS = [PlayersService, SessionsService];