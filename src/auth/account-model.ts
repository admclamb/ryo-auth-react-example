export interface Account {
  id: string;
  email: string;
  isEmailVerified: boolean;
  identities: [];
  name: string;
  nickname: string;
  picture: string | null;
  createdAt: Date;
  updatedAt: Date;
}
