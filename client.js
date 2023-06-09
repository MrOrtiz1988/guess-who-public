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
        <div class="image-div">
            <img class="image" src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
        </div>
        `);
    } 
}

function handleThisImage(){

    if($(this).attr("alt") === `Profile image of ${$('.click-on').text()}`){
        alert('Success!!!, on to the next...');
        animation();
        $('.click-on').text(displayRandomName());
    }else{
        alert('Wrong, Try Again');
    }
}

function animation(){
    setTimeout(() => {
        $('body').css('background-color', 'yellow');
      }, 0);
      setTimeout(() => {
        $('body').css('background-color', 'white');
      }, 500);
      setTimeout(() => {
        $('body').css('background-color', 'yellow');
      }, 1000);
      setTimeout(() => {
        $('body').css('background-color', 'white');
      }, 1500);
      setTimeout(() => {
        $('body').css('background-color', 'yellow');
      }, 2000);
      setTimeout(() => {
        $('body').css('background-color', 'white');
      }, 2500);
      setTimeout(() => {
        $('body').css('background-color', 'yellow');
      }, 3000);
      setTimeout(() => {
        $('body').css('background-color', 'white');
      }, 3500);
}