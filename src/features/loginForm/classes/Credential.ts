export class Credential {

  constructor(email: string, password: string) {
    if (email.trim().length === 0) {
      throw new Error("O email não pode estar vazio ou conter apenas espaços.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Formato de email inválido.");
    }

    if (password.trim().length === 0) {
      throw new Error("O campo de senha não pode estar vazio ou conter apenas espaços.");
    }


  }
}
