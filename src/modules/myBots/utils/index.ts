import { parseCookies } from "nookies"
import service from "../../../shared/services/service"

export async function getBotList(queryObject:any) {
    try {
        const response = await service.myBoysList(queryObject)
        return response
    } catch (err) {
        console.log(err, "test")
    }
}
