//Define Car object here...

class Car{
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        //give car speed and some acceleration..
        this.speed = 0;
        this.acceleration = 0.2;
        //give car maxspeed and some friction so that it does not move too fast..
        this.maxSpeed = 3;
        this.friction = 0.05;

        //define an angle for ratation..
        this.angle = 0;

        //Create object of Control class to control the car using keyboard for now
        this.controls = new Controls();
    }

    //update the position of the car..
    update() {

        if (this.controls.forward) {
            //move the car forward..
            // this.y -= 2;
            //instead of moving the car increase its speed..
            this.speed += this.acceleration;
        }

        if (this.controls.reverse) {
            //move the car backward..
            // this.y += 2;
            //Do the same here too..
            this.speed -= this.acceleration;
        }

        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }

        if (this.speed < -this.maxSpeed/2) {
            this.speed = -this.maxSpeed / 2;
            //Note that negative speed only indicates that the car going backwards.There is no such things as negative speed.
        }

        if (this.speed > 0) {
            //decrease the speed by friction..
            this.speed -= this.friction;
        }

        if (this.speed < 0) {
            //increase the speed by friction..
            this.speed += this.friction;
        }

        if (Math.abs(this.speed) < this.friction) {
            //stop the car when speed is less than friction..
            this.speed = 0;
        }

        if (this.speed != 0) {
            const flip = this.speed > 0 ? 1 : -1;
            //it is just to change the sign of angle if speed<0 to correct the rotation when the car is moving backwards..

            //move the to the left..
            if (this.controls.left) {
                //instead of moving left..
                // this.x -= 2;
                //increase the angle.it is positive for left according to unit circle..
                this.angle += 0.03*flip;
            }

            //move the car to the right..
            if (this.controls.right) {
                //instead of moving right..
                // this.x += 2;
                //decrease the angle.it is negative for right according to unit circle..
                this.angle -= 0.03*flip;
            }
        }

        //now move the car forward or backward..
        // this.y -= this.speed;

        //Now let's move the car in the direction of the angle..
        this.x -= Math.sin(this.angle) * this.speed;
        this.y -= Math.cos(this.angle) * this.speed;

    }

    draw(ctx) {
        //first save the context..
        ctx.save();

        //translate to the point where we want our rotation to be centred at..
        ctx.translate(this.x, this.y);
        
        //Now make the rotation..
        ctx.rotate(-this.angle);//reason we ratating by -angle because it rotates to counterclockwise if angle is negative nut since according to unit circle counterclockwise is positive, we should rotate it by -angle..

        ctx.beginPath();
        ctx.rect(
            //we can remove yhis.x,and this.y beacuse we are already translating to that point.
            //this.x-this.width/2,
            //this.y-this.height/2,
            -this.width / 2,
            -this.height/2,
            this.width,
            this.height
        );
        ctx.fill();

        //Add the call to restore otherwise, on each frame of the animation, we are going to translate and rotate and translate and rotate.. and this will infinite series of translations and rotations
        ctx.restore();
    }

}