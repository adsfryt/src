import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";

const  SwimmingBodies = () => {
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
    var name = "SwimmingBodies";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Плавание тел</h1>
            <div className="centercontent">
                <p className="txt">На тело, находящееся внутри жидкости, действуют две силы: сила тяжести, направленная вертикально вниз, и
                    архимедова сила, направленная вертикально вверх. Рассмотрим, что будет происходить с телом под действием этих сил,
                    если вначале оно было неподвижно. При этом возможны три случая:</p>
                <p className="txtb">1) если сила тяжести Fтяж больше архимедовой силы FA, то тело будет опускаться на дно, тонуть, т. е. если</p>
                <MathComponent texExpression={`F_{тяж} > F_{A}`}/>
                <p className="txtb">2) если сила тяжести Fтяж равна архимедовой силе FA, то тело может находиться в равновесии в любом месте жидкости, т. е. если</p>
                <MathComponent texExpression={`F_{тяж} = F_{A}`}/>
                <p className="txtb">3) если сила тяжести Fтяж равна архимедовой силе FA, то тело может находиться в равновесии в любом месте жидкости, т. е. если</p>
                <MathComponent texExpression={`F_{тяж} < F_{A}`}/>
                <img width="50%" src={require('../photo/6.png')}/>
                <p className="txt">Когда всплывающее тело достигнет поверхности жидкости, то при дальнейшем его движении вверх архимедова сила будет уменьшаться.
                    Почему? Да потому, что будет уменьшаться объём части тела, погружённой в жидкость, а архимедова сила равна весу жидкости в объёме погружённой в неё части тела.</p>
                <p className="txt">Когда архимедова сила станет равной силе тяжести, тело остановится и будет плавать на поверхности жидкости, частично погрузившись в неё.</p>
                <p className="txtb">Чем меньше плотность тела по сравнению с плотностью жидкости, тем меньшая часть тела погружена в жидкость</p>
                <p className="txt">Тоже самое можно сказать и о воздухоплавании.</p>
                </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default SwimmingBodies;