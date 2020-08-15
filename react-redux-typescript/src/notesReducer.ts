import { Action } from "./actions";

export interface NotesState {
  notes: string[];
}

const initialState = {
  notes: [],
};

export const notesReducer = (
  state: NotesState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_NOTE": {
      //   console.log("reducer: " + action.payload);
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    }
    default:
      return state;
  }
};
