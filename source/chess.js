'use strict';

/**
 * Chessboard drawing function.
 *
 * @param {(string|number)} n - Board size
 * @return {(string|null)} Board string
 *
 * @example
 *
 *     chess(3)
 */

let chess = n => {
    if( !Number.isInteger(+n) || n < 2 ){
        return null;
    }
    let blackLine = '';
    let whiteLine = '';

    for( let i = 0; i < n; ++i ) {
        blackLine += i % 2 === 0 ? '*' : ' ';
        whiteLine += i % 2 === 0 ? ' ' : '*';
    }
    blackLine += '\n';
    whiteLine += '\n';

    let resultLine = '';
    for( let i = 0; i < n; ++i ){
        resultLine += i % 2 === 0 ? blackLine : whiteLine;
    }

    return resultLine;
};