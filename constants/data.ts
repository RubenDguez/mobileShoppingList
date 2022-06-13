import uuid from 'react-native-uuid';

export type TItem = {
  id: string;
  text: string;
};

export const itemList: TItem[] = [
  {id: uuid.v4().toString(), text: 'Milk'},
  {id: uuid.v4().toString(), text: 'Cheese'},
  {id: uuid.v4().toString(), text: "Hershey's Nuggets"},
  {id: uuid.v4().toString(), text: 'Bacon'},
  {id: uuid.v4().toString(), text: 'Bread'},
];
