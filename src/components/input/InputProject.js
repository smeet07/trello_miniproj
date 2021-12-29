import React,{useState} from 'react'
import {Collapse, Paper, Typography} from '@material-ui/core';
import { makeStyles ,alpha} from '@material-ui/core';
import InputCard from './InputCard';
import InputProject2 from './InputProject2';
const useStyle=makeStyles((theme)=>({
    root:{
        width:"150px",
        marginTop:theme.spacing(1),
    },
    addCard:{
        padding:theme.spacing(1,1,1,2),
        margin:theme.spacing(0,0,1,1),
        backgroundColor:"#6264a7d8",
        color:"white",
    }
}))

export default function InputProject() {
    const classes=useStyle();
    const [open,setOpen]=useState(false);
    return (
        
<div className={classes.root}>
            <Collapse in={open}>
                <InputProject2 setOpen={setOpen} />
            </Collapse>
            <Collapse in={!open}>
            <Paper className={classes.addCard} elevation={0} onClick={()=>setOpen(!open)}>
            
            <Typography>+Add project</Typography>
            </Paper>
            </Collapse>
        </div>
    )
}

// import React,{useState} from 'react'
// import {Collapse, Paper, Typography} from '@material-ui/core';
// import { makeStyles ,alpha} from '@material-ui/core';
// import InputCard from './InputCard';
// import { Button, SafeAreaView, StyleSheet, Modal, 
//     View, TextInput, Dimensions } from "react-native";
// const useStyle=makeStyles((theme)=>({
//     root:{
//         width:"300px",
//         marginTop:theme.spacing(1),
//     },
//     addCard:{
//         padding:theme.spacing(1,1,1,2),
//         margin:theme.spacing(0,0,1,1),
//         backgroundColor:'#EBECF0',
//         "&:hover":{
//             backgroundColor:alpha("#000",0.25),
//         },
//     }
// }))

// export default function InputProject({listId, type}) {
//     const classes=useStyle();
//     const [open,setOpen]=useState(false);
//     return (
        
//         <div >
//             {/* <Paper className={classes.addCard} elevation={0} onClick={()=>setOpen(!open)}>
//             <Typography>+ Add</Typography>
//             </Paper> */}
//             <SafeAreaView style={styles.screen}>
//             <StatusBar style="auto" />
  
//             {/**  We are going to create a Modal with Text Input. */}
//             <Button title="Show Modal" onPress={toggleModalVisibility} />
  
//             {/** This is our modal component containing textinput and a button */}
//             <Modal animationType="slide" 
//                    transparent visible={isModalVisible} 
//                    presentationStyle="overFullScreen" 
//                    onDismiss={toggleModalVisibility}>
//                 <View style={styles.viewWrapper}>
//                     <View style={styles.modalView}>
//                         <TextInput placeholder="Enter something..." 
//                                    value={inputValue} style={styles.textInput} 
//                                    onChangeText={(value) => setInputValue(value)} />
  
//                         {/** This button is responsible to close the modal */}
//                         <Button title="Close" onPress={toggleModalVisibility} />
//                     </View>
//                 </View>
//             </Modal>
//         </SafeAreaView>
//         </div>
//     )
// }