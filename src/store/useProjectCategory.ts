import { IProjectCategory } from "@/constants";
import { create } from "zustand";

type Store = {
  category: IProjectCategory;
  setCategory: (category: IProjectCategory) => void;
};

export const useProjectCategory = create<Store>()((set) => ({
  category: "3D",
  setCategory: (category) => set({ category }),
}));

// function Counter() {
//   const { count, inc } = useStore()
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   )
// }
