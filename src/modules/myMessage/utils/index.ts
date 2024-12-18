import service from "../../../shared/services/service"

export async function getHistoryMessages(botId: string, filter: string) {
    try {
        const response = await service.getHistoryMessages(botId, filter)
        return response
    } catch (err) {
        console.log(err)
    }
}
export async function downloadHistoryMessages(botId: string) {
    try {
        const response = await service.downloadHistoryMessages(botId)
        return response
    } catch (err) {
        console.log(err)
    }
}
export async function getBotConversationById(botId: string, filter: string) {
    try {
        const response = await service.getBotConversationById(botId, filter)
        return response
    } catch (err) {
        console.log(err)
    }
}

export async function sendOperatorMessage(conversationId: string, message: string) {
    try {
        const response = await service.sendOperatorMessage({ conversationId, message });
        return response?.data;
    } catch (err) {
        console.log(err);
    }
}

export async function fetchBotLiveConversations(botId: string) {
    try {
        const response = await service.fetchLiveConversationsByBotId(botId );
        return response;
    } catch (err) {
        console.log(err);
    }
}

export async function fetchLiveConversationHistory(botId: string, conversationId: string) {
    try {
        const response = await service.fetchLiveConversationHistory({ botId, conversationId });
        return response?.data;
    } catch (err) {
        console.log(err);
    }
}