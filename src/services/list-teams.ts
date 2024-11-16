import { FastifyReply, FastifyRequest } from "fastify";
import { teamsData } from "../data/teams/teams-data";
import { Team } from "../models/team";

export const getAllTeams = async (
    resquest: FastifyRequest, 
    reply: FastifyReply
) => {

    try{
        const teams: Team[] = await teamsData();
        reply.type("application/json").code(200).send(teams);
    }catch(error){
        reply.code(500).send({ error: "Internal Server Error" });
    }
    
}

export const getTemById = async (
    request: FastifyRequest<{ Params: { id: string } }>, 
    reply: FastifyReply
) => {

    try{
        const id: number = parseInt(request.params.id);
        const teams: Team[] = await teamsData(id);

        if(teams.length === 0){
            reply.code(404).send({ message: "Team not Found" });
        }else{
            reply.type("application/json").code(200).send(teams);
        }
    }catch(error){
        reply.code(500).send({ error: "Internal Server Error" });
    }
}