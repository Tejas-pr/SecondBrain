import { useState } from "react";
import { AddContentModal } from "../components/AddContentModal";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SideBar } from "../components/SideBar";
import useContent from "../hooks/useContent";
import axios from "axios";

function DashBoard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { content, refresh } = useContent();

  const shareHandler = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/brain/share`,
        {
          Share: true,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      const shareUrl = `${import.meta.env.VITE_FRONTEND_URL}/share/${
        response.data.uniqueId
      }`;
      alert(shareUrl);
      navigator.clipboard.writeText(shareUrl);
    } catch (error) {
      console.error("Failed to share brain:", error);
      alert("Something went wrong while sharing.");
    }
  };

  return (
    <>
      <SideBar />
      <AddContentModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          refresh();
        }}
      />
      <div className="ml-72 p-4 min-h-screen bg-slate-100">
        <div className="flex justify-end items-center m-1 gap-4 border-b pb-5">
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcon />}
          />
          <Button
            onClick={shareHandler}
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
          {content.map(({ title, type, link }) => (
            <Card key={type} title={title} type={type} link={link} />
          ))}
        </div>
      </div>
    </>
  );
}

export default DashBoard;
