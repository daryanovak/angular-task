export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
}



export interface ICard {
  id: string;
  name: string;
  description: string;
  dueDate?: Date | string;
  assignee?: IUser;
}
