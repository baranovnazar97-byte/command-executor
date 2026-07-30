import { ICommandExec } from '../../core/executor/command.types';

export interface IFFmpegInput {
  height: number;
  width: number;
  name: string;
  path: string;
}

export interface ICommandExecFfmpeg extends ICommandExec {
  output: string;
}
