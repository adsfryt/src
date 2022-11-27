import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";
import {Link} from "react-router-dom";

const ConvertEnergy = () => {
    // async function download(Src) {
    //     const image = await fetch(Src)
    //     const imageBlog = await image.blob()
    //     const imageURL = URL.createObjectURL(imageBlog)
    //
    //     const link = document.createElement('a')
    //     link.href = imageURL
    //     link.download = 'image.jpg'
    //     document.body.appendChild(link)
    //     link.click()
    //     document.body.removeChild(link)
    // }
    var name = "ConvertEnergy";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }

    useEffect(() => {
        anime({
            targets: ".dom-attribute-demo",
            value: [0, 100,0],
            easing: 'easeOutExpo',
            duration: 3000,
            loop:true,
            round: 10
        });
        anime({
            targets: ".dom-attribute-demo1",
            value: [100, 0,100],
            easing: 'easeOutExpo',
            duration: 3000,
            loop:true,
            round: 10
        });
    });
    return (
        <div className="qw">
            <h1 className="titletxt">Превращение одного вида энергии в другой</h1>
            <div className="centercontent">
                <p className="txt">В природе, технике и быту можно часто наблюдать превращение одного вида механической энергии в другой:
                    потенциальной в кинетическую и кинетической в потенциальную. Например, при падении воды с плотины её потенциальная
                    энергия превращается в кинетическую. В качающемся маятнике периодически эти виды энергии переходят друг в друга.</p>
                <video width="100%" loop="true" autoPlay="autoplay" muted>
                    <source src={require('../photo/14.mp4')} type="video/mp4"/>
                </video>
                <p className="txt">По мере падения потенциальная энергия мяча уменьшается, но вместе с тем возрастает его
                    кинетическая энергия. В конце падения мяч обладает таким запасом кинетической энергии, что может опять подняться почти до прежней высоты.
                    (В реальности часть энергии расходуется на работу силы трения, поэтому мяч не достигает первоначальной высоты)</p>

                <p className="txt">Энергия может и передаваться от одного тела к другому. Так, например, при стрельбе из лука
                    потенциальная энергия натянутой тетивы переходит в кинетическую энергию летящей стрелы.</p>
          </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default ConvertEnergy;