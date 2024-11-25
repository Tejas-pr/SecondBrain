import "./App.css";
import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <div>
        <Button startIcon={<PlusIcon size="md"/>} endIcon={<ShareIcon size="md"/>} text="content type" variant="primary" size="md"/>
        <Button text="share" variant="secondary" size="md"/>
        <Button endIcon={<ShareIcon size="md"/>} text="content type" variant="primary" size="md"/>
      </div>
    </>
  );
}

export default App;
