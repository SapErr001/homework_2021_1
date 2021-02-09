'use strict';

function chess(n) {
    let blackLine = '';
    let whiteLine = '';
    if( n < 2 )
        return null;

    for( let i = 0; i < n; ++i ) {
        blackLine += i % 2 === 0 ? '*' : ' ';
        whiteLine += i % 2 === 0 ? ' ' : '*';
    }
    blackLine += '\n';
    whiteLine += '\n';

    let resultLine = '';
    for( let i = 0; i < n; ++i )
        resultLine += i % 2 === 0 ? blackLine : whiteLine;

    return resultLine;
}