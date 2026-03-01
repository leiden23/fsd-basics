import type { User } from '@supabase/supabase-js';
import { create } from 'zustand'
import { persist } from 'zustand/middleware';

type UserStore = {
    user: User | null;
    setUser: (value: User | null) => void;    
}

export const useUser = create<UserStore>()(persist((set) => ({
    user: null,
    setUser: (value) => set({user: value})
}),  { name: 'UserStore' }
))
