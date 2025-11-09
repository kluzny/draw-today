import type { GameDay, Word } from "../types";
import { create } from "zustand";

export const useDay = create((set) => ({
  days: {},
}));
