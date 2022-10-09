class Controls{
    constructor() {

        //initialy all these are set to false and they will be set to true depending on what the user press on keyboard...
        this.forward = false;
        this.reverse = false;
        this.left = false;
        this.right = false;

        //add keyboard listeners method
        this.#addKeyboardListeners();
    }

    //using # will make this method private.
    #addKeyboardListeners() {
        
        //define what should happen when certain key is pressed..
        document.onkeydown = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
            }
            //print this object as table for debugging purpose..
            // console.table(this);
        }

        //define what should happen when key is released..
        document.onkeyup = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;
            }
            //print this object as table for debugging purpose..
            // console.table(this);
        }

    }
}