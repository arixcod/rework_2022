import React ,{useState,Component} from 'react';
import { StyleSheet, Text,Modal,Alert,Pressable, View,Image,FlatList,ImageBackground ,TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {StatusBar} from 'react-native';
import Header from './components/header';
import { Table, Row, Rows,} from 'react-native-table-component';
import { Dimensions,Button } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Video} from 'expo-av';

import ImageZoom from 'react-native-image-pan-zoom';


const data_noti=0;

const Drawer=createDrawerNavigator();

/*About App Screen*/

function About_App({route,navigation}){
  return(
    <ScrollView>
    <View style={{paddingTop:StatusBar.currentHeight}}>
    
    <Header navigation={navigation} title='‘मातृत्व पोषण‘ एप्लीकेशन का परिचय'/>
        <Text style={{margin:20 ,flex:1,flexWrap:'wrap',fontSize:20,lineHeight:28,textAlign:'justify'}}>गर्भावस्था न सिर्फ स्त्री परन्तु गर्भ में स्थित शिशु के विकास एवं सम्पूर्ण जीवन की एक महत्वपूर्ण नींव है। गर्भवती माता के द्वारा सेवन किया गया आहार, संतुलित भोजन एवं  आहार आयोजन पर आधारित होना आवश्यक है। एक स्वस्थ शिशु का विकास स्वच्छ वातावरण में तथा सभी खाद्य समूह एवं पोषक तत्वों से युक्त आहार का उचित मात्रा में सेवन द्वारा सम्भव है। 
</Text>
<Image style={{resizeMode:'contain',width:350,height:350}} source={require('./assets/app_images/in_app/image044.jpg')}></Image>
<Text style={{margin:20 ,fontSize:20,lineHeight:28,textAlign:'justify'}}>‘मातृृत्व पोषण’ एप्लीकेशन का मुख्य लक्ष्य मातृ कुपोषण एवं उससे सम्बन्धित शारीरिक एवं मानसिक समस्याओं का निदान करना है, जो कि महिलाओं एवं व्यस्क युवतियों में पोषक तत्व, टीकाकरण एवं घरेलू व समाजिक स्वच्छता सम्बन्धी पूर्ण जानकारी एवं जागरुकता द्वारा सम्भव है। 
‘मातृत्व पोषण‘ एप्लीकेशन गर्भवती व धात्री महिलाओं के स्वास्थ्य पर आधारित है। ‘मातृत्व पोषण‘ एप्लीकेशन का निर्माण पी0 एच0 डी0 शोध कार्य के अन्तर्गत ‘मातृ कुपोषण से बचाव हेतु सूचना एवं संचार प्रौधौगिकी उपकरण का विकास एवं जागरुकता का प्रसार‘ के अन्तर्गत किया गया है। ‘मातृत्व पोषण‘ एप्लीकेशन के अन्तर्गत महिलाओं के कुपोषण सम्बन्धी समस्याओं के निदान हेतु प्रमुख एवं सूक्ष्म पोषक तत्व युक्त भोज्य सामग्री का प्रयोग करके रेसिपी एवं उनकी प्रमुखता का उल्लेख किया गया है। ‘मातृत्व पोषण‘ एप्लीकेशन द्वारा समाज एवं महिलाओं में उचित देखभाल,पोषण व स्वच्छता सम्बन्धी जागरुकता का प्रसार सम्भावित है।</Text>
    </View>
    </ScrollView>
  )
}


/* Team Screen*/

function Team_App({route,navigation}){
  return(
    <ScrollView>
    <View style={{paddingTop:StatusBar.currentHeight}}>
  
    <Header navigation={navigation} title='‘मातृत्व पोषण‘ एप्लीकेशन का परिचय'/>
    <View style={{margin:20,paddingBottom:10,paddingLeft:40,paddingRight:40,paddingTop:10,borderRadius:20,backgroundColor:'#eb4034',flex:1,alignItems:'center'}}>
      
      <Image style={{borderRadius:100,height:200,width:200,borderColor:'#53991a',padding:20,borderWidth:2,aspectRatio:1/1}} source={require('./assets/team/tea.jpg')}></Image>
      <Text style={{textAlign:'center',fontSize:22,fontWeight:'bold',marginTop:10,color:'white'}}>{"तृप्ति वर्मा "}</Text>
      <Text style={{textAlign:'center',fontSize:18,marginTop:10,lineHeight:25,color:'white'}}>{"शोध छात्रा \nखाद्य पोषण एवं जन स्वास्थ्य विभाग  \nइथिलिंड कॉलेज ऑफ होम साइंस,शुआट्स\nप्रयागराज,211007 "}</Text>

      </View>
     </View>

     <View style={{paddingTop:StatusBar.currentHeight}}>
  
  <View style={{margin:20,paddingBottom:10,paddingLeft:40,paddingRight:40,paddingTop:10,borderRadius:20,backgroundColor:'#eb4034',flex:1,alignItems:'center'}}>
    
  <Image style={{borderRadius:100,height:200,width:200,borderColor:'#53991a',padding:20,borderWidth:2,aspectRatio:1/1}} source={require('./assets/team/stu.jpg')}></Image>
      <Text style={{textAlign:'center',fontSize:22,fontWeight:'bold',marginTop:10,color:'white'}}>{"डाॅ0 अल्का गुप्ता"}</Text>
      <Text style={{textAlign:'center',fontSize:18,marginTop:10,lineHeight:25,color:'white'}}>{"सह-प्रवक्ता \nखाद्य पोषण एवं \nजन स्वास्थ्य विभाग \nइथिलिंड कॉलेज ऑफ होम साइंस,शुआट्स\nप्रयागराज,211007"}</Text>  
      </View>
   </View>

    </ScrollView>
  )
}


const item12={
  id:1,
  text1:'संतुलित पोषण युक्त आहार स्वस्थ अस्तित्व एवं व्यक्तित्व विकास की आधार शिला है। पोषण कितना जरुरी है इसे देश की मौजूदा परिस्थितियों व कुपोषण आधारित आकड़ों की मदद से जाना जा सकता है। शरीर द्वारा प्रत्येक अंग एवं ऊतकों को परस्पर कार्य करने हेतु आवश्यक मात्रा में ऊर्जा(कैलोरी), प्रोटीन, कार्बोहाइड्रेट, वसा, विटामिन, खनिज लवण एवं अन्य पोषक तत्व जब उचित मात्रा में प्राप्त नहीं होते तब शरीर में पोषक तत्वों की कमी हो जाती है। लम्बी अवधि तक शरीर में पोषक तत्वों की कमी कुपोषण का कारण मानी जाती है। ',
  text2:'गर्भवती व धात्री स्त्रियां एवं जन्म से लेकर पाॅच वर्ष तक के बच्चे भारत देश की सर्वाधिक नाजुक वर्गो में से एक है। जिसके कारण न केवल राष्ट्रीय बल्कि अन्तर्राष्ट्रीय जन स्वास्थ्य समूहों जैसे- विश्व स्वास्थ्य संगठन, यूनीसेफ इत्यादि इनकी विशेष देखभाल एवं स्वास्थ्य सम्बन्धी व्यवस्थाओं को मजबूत करने हेतु निरन्तर कार्यरत है। जैसे कि सर्वज्ञात है कि बच्चों एवं स्त्रियों में पाये जाने वाले अधिकांश रोगो की जड़ कुपोषण है तथा लम्बी अवधि तक संतुलित पोषक तत्वों के अभाव ,बीमारियों के कारण बच्चों एवं महिलाओं की रोग प्रतिरोधक क्षमता प्रभावित होती है जिससे वे अनेको बिमारियों से ग्रसित होते है। ',
  text3:'गर्भावस्था स्त्री जीवन की एक विशेष अवस्था है जिसके दौरान महिला न सिर्फ अपना बल्कि अपने गर्भ में स्थित शिशु का भी भरपूर्ण ख्याल रखती है। गर्भावस्था का परिणाम एक स्वस्थ माॅ व स्वस्थ शिशु होना चाहिये। अतः गर्भावस्था वह समय है जब गर्भवती जो कुछ खाती है वह सीधे उसके बच्चे के शारीरिक व मानसिक वृद्धि पर प्रभाव डालती है। यदि एक गर्भवती महिला गर्भावस्था के दौरान कुपोषित होती है तो उस शिशु के जीवन के पहले दो वर्ष कुपोषण की दृष्टिकोण से काफी गम्भीर माने जाते है। इस प्रकार जीवन पर्यन्त बच्चे का शारीरिक एवं मानसिक विकास प्रभावित हो जाता है। चूँकि भारत एक विकासशील देश है अतः भारत सरकार द्वारा अनेकोनेक प्रयास कराये जा रहे जिसके अन्तर्गत कुपोषण मुक्त भारत एवं मातृ कुपोषण मुख्य है।',
  text4:'',
};

const item123={
id:1,
text1:'मातृ कुपोषण एक गम्भीर स्थिति है जो माता एवं शिशु के शारीरिक वृद्वि, स्वास्थ्य एवं कार्य प्रणाली पर नकारात्मक प्रभाव डालती है। महिलाओं में लम्बी अवधि से कुपोषण व खून मे खनिज तत्वों का अभाव  होना भी एक सामान्य कारण है जिससे गर्भ के भीतर बच्चे का विकास असामान्य होने के फलस्वरुप वह अनेको बीमारियों एवं अस्थि कुरुपता का शिकार हो जाते है।  ',
text2:'कुपोषण वह स्थिति है जिसके अन्तर्गत शरीर द्वारा ग्रहण किया गया भोज्य पदार्थ मनुष्य की भूख तो शान्त करता है परन्तु उस आहार द्वारा मिलने वाला पौष्टिक तत्व शरीर की आवश्यक मात्रा के अनुकूल नही होता । ',

};
const item124={
id:1,
title:'',
text1:'शरीर द्वारा प्रत्येक अंग एवं ऊतकों को समुचित रुप से कार्य करने हेतु आवश्यक मात्रा में ऊर्जा, प्रोटीन ,कार्बोहाइड्रेट, वसा, विटामिन, खनिज तथा अन्य पोषक तत्वों का शरीर में पर्याप्त मात्रा में पाया जाना जरुरी है माता व शिशु दोनो के स्वास्थ पर अनुकूल प्रभाव पड़ता है। अन्य कारण जिनसे गर्भवती व धात्री महिलाओं में कुपोषण आधारित विकार उत्पन्न होते है, निम्नलिखित है- ',

};

const item125={
id:1,
title:'मातृ कुपोषण के निवारण हेतु आहार सम्बन्धी पोषक तत्वों की जानकारी व अन्य स्वास्थ्य सम्बन्धी देखभाल-',
text1:'गर्भावस्था स्त्री जीवन की एक विशेष अवस्था है | गर्भवती स्त्री जो कुछ भी खाती है वह सीधे उसके बच्चे के शारीरिक व मानसिक वृद्धि पर प्रभाव डालती है। अतः परिवार जनों को गर्भवती व धात्री महिलाओं के पोषण पर विशेष ध्यान रखना चाहिये। संतुलित भोजन की थाली, सूक्ष्म पोषक तत्वों से युक्त फल, जड़ एवं हरे पत्तेदार सब्जियाॅ तथा स्वच्छ पानी का नियमित सेवन शरीर में पोषक तत्वों की पूर्ति के लिये अत्यन्त आवश्यक है। ',

};

const Stack=createStackNavigator();

