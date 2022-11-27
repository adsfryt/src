import './App.css';
import axios from "axios";
import React, {useCallback, Suspense, useState, useEffect, useContext,Component} from "react";
import {Route} from 'react-router-dom';
import Commets from "./Commets";
import Noanswbtn from "./Noanswbtn";

var stylediv = 0;

const App1 =({name}) => {
    const [text,setText] = useState('');
    const [author,setAuthor] = useState('');
    const [todos,setTodos] = useState([]);
    // const im = new URL("./images1.png",import.meta.url)
    const [curPage,setCurPage] = useState(1);
    const [fetching,setFetching] = useState(true);
    const [answer,setAnswer] = useState(0);

    const getTodo = useCallback(async () => {
        try {
            await axios.get(`http://localhost:5000/api/posts/`,{
                headers: {
                    'Content-Type': 'application/json'
                },
                params:{name}
            })
                .then((response) => {
                    setTodos( response.data)
                })
        }
        catch (e) {
            console.log(e)
        }
    },[name])

    var answerid = answer._id;
    var answertxt = answer.text;
    var answerauthor = answer.author;

    const getTodoan = useCallback(async (ryu) => {

        if (ryu !== 0){
        try {
            await axios.get(`http://localhost:5000/api/posts/${ryu}`,{
                headers: {
                    'Content-Type': 'application/json'
                },
                params:{name}
            })
                .then((response) => {
                    setAnswer( response.data)
                })
        }
        catch (e) {
            console.log(e)
        }
        }else{
            setAnswer(0)
        }
    },[name])


    // useEffect(() => {
    //     document.addEventListener('scroll',scrollHandaler)
    //     return function () {
    //         document.removeEventListener('scroll',scrollHandaler)
    //     }
    // },[])
    getTodo();

    var date = new Date().toLocaleString("ru");


    const createTodo = useCallback(async () => {
        if (text.length >= 30 && author.length >= 3) {
            if (!text) return null
            try {
                await axios.post('http://localhost:5000/api/post', {
                    author,
                    name,
                    text,
                    date,
                    answerid,
                    answertxt,
                    answerauthor
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            } catch (e) {
                console.log(e)
            }
        }
    },[author,name,text,date,answerid,answertxt,answerauthor])

    // var tt;
    // const scrollHandaler =(e) => {
    //     if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerWidth) < 100 ){
    //         setFetching(true)
    //     }
    //     console.log('scrollHeight',e.target.documentElement.scrollHeight)
    //     console.log('scrollTop',e.target.documentElement.scrollTop)
    //     console.log('innerHeight',window.innerWidth)
    // }
    // const ref = useRef(null);
    // useEffect(() => {
    //     const ansbtn = document.querySelector('noanswbtn');
    //     const ansdiv = document.querySelector('noanswdiv');
    //     ansbtn.addEventListener("click", function () {
    //         ansdiv.classList.toggle("noanswdivshow");
    //     });
    // })
    var eev = '';
        if (answer !== 0) {
            eev = <div><button className="noanswbtn" onClick={() => getTodoan(0)}>Не отвечать</button><p className="txtanswauthor">{answerauthor}</p><p className="txtanswtext">{answertxt}</p></div>;
        }
    return (
      <div className="commets">
          <form className="form" onSubmit={e => e.preventDefault()}>
              <div className='div_inputer'>
                  <input minlength="3" maxlength="30" type="submit text" className="input_name" placeholder='Имя'
                         onChange={e => setAuthor(e.target.value)}
                  />
                  <textarea minlength="30" maxlength="500" type="submit text" className="input_text" placeholder='Комментарий'
                         onChange={e => setText(e.target.value)}
                  />
              </div>
              <div className="divouter_btn">
                  <div className="divin_btn">
          <button className="sendbutton_com" onClick={createTodo}><p className="txtsendbutton_com">отправить</p></button>
              </div>
              </div>
              <div className="noanswdiv">{
                  eev
              }
              </div>
          </form>
          {/*<img src={im}/>*/}
          <div className="div_comtxt">
          <h className="h_com">Комментарии:</h>
          </div>
          <div className="todos">
              {
                      todos.map((todo,index) => {
                          if(todos[index].text.trim() !== "" && todos[index].author.trim() !== "")
                          {
                              return(<div className="div_commets">
                              <Commets Todo={todos} Len={todos.length-1} Index={index} stl={stylediv}/>
                               <button className="btnansw" onClick={() => getTodoan(todos[index]._id)}><p className="btnanswtxt">Ответить</p></button>
                                  </div>
                              )
                          }else {
                              return null;
                          }
                  })
              }
          </div>
      </div>
  )
}

export default App1;
