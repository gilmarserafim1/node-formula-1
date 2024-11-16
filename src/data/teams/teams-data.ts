import path from "path";
import fs from "fs"
import { Team } from "../../models/team";

const pathData = path.join(__dirname, "../teams/teams.json");

export const teamsData = async (id?: number): Promise<Team[]> => {

    try {
        const rawData: string = fs.readFileSync(pathData, "utf-8");
        let teams: Team[] = JSON.parse(rawData);

        if(id){
            teams = teams.filter((team: Team) => team.id === id);
        } 

        return teams;
        
    }catch(error){
        console.log(error);
        throw error;
    }

}