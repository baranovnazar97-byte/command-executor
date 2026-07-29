import { PromptType } from './prompt.types';
export declare class PromptService {
    input<T>(message: string, type: PromptType): Promise<[T] extends [never] ? any : T>;
}
//# sourceMappingURL=prompt.service.d.ts.map