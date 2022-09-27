import  {createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "mohan",

  age: 20,

  status: "code",
};

const userReducer = createSlice({
  name: "person",
  initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
    updateAge(state, action) {
      state.age = action.payload;
    },
    updateStatus(state, action) {
      state.status = action.payload;
    },
  },
});
    export  const { updateName,updateAge,updateStatus } =userReducer.actions

export default userReducer.reducer













// export default createReducer(initialState, (builder) => {
//   builder.addCase("UPDATE_AGE", (state, action) => {
//     state.age = action.payload;
//   });

//   builder.addCase("UPDATE_NAME", (state, action) => {
//     state.name = action.payload;
//   });

//   builder.addCase("UPDATE_STATUS", (state, action) => {
//     state.status = action.payload;
//   });
// });
