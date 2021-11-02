import React ,{Component} from 'react';
import {Text,View,Stylesheet} from 'react-native'




export default class SearchScreen extends Component
{
render()
    {
        return(
        <View style={styles.container}>    
        <Text style={styles.text}>Search Screen</Text>
       </View>
              );
    }
}  


const styles=Stylesheet.create(
{

     container:
          {
              flex:1,
              justyContent:'center',
              alignItems:'center',
              backgroundcolor:'yellow'
        
        },
     text:
        {
            color:"red",
            fontSize:25

        }

                                
} );


