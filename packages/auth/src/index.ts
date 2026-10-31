export type AuthProvider = "google" | "credentials";
export interface AuthenticatedPrincipal { userId: string; email: string; }
