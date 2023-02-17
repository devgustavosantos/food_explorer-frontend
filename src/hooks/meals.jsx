import { createContext, useContext, useState } from 'react';

const MealsContext = createContext();

function MealsProvider({ children }) {
  const [mealsInDB, setMealsInDB] = useState([]);
  const [organizedMeals, setOrganizedMeals] = useState([]);

  return (
    <MealsContext.Provider
      value={{ mealsInDB, setMealsInDB, organizedMeals, setOrganizedMeals }}
    >
      {children}
    </MealsContext.Provider>
  );
}

function useMeals() {
  const context = useContext(MealsContext);

  return context;
}

export { MealsProvider, useMeals };
