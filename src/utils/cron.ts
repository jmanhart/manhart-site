/**
 * cron.ts
 *
 * A scheduled job script that runs once per day.
 * - Uses `run.ts` to trigger the daily Discogs update.
 * - Can be deployed as a serverless function or cron job.
 *
 * Expected Functions:
 * - `runDailyUpdate()`: Calls the main script once per day.
 */

import { main as runSyncProcess } from "./run";
import cron from "node-cron";
import { logInfo } from "./log";

// Schedule the job to run at midnight every day
cron.schedule("0 0 * * *", async () => {
  logInfo("⏰ Running scheduled daily update...");
  await runSyncProcess();
});
