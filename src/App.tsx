import ButtonExercise from "./components/ButtonExercise";
import DismissableAlert from "./components/DismissableAlert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <DismissableAlert onClose={() => setAlertVisibility(false)} />
      )}
      <ButtonExercise onClick={() => setAlertVisibility(true)}>
        My Button
      </ButtonExercise>
    </div>
  );
}

export default App;