function Details({navigation}){


return(
<View style={styles.details}>
  
  <ScrollView style={styles.scrollstyle}>
  <Text style={styles.details}>{item12.text1}</Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/in_app/image002.gif')}></Image>
  <Text style={styles.details}>{item12.text2}</Text>
  <Image style={styles.imagestyle2} source={require('./assets/app_images/in_app/image047.jpg')}></Image>
  <Text style={styles.details}>{item12.text3}</Text>
  </ScrollView>
</View>
);
}

/*2nd topic details functionf */

function Details2({navigation}){


return(
<View style={styles.details}>
  
  <ScrollView style={styles.scrollstyle}>
  <Text style={styles.details}>{item123.text1}</Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/in_app/image051.jpg')}></Image>
  <Image style={styles.imagestyle2} source={require('./assets/app_images/in_app/image052.jpg')}></Image>
  <Image style={styles.imagestyle2} source={require('./assets/app_images/in_app/image053.jpg')}></Image>
  <Text style={styles.details}>{item123.text2}</Text>
  
  
  </ScrollView>
</View>
);
}


function Details3({navigation}){


return(
<View style={styles.details}>
  
  <ScrollView style={styles.scrollstyle}>
  <Text style={styles.details}>महिलाओं मे मातृ कुपोषण की स्थिति निम्नलिखित है- </Text>
 
  <Text style={{fontWeight:'bold' ,fontSize:25,paddingBottom:5,paddingTop:10}}>1. शरीर का वजन अपेक्षित वजन से कम होना-  </Text>
  <Text style={styles.details}>जैसा कि नाम द्वारा ही ज्ञात हो रहा कि उम्र व लंबाई के अनुसार वजन मे कमी जो कि शरीर में अनेक पोषक तत्वों की कमी का प्रमुख परिणाम एवं कारण है।  </Text>
 
  <Image style={styles.imagestyle1} source={require('./assets/app_images/in_app/image054.jpg')}></Image>
  <Text style={{fontWeight:'bold' ,fontSize:25,paddingBottom:5,paddingTop:10}}>2. सूक्ष्म पोषक तत्वों की कमी- </Text>
  <Text style={styles.details}>सूक्ष्म पोषक तत्वों की कमी शरीर में विटामिन ए, बी, सी तथा डी जैसे आवश्यक विटामिन के साथ-साथ फोलेट , कैल्शियम, आयोडीन व जिंक की कमी को दर्शाता है। इनकी कमी से अपर्याप्त विकास, एनीमिया, मस्तिष्क विकार, थायराइड, रिकेट्स व रोग प्रतिरोधक क्षमता मे कमी इत्यादि शारीरिक समस्यायें उत्पन्न होती है। </Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/in_app/image055.jpg')}></Image>
  
  <Text style={{fontWeight:'bold' ,fontSize:25,paddingBottom:5,paddingTop:10}}>3.शरीर का वजन अपेक्षित वजन से अधिक होना-  </Text>
  <Text style={styles.details}>गर्भावस्था से पहले व गर्भावस्था के दौरान थायराइड हार्मोन्स का असंतुलन, भूख अधिक लगना, पर्याप्त मात्रा में पोषक तत्वों का अवशोषण न होना, एनीमिया ग्रस्त शरीर इत्यादि मातृ कुपोषण का प्रमुख कारण है जिसके द्वारा शरीर का वजन अपेक्षित वजन से अधिक हो जाता है यह स्थिति भी कुपोषण को दर्शाती है।  </Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/in_app/image056.jpg')}></Image>
  
  </ScrollView>
</View>
);
}

function Details4({navigation}){

return(
<View style={styles.details}>
  
  <ScrollView style={styles.scrollstyle}>
  <Text style={styles.details}>{item124.text1}</Text>
  
  <Text style={styles.boldtext}>{1.+'\u2022' + "  गरीबी एवं आर्थिक तंगी "}</Text>  
  <Text style={styles.boldtext}>{2.+'\u2022' + "  दूषित भोज्य पदार्थ का सेवन जैसे - मैदा, अधिक वसा, कृत्रिम खाद्य रंगो की बनी खाद्य पदार्थो का सेवन  "}</Text> 
  <Text style={styles.boldtext}>{3.+'\u2022' + "  नियमित समय पर सही प्रकार से भोजन का सेवन न करना  "}</Text> 
  <Text style={styles.boldtext}>{4.+'\u2022' + "  पाचन एवं पोषण सम्बन्धित रोग जैसे- अल्सर, टाइफाइड, पीलिया, विटामिन सी, ए तथा डी की कमी होना, एक के बाद एक लगातार गर्भधारण होना  "}</Text> 
  <Text style={styles.boldtext}>{5.+'\u2022' + " अशिक्षा एवं पोषक तत्व सन्दर्भित जानकारी का आभाव  "}</Text> 
  <Text style={styles.boldtext}>{6.+'\u2022' + " 	लिंग भेदभाव    "}</Text> 
  <Text style={styles.boldtext}>{7.+'\u2022' + " शारीरिक एवं सामाजिक स्वच्छता का आभाव होना जिसके फलस्वरुप अनेक प्रकार की संक्रामक बीमारी की चपेट मे आने के कारण स्वास्थ्य कमजोर होना। "}</Text> 
  
  </ScrollView>
</View>
);
}

function Details5({navigation}){


return(
<View style={styles.details}>
  
  <ScrollView style={styles.scrollstyle}>
  <Text style={styles.details}>{item125.text1}</Text>
  <Image style={{borderRadius:4,height:300,width:350,}} source={require('./assets/app_images/in_app/image064.jpg')}></Image>
 

</ScrollView>
</View>
);
}
/*detailed screen & functions for the 6th screen */
/***************************************************/
/********************************************************** */ 
/********************************************************** */ 
/********************************************************** */ 
/********************************************************** */ 
/********************************************************** */ 
/******************************************************** */ 

