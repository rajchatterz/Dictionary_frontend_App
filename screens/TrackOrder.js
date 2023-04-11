import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'react-native';

export default class TrackOrder extends React.Component {
  render() {
    const orders = [
      {
        id: 1,
        companyname: 'Package from Warrior Royals', name:'Shoes',   status: 'Order delivered', active:true,  date: 'Amazon order on Jun 10  , 2020 at 09:30', orderId: '123456', description: 'Size : 10', image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/uckbx3rr87jhakb81mbs', price: 19.99,
        data: [

          { statustitle: 'Order Placed', isCurrent: true, titletime: "Fri , 5th Jul '20", subtext: 'Your order has been placed.', subtitletime: "Fri , 5th Jun '20 - 5:03pm" },
          { statustitle: 'Order Confirmed', isCurrent: true, titletime: "Fri , 5th Jul '20", subtext: 'Your order has been confirmed.', subtitletime: "Fri , 5th Jun '20 - 5:10pm" },
          { statustitle: 'Order Packed', isCurrent: true, titletime: "Fri , 8th Jul '20", subtext: 'Your order has been packed.', subtitletime: "Mon , 8th Jun '20 - 8:20am", },
          { statustitle: 'Order Dispatched', isCurrent: true, titletime: "Fri , 9th Jul '20", subtext: 'Your order has been dispatched.', subtitletime: "Tue , 9th Jun '20 - 10:00pm" },
          { statustitle: 'Order Delivered', isCurrent: false, titletime: "Fri , 10th Jul '20", subtext: 'Your order is yet to be delivered.', subtitletime: "" },
        ],
      },

      {
        id: 2,
        companyname: 'Package from Warrior Royals', name:'Shoes',   status: 'Order delivered', active:false,   date: 'Amazon order on Jun 10  , 2020 at 09:30', orderId: '123456', description: 'Size : 10', image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/uckbx3rr87jhakb81mbs', price: 19.99,
        data: [

          { statustitle: 'Order Placed', isCurrent: true, titletime: "Fri , 5th Jul '20", subtext: 'Your order has been placed.', subtitletime: "Fri , 5th Jun '20 - 5:03pm" },
          { statustitle: 'Order Confirmed', isCurrent: true, titletime: "Fri , 5th Jul '20", subtext: 'Your order has been confirmed.', subtitletime: "Fri , 5th Jun '20 - 5:10pm" },
          { statustitle: 'Order Packed', isCurrent: true, titletime: "Fri , 8th Jul '20", subtext: 'Your order has been packed.', subtitletime: "Mon , 8th Jun '20 - 8:20am" },
          { statustitle: 'Order Dispatched', isCurrent: true, titletime: "Fri , 9th Jul '20", subtext: 'Your order has been dispatched.', subtitletime: "Tue , 9th Jun '20 - 10:00pm" },
          { statustitle: 'Order Delivered', isCurrent: true, titletime: "Fri , 10th Jul '20", subtext: 'Your order is yet to be delivered.', subtitletime: "" },
        ],
      },
     


    ];

    
    return (
      <ScrollView  style={{
       
        marginBottom: 40
      }}>
        
       
        <View style={{ flex: 1, borderRadius: 10, marginTop: 10 }}>
        {orders.map((order) => {
  if (order.active==false) {
   
    return (
      <><Text style={{
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
      }}>Past</Text><View style={{
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 20,
        padding: 15,
      }} key={order.id}>
           <Text style={styles.dateText}>{order.date}</Text>
              <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 0.5,
                  marginBottom: 10
                }}
              />
                       <View style={styles.itemsContainer}>
              
              <View key={order.id} style={styles.itemContainer}>
                <Image style={styles.itemImage} source={{ uri: order.image }} />
                <View style={styles.itemDetails}>
                  <Text style={styles.statusText}>{order.status}</Text>
                  <Text style={styles.itemName}>{order.companyname}</Text>
                  <Text style={styles.itemName}>{order.name}</Text>

                </View>
              </View>
              </View>
        </View></>
    );
  } else {
   
    return (
      <><Text style={{
        fontWeight: 'bold',
        fontSize: 18,
      }}>Now</Text><View style={{
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop:10,
        marginBottom: 20,
        padding: 20,
      }} key={order.id}>

          <View style={styles.header}>
            <Image style={styles.itemImagenow} source={{ uri: order.image }} />
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerTitle}>Order Tracking : {order.orderId}</Text>
              <Text style={styles.headerText}>{order.companyname} - {order.name}</Text>
             
            </View>
          </View>
          <MapProgress key={order.id} data={[...order.data]} />
        </View></>
    );
  }
})}
        </View>

      </ScrollView >
    );
  }
}

