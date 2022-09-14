import React from "react";
import { useRef,useState } from "react";
import logo from '../images/icon1.gif'

function Todo() {
  const [inputVal, steInputVal] = useState("");
  const [eachItem, setEachItem] = useState([]);

  const handleClick = () => {
    const myprevitem = [...eachItem, inputVal];
    setEachItem(myprevitem);
    steInputVal('')
  };

  const removeAll=()=>{
    steInputVal('')
    setEachItem([])
  }

const removeItem=(id)=>{
  const remove_item = eachItem.filter((element,ind)=>{
    return ind !== id
  })
  setEachItem(remove_item)

}

const name = useRef(null)


const useRefe=()=>{
if(!name.current.value){
  alert("plz fill the data")
}else{

  handleClick()
}



}




  return (
    <>
      <div className="main_div"><img className="Logo" src={logo} alt="loading..." /></div>
      <div className="text_div">
        <h1><i><b>My ToDo App</b></i></h1>
      </div>

      <div className="input_field">
        <input
          type="text"
          placeholder="AddItem"
          onChange={(e) => {
            steInputVal(e.target.value);
          }}
          autoComplete="off"
          value={inputVal} ref={name}
        />
        <div className="btnContainer">
          <button className="btn_style" onClick={useRefe}>
            Add
          </button>
        </div>
      </div>

      {eachItem.map((element , ind) => {
        return (
          <>
            <div className="showItems">
              <div className="eachItem">
                <div className="showItem">
                  <h3 id="item">
                    {element}
                    <button className="b" onClick={()=>{removeItem(ind)}}>X</button>  
                  </h3>
                </div>
              </div>
            </div>
          </>
        );
      })}

      <div className="main_btn">
        <button className="btn_styl" onClick={removeAll}>Remove All</button>
      </div>
    </>
  );
}

export default Todo;
