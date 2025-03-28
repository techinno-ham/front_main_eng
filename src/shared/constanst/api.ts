export const API = {
    CHECK_TOKEN: "/auth/auth-check",
    UPDATE_PROFILE: "/auth/update-user",
    UPDATE_PROFILE_IMAGE: "/auth/update-user/profileImage",
    FETCH_LINKS: "/crawler/links",
    FETCH_LINKS_Demo: "/crawler/linksDemo",
    CREATE_BOT: "/mybots/create",
    UPDATE_DATASOURCE: "/mybots/dataSource/update",
    UPDATE_DATASOURCE_QA: "/mybots/dataSource/update/qa",

    UPDATE_GENERAL: "/mybots/configs/updateGeneral",
    UPDATE_MODEL: "/mybots/configs/updateModel",
    UPDATE_UI: "/mybots/configs/updateUi",
    UPDATE_SECURITY: "/mybots/configs/updateSecurity",
    CREATE_INITFORMS: "/forms/create",
    My_BOTS: "/mybots/list",
    My_BOTS_COUNT: "/mybots/count",
    MY_DATASOURCE_WITH_ID: "/mybots/dataSource",
    MY_CONFIGS_WITH_ID: "/mybots/configs",

    DELETE_BOTS: "/mybots/delete",

    //Live Chat
    SEND_OPERATOR_MESSAGE: "/live/message/operator",
    FETCH_BOT_LIVE_CONVERSATIONS_IDS: "/live/conversation-ids",
    FETCH_LIVE_CONVERSATION_HISTORY: "/live/history",

    //Form apis
    DELETE_FORMS: "/forms/delete",
    UPDATE_FORMS:"/forms/update",
    ACTIVE_FORM:"/forms/active",
    INACTIVE_FORM:"/forms/inactive",
    GETFROM_DATA:"/forms",
    GETCONTACT_DATA_BYBOTID:"/forms/contacts",
    DELETE_CONTACT:"/forms/contacts",
    UPDATE_CONTACT:"/forms/contacts",


    //History

    // reset password
    RESET_PASSWORD_REQUEST: "/user/reset-password-request",
    RESET_PASSWORD: "/user/reset-password",
    // validation config
    CONFIG: "/config",
    // gallery main page
    GET_GALLERY: "/project/public/list",
    //
    STATISTICS: "/statistics",
    // fork & duplicate
    DUPLICATE_PUBLIC_PROJECT: "/project/public/duplicate",
    DUPLICATE_SHARED_PUBLIC_PROJECT: "/share/{id}/fork",

    // tour
    GET_TOUR: "/user/tour",
    UPDATE_TOUR: "/user/tour",

    // blog
    BLOG_CATEGORIES: "/categories",
    BLOG_ARTICLES: "/articles?sort=id:desc",

    GET_BLOG:
        "/articles?sort=id:desc&populate[cover][populate]=1&populate[blocks][populate]=*&populate[category][populate]=article[$limit]=1&populate[author][populate]=avatar&filters[slug][$eq]={slug}",
    INCREMENT_BLOG_VIEW: "/articles/{id}",

    GET_PAGE_CONTENT: "/pages/{pageId}?populate=*",

    // upload
    UPLOAD_CUSTOM_FILE: "/file",
    GET_CUSTOM_FILE: "/file",

    // gallery
    GET_GALLERY_ITEM: "/project/public/get/{id}",
    GET_GALLERY_SHARED_ITEM: "/share/{id}",
    // email activation
    USER_ACTIVATION_EMAIL_REQUEST: "/user/verification/retry",

    CHANGE_PROFILE: "/user/profile",
    REMOVE_AVATAR: "/user/avatar",
    CHANGE_AVATAR: "/user/avatar",

    // pricing
    GET_SUBSCRIPTION_PLAN: "/stripe/prices/{name}",
    SUBSCRIPTION_CHECKOUT: "/stripe/checkout/{id}",
    SUBSCRIPTION_DATA: "/stripe/subscription",
    SUBSCRIPTION_PORTAL: "/stripe/portal",
    // notifications
    NOTIFICATIONS: "/user/notifications",
    SEEN_NOTIFICATION: "/user/notifications/{id}/seen",
    SEEN_ALL_NOTIFICATIONS: "/user/notifications/all/seen",

    //Stripe
    STRAPI_CHECKOUT: "/stripe/checkout",
    STRIPE_SESSION: "/stripe/session-details?session_id="
}
