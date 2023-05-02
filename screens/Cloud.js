import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput } from 'react-native';
const ITEM_LIST = [
  { name: 'Belt', price: '59' },
  { name: 'Blazer / Coat - Long', price: '399' },
  { name: 'Blazer / Coat - Short', price: '299' },
  { name: 'Boots Leather', price: '599' },
  { name: 'Cap (Casual / Woolen)', price: '99' },
  { name: 'Combo - Shirt and Pant', price: '149' },
  { name: 'Dhoti Heavy', price: '169' },
  { name: 'Dhoti Normal', price: '109' },
  { name: 'Dhoti / Lungi (Silk)', price: '119' },
  { name: 'Formal and Casual Trousers / Pants', price: '109' },
  { name: 'Gloves(Leather)', price: '369' },
  { name: 'Gloves(Woolen)', price: '69' },
  { name: 'Handkerchief', price: '29' },
  { name: 'Hats', price: '129' },
  { name: 'Indo Western', price: '696' },
 
 
];

const ItemList = () => {
  const [items, setItems] = useState(ITEM_LIST);
   const [searchQuery, setSearchQuery] = useState('');


  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Text style={styles.itemNumber}>{index + 1}</Text>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  );

   useEffect(() => {
    const filteredItems = ITEM_LIST.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setItems(filteredItems);
  }, [searchQuery]);

  return (
    <View style={styles.container}>
     <Text style={styles.title}>Price List</Text>
      <TextInput
            style={styles.searchBar}
            onChangeText={setSearchQuery}
            value={searchQuery}
            placeholder="Search items"
            placeholderTextColor="#999"
          />
      <View style={styles.heading}>
        <Text style={styles.headingText}>No.  Items</Text>
        <Text style={[styles.headingText, styles.headingPrice]}>Price</Text>
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
      <Text>        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  title: {
  fontWeight: 'bold',
  fontSize: 21,
  textAlign: 'center',
  marginBottom: 10,
  color:'#312e81'
},
searchBar: {
    backgroundColor: '#fff',
    borderRadius: 5,
    height:40,
    margin:8,
    padding: 5,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom:20,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderTopWidth:1,
    borderTopColor:'#ddd',
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  headingPrice: {
    textAlign: 'right',
  },
  item: {
    padding: 10,
    fontSize: 18,
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  itemNumber: {
    fontWeight: 'bold',
    marginRight: 10,
    width: 25,
    textAlign: 'center',
  },
  itemName: {
    flex: 1,
  },
  itemPrice: {
    fontWeight: 'bold',
    textAlign: 'right',
    flex: 0.3,
    color:'#312e81',
  },
});

export default ItemList;
