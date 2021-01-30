import { ListProp } from "../components/ReduxDemo";

interface ListData {
  list: ListProp[];
  user: any[];
}
const initialState: ListData = {
  list: [],
  user: [],
};
const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "Set_Flag":
      return {
        ...state,
        buttonFlag: action.payload,
      };
    case "Add_User":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "User_Click":
      return {
        ...state,
        user: [action.payload],
      };
    case "Delete_User":
      // const newList = state.list.filter(
      //   (item: any) => item.phone !== action.payload
      // );
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
export default Reducer;
