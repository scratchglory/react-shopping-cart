// STEP 5: Creating CartContext
import { createContext } from "react";

// gives us .Provider and .Consumer
// Providing data so our components can use the info, preventing props drilling
export const CartContext = createContext();
