import React, {useEffect} from 'react';
import "./style.css";
import App1 from "../App1";
import MathComponent from "../KaTeXComponent";
import Math from "../Math";
import Task from "../Task";
import TaskFC from "../TaskFC";
import anime from "../animejs/anime.es";

const Gravity = () => {
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
    var name = "Gravity";
    var i = [];
    for (var a = 0; a < 2;a++){
        i[a] = a;
    }
    return (
        <div className="qw">
            <h1 className="titletxt">Сила тяжести</h1>
            <div className="centercontent">
            <p className="txt">Выпустим камень из рук — он упадёт на землю. То же самое произойдёт и с любым другим телом.
                Если мяч бросить в горизонтальном направлении, то он не летит прямолинейно и равномерно.</p>
            <p className="txt">Земля притягивает к себе все тела: дома, людей, Луну, Солнце, воду в морях и океанах
                и т. д. В свою очередь, и Земля притягивается к этим телам.</p>
            <p className="txtb">
                Притяжение всех тел Вселенной друг к другу называется всемирным тяготением.</p>
            <p className="txt">
                Английский учёный Исаак Ньютон первым установил закон всемирного тяготения.
            </p>
            <p className="txtb">Согласно этому закону, силы притяжения между телами тем больше, чем больше массы этих
            тел. Силы притяжения между телами уменьшаются, если увеличивается расстояние между ними.</p>
            <p className="txt">Сила, с которой Земля притягивает к себе тело, называется силой тяжести.</p>
                <img width="50%" src={require('../photo/2.png')}/>
            <p  className="txt">Сила тяжести обозначается буквой F с индексом: F<sub>тяж</sub>. Она направлена вертикально вниз. g = 9,8м/с<sup>2</sup> или g = 9,8Н/кг. Обычно округляют до 10.</p>
                <MathComponent texExpression={`F=m*g`}/>
            <p className="utitletxt">Задачи:</p>
            <TaskFC EI={"Н"} D={"m=30кг; g=10Н/кг(округляем)"} N1={"F(тяж)-?"} R={"F(тяж)=m*g; F(тяж)=30кг*10Н/кг; F(тяж)=300Н"} O={"300"} Y={"На полу стоит мешок с пшеницей массой 30 кг. Вычислите силу тяжести, действующую на него. Возьмите за g=10Н/кг."} S={"lg"} ide={name + i[0]}/>
        </div>
            <App1 name={name} />
            {/*<button onClick={() => download(require('../15.jpg'))}>llllllllllll</button>*/}
        </div>
    );
};

export default Gravity;