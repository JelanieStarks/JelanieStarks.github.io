var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    // make sure to change this counter number if you increase the number of slides
    if(counter > 4){
        counter =1;
    }
}, 5000);
