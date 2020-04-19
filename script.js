const X_CLASS='x'
const CIRCLE_CLASS='circle'
const winning_combination=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
const cellElements = document.querySelectorAll('[data-cell]')
let circleTurn
cellElements.forEach(cell => {
cell.addEventListener('click',handleClick,{once:true})
})
function handleClick(e){
 const cell= e.target
 const currentClass = circleTurn? CIRCLE_CLASS:X_CLASS
 placeMark(cell,currentClass)
}
