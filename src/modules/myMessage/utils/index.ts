import service from "../../../shared/services/service"

export async function getHistoryMessages(botId: string, filter: string) {
    try {
        const response = await service.getHistoryMessages(botId, filter)
        return response
    } catch (err) {
        console.log(err)
    }
}
