import { useRef } from "react";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();
  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/signin`,
      {
        username,
        password,
      }
    );

    const token = response.data.token;
    localStorage.setItem("token", token);
    // redirect user to dashboard
    navigate("/dashboard");
  }
  return (
    <div className="h-screen w-screen bg-slate-400 flex justify-center items-center">
      <div className="bg-white rounded-lg border min-w-48 p-8 flex flex-col gap-1 items-center justify-center">
        <InputBox reference={usernameRef} placeholder="Username..." />
        <InputBox reference={passwordRef} placeholder="Password..." />

        <Button
          loading={false}
          variant="primary"
          text="Signin"
          className="w-full"
          onClick={signin}
        />
      </div>
    </div>
  );
};

export default Signin;
