/*
* File: rhombus.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-11
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

function calcRadius(side, angle) {
    const rad = angle * Math.PI / 180;
    return 1.0/2.0*side*Math.sin(rad);
}

export { calcRadius }
