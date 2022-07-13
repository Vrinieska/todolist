import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
         Text,
         View ,
         KeyboardAvoidingView,
         Platform,
         TextInput,
         TouchableOpacity,
         Keyboard
       } from 'react-native';

import Task from './src/componnents/Task';

export default function App() {

  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const handleTask = () => {
    Keyboard.dismiss()
    setTasks([...tasks, task])
    setTask(null)
  }
  
  //  console.log(tasks)

   const deleteTask = (i) => {
    let copyTasks = [...tasks]
    copyTasks.splice(i, 1)
    setTasks(copyTasks)
      
   }

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <View style={styles.taskWrapper}>
       <Text style={styles.secondTitle}>Today's Taks</Text>
       <View style={styles.items}>
       {
        tasks.map((t,i) => (
          <TouchableOpacity  key={i} onPress={() => deleteTask(i)}>
           <Task  text={t}/>
          </TouchableOpacity>
          
        )
           )
       }
       
       </View>
      </View>

      {/* Write a. task*/}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding': 'height'}
        style={styles.writeTaskWrapper}
       >
       <TextInput 
                 style={styles.input} 
                 placeholder={'write task'}
                 onChangeText={(text) => setTask(text)}
                 value={task}

               />
       <TouchableOpacity onPress={() => handleTask()}>
        <View style={styles.addWrapper}>
          <Text  style={styles.addText}>+</Text>
        </View>
       </TouchableOpacity>
      </KeyboardAvoidingView>
          

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  secondTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  writeTaskWrapper:{
    position: 'absuloute', 
    top: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#fff',
    borderRadius: 20,
    borderColor: '#C0C0C0',
    borderWidth:1,
    width:250
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor:'white',
    borderRadius: 60,
    borderColor: '#C0C0C0', 
    borderWidth: 1,
    alignItems:'center',
    justifyContent: 'center'

  },
  addText:{
    fontWeight: '500',
    fontSize: 20
  },
});
