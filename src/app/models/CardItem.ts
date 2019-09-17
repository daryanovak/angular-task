import { IUser } from './User';
export interface ICardItem {
 	id: string;
	name: string;
	description: string;
	dueDate: Date | string;
	assignee: IUser;
}
