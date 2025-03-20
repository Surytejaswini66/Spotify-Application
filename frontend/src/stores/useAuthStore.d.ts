interface AuthStore {
    isAdmin: boolean;
    isLoading: boolean;
    error: string | null;
    checkAdminStatus: () => Promise<void>;
    reset: () => void;
}
export declare const useAuthStore: import("zustand").UseBoundStore<import("zustand").StoreApi<AuthStore>>;
export {};
