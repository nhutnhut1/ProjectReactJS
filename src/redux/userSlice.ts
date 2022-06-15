import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { userInfo } from './types';


const initialState: userInfo = {

  userName: "minhnhut",
  fullName: "Minh Nhựt",
  phoneNumber: "067924242",
  email: "nhutp48@gmail.com",
  password: "nhuntnh",
  role: 0,
  avatar: "https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/251374287_946849012708805_4517610628801416846_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UFFxfmnuFnYAX_zgTpx&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT8YaTA4n0UKCWjbSztQJJ7dFmtXzRb43MlEsIRzugak3g&oe=62AF86BD"
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