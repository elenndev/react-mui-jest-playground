import { render, screen, fireEvent } from "@testing-library/react"
import LoginForm from "./LoginForm"

describe("LoginForm", () => {
  it("render fields and button", () => {
    render(<LoginForm />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument()
  })

  it("allow type email and password", () => {
    render(<LoginForm />)
    const emailInput = screen.getByTestId("email-input") as HTMLInputElement
    const passwordInput = screen.getByTestId("password-input") as HTMLInputElement

    fireEvent.change(emailInput, { target: { value: "teste@exemplo.com" } })
    fireEvent.change(passwordInput, { target: { value: "123456" } })

    expect(emailInput.value).toBe("teste@exemplo.com")
    expect(passwordInput.value).toBe("123456")
  })

  it("execute submit", () => {
    render(<LoginForm />)
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input")
    const button = screen.getByTestId("login-button")

    fireEvent.change(emailInput, { target: { value: "user@teste.com" } })
    fireEvent.change(passwordInput, { target: { value: "senha123" } })

    fireEvent.click(button);

    expect((emailInput as HTMLInputElement).value).toBe("user@teste.com")
    expect((passwordInput as HTMLInputElement).value).toBe("senha123")
  })

  it("not allow email with blank space value", () => {
    render(<LoginForm />)
    const emailInput = screen.getByTestId("email-input") as HTMLInputElement
    const button = screen.getByTestId("login-button")

    fireEvent.change(emailInput, { target: { value: " " } });
    fireEvent.click(button);
    expect(
      screen.getByText("O email não pode estar vazio ou conter apenas espaços.")
    ).toBeInTheDocument();
  })

})
