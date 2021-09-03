import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

export default class App extends React.Component {
  
  render() {
    
    return (
      <SafeAreaProvider>
      <ScrollView>
      <View style={styles.container}>

        <Header
          backgroundColor={'#1DB6D1'}
          centerComponent={{
            text: 'Groceries Listout',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <Image
                style={{ marginLeft:100,width: 100, height: 100}}
                source={require('./SHopping-cart.jpg')}
              />
      
<Text style={{marginTop:0,marginLeft:40,fontSize:30}}>Items</Text>
<Text style={{marginTop:-41,marginLeft:210,fontSize:30}}>Qty</Text>

  
 
     
<View>

 
<Text style={{ marginTop:10,marginLeft:30,fontSize:20}}>Uddina Bele</Text>
     
        <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20}}>Cadle Bele</Text>
          <TextInput
          style={styles.inputBox}
         /> 
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20}}>Hesaru Bele</Text>
         <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>SSP Ingu</Text> 
         <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>LG Ingu</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Nandini Thuppa</Text>
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Sasave</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Kalluppu</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Ambika Happala</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Godihittu</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Avalakki</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Cadlecayi Beeja</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Kari Yellu</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Liggad Papad</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Boost</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Butter</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Kempu Menasinakayi</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Everest Turmeric</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Everest Achhamenasinapudi</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Harpic Bathroom</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Harpic Toilet</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}> Dove Soap</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Tooth Paste</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Medium Rave</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Chiroti Rave</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Robin Blue</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Santal Gokul Powder</Text> 
          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Honey</Text> 

          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}>Cintol Soap</Text> 

          <TextInput
          style={styles.inputBox}
         />
         <Text style={{ marginTop:10,marginLeft:30,fontSize:20,}}> Sndal Soap</Text> 

          <TextInput
          style={styles.inputBox}
         />
         
    
      </View>
        </View>
        </ScrollView>
        </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BE2B',
  },
  
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
  inputBox: {
    marginTop: 10,
    width: '30%',
    marginRight:-150,
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    marginLeft: 150,
  },
   buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  
  },
});