function Details20({navigation}){


  return(
  <View style={styles.details}>
    
  <ScrollView style={styles.scrollstyle}>
  <Text style={styles.details}>प्रोटीन हमारे शरीर की संरचना के लिये महत्वपूर्ण है गर्भवती स्त्रियों मे प्रोटीन की आवश्यकता सामान्य अवस्था से अधिक होती है। </Text>
  <Text style={styles.details}> {'\u2022 गर्भावस्था के दौरान भ्रूण के विकास एवं शारीरिक अंगो के निर्माण हेतु प्रोटीन का सेवन आवश्यक है। '}</Text>
  <Text style={styles.details}>{'\u2022 शारीरिक अंगो का निर्माण, हार्माेन्स संतुलन एवं उनके नियन्त्रण के लिये प्रोटीन आवश्यक होते है।'} </Text>
  <Text style={styles.details}>{'\u2022 आहार के माध्यम से प्रोटीन का सेवन आवश्यक है क्योकि इसे शरीर में वसा या कार्बोहाइड्रेड की भांति सचित नही किया जा सकता।'} </Text>
  <Text style={styles.details}>{'\u2022 दूध स्त्रावण में सहायक तत्व'}</Text>
  <Text style={{fontWeight:'bold',fontSize:20}}>प्रोटीन की र्निधारित मात्रा-</Text>
  
  <ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={200}>
                <Image style={{ marginTop:20,resizeMode:'stretch',width:'100%', height:150}}
                       source={require('./assets/app_images/in_app/image087.png')}/>
            </ImageZoom>
  
  <Text style={{fontWeight:'bold',fontSize:20}}>गर्भवती व धात्री महिलाओं में प्रोटीन की कमी होने से समस्या एवं लक्षण -</Text>
  <Text style={styles.details}> {'\u2022 मांसपेशियों में कमजोरी  '}</Text>
  <Text style={styles.details}>{'\u2022 मां एवं शिशु के विकास में अवरोध '} </Text>
  <Text style={styles.details}>{'\u2022 शरीर में सूजन (एल्ब्यूमिन की कमी के कारण) '} </Text>
  <Text style={styles.details}>{'\u2022 कम वजन वाले शिशु का जन्म'}</Text>
  <Text style={styles.details}>{'\u2022 रोग प्रतिरोधक क्षमता कम, व नवजात की हृदय वृद्धि पर प्रभाव '}</Text>

  <Image  style={ {resizeMode:'contain',height:200, width:320,marginTop:15,marginBottom:15,}}source={require('./assets/app_images/in_app/image065.jpg')}></Image>
 
  <Text style={{fontWeight:'bold',fontSize:20}}>प्रोटीन युक्त खाद्य पदार्थ- </Text>
  <Text style={styles.details}> {'\u2022 फलियाॅ       '}</Text>
  <Text style={styles.details}>{'\u2022 कम वसा वाले डेयरी उत्पाद '} </Text>
  <Text style={styles.details}>{'\u2022 सोया एवं उसके उत्पाद (टोफू , टेम्फ) '} </Text>
  <Text style={styles.details}>{'\u2022 मूंगफली से बना मक्खन '}</Text>
  <Text style={styles.details}>{'\u2022 नट्स (मेवे)'}</Text>
  <Text style={styles.details}>{'\u2022 अंडा'}</Text>
  <Text style={styles.details}>{'\u2022 मछली व चिकन'}</Text>
  
  </ScrollView>
  </View>
  );
  }
  function Details21({navigation}){


    return(
    <View style={styles.details}>
      
      <ScrollView style={styles.scrollstyle}>
  <Text style={styles.details}>विटामिन-डी जिसका रासायनिक नाम कोलकैल्सीफेरोल है यह सूर्य के प्रकाश की उपस्थिति में 1, 25-डाईहाइड्रोक्सी कोलकैल्सीफेराल में परिवर्तित होता है जो कि शरीर में हार्मोन की भांति तथा कैल्शियम एवं फास्फोरस के संचयन में सहायक होता है। विटामिन -डी गर्भवती महिलाओं में कैल्शियम के उपापचय व शिशु की हड्डी के विकास में मदद करते है। </Text>
  <Text style={{fontWeight:'bold',fontSize:20}}>विटामिन- डी की निर्धारित मात्रा-  </Text>
  
  <ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={200}>
                <Image style={{ marginTop:20,resizeMode:'stretch',width:'100%', height:150}}
                       source={require('./assets/app_images/in_app/image088.png')}/>
            </ImageZoom>
  <Text style={{fontWeight:'bold',fontSize:20}}>गर्भवती व धात्री महिलाओं में विटामिन-डी के अभाव से उत्पन्न समस्यायें एवं लक्षण-</Text>
  <Text style={styles.details}> {'\u2022 रोग प्रतिरोधक क्षमता का कम होना     '}</Text>
  <Text style={styles.details}>{'\u2022 शिशु का कंकाल तंत्र व मानसिक स्तर कमजोर होना।  '} </Text>
  <Text style={styles.details}>{'\u2022 बालों  का झड़ना एवं पतले नाखून '} </Text>
  <Text style={styles.details}>{'\u2022 मूत्र विसर्जन अधिक होना  '}</Text>
  <Text style={styles.details}>{'\u2022 बच्चों में रिकेट्स बीमारी का पाया जाना '}</Text>
  <Text style={styles.details}>{'\u2022 शिशुओं एवं बच्चों में ऑस्टोमैलेसिया बीमारी का पाया जाना '}</Text>
  <Text style={styles.details}>{'\u2022 पेट दर्द एंव डायरिया '}</Text>

  <Image  style={ {resizeMode:'contain',height:200, width:320,marginTop:15,marginBottom:15,}}source={require('./assets/app_images/in_app/image066.jpg')}></Image>
 

  <Text style={{fontWeight:'bold',fontSize:20}}>विटामिन-डी युक्त खाद्य पदार्थ- </Text>
  <Text style={styles.details}> {'\u2022 दूध एवं दुग्ध उत्पाद     '}</Text>
  <Text style={styles.details}>{'\u2022 अंडा, मछली, मशरुम   '} </Text>
  <Text style={styles.details}>{'\u2022 बादाम, खजूर एवं तिल का निरन्तर सेवन '} </Text>
  <Text style={styles.details}>{'\u2022 हरी पत्तेदार सब्जियाॅ जैसे-पालक, केला, ब्राॅकली,मेथी, बथुआ इत्यादि।'}</Text>
  <Text style={styles.details}>{'\u2022 मोटे अनाज जैसे- रागी, बाजरा, ज्वार इत्यादि। '}</Text>
  <Text style={styles.details}>{'\u2022 फल जैसे- संतरा अंजीर इत्यादि।   '}</Text>
  <Text style={styles.details}>{'\u2022 सूरज की किरणे।'}</Text>
    
    </ScrollView>
    </View>
    );
    }


    function Details22({navigation}){


      return(
      <View style={styles.details}>
        
        <ScrollView style={styles.scrollstyle}>
      
  <Text style={styles.details}>गर्भवती  एवं धात्री महिलाओं में विटामिन ए की संतुलित मात्रा दूध के उत्पादन में एवं सामान्य दृष्टि के लिये आवश्यक है। विटामिन ‘ए‘ का अभिशोेेेेेेेेेेेेेेेेेषण नवजात शिशु में काफी धीमा हो जाता है, अतः गर्भवती को , विटामिन ए युक्त प्राणिज खाद्य पदार्थो का सेवन अवश्य करना चाहिये। </Text>
  <Text style={{fontWeight:'bold',fontSize:20}}>विटामिन ‘ए‘ की निर्धारित मात्रा-  </Text>
  <ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={200}>
                <Image style={{ marginTop:20,resizeMode:'stretch',width:'100%', height:150}}
                       source={require('./assets/app_images/in_app/image089.png')}/>
            </ImageZoom>
 
  <Text style={{fontWeight:'bold',fontSize:20}}> गर्भवती एवं धात्री महिलाओं में विटामिन ए के अभाव के कारण समस्याएं एवं लक्षण- </Text>
  <Text style={styles.details}> {'\u2022 रोग प्रतिरोधक क्षमता का कम होना'}</Text>
  <Text style={styles.details}>{'\u2022 पित्त रस के अल्पस्त्राव अथवा कमी के कारण लीवर का सड़ना '} </Text>
  <Text style={styles.details}>{'\u2022 प्रोटीन का अभाव  '} </Text>
  <Text style={styles.details}>{'\u2022 नेत्र का अंधापन, अतिसार '}</Text>
  <Text style={styles.details}>{'\u2022चर्मरोग  '}</Text>
  <Image  style={ {resizeMode:'contain',height:200, width:320,marginTop:15,marginBottom:15,}}source={require('./assets/app_images/in_app/image067.png')}></Image>
 
  <Text style={{fontWeight:'bold',fontSize:20}}>विटामिन ‘ए‘ युक्त खाद्य पदार्थ-   </Text>
  <Text style={styles.details}> {'\u2022 यकृत का तेल, मछली'}</Text>
  <Text style={styles.details}>{'\u2022 मक्खन, घी, दूध एवं दुग्ध उत्पाद'} </Text>
  <Text style={styles.details}>{'\u2022 पालक,हरी धनिया,पुदीना,मेथी,चैराई,साग आदि'} </Text>
  <Text style={styles.details}>{'\u2022 गाजर, आम, पपीता   '}</Text>
      
      </ScrollView>
      </View>
      );
      }
      function Details23({navigation}){


        return(
        <View style={styles.details}>
          
          <ScrollView style={styles.scrollstyle}>
  <Text style={styles.details}>गर्भावस्था एवं उससे छः महीने पहले फोलिक एसिड की शरीर में कमी बच्चे के मस्तिष्क तथा रीढ़- हड्डी के पूर्ण विकास को प्रभावित करती है | अतः गर्भवती को हरे-पत्तेदार सब्जियाॅ, खट्टे फल जैसे- नींबू अथवा मौसमी एवं सभी प्रकार की दाल, मेवे जैसे- काजू, पिस्ता, बादाम इत्यादि का सेवन अवश्य करना चाहिये। </Text>
  <Text style={{fontWeight:'bold',fontSize:20}}>फोलिक एसिड की निर्धारित मात्रा-  </Text>
  <ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={200}>
                <Image style={{ marginTop:20,resizeMode:'stretch',width:'100%', height:150}}
                       source={require('./assets/app_images/in_app/image090.png')}/>
            </ImageZoom>
 
<Text style={{fontWeight:'bold',fontSize:20}}>गर्भवती एवं धात्री महिलाओं में फोलिक एसिड की कमी के कारण उत्पन्न समस्यायें एवं लक्षण-  </Text>

<Text style={styles.details}> {'\u2022 खून की कमी एवं रक्ताल्पता     '}</Text>
  <Text style={styles.details}>{'\u2022 बच्चों में कटे होंठ या कटे तालू का होना   '} </Text>
  <Text style={styles.details}>{'\u2022 ‘स्पाइना बाइफिडा’ तंत्रिका तंत्र विकार का पाया जाना   '} </Text>
  <Text style={styles.details}>{'\u2022 डी0एन0ए0 के उत्पादन एवं कार्य क्षमता में बाधा उत्पन्न करना   '}</Text>
  <Text style={styles.details}>{'\u2022 थकान, सिरदर्द, ऊर्जा की कमी का महसूस होना एवं भूख न लगना।    '}</Text>
  
  <Image  style={ {resizeMode:'contain',height:200, width:320,marginTop:15,marginBottom:15,}}source={require('./assets/app_images/in_app/image069.jpg')}></Image>
 
  <Text style={{fontWeight:'bold',fontSize:20}}>फोलिक एसिड युक्त खाद्य पदार्थ- </Text>

  <Text style={styles.details}> {'\u2022 पालक      '}</Text>
  <Text style={styles.details}>{'\u2022 लोबिया   '} </Text>
  <Text style={styles.details}>{'\u2022 एवोकाडो  '} </Text>
  <Text style={styles.details}>{'\u2022 ब्रोकली   '}</Text>
  <Text style={styles.details}>{'\u2022 राजमा     '}</Text>

  <Text style={styles.details}> {'\u2022 हरी मटर       '}</Text>
  <Text style={styles.details}>{'\u2022 संतरे का रस, मौसम्मी एवं अनार    '} </Text>
  <Text style={styles.details}>{'\u2022 खजूर, अंजीर, किशमिश एवं गुड़ को रात में भिगोकर सुबह खाली पेट सेवन करना।'} </Text>
  
        
        </ScrollView>
        </View>
        );
        }

        function Details24({navigation}){


          return(
          <View style={styles.details}>
            
            <ScrollView style={styles.scrollstyle}>
  
  <Text style={styles.details}>विटामिन बी-12 का प्रमुख घटक कोबाल्ट है। संश्लेषित तौर पर इसे साइनोकोबालमिन के नाम से जाना जाता है। विटामिन बी-12 का अणु आकार में बड़ा होता है अतः आन्तरिक कारको द्वारा प्रतिदिन सिर्फ 2.5 से 3.0 माइक्रोग्राम विटामिन बी-12 का अभिशोषण होता है । गर्भवती एवं धात्री महिलाओं में विटामिन बी-12 के अभाव के कारण मेगेेलोब्लास्टिक एनीमिया हो जाता है। </Text>
  <Text style={{fontWeight:'bold',fontSize:20}}>विटामिन बी 12 की शरीर में महत्वपूर्ण भूमिका </Text>
  <Text style={styles.details}> {'\n\u2022 तंत्रिका तंत्र के समन्वयन में सहायक       '}</Text>
  <Text style={styles.details}>{'\n\u2022 डी0एन0ए0 तन्तु के निर्माण में सहायक    '} </Text>
  <Text style={styles.details}>{'\n\u2022 रक्त में लाल रुधिर कणिकाओं के निर्माण में सहायक  '} </Text>


  <Text style={{fontWeight:'bold',fontSize:20}}>विटामिन बी-12 की निर्धारित मात्रा- </Text>
  <ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={200}>
                <Image style={{ marginTop:20,resizeMode:'stretch',width:'100%', height:150}}
                       source={require('./assets/app_images/in_app/image091.png')}/>
            </ImageZoom>
  <Text style={{fontWeight:'bold',fontSize:20}}>गर्भवती व धात्री महिलाओं में विटामिन बी-12 के अभाव व कमी से उत्पन्न लक्षण एवं शारीरिक समस्यायें- </Text>
  <Text style={styles.details}> {'\u2022 मेगैलोब्लास्टिक एनीमिया  '}</Text>
  <Text style={styles.details}>{'\u2022 कमजोेेेेेेेेेेेेेेेेेेरी एवं जी मिचलाना  '} </Text>
  <Text style={styles.details}>{'\u2022 शिशु के शारीरिक अंगो में विकार   '} </Text>
  <Text style={styles.details}>{'\u2022 तंत्रिका तंत्र प्रभावित होना    '}</Text>
  <Image  style={ {resizeMode:'contain',height:200, width:320,marginTop:15,marginBottom:15,}}source={require('./assets/app_images/in_app/image070.png')}></Image>
 
  <Text style={{fontWeight:'bold',fontSize:20}}>विटामिन बी-12 युक्त खाद्य पदार्थ-  </Text>
  <Text style={styles.details}> {'\u2022 मांस, मछली एवं अण्डे  '}</Text>
  <Text style={styles.details}>{'\u2022 दूध एवं दही  '} </Text>
  <Text style={styles.details}>{'\u2022 पनीर एवं मानव निर्मित चीज  '} </Text>
  <Text style={styles.details}>{'\u2022 योगहर्ट   '}</Text>
  <Text style={styles.details}>{'\u2022 समुद्री भोज्य उत्पाद जैसे कि मछली, झींगा'}</Text>

  <Text style={styles.details}>{'\u2022 बादाम    '}</Text>
  <Text style={styles.details}>{'\u2022 स्किमड दूध पाउडर    '}</Text>
          
          </ScrollView>
          </View>
          );
          }

          function Details25({navigation}){


            return(
            <View style={styles.details}>
              
              <ScrollView style={styles.scrollstyle}>
             
  <Text style={styles.details}>ओमेगा-3 वसीय अम्ल बच्चे के मस्तिष्क के विकास तथा गर्भवती के मासपेशियों के सुचारू रूप से क्रियान्वयन हेतु आवश्यक है। गर्भावस्था के दौरान पहले 1-3 महीने तथा 6-9 महीने शिशु के मस्तिष्क विकास तथा अन्य क्रिया कलापों हेतु गर्भवती को अपने आहार में मछली ,सोयाबीन, अलसी के बीज को भूनकर रोटी पर छिड़ककर तथा अखरोट का सेवन करना होगा। </Text>
  <Image  style={ {resizeMode:'contain',height:200, width:320,marginTop:15,marginBottom:15,}}source={require('./assets/app_images/in_app/image071.jpg')}></Image>
 
            
            </ScrollView>
            </View>
            );
            }



            function Details26({navigation}){


              return(
              <View style={styles.details}>
                
                <ScrollView style={styles.scrollstyle}>
             
  <Text style={styles.details}>शिशु की रोग प्रतिरोधक क्षमता तथा डी.एन.ए. विश्लेषण हेतु जिंक की पर्याप्त मात्रा होना आवश्यक है ।  यदि जिंक की कमी गर्भवती स्त्री के शरीर में है तो गर्भ में शिशु के विकास में अवरोध अत्पन्न होता है। जिंक को प्राकृतिक रुप से दालो ,अण्डों, सूखे मेवे व बीज से प्राप्त कर सकते है।  </Text>
  <ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={200}>
                <Image style={{ marginTop:20,resizeMode:'stretch',width:'100%', height:150}}
                       source={require('./assets/app_images/in_app/image093.png')}/>
            </ImageZoom><Image  style={ {resizeMode:'contain',height:200, width:320,marginTop:15,marginBottom:15,}}source={require('./assets/app_images/in_app/image072.jpg')}></Image>
 
              
              </ScrollView>
              </View>
              );
              }


              function Details27({navigation}){


                return(
                <View style={styles.details}>
                  
                  <ScrollView style={styles.scrollstyle}>
               
  <Text style={styles.details}>कैल्शियम की कमी जो कि प्रायः विटामिन डी की कमी या फास्फोरस के सामान्य क्रियान्वयन न होने के कारण सामान्य जनसंख्या व गर्भवती में पायी जाती है। जिसके कारण शिशु की हड्डियाॅ एवं दांतो का विकास प्रभावित तथा गर्भवती हाइपरटेंशन एवं पूर्व डिलवरी का शिकार हो सकती है। </Text>
  <ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={200}>
                <Image style={{ marginTop:20,resizeMode:'stretch',width:'100%', height:150}}
                       source={require('./assets/app_images/in_app/image095.png')}/>
            </ImageZoom>
  <Text style={styles.details}> मुख्य रुप से ये  रागी, बाजरा, करी पत्ता, दुग्ध व दुग्ध उत्पाद, सूखे मेवे, मशरुम, फलियाॅ इत्यादि में पाये जाते है। गर्भवती एवं धात्री महिलायें प्रतिदिन शिशु के साथ 35-45 मिनट धूप में अवश्य बैठे।</Text>
  <Image  style={ {resizeMode:'contain',height:200, width:320,marginTop:15,marginBottom:15,}}source={require('./assets/app_images/in_app/image073.jpg')}></Image>
 
  
                
                </ScrollView>
                </View>
                );
                }
                function Details28({navigation}){


                  return(
                  <View style={styles.details}>
                    
                    <ScrollView style={styles.scrollstyle}>
                    <Text style={styles.details}>मैग्नीशियम की पूर्ति गर्भवती को निम्न समस्याओं जैसे- बदन दर्द, उल्टी, मिचली, भूख न लगना, थकान इत्यादि से निजात दिलाती है। प्राकृतिक रुप से हरी पत्तेदार सब्जियाॅ, सोयाबीन, सूखे मेवे, मशरुम, दुग्ध उत्पाद, मूंगफली से बना मक्खन, मैग्नीशियम की पूर्ति में सहायक है।  </Text>
                    <ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={200}>
                <Image style={{ marginTop:20,resizeMode:'stretch',width:'100%', height:150}}
                       source={require('./assets/app_images/in_app/image096.png')}/>
            </ImageZoom>
                    <Image  style={ {resizeMode:'contain',height:200, width:320,marginTop:15,marginBottom:15,}}source={require('./assets/app_images/in_app/image074.jpg')}></Image>
 
                  </ScrollView>
                  </View>
                  );
                  }

                  function Details29({navigation}){


                    return(
                    <View style={styles.details}>
                      
                      <ScrollView style={styles.scrollstyle}>
                      <Text style={styles.details}>शिशु के मस्तिष्क विकास तथा पाचन-प्रणाली के सामान्य क्रियान्वयन के लिये आयोडीन आवश्यक है साथ ही साथ गर्भवती में थायराइड हार्मोन्स के संतुलन को बनाये रखने के लिये भी जरुरी है। शरीर में थायराइड हार्मोन्स की कमी के कारण बच्चा मरा हुआ, गर्भपात या समय से पूर्व डिलवरी का खतरा होता है। आयोडीन की पूर्ति हेतु नमक की निर्धारित मात्रा के साथ बेरी जैसे- आंवला, दुग्ध व दुग्ध उत्पाद तथा समुद्री भोजन जैसे- मछली, झींगा, सूखे मेवे व बीज का सेवन कर सकते है।</Text>
                      <ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={200}>
                <Image style={{ marginTop:20,resizeMode:'stretch',width:'100%', height:150}}
                       source={require('./assets/app_images/in_app/image097.png')}/>
            </ImageZoom> 
            <Image  style={ {resizeMode:'contain',height:200, width:320,marginTop:15,marginBottom:15,}}source={require('./assets/app_images/in_app/image075.jpg')}></Image>
 
 
                    
                    </ScrollView>
                    </View>
                    );
                    }
                    function Details30({navigation}){


                      return(
                      <View style={styles.details}>
                        
                        <ScrollView style={styles.scrollstyle}>
                        <Text style={styles.details}>लौह तत्व जो कि गर्भवती के लिये सर्वाधिक महत्वपूर्ण पोषक तत्व है जिसके कमी से रक्ताल्पता, थकान, उल्टी मिचली, वजन कम होना व बुखार इत्यादि समस्यायें गर्भावस्था के दौरान बनी रहती है अतः इसकी पूर्ति हेतु हरी-पत्तेदार सब्जियाॅ, दाले, फलियाॅ,  गुड़-चना, सत्तू, खट्टेफल, अनार-मौसम्मी इत्यादि का नियमित सेवन करे </Text>
                        <ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={200}>
                <Image style={{ marginTop:20,resizeMode:'stretch',width:'100%', height:150}}
                       source={require('./assets/app_images/in_app/image098.png')}/>
            </ImageZoom>
                        <Image  style={ {resizeMode:'contain',height:200, width:320,marginTop:15,marginBottom:15,}}source={require('./assets/app_images/in_app/image076.jpg')}></Image>
 

                      
                      </ScrollView>
                      </View>
                      );
                      }

