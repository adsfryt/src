import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";

const FrictionForce = () => {
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
    var name = "FrictionForce";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Сила трения</h1>
            <div className="centercontent">
                <p className="txt">При соприкосновении одного тела с другим возникает взаимодействие, препятствующее их
                    относительному движению, которое называют <mark className="mrk">трением</mark>. А силу, характеризующую это взаимодействие, называют
                    <mark className="mrk">силой трения</mark>. Она обозначается буквой F с индексом: F<sub>тр</sub></p>
                <p className="txtb">Сила трения — это ещё один вид силы, отличающийся от рассмотренных ранее силы тяжести и силы упругости.</p>
                <img width="50%" src={require('../photo/3.png')}/>
                <p className="txt">Одной из причин возникновения силы трения является шероховатость поверхностей соприкасающихся тел.
                    Даже гладкие на вид поверхности тел имеют неровности и царапины. На рисунке неровности изображены в увеличенном виде.
                    Когда одно тело скользит или катится по поверхности другого, эти <mark className="mrk">неровности цепляются друг за друга</mark>, что создаёт некоторую
                    силу, задерживающую движение.</p>
                <p className="txt">
                    Когда одно тело скользит или катится по поверхности другого, эти неровности цепляются друг за друга,
                    что создаёт некоторую силу, задерживающую движение.
                </p>
                <p className="txt">Другая причина трения — <mark className="mrk">взаимное притяжение молекул соприкасающихся тел</mark>.</p>
                <p className="txt">Возникновение силы трения обусловлено главным образом первой причиной, когда поверхности тел
                    шероховаты. Но если поверхности тел хорошо отполированы, при соприкосновении часть их молекул располагается
                    очень близко друг к другу. В этом случае начинает заметно проявляться притяжение между молекулами соприкасающихся тел.</p>
                <p  className="txt">При скольжении одного тела по поверхности другого возникает трение, которое называют <mark className="mrk">трением скольжения</mark>.
                    Например, такое трение возникает при движении саней и лыж по снегу.</p>
                <MathComponent texExpression={`F=\\mu *N`}/>
                <p className="txt">где <mark className="mrk">N</mark> — сила реакции опоры, <mark className="mrk">u</mark> — коэффициент трения.</p>
                <p  className="txt">Чем больше сила, прижимающая тело к поверхности, тем больше возникающая при этом сила трения.</p>
                <p  className="txt">Если же одно тело не скользит, а катится по поверхности другого, то трение, возникающее при этом, называют трением качения. Так, при движении колёс вагона, автомобиля, при перекатывании брёвен или бочек по земле проявляется трение качения.</p>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default FrictionForce;