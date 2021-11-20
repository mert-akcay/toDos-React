import { useState } from 'react'
import './styles.css'

function ToDos() {
    const [inputData,setInputData] = useState("")
    const [toDoList,setToDoList] = useState([])
    const [filtered,setFiltered] = useState([])
    
    const onChangeInput = (e) => {
        /* if(!(e.target.value==="")){
            setInputData(e.target.value)
        } */
        setInputData(e.target.value)
    }

    const onClickSubmit = () => {
        if (!(inputData==="")){
            setToDoList([...toDoList,{name:inputData,checked:false}])
            setFiltered([...filtered,{name:inputData,checked:false}])
            setInputData("")
           
        }
        
    }

    const onClickDelete = (e) => {
        let arr = [...toDoList]
        arr.forEach((element,i) => {
            if (element.name===e.target.parentNode.parentNode.parentNode.childNodes["0"].childNodes[0].innerText){
                arr.splice(i,1)
            }
        })
        setToDoList(arr)
        setFiltered(arr)
        
    }

    const onChecked = (e) => {
        let arr = []
        toDoList.map((e) => !(e.name==="") && arr.push(e))
        arr.forEach((element) => {
            if (element.name===e.target.parentNode.parentNode.parentNode.childNodes["0"].childNodes[1].innerText){
                (element.checked) ? element.checked=false : element.checked=true
            }
        })
        setFiltered(arr)
        setToDoList(arr)
    }

    const onClickFilter1 = () => {
        setFiltered([...toDoList])
    }

    const onClickFilter2 = () => {
        const a = toDoList.filter(element => element.checked === true)
        setFiltered(a)
    }

    const onClickFilter3 = () => {
        const a = toDoList.filter(element => element.checked === false)
        setFiltered(a)
    }

    return (
        <div>
            <div className="contain">
                <h1 className="title">toDos</h1>
                <input
                    name="inputDataa"
                    className="new-todo"
                    placeholder= "What needs to be done?" 
                    value = {inputData}
                    onChange={onChangeInput}
                    autoFocus
                />
                <button id="button" onClick={onClickSubmit}>Submit</button>
            </div>
            
            <ul>
                <br />
                {filtered.map((item,i) => 
                <li className="list" key={item.name+i}>
                    <div className="li-container">
                        <span>
                            <span className="round">
                            <input onClick={onChecked} type="checkbox" id={item.name+i} defaultChecked={item.checked}  />
                            <label htmlFor={item.name+i}></label>
                            </span>
                            <span className="textSub">
                                {item.name}
                            </span>
                        </span> 
                        
                        <span className="buttonHolder">
                            <button className="deleteBtn" onClick={onClickDelete}>X</button>
                        </span>
                    </div>
                    
                </li>)}
            </ul>

            <div className="filterMenu">
                <button onClick={onClickFilter1} id="filter1" className="filterButton">
                    All toDos
                </button>
                    
                <button onClick={onClickFilter2} id="filter2"  className="filterButton">
                    Completed
                </button>
                
                <button onClick={onClickFilter3} id="filter3"  className="filterButton">
                    Not Completed
                </button>
            </div>


        </div>
    )
}

export default ToDos
