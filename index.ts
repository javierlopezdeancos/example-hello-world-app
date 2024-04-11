import fastify from "fastify";
import fastifyView from "@fastify/view";
import ejs from "ejs";

const { HOST = "0.0.0.0", PORT = "3000" } = process.env;

const server = fastify({
  logger: true,
});

server.register(fastifyView, {
  engine: {
    ejs,
  },
});

server.get("/", (_, reply) => {
  reply.view("index.ejs", { text: "text" });
});

server.get("/health", (_, reply) => {
  reply.code(200).header("Content-Type", "application/json; charset=utf-8").send({ hello: "server is ok" });
});

server.listen({ host: HOST, port: parseInt(PORT, 10) }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
