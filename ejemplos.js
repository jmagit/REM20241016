// function cotilla() {
//     log('Soy ejemplos.js')
// }
const cotilla = function() {
    log('Soy ejemplos.js')
}
'use strict'
/*
log('hola mundooooooo');
log('otra linea');
*/
// num = 0
// if (num) {
//   log(10 / num + 100)
// } else {
//   log('Divide by 0')
// }
// log(`El resultado de 100 / ${num} 
// es ${100/num}`)
// log(`El resultado de 100 / ` + num + `es ${100/num}`)
// var a = 2
// var b = '2'
// log(a == b)
// try {      
//   log(a === bb)
// } catch (error) {
//   log(error.message)
// }
// log(a + parseInt(b))
// log(+a + +b)
// log(a * b)
// b = 2
// log(a + -b)
// a = 1
// log(++a < 2)
// log(a)
// a = 1
// log(a++ < 2)
// log(a)
// log(typeof (a))
// a = '1'
// log(typeof (a))
// log(typeof (a) === 'string' ? 'Cadena' : typeof (a) === 'number' ? 'Numero' : 'Otra cosa')
// log((typeof (a) === 'string' ? 'Cadena' : 'Otra cosa') + ' el tipo')
// if (typeof (a) === 'string') {
//   log('Cadena')
//   if (a === '1')
//     log('es uno')
// } else {
//   log('Otra cosa')
// }
// log('algo mas')
// log(typeof (+a))

let c = 'global'
log('---------')
function kk() {
  let a = 1;
  let b = 1;
  if (true) {
    let b = 2;
    b = 7
  }
  let c = a + b;
  return c;
}
// log(c)      
var aqui = 'es global'
const id = 333
log(kk())
// if(kk() === c) {
//   log(`si es ${c}`)
// } else {
//   log(`no es ${c}`)      
// }
// log(aqui)
// c = 'lo canbie'
console.log(globalThis)
let tab = [10, 20, 30]
// let [x, y, z, w] = tab
// log(x)
// log(y)
// log(z)
// log(w)
let obj = { x: 100, y: 200 }
// var { x, y } = obj
// x = obj.x
// x = obj['x']
// y = obj.y
// log(x)
// log(y)
// c = '11'
// switch (c) {
//   case 1:
//   case 3:
//     log('uno o tres')
//     break
//   case 2:
//     log('dos')
//     break
//   default:
//     log('otro')
//     break
//   case 5:
//     log('cinco')
//     break
//   case '11':
//     log('once')
//     break
// }

// let a = 10
// c = 22
// switch (c) {
//   default:
//   case 3:
//     a++
//   case 2:
//     a++
//   case 1:
//     a++
// }
// log(a)
let i = 0;
// while(i < tab.length) {
//   log(tab[i])
//   i++
// }
// tab[7]='70'
// tab[7]=log
// tab.push(80)
// tab.splice(1, 1)
// for (let i = 0; i < tab.length; i++) {
//   log(tab[i])
// }
// for (let i = 0, j = 1; i < tab.length;i+=2, ++j) {
//   log(tab[i])
// }
// for(let v in tab) {
//   log(`${v}: ${tab[v]}`)
// }
// for(let v of tab) {
//   log(v)
// }
// for(let v in obj) {
//   log(`${v}: ${obj[v]}`)
// }
// let otro = []
// otro = [0,...tab,100]
// for(let v in otro) {
//   log(`${v}: ${otro[v]}`)
// }
// tab.push(80)
// tab[7] = log
// while (i++ < tab.length) {
//   if (!tab[i]) break
//   if (tab[i] % 20 === 0) continue
//   log(tab[i])
// }
let cmp = 'x'
//obj = null
obj = { x: 100, y: 200 }
with(obj) {
  log(x)
  log(y)
}
try {
  log(obj.x)
  log()
  log('sin error')
} catch (error) {
  log(`${error.name}: ${error.message}`)
} finally {
  log('lo hago siempre')
}
log('pero sigo')

