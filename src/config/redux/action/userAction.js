import api from "../../api";

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });
    const response = await api.post("/login", data);
    const user = response.data;
    console.log(user);
    localStorage.setItem("token", user.token);
    localStorage.setItem("userId", user.data.users_id);
    dispatch({ type: "LOGIN_SUCCESS", payload: user });
    return user;
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error.response.data.message });
    throw error.response;
  }
};

export const Regis = (data) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_REQUEST" });
    const response = await api.post("/adduser", data);
    const user = response.data;
    dispatch({ type: "REGISTER_SUCCESS", payload: user });
    return user;
  } catch (error) {
    dispatch({
      type: "REGISTER_FAILURE",
      payload: error.response.data.message,
    });
    throw error.response;
  }
};
