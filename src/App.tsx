import ButtonExercise from "./components/ButtonExercise";

function App() {
  return (
    <div>
      <ButtonExercise onClick={() => console.log("Clicked")}>
        My Button
      </ButtonExercise>
    </div>
  );
}

export default App;
