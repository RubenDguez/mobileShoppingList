import {Icon} from '@rneui/base';
import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import uuid from 'react-native-uuid';
import {TItem} from '../constants/data';

export interface IAddItem {
  setItems: Dispatch<SetStateAction<TItem[]>>;
}

export const AddItem: FC<IAddItem> = ({setItems}) => {
  const [text, setText] = useState('');

  const handleSetText = (txt: string) => {
    if (txt.length <= 30) {
      setText(txt);
    }
  };

  const handleAddItem = () => {
    if (text) {
      setItems(items => [...items, {id: uuid.v4().toString(), text}]);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        value={text}
        onChangeText={txt => handleSetText(txt)}
        placeholder="Insert your item list here"
      />
      <View style={styles.addButton}>
        <Icon
          name="add"
          size={24}
          color={text ? 'blue' : 'salmon'}
          onPress={handleAddItem}
          disabled={text ? false : true}
          disabledStyle={styles.disabledStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    marginBottom: 32,
  },
  text: {
    fontSize: 14,
    color: 'darkslateblue',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 2,
    flexGrow: 1,
    padding: 4,
  },
  addButton: {
    marginLeft: 16,
  },
  disabledStyle: {
    backgroundColor: 'transparent',
  },
});
