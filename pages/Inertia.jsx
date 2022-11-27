import React, {useEffect} from 'react';
import MathComponent from "../KaTeXComponent";
import Task from "../Task";
import Math from "../Math";
import TaskFC from "../TaskFC";
import App1 from "../App1";

import anime from "../animejs/anime.es";
var name = "Inertia";

var i = [];
for (var a = 0; a < 2;a++){
    i[a] = a;
}
class Inertia extends React.Component{

    componentDidMount(){
        var path = anime.path('#svgdivin1 path');
        anime({
            targets: '#svgdivin1 .el1',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'easeInOutQuad',
            duration: 5000,
            loop: true
        });

    }

    render() {
        return (
            <div>
                <h1 className="titletxt">Инерция</h1>
                <div className="centercontent">
                    <p className="txt">Наблюдения и опыты показывают, что скорость тела сама по себе измениться не
                        может.</p>
                    <p className="txt">Футбольный мяч лежит на поле. Ударом ноги футболист приводит его в движение. Но
                        сам мяч не
                        изменит свою скорость и не начнёт двигаться, пока на него не подействуют другие тела.</p>
                    <p className="txt">
                        Таким образом, и мяч не меняет свою скорость, пока на них не подействуют другие тела.</p>
                    <p className="txt">
                        Тело уменьшает свою скорость и останавливается не само по себе, а под действием других тел.
                    </p>
                    <p className="txtb">Значит, изменение скорости тела (величины и направления) происходит в результате
                        действия на него другого тела.</p>
                    <p className="txt">Как же будет двигаться тело, если на него совсем не будут действовать другие
                        тела?
                        Тщательные опыты по изучению движения тел были впервые проведены Г. Галилеем. Они позволили
                        установить, что если на тело не действуют
                        другие тела, то оно находится или в покое, или движется прямолинейно и равномерно относительно
                        Земли.</p>
                    <div className="svgdiv">
                        <div className="svgdivin" id="svgdivin1">
                            <div className="el1 circle1">
                            </div>
                            <svg id="a89b2570-138e-4ca4-be40-072c4aa6961c"
                                 viewBox="0 0 378.85 85.42">
                                <path className="cl1" d="M79.85,298.49l188.92,77.22H457.7"
                                      transform="translate(-79.66 -298.03)"/>
                                <polygon className="b73cb4bf-9602-4563-a062-fe239fe9e150"
                                         points="0.5 77.96 0.5 84.92 378.35 84.92 378.35 77.96 189.42 77.96 0.5 0.74 0.5 77.96"/>
                            </svg>
                        </div>
                        <p className="txtbn">Инерция</p>
                    </div>
                    <p className="txtb">Явление сохранения скорости тела при отсутствии действия на него других тел
                        называют инерцией.</p>
                    <p className="txt">Таким образом, движение тела при отсутствии действия на него других тел
                        называют <mark className="mrk">движением по инерции</mark>.
                    </p>
                </div>
                <App1 name={name}/>
            </div>
        );
    }
};

export default Inertia;