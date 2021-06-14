import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { SectionGrid } from 'react-native-super-grid';
import { SafeAreaView } from 'react-native-safe-area-context';
import GovernanceDomains from '../../constants/GovernanceDomains';
import { GreenTickIcon } from '../../icons';

function SubjectsSelectionScreen() {
  const [items, setItems] = useState(() => GovernanceDomains);
  const [selectedItems, setSelectedItems] = useState(() => {
    return {};
  });

  const onSubjectPress = (subject) => {
    if (selectedItems[subject.id]) {
      const tempSelectedItems = { ...selectedItems };
      delete tempSelectedItems[subject.id];
      setSelectedItems(tempSelectedItems);
    } else {
      // add item
      setSelectedItems({
        ...selectedItems,
        [subject.id]: subject,
      });
    }
  };

  return (
    <SafeAreaView style={{ height: '100%', backgroundColor: '#1D3557' }}>
      <SectionGrid
        itemDimension={90}
        // staticDimension={300}
        // fixed
        spacing={8}
        sections={[
          {
            title: 'Select Governance Domains',
            data: items,
          },
        ]}
        style={styles.gridView}
        renderItem={({ item, section, index }) => (
          <TouchableOpacity
            onPress={() => {
              onSubjectPress(item);
            }}
          >
            <View style={[styles.itemContainer]}>
              <Image
                style={{ width: '100%', height: '100%', borderRadius: 10 }}
                source={{
                  uri: item.image,
                }}
              />
              {selectedItems[item.id] && (
                <View
                  style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      height: '100%',
                      width: '100%',
                      backgroundColor: '#2b2b2b',
                      opacity: 0.5,
                      position: 'absolute',
                      borderRadius: 10,
                    }}
                  ></View>
                  <View style={{ width: 15, height: 15, backgroundColor: 'white' }}>
                    <GreenTickIcon />
                  </View>
                </View>
              )}
            </View>
            <View style={{ height: 35, width: '100%' }}>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => {
          return (
            <View style={{ backgroundColor: '#1D3557', paddingVertical: 10 }}>
              <Image />
              <Text style={styles.sectionTitle}>{section.title}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 0,
    height: 65,
  },
  itemName: {
    marginTop: 5,
    fontSize: 12,
    lineHeight: 13,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    paddingHorizontal: 10,
    color: '#fff',
  },
});

export default SubjectsSelectionScreen;
