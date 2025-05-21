import { useReducer } from "react";
import { Reducer } from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(Reducer, {
    isDark: false,
    fSize: 16,
  });

  return (
    <div 
      className={`min-h-screen p-6 transition-colors duration-300 ${
        state.isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div style={{ fontSize: `${state.fSize}px` }}>
        <h1 className="mb-6 font-bold text-5xl">Welcome to Gustavo's kingdom</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio deleniti mollitia natus aperiam sapiente facere fugiat veniam recusandae cupiditate dolorum, animi fugit quaerat esse distinctio amet rerum commodi. Id, consequuntur?</p>
        <p className="mb-4">
          Current THEME: {state.isDark ? "DARK" : "LIGHT"}
        </p>
        <p className="mb-8">
          Current font: {state.fSize}px
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button 
          className={`px-4 py-2 rounded transition-colors ${
            state.isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => dispatch({ type: "TOGGLE" })}
        >
          Toggle Dark Mode
        </button>
        <button 
          className={`px-4 py-2 rounded transition-colors ${
            state.isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => dispatch({ type: "INCREASE" })}
        >
          Increase Font Size
        </button>
        <button 
          className={`px-4 py-2 rounded transition-colors ${
            state.isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => dispatch({ type: "DECREASE" })}
        >
          Decrease Font Size
        </button>
      </div>
    </div>
  );
};

export default App;