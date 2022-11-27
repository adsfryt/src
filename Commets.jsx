import React from 'react';
import './App.css';
import Link from "./link";
const Commets = ({Todo,Len,Index}) => {


        var t = 0;
        var pos = [];
        let i = 0;
        var http = 'https://';
        var https = 'http://';
        let ifer = true;
        while (Todo[Index].text.length !== t) {
            if (Todo[Index].text[t] === http[0] && Todo[Index].text[t + 1] === http[1] && Todo[Index].text[t + 2] === http[2] && Todo[Index].text[t + 3] === http[3] && Todo[Index].text[t + 4] === http[4] && Todo[Index].text[t + 5] === http[5] && Todo[Index].text[t + 6] === http[6] && Todo[Index].text[t + 7] === http[7]) {
                pos[i] = t;
                i++;
            } else if (Todo[Index].text[t] === https[0] && Todo[Index].text[t + 1] === https[1] && Todo[Index].text[t + 2] === https[2] && Todo[Index].text[t + 3] === https[3] && Todo[Index].text[t + 4] === https[4] && Todo[Index].text[t + 5] === https[5] && Todo[Index].text[t + 6] === https[6]) {
                pos[i] = t - 1;
                i++;
            }
            t = t + 1;
        }
        let i1 = i;
        let link = [];
        let w = 0;
        while (i1 !== 0) {
            let i2 = 0;
            link [w] = '';
            while (Todo[Index].text[pos[w] + 8 + i2] !== ' ' && pos[w] + 8 + i2 !== pos[w + 1] && pos[w] + 8 + i2 !== t && Todo[Index].text[pos[w] + 8 + i2] !== '\n') {
                link[w] = link[w] + Todo[Index].text[pos[w] + 8 + i2];
                i2 = i2 + 1;
            }
            w = w + 1;
            i1 = i1 - 1;
        }

        var answtxtsl;
        var divansw;
        if (Todo[Index].answertxt !== undefined){
            answtxtsl = Todo[Index].answertxt.substr(0,32)+ "...";
            divansw = <a href={"#"+Todo[Index].answerid}><div className="divansw"><h4 className="h5p">Ответ на:</h4><h4 className='com_authoransw'>{Todo[Index].answerauthor}</h4><p className='com_textansw'>{answtxtsl}</p></div></a>;
        }

        return (

            <div id={Todo[Index]._id}>
                <h3 className='com_author'>{Todo[Index].author}</h3>
                {
                    divansw
                }
                <p className='com_text'>
                    {Todo[Index].text}
                    <Link Link={link}/>
                </p>
                <h5 className='com_data'>{Todo[Index].date}</h5>
            </div>

        );

};

export default Commets;