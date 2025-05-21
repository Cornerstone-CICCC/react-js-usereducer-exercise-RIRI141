type State = {
  isDark: boolean;
  fSize: number;
};

type Action = {
    type: "TOGGLE" | "INCREASE" | "DECREASE"
}

 export const Reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "TOGGLE":
            return {
                ...state,
                isDark: !state.isDark
            }
        case"INCREASE":
            return {
                ...state,
                fSize: state.fSize + 1
            }
        case"DECREASE":
            return {
                ...state,
                fSize: state.fSize -1
            }
        default: 
        return state;
    }
 }