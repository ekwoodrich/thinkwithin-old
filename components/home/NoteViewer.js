import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const NoteViewer = ({ noteId }) => (
  <View>
    <Text />
    <Card style={styles.noteCard}>
      <Card.Content>
        <Paragraph>Viewing Note {noteId}</Paragraph>
      </Card.Content>
    </Card>
  </View>
);

export default NoteViewer;

const styles = StyleSheet.create({
  noteCard: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10
  }
});
