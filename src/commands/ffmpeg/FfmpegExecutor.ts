import {
  ChildProcessWithoutNullStreams,
  spawn as spawnChildProcess,
} from 'child_process';
import { CommandExecutor } from '../../core/executor/command.executor';
import { FileService } from '../../core/files/files.service';
import { IStreamLogger } from '../../core/handlers/stream-logger.interface';
import { StreamHandler } from '../../core/handlers/stream.handler';
import { PromptService } from '../../core/prompt/prompt.service';
import { FfmpegBuilder } from './ffmpeg.builder';
import { ICommandExecFfmpeg, IFFmpegInput } from './ffmpeg.types';

export class FfmpegExecutor extends CommandExecutor<IFFmpegInput> {
  private fileService: FileService;
  private promptService: PromptService;

  constructor(logger: IStreamLogger) {
    super(logger);
    this.fileService = new FileService();
    this.promptService = new PromptService();
  }

  protected async prompt(): Promise<IFFmpegInput> {
    const width = await this.promptService.input<number>(
      'Enter the video width:',
      'number',
    );

    const height = await this.promptService.input<number>(
      'Enter the video height:',
      'number',
    );

    const name = await this.promptService.input<string>(
      'Enter the video name:',
      'input',
    );

    const path = await this.promptService.input<string>(
      'Enter the pathname:',
      'input',
    );

    return {
      width,
      name,
      path,
      height,
    };
  }

  protected build({
    width,
    height,
    path,
    name,
  }: IFFmpegInput): ICommandExecFfmpeg {
    const output = this.fileService.getFilePath(path, name, 'mp4');

    const args = new FfmpegBuilder()
      .input(path)
      .setVideoSize(width, height)
      .output(output);

    return {
      command: 'ffmpeg',
      args,
      output,
    };
  }

  protected async spawn({
    output,
    command,
    args,
  }: ICommandExecFfmpeg): Promise<ChildProcessWithoutNullStreams> {
    this.fileService.deleteFileIfExists(output);
    return spawnChildProcess(command, args);
  }

  protected processStream(stream: ChildProcessWithoutNullStreams): void {
    const handler = new StreamHandler(this.logger);
    handler.processOutput(stream);
  }
}
