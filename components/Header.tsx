import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface IProps {
  title: string;
}

export const Header: FC<IProps> = ({title}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'darkslateblue',
    fontSize: 23,
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
});
