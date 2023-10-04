import { t } from "../trpc/trpc";
import { z } from "zod";

const privateProcedure = t.procedure.input(z.object({ userId: z.string() }));

export const userRouter = t.router({
  get: privateProcedure.query(({ input }) => {
    return { id: input };
  }),
  update: privateProcedure
    .input(z.object({ name: z.string() }))
    .mutation((req) => {
        console.log(req.ctx)
      console.log(
        `Updating user ${req.input.userId} to have the name ${req.input.name}`
      );
    }),
});
