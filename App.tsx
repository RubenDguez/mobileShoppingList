import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AddItem} from './components/AddItem';
import {Header} from './components/Header';
import {ItemList} from './components/ItemLIst';
import {itemList, TItem} from './constants/data';

const App = () => {
  const [items, setItems] = useState<TItem[]>(itemList);

  const handleClearItem = (itemNumber: string) => {
    const newList = items.filter(f => f.id !== itemNumber);
    setItems(newList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
      <AddItem setItems={setItems} />
      <ItemList items={items} clearItem={handleClearItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