function Details6({navigation}){

  const [item, setitem]=useState([
    {id:1,text:'प्रोटीन',fn:'Details20'},
    {id:2,text:'विटामिन डी',fn:'Details21'},
    {id:3,text:'विटामिन-ए',fn:'Details22'},
    {id:4,text:'फोलिक एसिड',fn:'Details23'},
    {id:5,text:'विटामिन बी-12',fn:'Details24'},
     {id:6,text:'ओमेगा-3 वसीय अम्ल ',fn:'Details25'},
    {id:7,text:'जिंक',fn:'Details26'},
    {id:8,text:'कैल्शियम',fn:'Details27'},
    {id:9,text:'मैग्नीशियम',fn:'Details28'},
    {id:10,text:'आयोडीन',fn:'Details29'},
    {id:11,text:'आयरन',fn:'Details30'},
    {id:13,text:'ऊर्जा',fn:'Details31'},
  ]);
  

  return(
    <ImageBackground source={require('./assets/app_images/jkl.jpg')} style={styles.imagestyle}>
    <View style={styles.container}>
      <FlatList data={item} renderItem={({item}) =>

  <TouchableOpacity  style={styles.listitem11} onPress={()=>navigation.navigate(item.fn,{
    text:item.text
  })}>
     <View style={styles.listitemview}>
         <Text  style={styles.listitemtext} >{item.text}   
         </Text>
     </View>

   </TouchableOpacity>
}/> 
</View>
    </ImageBackground>
  )
}
/**Stack Screen for above screens */
/*detailed screen & functions for the 6th screen */
/***************************************************/
/********************************************************** */ 
/********************************************************** */ 
/********************************************************** */ 
/********************************************************** */ 
/********************************************************** */ 
/******************************************************** */ 
function Details7({navigation}){


return(
<View style={styles.details}>
  
  <ScrollView style={styles.scrollstyle}>
  <Text style={styles.details}>उपरोक्त सभी पोषक तत्वों की पूर्ति के साथ प्रोटीन तथा कैलोरी शारीरिक एवं मानसिक विकास हेतु निर्धारित मात्रा में लेना चाहिये।</Text>
 
  <Text style={styles.boldtext}>{'\u2022' + " फल तथा सब्जियाॅ- रोग प्रतिरोधक क्षमता व पोषक तत्वों की पूर्ति  "}</Text>  
  <Text style={styles.boldtext}>{'\u2022' + " अनाज व मोटे अनाज - कार्बोहाइड्रेट युक्त आहार   "}</Text> 
  <Text style={styles.boldtext}>{'\u2022' + "  दाले-फलिया, मांसाहारी भोजन, समुद्री भोज्य पदार्थ-प्रोटीन युक्त आहार "}</Text> 
  <Text style={styles.boldtext}>{'\u2022' + "  दुग्ध एवं दुग्ध अत्पाद- विटामिन्स तथा सूक्ष्म पोषक तत्वों युक्त "}</Text> 
  <Text style={styles.boldtext}>{'\u2022' + "  वसा एवं शर्करा युक्त उत्पाद एंव ड्रिक्स- ऊर्जायुक्त आहार "}</Text> 

 
 
  <Image  style={ {resizeMode:'contain',height:200, width:320,marginTop:15,marginBottom:15,}}source={require('./assets/app_images/in_app/image078.jpg')}></Image>
  
  
  
  </ScrollView>
</View>
);
}

class Details8 extends Component {
constructor(props) {
super(props);
this.state = {
  HeadTable: ['   समय', '  आहार नियोजन'],
  DataTable: [
    ['सुबह उठने के बाद \n(7:00 AM)', 'गाय का दूध, बादाम दूध, मेवे'],
    ['सुबह का नाश्ता \n(8:00 AM - 9:00 AM)', 'रवा उपमा, मिक्स सब्जी पोहा, मिक्स सब्जी पराठा, दूध रोटी, उबला हुआ अण्डा'],
    ['दोपहर के भोजन से पूर्व के समय \n(11:00 AM )', 'टमाटर का जूस, फल का जूस, चिकन सूप, पालक सूप'],
    ['दोपहर का भोजन \n(1:00 PM - 2:00 PM)', ' \u2022 रोटी, पराठा \n\u2022 लेमन चावल, चावल,वेजिटेबल खिचड़ी \n\u2022 चिकन करी, दाल, हरी पत्तेदार सब्जियाॅ, मिक्स वेजिटेबल सब्जी \n\u2022 रायता, वेजिटेबल सलाद, चटनी'],
    ['शाम का नाश्ता \n(4:00 PM - 6:00 PM)', 'मिक्स सब्जी इडली, दलिया, पनीर सैडविंच,नमकीन सेवई, लौकी या गाज़र हलवा'],
    ['रात का खाना \n(8:00 PM - 9:00 PM)', '\u2022 पलक पनीर, रोटी तथा खीर \n\u2022 वेजिटेबल बिरयानी संग रायता \n\u2022 चिकन, पराठा तथा सलाद \n\u2022 दाल, चावल, हरी पत्तेदार सब्जी, रायता'],
    ['रात के खाने के बाद \n(10:00 PM )', 'गाय का दूध, बटर मिल्क'],
  ]
}
}

render() {
const state = this.state;
return (
  <View style={styles.containe_table}>
    <ScrollView>
    <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
      <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
      <Rows data={state.DataTable} textStyle={styles.TableText}/>
    </Table>
    </ScrollView>
  </View>
)
}
}

