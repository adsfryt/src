import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";

const Convection = () => {
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
    var name = "Convection";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Конвекция</h1>
            <div className="centercontent">
                <p className="txt">Помещая руку над горячей плитой или над горящей электрической лампочкой, можно
                    почувствовать, что над ними поднимаются тёплые струи воздуха.</p>
                <p className="txt">Это явление можно объяснить таким образом. Воздух, соприкасаясь с тёплой лампой,
                    нагревается, расширяется и становится менее плотным, чем окружающий его холодный воздух. Сила Архимеда,
                    действующая на тёплый воздух со стороны холодного снизу вверх, больше, чем сила тяжести, которая действует
                    на тёплый воздух. В результате нагретый воздух «всплывает», поднимается вверх, а его место занимает холодный воздух.</p>
                <p className="txt">В описанных опытах мы наблюдали ещё один вид теплопередачи, называемый <mark className="mrk">конвекция</mark>.</p>
                <p className="txtb">Следует помнить, что при конвекции энергия переносится самими струями газа или жидкости.
                </p>
                <p className="txtb">Так, например, в отапливаемой комнате благодаря конвекции поток тёплого воздуха поднимается вверх,
                    а холодного опускается вниз. Поэтому у потолка воздух всегда теплее, чем вблизи пола.</p>

                <p className="txt">Различают два вида конвекции: <mark className="mrk">естественную</mark> и <mark className="mrk">вынужденную</mark>. Так, нагревание жидкости,
                    а также воздуха в комнате являются примерами естественной конвекции. Вынужденная конвекция наблюдается, если перемешивать жидкость мешалкой, ложкой, насосом и т. д.</p>
                <p  className="txt">Следовательно, для того чтобы в жидкостях и газах происходила конвекция, необходимо их нагревать снизу.</p>
             </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default Convection;