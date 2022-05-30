import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { userInfo } from './types';


const initialState: userInfo = {

  userName: "Nhut",
  fullName: "Phạm Minh Nhựt",
  phoneNumber: "111222333444",
  email: "nhutp49@gmail.com",
  password: "123456",
  role: 0,
  avatar: "https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/251374287_946849012708805_4517610628801416846_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=II6c6L217CgAX8hAS4B&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT96GmMYu0Zo-RYG091M8yglzEVGZEBOPh6QmaKJaU3BEw&oe=6299C5FD"
}

  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      login: (state, actions) => {
        state.email = actions.payload.email
      },
      logout: (state) => {
        state.email = ""
      }
    },
  });
  
  // To able to use reducers we need to export them.
  export const { login, logout } = userSlice.actions;
  
  export default userSlice.reducer;