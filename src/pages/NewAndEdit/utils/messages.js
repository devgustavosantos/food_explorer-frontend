export const errorMessages = {
  newIngredientEmpty: {
    user: 'Para cadastrar um novo ingrediente é necessário dar um nome a ele. Verifique e tente novamente.',
    dev: 'The newIngredient is empty.',
  },

  nameAlreadyRegistered: {
    user: 'Este nome já foi cadastrado em outro ingrediente. Verifique e tente novamente.',
    dev: 'The name of newIngredient is already registered in database.',
  },

  anyPhotoAdded: {
    user: 'Nenhuma foto foi adicionada! Verifique e tente novamente.',
    dev: 'The photo was not added!',
  },

  onRegisterIngredient: {
    dev: 'Ingredient was not registered successfully.',
  },

  onRegisterPhoto: {
    dev: 'Photo was not registered successfully.',
  },

  genericInputEmpty: {
    user: `
    Parece que um dos seguintes campos está vazio:
      - Nome;
      - Categoria;
      - Ingredientes;
      - Preço;
      - Descrição.
    Por favor verifique esses campos e tente novamente.`,
    dev: 'Any input is empty.',
  },

  anyIngredientAdd: {
    user: 'Para cadastrar um prato, é necessário adicionar ao menos um ingrediente! Verifique e tente novamente.',
    dev: 'Any  ingredient was added.',
  },

  priceInvalid: {
    user: 'O preço digitado é inválido! Por favor verifique e tente novamente.',
    dev: 'The price is not valid.',
  },

  newIngredientNotAdd: {
    user: 'Parece que um novo ingrediente foi digitado, mas não foi adicionado! Clique para adiciona-lo, ou deixe o campo vazio.',
    dev: 'A new ingredient was typed, but not added.',
  },

  onRegisterMeal: {
    dev: 'Meal was not registered successfully.',
  },
};
