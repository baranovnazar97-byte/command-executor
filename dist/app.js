"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const prompt_service_1 = require("./core/prompt/prompt.service");
class App {
    async run() {
        const result = await new prompt_service_1.PromptService().input('Number', 'number');
        console.log(result);
    }
}
exports.App = App;
const app = new App();
app.run();
//# sourceMappingURL=app.js.map