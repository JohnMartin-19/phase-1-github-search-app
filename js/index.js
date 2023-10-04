const userInput = document.querySelector('form#search').addEventListener('submit', (e)=> {
    e.preventDefault()
    toDo(e.target.search.value)
})
function toDo(){
    fetch('https://api.github.com/search/users?q=userInput')
    .then(response => response.json())
    .then(data => {
        user = document.querySelector('div ul#user-list')
        user.innerText = data.user
    })

}
const userDetails = document.querySelector('div ul#user-list').addEventListener('click', (e)=>{
    toGet(e.target.user-list.value)

})
function toGet(){
    fetch('https://api.github.com/users/${userDetails}/repos')
    .then(response =>response.json())
    .then(dt => {
        repos = document.querySelector('div ul#repos-list')
        repos.innerText = dt.repos
    })
}
document.addEventListener('DOMContentLoaded',userInput)