class Details9 extends Component {
constructor(props) {
super(props);
this.state = {
  HeadTable: ['   समय', '  आहार नियोजन'],
  DataTable: [
    ['सुबह उठने के बाद \n(7:00 AM)', 'गाय का दूध, बादाम दूध,'],
    ['सुबह का नाश्ता \n(8:00 AM - 9:00 AM)', 'रवा उपमा, मिक्स सब्जी पोहा, मिक्स सब्जी पराठा, दूध रोटी, उबला हुआ अण्डा'],
    ['दोपहर के भोजन से पूर्व के समय \n(11:00 AM )', ' फल का जूस, चिकन सूप, मेवे का लडडू '],
    ['दोपहर का भोजन \n(1:00 PM - 2:00 PM)', ' \u2022 रोटी, पराठा \n\u2022 लेमन चावल, चावल,वेजिटेबल खिचड़ी \n\u2022 चिकन करी, दाल, हरी पत्तेदार सब्जियाॅ, मिक्स वेजिटेबल सब्जी \n\u2022 रायता, वेजिटेबल सलाद, चटनी'],
    ['शाम का नाश्ता \n(4:00 PM - 6:00 PM)', 'मिक्स सब्जी इडली, दलिया, पनीर सैडविंच,नमकीन सेवई, लौकी या गाज़र हलवा सतावर का दूध'],
    ['रात का खाना \n(8:00 PM - 9:00 PM)', '\u2022 पलक पनीर, रोटी तथा खीर \n\u2022 वेजिटेबल बिरयानी संग रायता \n\u2022 चिकन, पराठा तथा सलाद \n\u2022 दाल, चावल, हरी पत्तेदार सब्जी, रायता'],
    ['रात के खाने के बाद \n(10:00 PM )', 'गाय का दूध, बटर मिल्क'],
  ]
}
}

render() {
const state = this.state;
return (
  <View style={styles.containe_table}>
    <ScrollView>
    <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
      <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
      <Rows data={state.DataTable} textStyle={styles.TableText}/>
    </Table>
    </ScrollView>
  </View>
)
}
}
function Details10({navigation}){

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});


return(
<View style={styles.details}>
  
  <ScrollView style={styles.scrollstyle}>
  <View style={{flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
 }}>
  <Video
        ref={video}
        style={ {alignSelf: 'center',
        width: 350,
        height: 300}}
        source={{
          uri: 'https://rdicbela.co.in/video/video.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    
    <View style={{ flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}}>
    <Button
          title={status.isPlaying ? 'वीडियो  रोकें ' : 'वीडियो  चलाये '}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
        
      </View>

   </View>
  <Text style={styles.details}>संतुलित भोजन के साथ-साथ भोजन एवं पानी का स्वच्छ होना आवश्यक है अतः शारीरिक स्वच्छता जैसे हाथ पैर के नाखून कटे होना, नियमित व्यायाम, स्नान तथा समय-समय पर हाथ धोना एवं पेट के कीड़ों को मारने हेतु दवाई का सेवन जरुरी है। घरेलू स्वच्छता हेतु कूड़े-करकट को कूड़ेघर मे डालना अथवा मिट्टी के भीतर दबा देना चाहिये। किसी स्थान एवं नाली में पानी एकत्र न होने दे, मच्छर एवं मक्खियों को रसोई एवं घर में न आने हेतु जालीदार दरवाजे लगवायें। शौच हेतु शौचालय बनवायें एवं पानी उबाल कर पिये। प्रतिदिन पूरे घर की सफाई करें। </Text>
  
  </ScrollView>
</View>
);
}

function Details11({navigation}){


return(
<View style={styles.details}>
  
  <ScrollView style={styles.scrollstyle}>
  <Text style={styles.details}>कोरोना एक गंभीर सर्वव्यापक महामारी है, जिसका प्रसार पूरे विश्व में है तथा वर्तमान समय में शहरी व ग्रामीण जीवन व्यवसथा को अत्यधिक प्रभावित कर चुकी है। यह संक्रामक बीमारी, सामाजिक, पारिवारिक व आर्थिक जीवन को प्रभवित कर हमें यह शिक्षा देती है कि संक्रमण अथवा व्यक्तिगत संपर्क से फैलने वाली बीमारी जैसे कोरोना, मलेरिया, तपेदिक आदि हमारे शरीर के भीतर कितने खतरनाक परिवर्तन कर सकती है। </Text>
  <Image  style={ {resizeMode:'contain',height:200, width:320,marginTop:15,marginBottom:15,}}source={require('./assets/app_images/in_app/image081.jpg')}></Image>
   
  <Text style={styles.details}>शारीरिक एवं घरेलू स्वच्छता के साथ मास्क, साबुन व सैनटाइजर का उपयोग एवं दो गज की दूरी हमारे जीवन का अहम हिस्सा है जिसको अपनाकर हम अपने एवं अपने परिवार को स्वस्थ एवं आर्थिक रुप से सशक्त बना सकते है। अतः विशेष बिन्दु जिनको ध्यान में रखकर हम कोरोना एवं अन्य बीमारियों से स्वयं की रक्षा कर सकते है। निम्न है- </Text>
  
  <Text style={styles.details}>1.साबुन एवं हैडवाश से हाथ धुले एवं सैनेटाइजर का प्रयोग करे। </Text>
  <Image  style={ {resizeMode:'contain',height:200, width:320,marginTop:15,marginBottom:15,}}source={require('./assets/app_images/in_app/image082.jpg')}></Image>
 
  <Text style={styles.details}>2.घर से बाहर निकलते समय चेहरे पर मास्क एवं घरेलू दुपट्टे का प्रयोग करें। भीड़  वाले स्थल में दो गज की दूरी रखे। </Text>
  <Image  style={ {resizeMode:'contain',height:200, width:320,marginTop:15,marginBottom:15,}}source={require('./assets/app_images/in_app/image040.png')}></Image>
 
 
  <Text style={styles.details}>3.फल-सब्जियाॅ एवं अन्य थैलियो  वाली सामाग्री को नमक वाले गुनगुने पानी में 30 मिनट तक डाल दे तत्पश्चात् सूती कपड़े से पोछ कर उपयोग में लाये। </Text>
  <Text style={styles.details}>4.नियमित व्यायाम व आयुष मंत्रालय द्वारा निर्देशित काढ़े का सेवन करें। स्वास्थ्य वर्धक भोजन का सेवन करें। </Text>
  <Text style={styles.details}>5.गर्भवती व धात्री महिलाये खुले में शौच में न जाये। समय-समय पर अपने तथा परिवार के लोगो का नाखून काटे तथा बच्चे एवं स्वयं का तापमान चेक करती रहे।</Text>
  
  <Image  style={ {resizeMode:'contain',height:200, width:320,marginTop:15,marginBottom:15,}}source={require('./assets/app_images/in_app/image086.jpg')}></Image>
 
 </ScrollView>
</View>
);
}




/* recipi screens and details for the   */

function Fetails1({navigation}){
  
  
  return(
  <View style={styles.details}>
    
    
    <ScrollView style={styles.scrollstyle}>
    <Text style={{fontSize:22,fontWeight:'bold',marginLeft:10,marginTop:10}}>आवश्यक सामग्री-</Text>

    <Text style={{fontSize:20,textAlign:'center',marginTop:15}}>आंवला-	200 ग्राम{'\n'}{'\n'} चीनी	-200 ग्राम{'\n'} {'\n'}दालचीनी पाउडर -2 ग्राम {'\n'}{'\n'}घी -	5 ग्राम</Text>
    <Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}विधि-	</Text>
     <Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}  सर्वप्रथम आंवले को कद्दूकस द्वारा घीस ले इसके पश्चात् कद्दूकस किये हुए आंवले को 1/2 कप पानी व चीनी को डाल कर मिक्सी में पीस ले। </Text>
     <Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}  अब मिश्रण को कड़ाही में डाल कर भूने तथा लगातार चलाते रहे। लगभग 10 मिनट तक पकाने के पश्चात दालचीनी का पाउडर डाले। </Text>
    <Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}  पके मिश्रण को एक गोल थाली में घी लगाकर जमने के लिये धूप में छोड़ दे। तेज घूप की रोशनी में आंवला पापड़ शाम तक सूख जायेगा। जमने के पश्चात उसे पतली एवं लम्बी स्लाइसस में काट कर फ्रिज में स्टोर कर ले एवं ताजा सर्व करें। </Text>
    <Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}‘आंवला पापड़‘ व्यंजन मे उपस्थित पोषक तत्व की मात्रा-	</Text>
    
    



    <ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={300}>
                <Image style={{resizeMode:'contain',width:'100%', height:200}}
                       source={require('./assets/reciepe/jpg/rec_1.jpg')}/>
            </ImageZoom>
  


  </ScrollView>
  </View>
  );
  }

  function Fetails2({navigation}){


    return(
    <View style={styles.details}>
      
      <ScrollView style={styles.scrollstyle}>
      <Text style={{fontSize:22,fontWeight:'bold',marginLeft:10,marginTop:10}}>आवश्यक सामग्री-</Text>

    <Text style={{fontSize:20,textAlign:'center',marginTop:15}}>कच्चा आम -	2 {'\n'}{'\n'}पानी-	1 कप {'\n'} {'\n'} चीनी	-62ग्राम{'\n'} {'\n'}कार्नफ्लोर या जिलेटिन 	-		31 ग्राम {'\n'}{'\n'}काला नमक 			-		1 चुटकी 
</Text>
    <Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}विधि-	</Text>
   <Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'} सर्वप्रथम आम को छीलकर छोटे-छोटे टुकड़ो में काटकर मिक्सी में 1 कप पानी मिलाकर पेस्ट बना लें। </Text>
   <Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}अब एक कटोरी में कार्नफ्लोर और 1/2 कप पानी ले एवं उसे अच्छे से घोल ले। </Text>
   <Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'} अब कड़ाही में आम का मिश्रण डालकर गर्म करे तथा उसमें चीनी तथा काला नमक डालकर मिला लें। </Text>
   <Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}उबाल आने पर कार्नफ्लोर का घोल डाले तथा भली-भांति मिलायें जब तक वह सही से घुल न जाये। एक थाली पर चिकनाई लगा ले तथा मिश्रण को थाली में जमने के लिये 5-6 घंटे फ्रिज में छोड़ दे। 	</Text>
   <Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}इसके पश्चात् फ्रिज से निकालकर चौकोर टुकड़ो में काट ले तथा सर्व करें। आप चाहे तो डिब्बाबन्द कर 10-15 दिन तक फ्रिज में स्टोर कर सकते है।	</Text>
   <Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}कच्चे आम की जेली‘ व्यंजन मे उपस्थित पोषक तत्व की मात्रा-</Text>
  
   <ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={300}>
                <Image style={{resizeMode:'contain',width:'100%', height:200}}
                       source={require('./assets/reciepe/jpg/rec_2.jpg')}/>
            </ImageZoom>
  
   </ScrollView>
    </View>
    );
    }
  

    function Fetails3({navigation}){


      return(
      <View style={styles.details}>
 
        <ScrollView style={styles.scrollstyle}>
        <Text style={{fontSize:22,fontWeight:'bold',marginLeft:10,marginTop:10}}>आवश्यक सामग्री-</Text>

    <Text style={{fontSize:20,textAlign:'center',marginTop:15}}>जामुन		-		100 ग्राम {'\n'}{'\n'}        चीनी		-		1 छोटा चम्मच 
    {'\n'} {'\n'} काला नमक	-		1/2 छोटा चम्मच  </Text>
    <Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}विधि-	</Text>
   <Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}जामुन के गुदे को अलग कर ले तथा मिक्सर में चीनी व जामुन के गुदे को अच्छी तरह से पीस ले। </Text>
   <Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}काला नमक, चीनी एवं पानी मिलाये, जामुन शर्बत सर्व करने के लिये तैयार है।</Text>
   <Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}‘जामुन शर्बत‘ व्यंजन मे उपस्थित पोषक तत्व की मात्रा-</Text>
  
   <ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={300}>
                <Image style={{resizeMode:'contain',width:'100%', height:200}}
                       source={require('./assets/reciepe/jpg/rec_3.jpg')}/>
            </ImageZoom>
  

       </ScrollView>
      </View>
      );
      }
    
      function Fetails4({navigation}){


        return(
        <View style={styles.details}>
          
          <ScrollView style={styles.scrollstyle}>
          <Text style={{fontSize:22,fontWeight:'bold',marginLeft:10,marginTop:10}}>आवश्यक सामग्री-</Text>

<Text style={{fontSize:20,textAlign:'center',marginTop:15}}>तिल			-		65 ग्राम
{'\n'}{'\n'}मूंगफली		-		65 ग्राम
{'\n'}{'\n'}बादाम			-		30 ग्राम 
{'\n'}{'\n'}घी 			-		30 मिली
{'\n'}{'\n'}शक्कर	       	-		90 ग्राम 
{'\n'}{'\n'}इलाइची पाउडर 	-		1 चम्मच 
{'\n'}{'\n'}दूध की मलाई		-		2 बड़े चम्मच
</Text>
<Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}विधि-	</Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}सर्वप्रथम तिल को मध्यम आंच पर भूने तथा अलग रख लें। </Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}मूंगफली को भूने तथा छील लें। इसके पश्चात इसको मिक्सी मे पीस लें ।</Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}बादाम को भी पीस लें तथा अब तिल को दरदरा पीस लें। </Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}एक कड़ाही मे 30 मिली घी गर्म करे तथा सभी पाउडर को डालकर भूने हल्का भूरा होने पर इसमें शक्कर तथा इलायची पाउडर डाल कर मिलायें हल्का ठंडा होने पर इस मिश्रण मे मलाई डाल कर उसको अच्छे से मिलायें तथा हाथ में हल्का घी लगाकर मिश्रण को लड्डू का आकार दें।</Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}तिल मूंगफली के स्वादिष्ट लड्डू तैयार है जो कि प्रोटीन युक्त तथा रोग प्रतिरोधक क्षमता को मजबूत बनाने में सहायक है।</Text>
<Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}‘तिल मूंगफली लड्डू व्यजंन मे उपस्थित पोषक तत्वों की मात्रा-</Text>

<ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={300}>
                <Image style={{resizeMode:'contain',width:'100%', height:200}}
                       source={require('./assets/reciepe/jpg/rec_4.jpg')}/>
            </ImageZoom>
  
     </ScrollView>
        </View>
        );
        }
      
        function Fetails5({navigation}){


          return(
          <View style={styles.details}>
            
            <ScrollView style={styles.scrollstyle}>
            <Text style={{fontSize:22,fontWeight:'bold',marginLeft:10,marginTop:10}}>आवश्यक सामग्री-</Text>
<Text style={{fontSize:20,textAlign:'center',marginTop:15}}>अलसी-	200 ग्राम {'\n'}{'\n'}गुड़-300 ग्राम {'\n'}{'\n'}देसी घी	-	150 ग्राम {'\n'}{'\n'}काजू	-	10 ग्राम (बारीक कटा हुआ)</Text>
<Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}विधि-	</Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}मध्यम ऑच पर कड़ाही गर्म करें और उसमें घी और अलसी डालकर 7-10 मिनट तक भूनें । अलसी निकालकर एक थाली में ठंडा करे एवं अलसी को दरदरा पीस लें।</Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}गर्म कड़ाही में गुड़ डालकर थोड़ा गर्म करें और उसमें अलसी डालकर मिक्स करे। इसे तब तक  चलाएं जब गुड़ एकदम से पिद्यल न जाए।  </Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}अब एक थाली को घी से ग्रीस करें और उसमें अलसी, काजू और गुड़ का मिश्रण डालें, उसे ठण्डा होने दें। अब मिश्रण को मनचाहे आकार में काटें।</Text>
<Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}‘अलसी चॉकलेट रेसिपी‘ व्यजंन मे उपस्थित पोषक तत्व की मात्रा-</Text>
<ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={300}>
                <Image style={{resizeMode:'contain',width:'100%', height:200}}
                       source={require('./assets/reciepe/jpg/rec_5.jpg')}/>
            </ImageZoom>
  
 </ScrollView>
          </View>
          );
          }
        
          function Fetails6({navigation}){


            return(
            <View style={styles.details}>
              
              <ScrollView style={styles.scrollstyle}>
              <Text style={{fontSize:22,fontWeight:'bold',marginLeft:10,marginTop:10}}>आवश्यक सामग्री-</Text>

<Text style={{fontSize:20,textAlign:'center',marginTop:15}}>चने की दाल 			-		20 ग्राम 
{'\n'}{'\n'}		मूँग की दाल 		      -		20 ग्राम 
{'\n'}{'\n'}		उड़द दाल 			-		20 ग्राम 
{'\n'}{'\n'}		चावल				-		20 ग्राम 
{'\n'}{'\n'}	दही				-		10 मिली 
{'\n'}{'\n'}		कटी सब्जियॉ  		-		50 ग्राम
(शिमला मिर्च, प्याज, हरी मिर्च,
करीपत्ता, टमाटर)
{'\n'}{'\n'}तेल				-		15 मिली
{'\n'}{'\n'}राई				-		5 ग्राम 
</Text>
<Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}विधि-	</Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}सभी दालों को भिगो ले, चावल को अलग से 12-14 घंटो के लिये भिगोये। इसके पश्चात् सभी दालों तथा चावल को रगड़ कर धुले तथा मिक्सी में पीस लें। </Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}सभी दालो तथा चावल को पीसकर उसमें दही मिलायें तथा 8-10 घंटो के लिये ढककर रख दें। </Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}उत्तपम बनाने से पहले तवे पर तेल लगाये तथा दाल के मिश्रण को तवे पर लगाये।इसके पश्चात् कटी सब्जियों का मिश्रण, राई, करी पत्ता छिड़के तथा किसी बर्तन के द्वारा ढ़ककर धीमी आंच पर पकाये। </Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}ढक्कन खोलकर उत्तपम को पलट दे तथा 5 मिनट ढक कर पकायें, उत्तपम को नारियल चटनी व हरी चटनी के साथ सर्व करे, उत्तपम तैयार है। </Text>    
<Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}‘मूल्यवर्धक उत्तपम’ व्यजंन मे उपस्थित पोषक तत्व की मात्रा-</Text>
<ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={300}>
                <Image style={{resizeMode:'contain',width:'100%', height:200}}
                       source={require('./assets/reciepe/jpg/rec_6.jpg')}/>
            </ImageZoom>
  
  </ScrollView>
            </View>
            );
            }
            function Fetails7({navigation}){


              return(
              <View style={styles.details}>
                
                <ScrollView style={styles.scrollstyle}>
                <Text style={{fontSize:22,fontWeight:'bold',marginLeft:10,marginTop:10}}>आवश्यक सामग्री-</Text>

<Text style={{fontSize:20,textAlign:'center',marginTop:15}}>सोया पोगहर्ट				-		130 ग्राम 
{'\n'}{'\n'}
जीरा पाउडर 	-		1 छोटा चम्मच 
{'\n'}{'\n'}
अदरक-हरी मिर्च का पेस्ट		-		1/2 चम्मच
{'\n'}{'\n'} 
जीरा					-		1/2 छोटा चम्मच
{'\n'}{'\n'} 
हींग					-		1 चुटकी 
{'\n'}{'\n'}
काला नमक 				-		1/2 चम्मच
{'\n'}{'.\n'} 
हरा धनिया 				-		2 टहनी 
{'\n'}{'\n'}
नमक					-		1/2 चम्मच </Text>
<Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}विधि-	</Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}छाछ बनाने के लिये एक बाउल में सोया पोगहर्ट, जीरा पाउडर, अदरक-हरी मिर्च का पेस्ट, जीरा, हींग, काला नमक अच्छी तरह मिला लें। </Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}2 कप ठंडा पानी डालकर अच्छी तरह फेट लें। जीरे तथा हींग का तड़का लगाकर हरी धनिया डालकर सर्व करेें।  </Text>
<Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}‘सोया छाछ’ रेसिपी द्वारा प्राप्त पोषक तत्व-</Text>

<ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={300}>
                <Image style={{resizeMode:'contain',width:'100%', height:200}}
                       source={require('./assets/reciepe/jpg/rec_7.jpg')}/>
            </ImageZoom>
  
               </ScrollView>
              </View>
              );
              }
              function Fetails8({navigation}){


                return(
                <View style={styles.details}>
                  
                  <ScrollView style={styles.scrollstyle}>
                  <Text style={{fontSize:22,fontWeight:'bold',marginLeft:10,marginTop:10}}>आवश्यक सामग्री-</Text>

<Text style={{fontSize:20,textAlign:'center',marginTop:15}}>सहिजन	-	250 ग्राम{'\n'}{'\n'}प्याज	-	2{'\n'}{'\n'}टमाटर -	2{'\n'}{'\n'}लहसुन	-	1{'\n'}{'\n'}हरी मिर्च -	2{'\n'}{'\n'}हल्दी पाउडर -	1 छोटा चम्मच{'\n'}{'\n'}लाल मिर्च पाउडर -	1 छोटा चम्मच{'\n'}{'\n'}गरम मसाला -	1 छोटा चम्मच{'\n'}{'\n'}सब्जी मसाला -	2 छोटा चम्मच{'\n'}{'\n'}गरी का बुरादा -	2 छोटा चम्मच{'\n'}{'\n'}नमक -	स्वादानुसार{'\n'}{'\n'}तेल	-	2-3 चम्मच </Text>
<Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}विधि-	</Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}सर्वप्रथम सहिजन को छोटे-छोटे टुकड़ो में काट लें व नमक मिलाकर अलग रखे जिससे छिद्र में पड़ी गंदगी साफ हो सके। लगभग 15-20 मिनट बाद गुनगुने पानी से हाथ से मलकर अच्छी तरह सहिजन को धुले।</Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}अब प्याज, लहसुन, हरी मिर्च को बारीक काटे एवं एक कड़ाही में 2 चम्मच तेल डालकर उसमें उपरोक्त सब्जी को पकायें। हल्का सुनहरा भूरा होने पर गरम मसाला, सब्जी मसाला, नमक,  लाल मिर्च पाउडर एवं हल्दी डालें तथा मसालो को भली-भांति पकायें।</Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}मसाला कड़ाही मे पकाते समय तेल छोड़ना शुरु करे तब 2 टमाटर बारीक काट कर उन्हें मसालों के साथ पकायें।</Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}इस प्रकार उबली सहिजन को मसाले पकने के पश्चात् मिला ले तथा 10-15 मिनट मध्यम आंच पर पकने दे । सब्जी पकने के पश्चात् एक गिलास गर्म पानी सब्जी में मिलायें जो उसे रसेदार बना देगा। पुनः 10-15 मिनट के लिये ढककर सब्जी पकायें।</Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}10-15 मिनट पश्चात् सहिजन करी तैयार है। रोटी या पुलाव के साथ गर्म-गर्म परोस सकते है, यह स्वाद के साथ-साथ प्रचुर मात्रा में पोेेेेेेेेेेेषणयुक्त है।</Text>
<Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}‘सहिजन करी’ रेसिपी द्वारा प्राप्त पोषक तत्व-</Text>
<ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={300}>
                <Image style={{resizeMode:'contain',width:'100%', height:200}}
                       source={require('./assets/reciepe/jpg/rec_8.jpg')}/>
            </ImageZoom>
  
