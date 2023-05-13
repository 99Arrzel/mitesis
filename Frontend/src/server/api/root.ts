import { createTRPCRouter } from "~/server/api/trpc";
import { octopi } from "~/server/api/routers/octopi_data";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  octopi_data: octopi,
});

// export type definition of API
export type AppRouter = typeof appRouter;
