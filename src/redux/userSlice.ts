import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { userInfo } from './types';


const initialState: userInfo = {

  userName: "Nhut",
  fullName: "Phạm Minh Nhựt",
  phoneNumber: "123456789",
  email: "",
  password: "123456",
  role: 0,
  avatar: "https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-1/251374287_946849012708805_4517610628801416846_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=miy9VtdrYuEAX-bitxC&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT-6Wyu8iGAmdAaQns2CptPXt-X-bYpLVjQtchTUq2mJTg&oe=62A3503B"
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