</ScrollView>
                </View>
                );
                }

                function Fetails9({navigation}){
                  return(
                  <View style={styles.details}>
                    
                    <ScrollView style={styles.scrollstyle}>
                    <Text style={{fontSize:22,fontWeight:'bold',marginLeft:10,marginTop:10}}>आवश्यक सामग्री-</Text>

<Text style={{fontSize:20,textAlign:'center',marginTop:15}}>शतावर				-		100 ग्राम {'\n'}{'\n'}
मैदा				-		10 ग्राम {'\n'}{'\n'}
दूध					-		50 मिली {'\n'}{'\n'}
चीनी				-		1/2 छोटा चम्मच {'\n'}{'\n'}
प्याज				-		40 ग्राम {'\n'}{'\n'}
लहसुन				-		6 कलियां {'\n'}{'\n'}
तेल					-		1 छोटा चम्मच {'\n'}{'\n'}
नमक				-		1 छोटा चम्मच {'\n'}{'\n'}
काली मिर्च पाउडर 		-		1 चुटकी {'\n'}{'\n'}
टमाटर 				-		40 ग्राम {'\n'}{'\n'}
नमक					-		स्वादानुसार</Text>
<Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}विधि-	</Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}एक पैन में तेल गर्म करें, इसमें प्याज व लहसून बारीक काट कर हल्के भूरे होने तक भूने, कटे टमाटर तथा शतावर को डालें व पकने दे। 
</Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}पैन में मैदा डालकर पालक को पकाते रहे। इसमें काली मिर्च पाउडर, चीनी, नमक और 1/2 कप पानी डाले, 10 मिनट तक ढ़क कर अलग रख दें। 
 </Text>


<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}अब मिक्सी में पालक के मिश्रण पीसे तथा पुनः प्यूरी को पैन में उबालें एवं दूध डालते रहे। 2 मिनट पकने के बाद सर्व करें। </Text>
<Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}‘शतावर सूप’ व्यजंन मे उपस्थित पोषक तत्व की मात्रा-</Text>

<ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={300}>
                <Image style={{resizeMode:'contain',width:'100%', height:200}}
                       source={require('./assets/reciepe/jpg/rec_9.jpg')}/>
            </ImageZoom>
  
                   </ScrollView>
                  </View>
                  );
                  }
                  function Fetails10({navigation}){


                    return(
                    <View style={styles.details}>
                      
                      <ScrollView style={styles.scrollstyle}>
                      <Text style={{fontSize:22,fontWeight:'bold',marginLeft:10,marginTop:10}}>आवश्यक सामग्री-</Text>

<Text style={{fontSize:20,textAlign:'center',marginTop:15}}>रागी               	-			200 ग्राम {'\n'}{'\n'}
दही				-			64 ग्राम {'\n'}{'\n'}
हरी मिर्च 			-			5 ग्राम {'\n'}{'\n'}
बेसन				-			20 ग्राम {'\n'}{'\n'}
नमक				-			1/2 चम्मच {'\n'}{'\n'}
ईनो				-			1 पाउच {'\n'}{'\n'}
राई				-			1 चम्मच {'\n'}{'\n'}
करी पत्ता 			-			5 ग्राम {'\n'}{'\n'}
तेल				-		      2 चम्मच {'\n'}{'\n'}
सूजी				-			30 ग्राम </Text>
<Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}विधि-	</Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}एक बर्तन में रागी, बेसन, सूजी, नमक, हरी मिर्च (कदूक्स की हुई) तथा दही मिलाकर 15 मिनट के लिये रख दें। </Text>
<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'} प्लेट (गहरी) में तेल लगाकर ग्रीसिंग कर ले तथा घोल में 1 पाउच ईनो को मिला कर थाली में डालें, चारो तरफ से एक बार टैप करे तथा 15-20 मिनट के लिये स्टीम करें। </Text>


<Text style={{fontSize:20,marginLeft:18,marginTop:10,fontSize:20,}}>{'\u2022'}तत्पश्चात् तेल गर्म कर उसमें राई, करी पत्ता का तड़का बनाकर स्टीमड ढोकले के ऊपर डाले। ढोकले को एक समान चौड़े आकार में काट कर अपनी पसन्दीदा चटनी के साथ सर्व करें। 
</Text>
<Text style={{fontSize:20,marginLeft:10,fontSize:22,fontWeight:'bold'}}>{'\n'}‘रागी ढ़ोकला’ व्यजंन मे उपस्थित पोषक तत्व की मात्रा-</Text>

<ImageZoom cropWidth={Dimensions.get('window').width-25}
                       cropHeight={300}
                       imageWidth={Dimensions.get('window').width-25}
                       imageHeight={300}>
                <Image style={{resizeMode:'contain',width:'100%', height:200}}
                       source={require('./assets/reciepe/jpg/rec_10.jpg')}/>
            </ImageZoom>
  
                     </ScrollView>
                    </View>
                    );
                    }
                    
function Details12({navigation}){

  const [item, setitem]=useState([
    {id:1,text:'आंवला पापड़',fn:'Fetails1',image_source:require('./assets/app_images/recipi/Image1.jpg')},
    {id:2,text:'कच्चे आम की जेली ',fn:'Fetails2',image_source:require('./assets/app_images/recipi/Image2.jpg')},
    {id:3,text:'जामुन शर्बत',fn:'Fetails3',image_source:require('./assets/app_images/recipi/Image3.jpg')},
    {id:4,text:'तिल-मूंगफली के लड्डू',fn:'Fetails4',image_source:require('./assets/app_images/recipi/Image4.jpg')},
    {id:5,text:'अलसी चॉकलेट',fn:'Fetails5',image_source:require('./assets/app_images/recipi/Image5.jpg')},
    {id:6,text:'मूल्यवर्धक उत्तपम',fn:'Fetails6',image_source:require('./assets/app_images/recipi/Image6.jpg')},
    {id:7,text:'सोया छाछ',fn:'Fetails7',image_source:require('./assets/app_images/recipi/Image7.jpg')},
    {id:8,text:'सहिजन करी',fn:'Fetails8',image_source:require('./assets/app_images/recipi/Image8.jpg')},
    {id:9,text:'शतावर सूप',fn:'Fetails9',image_source:require('./assets/app_images/recipi/Image9.jpg')},
    {id:10,text:'रागी ढोकला',fn:'Fetails10',image_source:require('./assets/app_images/recipi/Image10.jpg')},
    
  ]);


   
  return(
  <View style={styles.details}>
    
   
      <FlatList data={item} renderItem={({item})=>
    <TouchableOpacity style={styles.details_foo_1} onPress={()=>navigation.navigate(item.fn,{
      text:item.text
    })}>
    <View style={styles.details_foo}>  
    <Image  style={ styles.image_foo}source={item.image_source}></Image>
    <Text style={{fontSize:20,fontWeight:'bold'}}>{item.text}</Text>
    </View>
    </TouchableOpacity>
}/>
   
    </View>
  );
  }
  

  
  


                      
function Details31({navigation}){

 


   
  return(
  <View style={styles.details}>
    
    <ScrollView style={styles.scrollstyle}>

     <Text  style={styles.details}>जैसा कि सर्ववदित है कि मनुष्य को शारीरिक कार्य करने एवं जीवनयापन करने हेतु ऊर्जा मुख्य हैं। पृथ्वी पर पौधों एवं मनुष्य की ऊर्जा का मुख्य स्त्रोत सूर्य है एवं गर्भ मे शिशु के विकास हेतु निर्धारित मात्रा के अतिरिक्त ऊर्जा की आवश्यकता होती है जो कि निम्नलिखित है।
     </Text ><Text style={{fontSize:24,fontWeight:'bold'}}> गर्भवती हेतु निर्धारित ऊर्जा की मात्रा :</Text>
         <Text style={styles.details}> सामान्य महिला हेतु निर्धारित सामान्य वजन 55 किग्रा है एवं 2130 कि0 कैलोरी की आवश्यकता होती है। गर्भावस्था मे निर्धारित वजन 65 किग्रा एवं  2165 कि0 कैलोरी की आवश्यकता होती है। इसी प्रकार स्तनपान करने वाली महिलाओं को 0 से 6 माह तक 2730 कि0 कैलोरी एवं 6 से 12 माह मे 2650 कि0 कैलोरी की आवश्यकता होती है। अत: निर्धारित मात्रा के अनुसार महिलाओं को अपने भोजन मे स्टार्च एवं कार्बोहाइड्रेट का भलीभांति चयन करना चाहिये ताकि स्वयं एवं शिशु का सर्वागींण विकास हो सके।
         </Text>
         <Text style={{fontSize:24,fontWeight:'bold' ,paddingBottom:15} }> ऊर्जा के मुख्य स्त्रोत :
</Text>
<Text style={{fontSize:20,paddingLeft:15,paddingBottom:8}}>{'\u2B24'}   	शर्करा एवं शर्करा से निर्मित उत्पाद

	

	</Text>
  <Text style={{fontSize:20,paddingLeft:15,paddingBottom:8}}>{'\u2B24'}   अनाज एवं मोटे अनाज
</Text>
<Text style={{fontSize:20,paddingLeft:15,paddingBottom:8}}>{'\u2B24'}   फल एवं सब्जियां
</Text><Text style={{fontSize:20,paddingLeft:15,paddingBottom:8}}>{'\u2B24'}   मेवे एवं फलियां
</Text>
<Text style={{fontSize:20,paddingLeft:15,paddingBottom:8}}>{'\u2B24'}   वसा एवं वसीय उत्पाद
</Text>
   </ScrollView>
  </View>
  );
  }
  
/*new function that will hold the  */


  

function LandingPage({navigation}){

  

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        setModalVisible(false);
      }
        
    } catch(e) {
      // error reading value
    }
  }
  
