import Joke from "./components/Joke";
import "./App.css";
 
function App() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-800">
            <h1 className="text-white font-bold text-3xl">Tech is Cool but lets look at some comedy out of it</h1>
            <Joke/>
        </div>
    );
}
 
export default App;
