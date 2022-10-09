const canvas = document.getElementById("myCanvas");

canvas.width = 600;

const ctx = canvas.getContext("2d");
//Create object of Car class which we is defined in other file.
const car = new Car(100, 100, 30, 50);//x,y,width,height

car.draw(ctx);//call draw method of Car class

//Call animate method..
animate();

//define animate method..
function animate() {
    //update the car..
    car.update();

   //Resizing the canvas this way will also clear so it does not leave a trail anymore..
    canvas.height = window.innerHeight;

    //draw again..
    car.draw(ctx);

    requestAnimationFrame(animate);//this method will call the animate method many time per second, it gives the illusion of movement..
}