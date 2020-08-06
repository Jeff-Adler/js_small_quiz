document.querySelector("ul.list > li:last-child") // Jeff

let secondListItem = document.querySelectorAll("li")[1] 

let pNode = secondListItem.parentNode.parentNode.children[2]

let pNode2 = document.querySelector("ul.list + p")

let pNode3 = document.querySelector("ul.list ~ li, p")



