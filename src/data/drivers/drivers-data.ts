import path from "path";
import fs from "fs"
import { Driver } from "../../models/driver";

const pathData = path.join(__dirname, "../drivers/drivers.json");

export const driversData = async (id?: number): Promise<Driver[]> => {

    try {
        const rawData: string = fs.readFileSync(pathData, "utf-8");
        let drivers: Driver[] = JSON.parse(rawData);

        if(id){
            drivers = drivers.filter((driver: Driver) => driver.id === id);
        } 

        return drivers;
        
    }catch(error){
        console.log(error);
        throw error;
    }

}