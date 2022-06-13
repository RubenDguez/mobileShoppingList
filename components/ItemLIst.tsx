import {Icon} from '@rneui/base';
import {Avatar} from '@rneui/themed';
import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {TItem} from '../constants/data';

export interface IItem {
  item: TItem;
  clearItem: (itemNumber: string) => void;
}

export const Item: FC<IItem> = ({item, clearItem}) => {
  return (
    <View style={styles.item}>
      <View style={styles.iconDescription}>
        <Avatar
          size={32}
          rounded
          title={`${
            item.text.substring(0, 1).toUpperCase() + item.text.substring(1, 2)
          }`}
          containerStyle={styles.iconContainerStyle}
        />
        <Text style={styles.title}>{item.text}</Text>
      </View>
      <Icon
        size={24}
        name="clear"
        color="red"
        onPressIn={() => clearItem(item.id)}
      />
    </View>
  );
};

export interface IRenderItem {
  item: TItem;
  clearItem: (itemNumber: string) => void;
}

export const RenderItem: FC<IRenderItem> = ({item, clearItem}) => {
  return <Item item={item} clearItem={() => clearItem(item.id)} />;
};

export interface IItemList {
  items: TItem[];
  clearItem: (itemNumber: string) => void;
}

export const ItemList: FC<IItemList> = ({items, clearItem}) => {
  const itemsLeft = (
    <Text style={styles.itemsLeft}>
      <Text style={styles.strong}>{items.length}</Text>
      {` Remaining ${items.length === 1 ? 'item' : 'items'} `}
    </Text>
  );
  const noItemsLeft = (
    <Text style={styles.noItemsLeft}>
      Well done! you have no items left in your Shopping List
    </Text>
  );

  return (
    <View>
      <FlatList
        style={styles.flatList}
        data={items}
        renderItem={ri => (
          <RenderItem item={ri.item} clearItem={() => clearItem(ri.item.id)} />
        )}
        keyExtractor={item => item.id}
      />
      <View style={styles.itemCount}>
        <Text>{items.length > 0 ? itemsLeft : noItemsLeft}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    maxHeight: 550,
    minHeight: 550,
    paddingVertical: 20,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 4,
  },
  title: {
    fontSize: 14,
    color: 'darkslateblue',
    marginLeft: 16,
  },
  iconDescription: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainerStyle: {
    backgroundColor: '#3d4db7',
  },
  itemCount: {
    marginHorizontal: 32,
    paddingTop: 8,
    borderTopColor: 'lightgray',
    borderTopWidth: 2,
  },
  itemsLeft: {
    color: 'darkviolet',
  },
  noItemsLeft: {
    color: 'darkslateblue',
  },
  strong: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
