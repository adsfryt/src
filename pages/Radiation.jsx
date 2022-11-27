import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";

const Radiation = () => {
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
    var name = "Radiation";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Излучение</h1>
            <div className="centercontent">
                <p className="txt">Вам хорошо известно, что основным источником тепла на Земле является Солнце. Каким же образом передаётся тепло от Солнца?</p>
                <p className="txt">Как известно, в вакууме перенос энергии путём теплопроводности невозможен. Не может происходить он и за
                    счёт конвекции.Следовательно, в данном случае передача энергии происходит путём <mark className="mrk">излучения</mark>.</p>
                <p className="txt">Передача энергии излучением отличается от других видов теплопередачи. Она может <mark className="mrk">осуществляться в полном вакууме</mark>.</p>
                <p className="txt">Излучают энергию все тела: и сильно нагретые, и слабо, например, тело человека, печь, электрическая лампочка и др.
                    Но чем выше температура тела, тем больше энергии передаёт оно путём излучения. При этом энергия частично поглощается окружающими телами, а частично отражается.
                </p>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default Radiation;