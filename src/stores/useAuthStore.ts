import { User } from '@/lib/types';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

/**
 * @example
 * user {id,email,nickname,createdAt,updatedAt,profileImgUrl}을 얻을 수 있다.
 * const { user } = useAuthStore();
 * <p>{user.id}</p>
 * @author 남기연
 */

interface AuthState {
  user: User | null;
  setAuth: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setAuth: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
