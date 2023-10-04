import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../../server/src";

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:8080/trpc",
    }),
  ],
});

async function main() {
  const result = await client.sayHi.query();
  console.log(result);
  const input = await client.logtoServer.mutate("Hi from server");
  console.log(input);
  const user = await client.user.get.query({ userId: "fdsr3qsdvcsdf" });
  console.log(user);
  const update = await client.user.update.mutate({
    userId: "gdsfsdf",
    name: "Ajaya",
  });
  console.log(update);
}
main();

const App = () => {
  return <div>App</div>;
};

export default App;
