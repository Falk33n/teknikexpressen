import { postRouter } from '@/server/api/routers/post';
import { createCallerFactory, createTRPCRouter } from '@/server/api/trpc';

export const appRouter = createTRPCRouter({
  post: postRouter
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;
