import api from "../../api";

export const InputRecipe = (data) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_RECIPE_REQUEST" });
    const response = await api.post("/addrecipe", data);
    const recipe = response.data;
    dispatch({ type: "CREATE_RECIPE_SUCCESS", payload: recipe });
    return recipe;
  } catch (error) {
    dispatch({
      type: "CREATE_RECIPE_FAILURE",
      payload: error.response.data.message,
    });
    throw error.response;
  }
};

export const GetRecipe =
  ({ sort, keyword }) =>
  async (dispatch) => {
    try {
      dispatch({ type: "GET_RECIPE_REQUEST" });
      const response = await api.get(`/search?sort=${sort}&keyword=${keyword}`);
      const recipe = response.data;
      dispatch({ type: "GET_RECIPE_SUCCESS", payload: recipe });
      return recipe;
    } catch (error) {
      dispatch({
        type: "GET_RECIPE_FAILURE",
        payload: error.response.data.message,
      });
      throw error.response;
    }
  };
