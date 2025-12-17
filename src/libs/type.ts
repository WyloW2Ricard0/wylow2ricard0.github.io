export interface User {
  id: string;
  email: string;
  created_at: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface Application {
  id: string;
  title: string;
  description: string;
  url: string;
  created_at: string;
}
