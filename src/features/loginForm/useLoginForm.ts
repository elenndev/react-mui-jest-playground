import { useState } from "react"
import { Credential } from "./classes/Credential"

export const useLoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<false | string>(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      new Credential(email, password);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        return
      }

      setError("Erro inesperado");
    }
  };

  function clearError() {
    setError(false);
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    error && clearError();
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
    error && clearError();
  }


  return {
    email, password, error,
    handleEmailChange, handlePasswordChange,
    handleSubmit
  }
}
