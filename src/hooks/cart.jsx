import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [mealsInCart, setMealsInCart] = useState([]);

  function handleAddMeal({ meal_id, title, price, image, amount }) {
    const mealAlreadyAdd = mealsInCart.find(meal => meal_id === meal.meal_id);

    const newMeal = { meal_id, title, price, image, amount };

    if (!mealAlreadyAdd) {
      setMealsInCart(prevState => [newMeal, ...prevState]);

      localStorage.setItem(
        '@food_explorer-meals',
        JSON.stringify([newMeal, ...mealsInCart])
      );

      alert('Prato(s) adicionado(s) com sucesso!');
    } else {
      let updatedAmount = mealAlreadyAdd.amount + amount;
      let limitReached;

      if (updatedAmount >= 10) {
        updatedAmount = 10;
        limitReached = true;
        alert('Cada prato possui um limite de 10 unidades por pedido.');
      }

      const newMealUpdated = {
        ...newMeal,
        amount: updatedAmount,
      };

      const mealsInCardFiltered = mealsInCart.filter(
        meal => meal.meal_id !== meal_id
      );

      setMealsInCart([newMealUpdated, ...mealsInCardFiltered]);

      localStorage.setItem(
        '@food_explorer-meals',
        JSON.stringify([newMealUpdated, ...mealsInCardFiltered])
      );

      if (!limitReached) {
        alert('Prato(s) adicionado(s) com sucesso!');
      }
    }
  }

  function handleRemoveMeal(meal_id) {
    const mealsInCardFiltered = mealsInCart.filter(
      meal => meal.meal_id !== meal_id
    );

    setMealsInCart(mealsInCardFiltered);

    localStorage.setItem(
      '@food_explorer-meals',
      JSON.stringify(mealsInCardFiltered)
    );
  }

  function emptyTheCart() {
    setMealsInCart([]);
    localStorage.removeItem('@food_explorer-meals');
  }

  useEffect(() => {
    const mealsInMemory = JSON.parse(
      localStorage.getItem('@food_explorer-meals')
    );

    if (mealsInMemory) {
      setMealsInCart(mealsInMemory);
    } else {
      setMealsInCart([]);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{ mealsInCart, handleAddMeal, handleRemoveMeal, emptyTheCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart };
