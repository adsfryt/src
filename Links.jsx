import React from 'react';
import {Link} from "react-router-dom";

const Links = () => {
    return (
        <div>
            <li><Link to="/Movement">Движение</Link></li>
            <li><Link to="/Velocity">Скорость</Link></li>
            <li><Link to="/Inertia">Инерция</Link></li>
            <li><Link to="/Mass_and_density">Масса и плотность тела</Link></li>
            <li><Link to="/Force">Сила</Link></li>
            <li><Link to="/Gravity">Сила тяжести</Link></li>
            <li><Link to="/Elastic_force">Сила упругости</Link></li>
            <li><Link to="/BodyWeight">Вес тела</Link></li>
            <li><Link to="/SumForce">Сложение сил</Link></li>
            <li><Link to="/FrictionForce">Сила трения</Link></li>
        </div>
    );
};

export default Links;