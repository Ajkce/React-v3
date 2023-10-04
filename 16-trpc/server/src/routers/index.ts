import { t } from "../trpc/trpc";
import { userRouter } from "./users";

export const appRouter = t.router({
  sayHi: t.procedure.query(() => {
    return "Hi";
  }),
  logtoServer: t.procedure
    .input((v) => {
      if (typeof v === "string") {
        return v;
      }
      throw new Error("Invalid input expected string");
    })
    .mutation((req) => {
      console.log(`client says : ${req.input}`);
      return true;
    }),
    user: userRouter
});

