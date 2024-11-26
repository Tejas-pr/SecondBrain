import { useRef, useState } from "react";
import { CrossIcon } from "../icons/crossIcon";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import axios from "axios";

interface ModelInterface {
  open: boolean;
  onClose: () => void;
}
enum ContentType {
  "Youtube"= "youtube",
  "X"= "x"
}

export function AddContentModal({ open, onClose }: ModelInterface) {
  const [type, setType] = useState(ContentType.Youtube);
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/content`, {
      title,
      link,
      type
    }, {
      headers: {
        "authorization": localStorage.getItem("token")
      }
    })

    onClose();
  }
  return (
    <>
      {open && (
        <>
          <div className="bg-slate-500 opacity-70 fixed left-0 top-0 w-full h-screen z-10"></div>

          <div className="fixed left-0 top-0 w-full h-screen flex justify-center items-center z-20">
            <div className="flex flex-col bg-white p-8 rounded-md shadow-md">
              <div className="flex justify-end hover:cursor-pointer">
                <div onClick={onClose}>
                  <CrossIcon />
                </div>
              </div>
              <div>
                <InputBox reference={titleRef} placeholder="Name..." />
                <InputBox reference={linkRef} placeholder="Link..." />
              </div>
              <div className="flex gap-2 m-5 items-center justify-center">
                <h1>Select type :</h1>
                <Button onClick={() => {
                  setType(ContentType.Youtube)
                }} variant={type === ContentType.Youtube ? "primary" : "secondary"} text="Youtube" />
                <Button onClick={() => {
                  setType(ContentType.X)
                }} variant={type === ContentType.X ? "primary" : "secondary"} text="X" />
              </div>
              <div className="flex items-center justify-center">
                <Button onClick={addContent} variant="primary" text="Submit" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
