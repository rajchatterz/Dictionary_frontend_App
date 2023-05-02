import React, { useState } from 'react'
import image from '../assets/notification.png'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'

const data = [
  { id: 1, image: 'https://bootdey.com/img/Content/avatar/avatar1.png', description: 'Lorem ipsum dolor sit amet, indu consectetur adipiscing elit', time: '2 hours ago' },
  { id: 2, image: 'https://bootdey.com/img/Content/avatar/avatar1.png', description: 'Lorem ipsum dolor sit amet, indu consectetur adipiscing elit', time: '2 hours ago' },
  { id: 3, image: 'https://bootdey.com/img/Content/avatar/avatar1.png', description: 'Lorem ipsum dolor sit amet, indu consectetur adipiscing elit', time: '2 hours ago' },
  { id: 4, image: 'https://bootdey.com/img/Content/avatar/avatar1.png', description: 'Lorem ipsum dolor sit amet, indu consectetur adipiscing elit', time: '2 hours ago' },
  { id: 5, image: 'https://bootdey.com/img/Content/avatar/avatar1.png', description: 'Lorem ipsum dolor sit amet, indu consectetur adipiscing elit', time: '2 hours ago' },
  { id: 6, image: 'https://bootdey.com/img/Content/avatar/avatar1.png', description: 'Lorem ipsum dolor sit amet, indu consectetur adipiscing elit', time: '2 hours ago' },
  { id: 7, image: 'https://bootdey.com/img/Content/avatar/avatar1.png', description: 'Lorem ipsum dolor sit amet, indu consectetur adipiscing elit', time: '2 hours ago' },
  { id: 8, image: 'https://bootdey.com/img/Content/avatar/avatar1.png', description: 'Lorem ipsum dolor sit amet, indu consectetur adipiscing elit', time: '2 hours ago' },
  { id: 9, image: 'https://bootdey.com/img/Content/avatar/avatar1.png', description: 'Lorem ipsum dolor sit amet, indu consectetur adipiscing elit', time: '2 hours ago' },

]

export default NotificationsView = ({ }) => {
  const [notifications, setNotifications] = useState(data)
  const renderNotifications = () => {
    if (notifications.length === 0) {
      return (
        <View style={styles.noNotifications}>
          <Image
            style={styles.noNotificationsImage}
            source={image}
          />
          <Text style={styles.noNotificationsText}>No notifications to display yet :(</Text>
        </View>
      )
    } else {
      return (
        <FlatList
          style={styles.notificationList}
          enableEmptySections={true}
          data={notifications}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.notificationBox}>
                <Image
                  style={styles.icon}
                  source={{ uri: item.image }}
                />
                <View style={styles.content}>
                  <View >
                    <View style={styles.description}>
                      <Text>{item.description}</Text>
                    </View>
                    <Text style={styles.timeAgo}>{item.time}</Text>
                  </View>
                </View>
              </View>
            )
          }}
        />
      )
    }
  }

  return (
    <View>
      {renderNotifications()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DCDCDC',
  },
  notificationList: {
    marginBottom: 10,
    padding: 10,
  },
  notificationBox: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 10,
  },
  icon: {
    marginTop: 5,
    width: 45,
    height: 45,
    borderRadius: 50
  },
  description: {
    fontSize: 18,
    color: '#3498db',
    padding: 10
  },
  timeAgo: {
    fontSize: 12,
    color: '#696969',
    marginLeft: 10,
  },
  noNotifications: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  noNotificationsImage: {
    width: 300,
    height: 280,
    marginTop:80,
  },
  noNotificationsText: {
    fontSize: 18,
    marginTop: 20,
  }
});
