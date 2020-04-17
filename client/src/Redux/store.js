import { createStore } from "redux";

let inState = {
  userData: [],
  isLogin: false,
  allEvent: [],
  attending: [],
  selectedEventId: "",
  selectedEventData: [],
};

const appReducer = (state = inState, action) => {
  let copy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "userData":
      copy.userData = action.payload;
      return copy;

    case "login":
      copy.isLogin = true;
      // console.log("login", copy.isLogin);
      return copy;

    case "loginFalse":
      copy.isLogin = false;
      console.log("login", copy.isLogin);
      return copy;

    case "userDirect":
      copy.userData = [];
      return copy;

    case "replace":
      copy.userData = action.payload;
      return copy;

    case "allEvent":
      copy.allEvent = action.payload;
      return copy;

    case "eventId":
      copy.selectedEventId = action.payload;
      return copy;

    case "eventData":
      copy.selectedEventData = action.payload;
      return copy;

    case "attending":
      copy.attending = action.payload;
      return copy;

    default:
      return copy;
  }
};

let store = createStore(appReducer);

export default store;
