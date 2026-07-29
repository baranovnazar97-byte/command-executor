"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptService = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
class PromptService {
    async input(message, type) {
        const { result } = await inquirer_1.default.prompt([
            {
                type,
                name: 'result',
                message,
            },
        ]);
        return result;
    }
}
exports.PromptService = PromptService;
//# sourceMappingURL=prompt.service.js.map