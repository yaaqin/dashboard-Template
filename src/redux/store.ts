// src/redux/store.ts
import { configureStore, UnknownAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Buat store dan gabungkan semua reducer
const store = configureStore({
  reducer: {
    counter: counterReducer, // masukkan slice yang telah kita buat (contohnya counter)
  },
});

// Definisikan RootState dan AppDispatch untuk kemudahan penggunaan TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hook kustom untuk dispatch dan selector yang mendukung TypeScript
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
function counterReducer(state: unknown, action: UnknownAction): unknown {
    throw new Error("Function not implemented.");
}

