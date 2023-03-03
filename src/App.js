
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import List from "./components/List";
import Alert from "./components/Alert";

import "./App.css"


function App() {
  const [inputData,setInputData] = useState('')
  const [list,setList] = useState([])
  const [alert,setAlert] = useState({show:false,msg:'',type:''})
  const [checkEditItem,setCheckEditItem] = useState(false)
  const [editid,setEditId] = useState('')

  const submitData = (e) => {
    e.preventDefault();
    if(!inputData) {
      setAlert({show:true,msg:"กรุณาป้อนข้อมูล",type:'error'})
    } else if (checkEditItem && inputData ) {
       // eslint-disable-next-line
      const result = list.map((item) => {
        if(item.id === editid) {
          return {...item,title:inputData}
        }
        return item
      })
      setList(result)
      setInputData('')
      setAlert({show:true,msg:"แก้ไขข้อมูลเรียบร้อย",type:'success'})
      setCheckEditItem(false)
      setEditId('')

    }else {
      const newItem = {
        id:uuidv4(),
        title: inputData ,
      }
      setList([...list,newItem])
      setInputData('')
      setAlert({show:true,msg:"บันทึกข้อมูลเรียบร้อย",type:'success'})
    }
  }

  const removeItem = (id) => {
    const result = list.filter((item) => item.id !== id)
    setList(result)
    setAlert({show:true,msg:"ลบข้อมูลเรียบร้อย!",type:'error'})
  }

  const editItem = (id) => {
    console.log(`แก้ไขข้อมูล id = ${id}`)
    setCheckEditItem(true)
    setEditId(id)
    const searchItem = list.find((item)=> item.id === id)
    setInputData(searchItem.title)
  }
  return (
    <section className="container">
      <h1>TodoList App</h1>
      {alert.show && <Alert {...alert} setAlert={setAlert} {...list} />}
      <form className="form-group" onSubmit={submitData}>
        <div className="form-control">
          <input type="text" className="text-input" value={inputData}
            onChange={((e) => setInputData(e.target.value))}
          />
          <button type="submit" className="submit-btn">
            {checkEditItem ? "แก้ไขข้อมูล"  : "เพิ่มข้อมูล"}
          </button>
        </div>
      </form>
      <section className="list-container">
        {list.map((data,index) =>{
          return (
            <List key={index} {...data}  removeItem={removeItem} editItem={editItem} />
          )
        })}
      </section >
    </section>
  );
}

export default App;
