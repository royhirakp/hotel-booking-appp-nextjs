import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "@/data/Data";
const ItemPerPage = 7;

function calculateTotalNoOfPages(noOfItem: number) {
  let devide: number = noOfItem / ItemPerPage;
  let roundOff: number = Math.round(devide);
  if (devide > roundOff) {
    return roundOff + 1;
  } else {
    return roundOff;
  }
}
interface rooms {
  id: number;
  title: string;
  describtion: string;
  abalableServices: {};
  aditionalServices: string[];
  pricePerNight: string;
  imageurl: string;
  images: string[];
  maxGuest: number;
  abilibiity: any[];
  comments: any[];
}
interface AppState {
  roomsList: rooms[];
  filterRoomList: rooms[];
  paginationData: rooms[];
  roomDataForRoomRoute: any;
  total: number;
  totalNoOfPage: number;
}

const initialState: AppState = {
  roomsList: [],
  filterRoomList: [],
  paginationData: data.slice(0, ItemPerPage),
  total: 55,
  totalNoOfPage: calculateTotalNoOfPages(data.length),
  roomDataForRoomRoute: data[0],
};

const BooksSlice = createSlice({
  name: "booking",
  initialState: initialState,
  reducers: {
    setRoomDataForSinglePage: (state, action: PayloadAction<any>) => {
      let item: any = data.find((item) => item.id === action.payload.id * 1);

      state.roomDataForRoomRoute = item;
    },
    setDpageData: (state, action: PayloadAction<any>) => {
      // console.log("action==", action.payload.data);
      state.roomsList = action.payload.data;
      // let item: any = data.find((item) => item.id === action.payload.id * 1);
      // console.log(item);

      // state.roomDataForRoomRoute = item;
    },
    pagination: (state, action: PayloadAction<any>) => {
      const startIndex = (action.payload.pageNo - 1) * ItemPerPage;
      const endIndex = startIndex + ItemPerPage;
      let paginateArray = state.filterRoomList.slice(startIndex, endIndex);

      state.paginationData = paginateArray;
    },
    filterSearch: (state, action: PayloadAction<any>) => {
      //
      const { checkedItems, formData } = action.payload;
      // roomsList.
      let startDate = formData?.dates[0]?.split("-");
      let endDate = formData?.dates[1]?.split("-");
      let startMonthIndex: any = "0";
      let endMonthIndex: any = "0";
      // find the items which have the same months ;
      let filterA = data.filter((item) => {
        for (let i in item.abilibiity) {
          if (item.abilibiity[i].monthNmae === startDate[1]) {
            startMonthIndex = i + "";
            return true;
          }
        }
      });

      let filterB = filterA.filter((item) => {
        for (let i in item.abilibiity) {
          if (item.abilibiity[i].monthNmae === endDate[1]) {
            endMonthIndex = i + "";
            return true;
          }
        }
      });

      //filter date
      // startmonthindex
      let filterC = filterB.filter((item) => {
        let array: any = item.abilibiity[startMonthIndex].bookDates;
        if (!array.includes(startDate[0] * 1)) {
          return true;
        }
      });
      // end month index
      let filterD = filterC.filter((item) => {
        let array: any = item.abilibiity[endMonthIndex].bookDates;
        if (!array.includes(endDate[0] * 1)) {
          return true;
        }
      });

      // filter services

      // let filterE = filterD.filter((item) => {});

      // console.log(filterD[0].abalableServices, checkedItems);
      let filterE = filterD.filter((item) => {
        // console.log(item.abalableServices, checkedItems);
        let temp = false;
        for (let i in checkedItems) {
          const key = i as
            | "smartPhone"
            | "miniBar"
            | "Sauna"
            | "Breakfast"
            | "Hairdryer"
            | "Coffeemaker"
            | "WidesreenTv";
          // console.log(key, checkedItems[key], item.abalableServices[key]);

          if (checkedItems[key]) {
            if (item.abalableServices[key]) {
              temp = true;
            } else {
              temp = false;
              break;
            }
          }
        }
        return temp;
      });
      let filterF = filterE.filter((item) => {
        const pricePerNight = parseFloat(item.pricePerNight);
        return (
          !isNaN(pricePerNight) &&
          pricePerNight > formData.priceRange[0] &&
          pricePerNight < formData.priceRange[1]
        );
      });
      console.log(filterF);

      state.filterRoomList = filterF;
      state.totalNoOfPage = calculateTotalNoOfPages(filterF.length);
    },
  },
});

export const {
  pagination,
  setDpageData,
  filterSearch,
  setRoomDataForSinglePage,
} = BooksSlice.actions;
export default BooksSlice.reducer;
