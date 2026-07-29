import { IStreamLogger } from '../../core/handlers/stream-logger.interface';

export class ConsoleLogger implements IStreamLogger {
  private static instance: ConsoleLogger;
  private constructor() {}

  public static getInstance() {
    if (!this.instance) {
      this.instance = new ConsoleLogger();
    }

    return this.instance;
  }

  log(...args: any[]): void {
    console.log('[INFO]:', ...args);
  }
  end(): void {
    console.log('[END]');
  }
  error(...args: any[]): void {
    console.log('[ERROR]:', ...args);
  }
}
