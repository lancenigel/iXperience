const movies = [
    {title: 'Pokemon', explanation: 'This movie is about a 10 year old who collects monsters...', hint: 'Pikachu'},
    {title: 'How to train your dragon', explanation: 'This movie is about an island of dragons...', hint: 'Toothless'},
    {title: 'Kung Fu Panda', explanation: 'This movie is about an animal who does martial arts...', hint: 'Kung Fu Pand'},
    {title: 'Cloudy with a chance of meatballs', explanation: 'This movie is about food weather...', hint: 'Flint and Steel'},
    {title: 'Harry Potter', explanation: 'This movie is about a boy with magic...', hint: 'You are a wizard ____'},
    {title: 'Incredibles', explanation: 'This movie is about a family with superpowers...', hint: 'Where is my supa-suit'},
    {title: 'Superman', explanation: 'This movie is about a man whos planet explodes and he lands on Earth...', hint: 'S'},
    {title: 'Monsters Inc', explanation: 'This movie is about a monsters who charge energy with fear...', hint: 'BOO'},
]

let movieNumb = Math.floor(Math.random()* 8)

document.addEventListener("DOMContentLoaded", function() {
    const description = document.getElementById("description")
    description.innerText = movies[movieNumb].explanation
});

function clickedButtonSubmit() {
    let value = document.getElementById("input").value
    value = value.toLowerCase()
    if(value === "") {
        alert("Make a guess")
    } else if (value === movies[movieNumb].title.toLowerCase()){
        alert("Correct")
        movieNumb = Math.floor(Math.random()* 8)
        document.getElementById("description").innerText = movies[movieNumb].explanation
    } else {
        alert("Incorrect")
    }
    document.getElementById("input").value = ""
    document.getElementById("hint").innerText = ""
}

function clickedHintButton() {
    document.getElementById("hint").innerText = movies[movieNumb].hint
}