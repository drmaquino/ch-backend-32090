import { serve } from "https://deno.land/std@0.152.0/http/server.ts";

const port = parseInt(Deno.env.get('PORT') ?? '8080');

const handler = (request: Request): Response => {
  const body = `Your user-agent is:\n\n${request.headers.get("user-agent") ?? "Unknown"
    }`;

  return new Response(body, { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);
await serve(handler, { port });
