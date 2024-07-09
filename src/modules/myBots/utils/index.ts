import { parseCookies } from "nookies"
import service from "../../../shared/services/service"

export async function getBotList() {
    try {
        const response = await service.myBoysList({
            type: "website",
            itemsPerPage: 20,
            page: 1,
        })
        return response
    } catch (err) {
        console.log(err, "test")
    }
}
