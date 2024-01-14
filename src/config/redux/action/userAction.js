import api from "../../api";

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });
    const response = await api.post("/login", data);
    const user = response.data;
    localStorage.setItem("token", user.token);
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
