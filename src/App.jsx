import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Container, ToDoList, Input, Button, ListItem, Trash, Check } from './styles.js'


function App() {

  const [list, setList] = useState([]);
  const [inputTask, setInputtask] = useState('')



  function inputMudou(event) {

    setInputtask(event.target.value)

  }

  function cliqueiNoBotao() {
    setList([...list, { id: uuid(), task: inputTask, finished: false }])
  }

  function finalizarTarefa (id){

    const newList = list.map(item => (
      item.id === id ? {...item , finished: ! item.finished} : item
    ))

    setList(newList)

  }

  function deletarTarefa (id){

    const newList = list.filter(item => item.id !== id)

    setList(newList)

  }


  return (
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="Digite oque fazer..." />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {list.map((item) => (
              <ListItem isFinished = {item.finished} key={item.id}>
              <Check onClick={ () => finalizarTarefa(item.id)}/>
              <li>{item.task}</li>
              <Trash onClick={ () => deletarTarefa(item.id)}/>
              </ListItem>
            ))}
        </ul>
      </ToDoList>
    </Container>

   

  )
}

export default App
