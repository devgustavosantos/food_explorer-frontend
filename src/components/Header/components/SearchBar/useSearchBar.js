import { useLocation, useNavigate } from 'react-router-dom';

import { useMeals } from '../../../../hooks/meals';

export function useSearchBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const { mealsInDB, setMealsInDB, organizedMeals, setOrganizedMeals } =
    useMeals();

  function handleSearch(event) {
    event.preventDefault();

    const userSearch = event.target.userSearch.value;

    if (location.pathname !== '/') {
      return navigate(`/?search=${userSearch}`);
    }

    const mealsFiltered = mealsInDB.filter(meal =>
      meal.title.toLowerCase().includes(userSearch.toLowerCase())
    );

    setOrganizedMeals(mealsFiltered);
  }
  return { handleSearch };
}
