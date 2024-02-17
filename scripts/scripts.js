// function play(){
//     // step 1: hide the home screen. to hide the screen add the class to hidden t the home section
//     const homeSecion = document.getElementById('home-screen');
//     homeSecion.classList.add('hidden');
//     // console.log(homeSecion.classList);

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);
// }

function play(){
    hideElementByID('home-screen');
    showElementByID('play-ground');
}

