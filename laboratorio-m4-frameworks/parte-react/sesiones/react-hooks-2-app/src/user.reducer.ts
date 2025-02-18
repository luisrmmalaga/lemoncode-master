interface User {
  username: string;
  lastname: string;
  fullname: string;
}

const emptyUser: User = {
  username: "",
  lastname: "",
  fullname: "",
};

interface Action {
  type: Actions;
  payload: any;
}

export enum Actions {
  SET_USERNAME,
  SET_LASTNAME,
  RESET,
}

export const userReducer = (state: User, action: Action): User => {
  switch (action.type) {
    case Actions.SET_USERNAME:
      return {
        ...state,
        username: action.payload,
        fullname: `${action.payload} ${state.lastname}`,
      };
    case Actions.SET_LASTNAME:
      return {
        ...state,
        lastname: action.payload,
        fullname: `${state.username} ${action.payload}`,
      };
    case Actions.RESET:
      return emptyUser;
    default:
      return state;
  }
};
