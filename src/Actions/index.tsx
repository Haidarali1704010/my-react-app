import store from "../Store";
import { ListProp } from "../components/ReduxDemo";
console.log(store.getState);
const Set_Flag = "Set_Flag";
export const setFlag = (flag: boolean) => {
  return {
    type: Set_Flag,
    payload: flag,
  };
};
const Add_User = "Add_User";
export const AddUser = (newItem: ListProp) => {
  return {
    type: Add_User,
    payload: newItem,
  };
};
