import { FastifyReply, FastifyRequest } from "fastify";
import { driversData } from "../data/drivers/drivers-data";
import { Driver } from "../models/driver";

export const getAllDrivers = async (
    resquest: FastifyRequest, 
    reply: FastifyReply
) => {

    try{
        const drivers: Driver[] = await driversData();
        reply.type("application/json").code(200).send(drivers);
    }catch(error){
        reply.code(500).send({ error: "Internal Server Error" });
    }
    
}

export const getDriverById = async (
    request: FastifyRequest<{ Params: { id: string } }>, 
    reply: FastifyReply
) => {

    try{
        const id: number = parseInt(request.params.id);
        const drivers: Driver[] = await driversData(id);

        if(drivers.length === 0){
            reply.code(404).send({ message: "Driver not Found" });
        }else{
            reply.type("application/json").code(200).send(drivers);
        }
    }catch(error){
        reply.code(500).send({ error: "Internal Server Error" });
    }
}