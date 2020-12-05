export interface User {
  uid: string;
  email: string;
  displayName?: string;
  emailVerified?: boolean;
  isAnonymous?: boolean;
  photoURL?: string;
}