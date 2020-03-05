// STEP 2:  Creating ProductContext
import { createContext } from "react";

// gives us .Provider and .Consumer
// Providing data so our components can use the info, preventing props drilling
export const ProductContext = createContext();
