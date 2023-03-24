import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import PDFView from 'react-native-pdf';

const pdfFiles = [
  { id: 1, name: 'Document 1', uri: 'https://example.com/document1.pdf' },
  { id: 2, name: 'Document 2', uri: 'https://example.com/document2.pdf' },
  { id: 3, name: 'Document 3', uri: 'https://example.com/document3.pdf' },
  // add more PDF files as needed
];

const PdfViewer = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [searchText, setSearchText] = useState('');

  const filteredPdfFiles = pdfFiles.filter(file => file.name.toLowerCase().includes(searchText.toLowerCase()));

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.pdfCard} onPress={() => setSelectedPdf(item)}>
      <Text style={styles.pdfName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search PDFs"
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />

      <FlatList
        data={filteredPdfFiles}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />

      {selectedPdf && (
        <PDFView
          style={styles.pdfViewer}
          onError={() => setSelectedPdf(null)}
          source={{ uri: selectedPdf.uri }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  pdfCard: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  pdfName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pdfViewer: {
    flex: 1,
    marginTop: 20,
  },
});

export default PdfViewer;