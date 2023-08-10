import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements';

import axios from 'axios';


FlatListItemSeparator = () => {
  return (
    <View
    style={styles.separator}
    />
  );
};
const TableHeadings = () => (
  <View style={[styles.tableRow, styles.headingsRow]}>
    <View style={[styles.tableCell, { flex: 1 }]}>
      <Text style={styles.headingsText}>Date</Text>
    </View>
    <View style={[styles.tableCell, { flex: 2 }]}>
      <Text style={styles.headingsText}>Produced</Text>
    </View>
    <View style={[styles.tableCell, { flex: 1 }]}>
      <Text style={styles.headingsText}>Sold</Text>
    </View>
    <View style={[styles.tableCell, { flex: 1 }]}>
      <Text style={styles.headingsText}>Dead</Text>
    </View>
    <View style={[styles.tableCell, { flex: 2 }]}>
      <Text style={styles.headingsText}>Breed</Text>
    </View>
  </View>
);

function formatDate(dateString) {
  const date = new Date(dateString);
  const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  return formattedDate;
}


function Poultry({ navigation }) {
  const [poultries, setPoultries] = useState([]);
  const [id, setId] = useState("")

  useEffect(() => {
    getPoultry();
  }, [poultries]);

  const getPoultry = async () => {
    try {
    
      const response = await axios.get('http://192.168.39.23:3000/poultry/get-poultries');
      // handle success
      setPoultries(response.data);
    } catch (error) {
      // handle error
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="New Record"
        color="green"
        onPress={() => {
          navigation.navigate("Add Poultry")
        }}
      />
    <TableHeadings />
    <FlatList
      ItemSeparatorComponent={FlatListItemSeparator}
      data={poultries}
      renderItem={({ item, index }) => (
        <TouchableOpacity
        onPress={() =>
          navigation.navigate('Poultry Detail', {
            userId: item._id,
          })
        }
        
      >
        <View style={styles.tableRow}>
          <View style={[styles.tableCell, { flex: 2 }]}>
            <Text style={styles.cellText}>{formatDate(item.createdAt)}</Text>
          </View>
          <View style={[styles.tableCell, { flex: 1 }]}>
            <Text style={styles.cellText}>{item.qtyproduced}</Text>
          </View>
          <View style={[styles.tableCell, { flex: 1 }]}>
            <Text style={styles.cellText}>{item.qtysold}</Text>
          </View>
          <View style={[styles.tableCell, { flex: 1 }]}>
            <Text style={styles.cellText}> {item.qtydead}</Text>
          </View>
          <View style={[styles.tableCell, { flex: 2 }]}>
            <Text style={styles.cellText}>{item.breed}</Text>
          </View>
        </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item._id}
    />
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  headingsRow: {
    backgroundColor: '#ddd',
    borderRadius: 4,
  },
  headingsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tableCell: {
    padding: 5,
  },
  cellText: {
    fontSize: 16,
  },
});

export default Poultry;
