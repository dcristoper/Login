export const reduce = (state, action) => {
  const { type } = action;

  switch (type) {
    case "USERNAME":
      return { ...state, name: action.payload };
    default:
      throw new Error();
  }
};
