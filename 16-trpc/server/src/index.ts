import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./routers";

const app = express();
app.use(
  cors({
    credentials: true,
  })
);

app.use("/trpc", createExpressMiddleware({ router: appRouter }));

const server = http.createServer(app);

server.listen(8080, async () => {
  console.log("Server running on http://localhost:8080");
});

export type AppRouter = typeof appRouter;
