import React from 'react';
import MathJax from "react-mathjax";

const Math = (blockFormula) => {
    return (
        <MathJax.Provider>
            <p className="txtf"><MathJax.Node formula={blockFormula.texExpression} /></p>
        </MathJax.Provider>
    );
};

export default Math;