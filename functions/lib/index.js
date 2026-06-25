"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanStorage = void 0;
const scheduler_1 = require("firebase-functions/v2/scheduler");
const app_1 = require("firebase-admin/app");
const storage_1 = require("firebase-admin/storage");
(0, app_1.initializeApp)();
// Runs on the 1st and 15th of every month (every ~2 weeks)
exports.cleanStorage = (0, scheduler_1.onSchedule)('0 0 1,15 * *', async () => {
    const bucket = (0, storage_1.getStorage)().bucket('outsourcing-4-you-893d6.firebasestorage.app');
    const [files] = await bucket.getFiles();
    await Promise.all(files.map((file) => file.delete()));
    console.log(`Storage wipe: deleted ${files.length} files`);
});
//# sourceMappingURL=index.js.map