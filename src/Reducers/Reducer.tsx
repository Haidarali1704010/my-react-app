import { ListProp } from "../components/ReduxDemo";

interface ListData {
  list: ListProp[];

  buttonFlag: boolean;
}
const initialState: ListData = {
  list: [
    {
      name: "",
      phone: "",
      city: "",
    },
  ],
  buttonFlag: false,
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
    default:
      return state;
  }
};
export default Reducer;
