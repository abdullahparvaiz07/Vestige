import { create } from "zustand";

type QuickViewState = {
  slug: string | null;
  open: (slug: string) => void;
  close: () => void;
};

export const useQuickView = create<QuickViewState>((set) => ({
  slug: null,
  open: (slug) => set({ slug }),
  close: () => set({ slug: null }),
}));
