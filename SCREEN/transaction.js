import  React, {Component} from "react";
import {View,Text,StyleSheet} from 'react-native';
import * as Permisssions from "expo-permissions"; 
import { BarCodeScanner } from "expo-barcode-scanner";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class TransactionScreen extends Component 
{

   constructor(props)
   {
      super(props);

     this.state=
     {
   
      domState:"normal",
      hasCameraPermissions:null,   
      scanned:false,
      scannedDate:""

     }
   }

  getCameraPermisions=async domState => 
    {
       const {status}  = await Permissions.askAsync(Permissions.CAMERA);
      this.setStatus({
    
      hasCameraPermissions:status ==="granted",
      domState:domState,
      scanned:false

   });

  };


  handleBarCodeScanned =async ({type,data }) =>{
   
   this.setState({

      scannedData:data,
      domState:"normal",
      scanned:true,       
   });

  };


    render()
    { 

      const {domState,hasCameraPermissions,scannedData,scanned}=this.state;
         
           if(domState === "scanner")
           {
            return(  
               <BarCodeScanner
                   onBarCodeScanned={scanned ? undefined :this.handleBarCodeScanned}
                   style={StyleSheet.absoluteFillObject}
                />
            );            


           }
            <View style={styles.container}>
             <Text style = {styles.text}>
              {hasCameraPermissions ? scannedData:"Request for camera Permisions"}
             </Text>

               <TouchableOpacity style={[styles.button,{marginTop:25}]}>
                 
                 onPress={()=>
                 this.getCameraPermisions("scanner")}
                 
                 
                
                  <Text style={styles.buttonText}>

                  QR Code  </Text>

                  </TouchableOpacity>
            <Text style={styles.text}>Transaction Screen To Issue/Return Book</Text>
            </View>


            
    }
}
 const styles=StyleSheet.create(

  {

    container:
    {
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'pink'
    },

    text:
    {
       color:'blue',
       fontSize:25
    },

    button:
    {
       height:55,
       width:"43%",
       justifyContent:"center",
        alignItems:"center",
        borderRadius:15,
        backgroundColor:"orange",


    },
    buttonText:
    {
       fontSize:24,
       color:"green",

    }


  });




