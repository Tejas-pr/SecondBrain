import { useState } from "react";
import { AddContentModal } from "./components/AddContentModal";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <>
      <AddContentModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      />
      <div className="flex justify-end items-center m-5 gap-4">
        <Button
          onClick={() => {
            setModalOpen(true);
          }}
          variant="primary"
          text="Add Contant"
          startIcon={<PlusIcon />}
        />
        <Button
          variant="secondary"
          text="Share Brain"
          startIcon={<ShareIcon />}
        />
      </div>

      <div className="flex gap-4">
        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=SnspIerLmOo&ab_channel=PranitMore"
          title="Youtube"
        />
        <Card
          type="x"
          link="https://x.com/Tejas67061437/status/1841995576813965488"
          title="Twitter"
        />
      </div>
    </>
  );
}

export default App;
