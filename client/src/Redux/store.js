import { createStore } from "redux";

let inState = {
  userData: [],
  isLogin: false,
  allEvent: [],
  attending: [],
  selectedEventId: "",
  selectedEventData: [],
  selectedMyEventId: "",
  guests: [],
  status: "",

  mobile: "",

  ftheme: "",
  ftype: "",
  fcharges: "",
  fparking: "",
  fstay: "",
  fsmoking: "",
  fbeverages: "",
};

const appReducer = (state = inState, action) => {
  let copy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "userData":
      copy.userData = action.payload;
      return copy;

    case "forget":
      copy.mobile = action.payload;
      return copy;

    case "forgetClean":
      return (copy.mobile = ""), (copy.status = "");

    case "status":
      copy.status = action.payload;
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

    case "back":
      copy.selectedEventId = "";
      return copy;

    case "eventData":
      copy.selectedEventData = action.payload;
      return copy;

    case "attending":
      copy.attending = action.payload;
      return copy;

    case "myeventId":
      copy.selectedMyEventId = action.payload;
      return copy;

    case "removeMyEventId":
      copy.selectedMyEventId = "";
      return copy;

    case "Guests":
      copy.guests = action.payload;
      return copy;

    case "ftheme":
      copy.ftheme = action.payload;
      return copy;

    case "ftype":
      copy.ftype = action.payload;
      return copy;

    case "fcharges":
      copy.fcharges = action.payload;
      return copy;

    case "fparking":
      copy.fparking = action.payload;
      return copy;

    case "fstay":
      copy.fstay = action.payload;
      return copy;

    case "fsmoking":
      copy.fsmoking = action.payload;
      return copy;

    case "fbeverages":
      copy.fbeverages = action.payload;
      return copy;

    default:
      return copy;
  }
};

let store = createStore(appReducer);

export default store;
