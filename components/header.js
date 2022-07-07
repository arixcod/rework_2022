import { DrawerActions } from '@react-navigation/native';
import React from 'react';
import { Dimensions, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header=({title,navigation})=> {

  return (
    <View style={styles.header}>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
      <TouchableOpacity onPress={()=>{navigation.dispatch(DrawerActions.toggleDrawer());
}}>
        <View style={{width:30,height:4,backgroundColor:'white',marginBottom:4}}></View>
        <View style={{width:30,height:4,backgroundColor:'white',marginBottom:4}}></View>
        <View style={{width:30,height:4,backgroundColor:'white'}}></View>
        </TouchableOpacity>
      <Text  style={styles.text}>{title}</Text>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
      header:{          
          width:'100%',
        height:88,
          padding
          :15,
          backgroundColor:'darkslateblue',
          },
          
          text:{
              marginLeft:(Dimensions.get('screen').width)/6,
              color:'#fff',
              fontSize:23,
              justifyContent:'center'
              ,textAlign:'center'
          }

          ,ham_menu:{
            borderBottomColor: 'white',
            borderBottomWidth:2,
            width:25,
            
          },
          lines:{
          
          padding:0,
          margin:10
        }
});

export default Header;
