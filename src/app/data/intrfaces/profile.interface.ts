export interface Profile {
  id: number;
  username: string;
  description: string;
  avatarUrl: string | null;
  subscriptionsAmount: number;
  firsName: string;
  lastName: string;
  isActive: boolean;
  stack: string[];
  city: string;
}
