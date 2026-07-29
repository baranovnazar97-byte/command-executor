import { PromptService } from './core/prompt/prompt.service';
import { ConsoleLogger } from './out/consoleLogger/console-logger';

export class App {
  async run() {
    try {
      const result = await new PromptService().input<number>(
        'Number',
        'number',
      );

      ConsoleLogger.getInstance().log('Success', result);
    } catch (error) {
      ConsoleLogger.getInstance().error(String(error));
    }
  }
}

const app = new App();
app.run();
