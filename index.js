let index = 0
let projImages = [
    "websrc/jamheist.jpg",
    "websrc/alostfirefly.png",
    "websrc/raindrops.png",
]

function updateProject(){
    index = (index > 2? 0 : index++);
    document.getElementById("project-image").setAttribute("src",projImages[index]);
}

function startTimer(){
while (true){
    setInterval(updateProject,5000)
}
}//TODO fix all  code