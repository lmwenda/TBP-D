enum user_endpoints {
    GET_USER = "/user/:user_id",
    POST_USER = "/create",
    UPDATE_USER = "/update/user/:user_id", // USER_ID REQUIRED
    DELETE_USER = "/delete/user/:user_id", // USER_ID REQUIRED
    GET_ALL_USERS = "/get/all",
    LOGIN_USER = "/login"
}

export { user_endpoints };