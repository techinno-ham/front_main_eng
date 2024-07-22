export const API = {
    CHECK_TOKEN: "/auth/auth-check",
    FETCH_LINKS: "/crawler/links",
    CREATE_BOT: "/mybots/create",
    UPDATE_DATASOURCE: "/mybots/dataSource/update",
    UPDATE_GENERAL: "/mybots/configs/updateGeneral",
    UPDATE_MODEL: "/mybots/configs/updateModel",
    UPDATE_UI: "/mybots/configs/updateUi",
    UPDATE_SECURITY: "/mybots/configs/updateSecurity",
    My_BOTS: "/mybots/list",
    MY_DATASOURCE_WITH_ID: "/mybots/dataSource",
    MY_CONFIGS_WITH_ID: "/mybots/configs",

    DELETE_BOTS: "/mybots/delete",
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
}
