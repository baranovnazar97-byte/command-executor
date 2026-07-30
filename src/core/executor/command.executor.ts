import { ChildProcessWithoutNullStreams } from 'child_process';
import { IStreamLogger } from '../handlers/stream-logger.interface';
import { ICommandExec } from './command.types';

export abstract class CommandExecutor<T> {
  constructor(protected logger: IStreamLogger) {}

  protected abstract prompt(): Promise<T>;

  protected abstract build(input: T): ICommandExec;

  protected abstract spawn(
    command: ICommandExec,
  ): Promise<ChildProcessWithoutNullStreams>;

  protected abstract processStream(
    stream: ChildProcessWithoutNullStreams,
    logger: IStreamLogger,
  ): void;

  public async execute() {
    const res = await this.prompt();
    const command = this.build(res);
    const stream = await this.spawn(command);
    await this.processStream(stream, this.logger);
  }
}
