import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";

const ThermalConductivity = () => {
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
    var name = "ThermalConductivity";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Теплопроводность</h1>
            <div className="centercontent">
                <p className="txt">Явление передачи внутренней энергии от одной части тела к другой или от одного тела
                    к другому при их непосредственном контакте называется теплопроводностью.</p>
                <p className="txt">Внесём в огонь конец деревянной палки. Он воспламенится. Другой конец палки, находящийся
                    снаружи, будет холодным. Значит, дерево обладает <mark className="mrk">плохой теплопроводностью</mark>.</p>
                <p className="txt">Если же мы будем нагревать в пламени конец металлического стержня, то очень скоро весь стержень сильно нагреется. Удержать его в руках мы уже не сможем.</p>
                <p className="txt">Значит, металлы хорошо проводят тепло, т. е. имеют <mark className="mrk">большую теплопроводность</mark>. Наибольшей теплопроводностью обладают серебро и медь.
                </p>
                <p className="txtb">Следует помнить, что при теплопроводности не происходит переноса вещества от одного конца тела к другому.</p>
                <p className="txt">Рассмотрим теперь теплопроводность жидкостей. Возьмём пробирку с водой и станем нагревать её верхнюю часть.
                    Вода у поверхности скоро закипит, а у дна пробирки за это время она только нагреется. Значит, у жидкостей <mark className="mrk">теплопроводность невелика</mark>, за исключением ртути и расплавленных металлов.</p>
                <p  className="txt">Это объясняется тем, что в жидкостях молекулы расположены на больших расстояниях друг от друга, чем в твёрдых телах.</p>
                <p  className="txt">А расстояние между молекулами газа ещё больше, чем у жидкостей и твёрдых тел. Следовательно, теплопроводность у газов ещё меньше.</p>
                <p className="txt">Итак, теплопроводность у различных веществ различна.</p>
                <p className="txt">Самой низкой теплопроводностью обладает <mark className="mrk">вакуум</mark> (освобождённое от воздуха пространство). Объясняется это тем,
                    что <mark className="mrk">теплопроводность</mark> — это перенос энергии от одной части тела к другой, который происходит при
                    взаимодействии молекул или других частиц. В пространстве, где нет частиц, теплопроводность осуществляться не может.</p>
            </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default ThermalConductivity;