import { ICardItem } from './CardItem';

export interface ICardList {
 	id: string;
	name: string;
	cards: ICardItem[ ];
}
