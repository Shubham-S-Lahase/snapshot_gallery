import { createContext, useState } from "react";

export const CategoryContext = createContext("");

function CategoryContextProvider({children}){
    const [category, setCategory] = useState("Home");
    return(
        <CategoryContext.Provider value={{category, setCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryContextProvider;