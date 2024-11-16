import fastify from "fastify";
import { teamsData } from "./data/teams/teams-data";
import { driversData } from "./data/drivers/drivers-data";
import cors from "@fastify/cors"
import { DriverParams } from "./models/driver-params";
import { getAllTeams, getTemById } from "./services/list-teams";
import { getAllDrivers, getDriverById } from "./services/list-drivers";

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*",
});

server.get("/teams", getAllTeams);

server.get("/teams/:id", getTemById);

server.get("/drivers", getAllDrivers);

server.get("/drivers/:id", getDriverById);

server.listen({ port: 3333 }, () => console.log("server init port 3333"));