import React, {Component, useContext, useEffect, useRef, useState} from 'react';
import katex from "katex";
import {InlineTex} from 'react-tex';
import MathJax from 'react-mathjax';

const MathComponent = (blockFormula) => {
    return <div style={{padding: 50}}>
        <MathJax.Provider>
            <div className="formuladiv">
                <p className="txt">
                <MathJax.Node formula={blockFormula.texExpression} />
            </p>
            </div>
        </MathJax.Provider>
    </div>;
}

export default MathComponent;