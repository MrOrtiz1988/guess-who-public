
console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady(){
    console.log('JQ');
    displayImages();
    $('.click-on').text(displayRandomName());
    $('.container').on('click', '.image', handleThisImage);
    
    
    
}

function randomNumber(array){
    return Math.floor(Math.random() * array.length);
}

function displayRandomName(){
    return people[randomNumber(people)].name;
}

function displayImages(){
   for(let person of people){
        $('.container').append(`
        <div class="image">
            <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
        </div>
        `);
    } 
}

function handleThisImage(){
    console.log($(this));
}