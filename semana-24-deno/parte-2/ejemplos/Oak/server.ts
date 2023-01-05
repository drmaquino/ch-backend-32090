import { Application, Context } from "./deps.ts";

const app = new Application();

app.use((ctx: Context) => {
  ctx.response.body = 'Hola Mundo!';
});

// app.addEventListener("listen", ({ hostname, port, secure }) => {
//   console.log(
//     `Listening on: ${secure ? "https://" : "http://"}${hostname ??
//     "localhost"
//     }:${port}`,
//   );
// });

console.log('Servidor Oak escuchando en el puerto 8080');

await app.listen({ port: 8080 });