getData();

  
  const [Gender, setGender] = useState('Male');
  const [name, setname] = useState('');
  const [city, setcity] = useState('');
  const [Age, setAge] = useState('');
  const [mobile, setmobile] = useState('');
  const [email, setemail] = useState('');
  const [modalVisible, setModalVisible] = useState(true);
  
  

  function submit_data(name,Gender,Age,city,mobile,email){

    
    var fdata=new FormData();
    const data = [{
      name: name, 
      Gender: Gender, 
      Age: Age,
      city: city,
      mobile: mobile,
      email: email
  }];
    

fetch("https://sheetdb.io/api/v1/4018pznyrkj2e", {
  method: "POST",
  headers:{
    'Content-Type':'application/json',
  },
    body:JSON.stringify(data)
})
.then(function(response){ 
return response.json();   
})
.then(function(data){ 
 Alert.alert('जानकारी भेज दी गयी !')
 
 setModalVisible(!modalVisible) 
 
 const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value)
  } catch (e) {

        // saving error
  }
 
}
storeData(name);

});



}


  const [item, setitem]=useState([
  
    {id:1,text:'प्रस्तावना',fn:'Details'},
    {id:2,text:'मातृ कुपोषण क्या है ?',fn:'Details2'},
    {id:3,text:'मातृ कुपोषण के प्रकार',fn:'Details3'},
    {id:4,text:'मातृ कुपोषण के कारण',fn:'Details4'},
    {id:5,text:'मातृ कुपोषण के निवारण हेतु पोषक तत्व',fn:'Details5'},
    {id:6,text:'गर्भवती व धात्री महिलाओं के लिये आवश्यक पोषक तत्व ',fn:'Details6'},
    {id:7,text:'गर्भवती एवं धात्री महिला हेतु संतुलित आहार',fn:'Details7'},
    {id:8,text:'गर्भवती महिला हेतु संतुलित आहार नियोजन',fn:'Details8'},
    {id:9,text:'धात्री महिला हेतु संतुलित आहार नियोजन',fn:'Details9'},
    {id:10,text:'शारीरिक एवं घरेलू स्वच्छता',fn:'Details10'},
    {id:11,text:'कोरोना के सन्दर्भ में विशेष जानकारी',fn:'Details11'},
    {id:12,text:'पोषण सम्बन्धी रेसिपी',fn:'Details12'},
    
  ]);
  

  return(
    <ImageBackground source={require('./assets/app_images/pexel.jpg')} style={styles.imagestyle}>
    <View style={styles.container}>
      <Header navigation={navigation
      } title={'मातृत्व पोषण'}/>
      <FlatList data={item} renderItem={({item}) =>

  <TouchableOpacity  style={styles.listitem} onPress={()=>navigation.navigate(item.fn,{
    text:item.text
  })}>
     <View style={styles.listitemview}>
         <Text  style={styles.listitemtext} >{item.text}   
         </Text>
     </View>

   </TouchableOpacity>
}/> 

</View>

<View style={styles.centeredView}>

  
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}         
         
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View>
          <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
        <ScrollView>
        <Text style={{color:'black',marginLeft:15,fontSize:20,marginTop:10}}>नाम  </Text>
           <TextInput style={styles.data_entr_style} placeholder='अपना नाम यहाँ लिखे ....' onChangeText={text=>{setname(text)}} defaultValue ={name}></TextInput>
           
           <View style={{margin:15,height:50,borderRadius:10,flexDirection:'row',padding:10,alignItems:'center',borderBottomWidth:2,borderColor:'pink'}}>            
             <Text style={{fontSize:20}}>
             लिंग :
  
            </Text>
    
                          <Picker style={{width:120,fontSize:20}} 
                              selectedValue={Gender}
                                onValueChange={currentGender => setGender(currentGender)}>
                                 <Picker.Item label="Male" value="Male" />
                                  <Picker.Item label="Female" value="Female" />
                                <Picker.Item label="Others" value="Others" />             
                          </Picker>
                          </View>
                          <Text style={{color:'black',marginLeft:15,fontSize:20,marginTop:10}}>शहर </Text>
            <TextInput style={styles.data_entr_style}  placeholder='अपने शहर का नाम लिखें  ...'  onChangeText={text=>{setcity(text)}} defaultValue ={city}></TextInput>
            <Text style={{color:'black',marginLeft:15,fontSize:20,marginTop:10}}>उम्र </Text>
            <TextInput style={styles.data_entr_style}  placeholder='उम्र  दर्ज करें....' keyboardType="numeric"
                onChangeText={text=>{setAge(text)}} defaultValue ={Age}></TextInput>       
            <Text style={{color:'black',marginLeft:15,fontSize:20,marginTop:10}}>मोबाइल नं </Text>

            <TextInput style={styles.data_entr_style} placeholder='अपना मोबाइल नं दर्ज करें...' onChangeText={text=>{setmobile(text)}} defaultValue ={mobile}></TextInput>
            <Text style={{color:'black',marginLeft:15,fontSize:20,marginTop:10}}>ईमेल  </Text>
            <TextInput style={styles.data_entr_style} placeholder='अपना ईमेल पता यहां लिखें....' onChangeText={text=>{setemail(text)}} defaultValue ={email}></TextInput>       

            </ScrollView>
         
             <TouchableOpacity style={{backgroundColor:'#2187fc',height:60 ,justifyContent:'center',borderRadius:12 ,margin:10}} onPress={()=>{if(name==='' || Age==='' ||city==='')Alert.alert('नाम उम्र और शहर भरें * ') ;else{
                submit_data(name,Gender,city,Age,mobile,email)
             }}}>
            <Text style={{color:'#fff',textAlign:'center',fontSize:22,}}>Submit</Text>
          </TouchableOpacity>
          
      </View>

           
          </View>
        </View>
      </Modal>
      </View>

    </ImageBackground>


)

}




/* function which will return the title Component and its styled */



function First_page({navigation}){
 
  
  return(


    <SafeAreaView style={styles.f_container}>

    <Image style={{resizeMode:'cover',height:Dimensions.get('window').height/4+155,width:Dimensions.get('window').width,}} source={require('./assets/app_images/main_img.jpg')}></Image>
    <Image style={{resizeMode:'cover',height:Dimensions.get('window').height/4+140,width:Dimensions.get('window').width-5,paddingTop:5}} source={require('./assets/app_images/main_4.png')}></Image>
   
    <TouchableOpacity style={{backgroundColor:'#fc0362',height:80,alignItems:'center',justifyContent:'center'}} onPress={()=>navigation.navigate("Root")}>
      <View>
        <Text style={{color:'white',fontSize:20,fontFamily:'Roboto'}}>
          Click here to proceed !
        </Text>
      </View>
    </TouchableOpacity>
    </SafeAreaView>
  )



}


function Root(){
  return(
<Drawer.Navigator initialRouteName='Home' >
<Drawer.Screen options={{headerShown:false}} name='Home' component={LandingPage}></Drawer.Screen>  
<Drawer.Screen  options={{title:'मातृत्व पोषण एप्लीकेशन का परिचय',headerShown:false,HeadStyle:{backgroundColor:'orange'},}} name='About' component={About_App}/>
<Drawer.Screen options={{headerShown:false}} name='Team' component={Team_App}/>
</Drawer.Navigator>
);
}


export default function App() {
  
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName='First_page'>
    <Stack.Screen options={{headerShown:false}} name='Root' component={Root}></Stack.Screen>
   
    <Stack.Screen options={{headerShown:false}} name='First_page' component={First_page}></Stack.Screen>
    
    <Stack.Screen options={{headerShown:false}} name='Home' component={LandingPage}></Stack.Screen>  
    
    <Stack.Screen name='Details' component={Details}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },  
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />
    <Stack.Screen name='Details2' component={Details2}           options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
      
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />


<Stack.Screen name='Details3' component={Details3}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
      
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />

<Stack.Screen name='Details4' component={Details4}  options={({ route }) => ({ title: route.params.text,
     
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
     
      fontWeight: 'bold',
    },
    
    })} />



<Stack.Screen name='Details5' component={Details5}  options={({ route }) => ({ title: route.params.text,
    
    
    headerStyle: {
      backgroundColor: 'green',
      height:120,
      
    },
    headerTitleContainerStyle:{
       
       
      },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign:'justify',
      flex:2
    },
     
    })} />



<Stack.Screen name='Details6' component={Details6}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100, 
    },
    headerTintColor: '#fff',
    headerTitleStyle: {  
      
      fontWeight: 'bold',
    },
    
    })} />


<Stack.Screen name='Details7' component={Details7}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100, 
    },
    headerTintColor: '#fff',
    headerTitleStyle: {  
      
      fontWeight: 'bold',
    },
    
    })} />


<Stack.Screen name='Details8' component={Details8}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />



<Stack.Screen name='Details9' component={Details9}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />


<Stack.Screen name='Details10' component={Details10}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />


<Stack.Screen name='Details11' component={Details11}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />

<Stack.Screen name='Details12' component={Details12}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#0767ed',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />

    
<Stack.Screen name='Details31' component={Details31}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#0767ed',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />


<Stack.Screen name='Fetails1' component={Fetails1}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#0767ed',
      height:125,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />


<Stack.Screen name='Fetails2' component={Fetails2}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#0767ed',
      height:125,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />

<Stack.Screen name='Fetails3' component={Fetails3}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#0767ed',
      height:125,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />

<Stack.Screen name='Fetails4' component={Fetails4}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#0767ed',
      height:125,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />
<Stack.Screen name='Fetails5' component={Fetails5}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#0767ed',
      height:125,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />



<Stack.Screen name='Fetails6' component={Fetails6}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#0767ed',
      height:125,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />




<Stack.Screen name='Fetails7' component={Fetails7}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#0767ed',
      height:125,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />





<Stack.Screen name='Fetails8' component={Fetails8}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#0767ed',
      height:125,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />


<Stack.Screen name='Fetails9' component={Fetails9}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#0767ed',
      height:125,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />
<Stack.Screen name='Fetails10' component={Fetails10}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#0767ed',
      height:125,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />

<Stack.Screen name='Details20' component={Details20}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },  
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />
    <Stack.Screen name='Details21' component={Details21}           options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
      
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />


<Stack.Screen name='Details22' component={Details22}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
      
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />

<Stack.Screen name='Details23' component={Details23}  options={({ route }) => ({ title: route.params.text,
     
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
     
      fontWeight: 'bold',
    },
    
    })} />



<Stack.Screen name='Details24' component={Details24}  options={({ route }) => ({ title: route.params.text,
    
    
    headerStyle: {
      backgroundColor: 'green',
      height:120,
      
    },
    headerTitleContainerStyle:{
       
       
      },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign:'justify',
      flex:2
    },
     
    })} />



<Stack.Screen name='Details25' component={Details25}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100, 
    },
    headerTintColor: '#fff',
    headerTitleStyle: {  
      
      fontWeight: 'bold',
    },
    
    })} />


<Stack.Screen name='Details26' component={Details26}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100, 
    },
    headerTintColor: '#fff',
    headerTitleStyle: {  
      
      fontWeight: 'bold',
    },
    
    })} />


<Stack.Screen name='Details27' component={Details27}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />



<Stack.Screen name='Details28' component={Details28}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />


<Stack.Screen name='Details29' component={Details29}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />


<Stack.Screen name='Details30' component={Details30}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
    })} />


    
    </Stack.Navigator>
   
 
  </NavigationContainer>      
  );
}





const styles = StyleSheet.create({
      container:{
        flex:1,
        paddingTop:StatusBar.currentHeight,
        flexWrap:'wrap'
      },


      f_container:{
          flex:1,
          flexDirection:'column'
      },

      f_imagestyle:{
        flex:1,
        resizeMode: 'contain',
        width:200
      



      },

        data_entr_style:
        { 
          height:50,
          borderRadius:10,
          fontSize:20,
          margin:10,
          padding:10,
          borderBottomWidth:2,
          borderColor:'pink'
        },

      imagestyle:{
        flex:1,
        resizeMode: 'cover',
      
      },
      listitem:{
        backgroundColor:'#362327',
        margin:15,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:12,
        borderWidth:2,
        borderStyle:'solid',
        borderRadius:10,
        borderColor:'green'
         },
         listitem11:{
          backgroundColor:'#362327',
          margin:15,
          paddingTop:10,
          paddingBottom:10,
          paddingLeft:12,
          borderWidth:2,
          borderStyle:'solid',
          borderRadius:10,
          borderColor:'green',
          width:Dimensions.get('window').width-30
           },
     listitemview:{
     
     },
     
     listitemtext:{
         fontSize:25,
         color:'white'
   
     },

     details_foo:{
      flex:1,
      backgroundColor:'#b1b6bd',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20,
      padding:10
      },

      details_foo_1:{
        marginBottom:10,
      },
      image_foo:{
        borderRadius:15,
        height:200, 
        width:Dimensions.get('window').width-30,
        marginTop:15,
        marginBottom:15,
      },
     details:{
        borderRadius:20,
        margin:10,
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
        fontSize:25,
        textAlign:'justify'                                            
     },
     imagestyle1:{
    height:300,
    width:300,
     }
   ,
     imagestyle2:{
      height:300,
      width:350,
       },
       boldtext:{
         fontSize:25,
         paddingLeft:30,
         paddingBottom:10,
         paddingRight:10,
         fontWeight:'bold'
       },
       containe_table:{
        padding:15,
         fontSize:18,
       },
       TableText:{
         flexWrap:'wrap',
         fontSize:18,
         textAlign:'center',
       }
       ,
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      textStyle: {
        fontSize:24,
        color: "red",
        fontWeight: "bold",
        textAlign: 'right'
      },
      backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },


});