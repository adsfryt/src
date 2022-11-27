import * as React from "react";

import { MathComponent } from "mathjax-react";

class Example extends React.Component {
    render() {
        return <MathComponent tex={String.raw`\sum{}`} />;
    }
}
export default Example;
