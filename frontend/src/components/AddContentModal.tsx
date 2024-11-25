import { CrossIcon } from "../icons/crossIcon";
import { Button } from "./Button";
import { InputBox } from "./InputBox";

interface ModelInterface {
  open: boolean;
  onClose: () => void;
}

export function AddContentModal({ open, onClose }: ModelInterface) {
  return (
    <div>
      {open && (
        <div className="bg-slate-500 opacity-50 fixed left-0 top-0 w-full h-screen flex justify-center items-center">
          <div className="flex flex-col bg-white p-8 rounded-md">
            <div className="flex justify-end hover:cursor-pointer">
              <div onClick={onClose}>
                <CrossIcon />
              </div>
            </div>
            <div>
              <InputBox placeholder="Name..." />
              <InputBox placeholder="link..." />
            </div>
            <div className="flex items-center justify-center">
              <Button variant="primary" text="Submit" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}