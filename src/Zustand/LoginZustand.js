import { create } from "zustand";
import * as SecureStore from 'expo-secure-store';

export const useAuthStore = create((set) => ({
    
    UserSession:null,
    
    //Method for logIn users in , and stored them in memory
    login: async(userInfo) => {
        const session = JSON.stringify(userInfo); 
        await SecureStore.setItemAsync("sessionInfo", session);
        set({ UserSession: userInfo})
    },

    // Method for logout user and dispose the memory
    logout: async() => {
        await SecureStore.setItemAsync("sessionInfo");
        set({UserSession:null})
    },
}));