const MapProgress = (props) => {
  if (!props.data || props.data.length === 0) return null;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.verticalWrap}>
        {props.data.map((item) => (
          <>
            <View style={styles.itemWrap}>
              <View style={[styles.verticalLine, item.isCurrent ? styles.greenLine : null, { backgroundColor: item.isCurrent ? 'green' : 'grey' } , {}]}></View>
              <View style={[styles.firstPoint, item.isCurrent ? styles.greenPoint : null]}></View>
              <View style={{ marginLeft: 5, flex: 1, marginBottom: 16 }}>
                <Text style={{ marginTop: -5 }}>{item.title}{"  "}</Text>
                <Text style={{ fontSize: 13, color: 'black' }}>{item.subtext}</Text>
                <Text style={{ fontSize: 13, color: 'grey', paddingBottom: 10 }}>{item.subtitletime}</Text>
                {item.subtext2 ? <><Text style={{ fontSize: 13, color: 'black' }}>{item.subtext2}</Text><Text style={{ fontSize: 13, color: 'grey', paddingBottom: 10 }}>{item.subtitletime2}</Text></> : null}
              </View>

            </View></>
        ))}
      </View>

    </View>


  );
};
const styles = StyleSheet.create({
  orderContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,

  },
  headerTextContainer: {
    flex: 1,
  },
  dateText: {
    fontSize: 13,
    marginBottom: 5,
    color: 'grey'
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',

  },
  itemsContainer: {
    flexDirection: 'row',

  },
  itemContainer: {
    width: '100%',
    padding: 5,
    flexDirection: 'row',

  },

  itemImage: {
    width: 80,
    height: 80,
    borderWidth: 0.3,
    borderColor: 'grey',
    borderRadius: 5,
    resizeMode: 'cover',
    marginRight: 20
  },
  itemImagenow: {
    width: 60,
    height: 60,
    borderWidth: 0.3,
    borderColor: 'grey',
    borderRadius: 5,
    resizeMode: 'cover',
    marginRight: 20
  },

  itemName: {
    fontSize: 13,
    marginTop: 5,
    color: 'grey'
  },
  itemPrice: {
    fontSize: 14,
    color: '#888'
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 14,

  },
  headerText: {
    fontSize: 13,
    marginTop: 5,
    color: 'grey',
  },
  verticalLine: {
    backgroundColor: 'grey',
    width: 1,
    height: '100%',
    position: 'absolute',
    marginLeft: 5,
  },

  itemWrap: {
    width: 280,
    flexDirection: 'row',

  },
  pointWrap: {
    backgroundColor: 'black',
    height: 20,
    width: 20,
    alignItems: 'center',
  },
  firstPoint: {
    backgroundColor: 'grey',
    borderRadius: 20,
    height: 10,
    width: 10,

  },
  markerText: { color: 'white' },
  currentMarker: { color: 'black' },
  greenLine: {
    backgroundColor: 'green',
    width: 1,
    height: '100%',
    position: 'absolute',
    marginLeft: 5,
  },
  greyLine: {
    backgroundColor: 'grey',
    width: 1,
    height: '100%',
    position: 'absolute',

  },
  greenPoint: {
    backgroundColor: 'green',
  },
});




