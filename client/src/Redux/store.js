import { createStore } from "redux";

let inState = {
  show: false,
  userData:[],
  isLogin: false
};

const appReducer = (state = inState, action) => {
  let copy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "show":
      copy.show = true;
      return copy;

    case "hide":
      copy.show = false;
      return copy;

    case "userData":
      copy.userData = action.payload;
      return copy;  

    default:
      return copy;
  }
};

let store = createStore(appReducer);

export default store;
