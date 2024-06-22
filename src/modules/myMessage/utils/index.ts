import service from "../../../shared/services/service"

export async function getHistoryMessages() {
    try {
        const response = await service.getHistoryMessages()
        return response
    } catch (err) {
        console.log(err)
    }
}
