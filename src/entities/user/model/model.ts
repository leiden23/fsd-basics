import type { User } from '@supabase/supabase-js';
import { create } from 'zustand'

type UserStore = {
    user: User | null;
    setUser: (value: User | null) => void;    
}

export const useUser = create<UserStore>((set) => ({
    user: null,
    setUser: (value) => set({user: value})
}))