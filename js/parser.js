const funcHead = 
`float getDistance(vec3 p){
`;
const funcTail = 
`
}
`;

function replaceCoord(str){
    return str.replace(/x/g,'p.x')
              .replace(/y/g,'p.y')
              .replace(/z/g,'p.z');
}

function replaceInteger(str){
    return (" "+str+" ").replace(/([^.\d])(\d+)([^.\d])/g, "$1$2.0$3").trim();
}

function parseSide(str){
    return replaceCoord(replaceInteger(str));
}

function parseMathGLSL(mathStr){
    let [lhs, rhs] = mathStr.split("=");
    lhs = parseSide(lhs.trim());
    rhs = parseSide(rhs.trim());
    let resultStr =  lhs + '-(' + rhs + ')';
    return funcHead 
        + '    return '
        + resultStr
        + ';'
        + funcTail
    ;
}

// let inp = 'x*x - 1 = -z*z';
// console.log('---');
// console.log(funcHead);
// console.log(funcTail);
// console.log(parseMathGLSL(inp));
export { parseMathGLSL };
