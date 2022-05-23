import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { userInfo } from './types';


const initialState: userInfo = {

  userName: "Nhut",
  fullName: "Pham Minh Nhut",
  phoneNumber: "123456789",
  email: "nhutp49@gmail.com",
  password: "123456",
  role: 0,
  avatar: "https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/251374287_946849012708805_4517610628801416846_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iq4047Q04nEAX_7QCHv&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT8LV7YmcreaoP8Tk9zqz4rnFB3c4MQtmAIascddKLBuVg&oe=628FE2BD"
}

  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
  });
  
  // To able to use reducers we need to export them.
  export const { } = userSlice.actions;
  
  export default userSlice.reducer;