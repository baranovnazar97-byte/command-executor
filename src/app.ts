import { FfmpegExecutor } from './commands/ffmpeg/FfmpegExecutor';
import { ConsoleLogger } from './out/consoleLogger/console-logger';

export class App {
  async run() {
    new FfmpegExecutor(ConsoleLogger.getInstance()).execute();
  }
}

const app = new App();
app.run();
