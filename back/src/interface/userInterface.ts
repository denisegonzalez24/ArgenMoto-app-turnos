import { Credencial } from "./credencial";

interface User {
  name: string;
  email: string;
  credentials: Credencial;
  profilePicture?: string;
}

export default User;
