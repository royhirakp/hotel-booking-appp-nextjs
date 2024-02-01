import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  bookingStage: number;
  totalPrice: number;
  room: any;
  additionalservices: {
    message: boolean;
    airportPickUp: boolean;
    tour: boolean;
  };
  userInfo: any;
  checkIn_checkOut: [];
  spicalRequest: string;
  paymentMethod: string;
  IaGREEcHECKbOX: boolean;
}

const initialState: AppState = {
  bookingStage: 0,
  totalPrice: 0,
  room: {},
  additionalservices: { message: false, airportPickUp: false, tour: false },
  userInfo: {},
  checkIn_checkOut: [],
  spicalRequest: "",
  paymentMethod: "",
  IaGREEcHECKbOX: false,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState: initialState,
  reducers: {
    handelPreviousFromState: (state, action) => {
      if (state.bookingStage <= 0) return;
      state.bookingStage = state.bookingStage - 1;
    },
    handelNextsFromState: (state, action) => {
      if (state.bookingStage > 2) return;
      state.bookingStage = state.bookingStage + 1;
    },
    refreshPageOrMakeStageZero: (state) => {
      state.bookingStage = 0;
      state.totalPrice = 0;
      state.room = {};
      state.additionalservices = {
        message: false,
        airportPickUp: false,
        tour: false,
      };
      state.userInfo = {};
      state.checkIn_checkOut = [];
      state.spicalRequest = "";
      state.paymentMethod = "";

      // refresh all the data
    },
    addRoomData: (state, action) => {
      state.room = action.payload.item;
      state.userInfo = action.payload.userInfo;
      // set room init price
      state.totalPrice = action.payload.item.pricePerNight * 1;
    },

    addAditionalService: (state, action) => {
      let stateOfTheCheckbox = action.payload.state;
      if (action.payload.sevice === "AirPort Pickup") {
        state.additionalservices.airportPickUp = stateOfTheCheckbox;
        if (stateOfTheCheckbox) {
          state.totalPrice = state.totalPrice + 100;
        } else {
          state.totalPrice = state.totalPrice - 100;
        }
      } else if (action.payload.sevice === "Massage & Spa") {
        state.additionalservices.message = stateOfTheCheckbox;
        if (stateOfTheCheckbox) {
          state.totalPrice = state.totalPrice + 65;
        } else {
          state.totalPrice = state.totalPrice - 65;
        }
      } else if (action.payload.sevice === "SigtheeingTour") {
        state.additionalservices.tour = stateOfTheCheckbox;
        if (stateOfTheCheckbox) {
          state.totalPrice = state.totalPrice + 165;
        } else {
          state.totalPrice = state.totalPrice - 165;
        }
      }
    },

    setSpacialRequest: (state, action) => {
      state.spicalRequest = action.payload.data;
    },

    setIaGREEcHECKbOX: (state, action) => {
      state.IaGREEcHECKbOX = action.payload.stateofThecheckbox;
    },

    setPaymentInfo: (state, action) => {
      console.log(action.payload);
      state.paymentMethod = action.payload.data;
    },
  },
});

export const {
  handelPreviousFromState,
  handelNextsFromState,
  refreshPageOrMakeStageZero,
  addRoomData,
  addAditionalService,
  setSpacialRequest,
  setIaGREEcHECKbOX,
  setPaymentInfo,
} = bookingSlice.actions;
export default bookingSlice.reducer;
