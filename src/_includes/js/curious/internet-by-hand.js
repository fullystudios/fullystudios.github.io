/**
* EyeMover.
* @param {object} eyecontainer id - Define the container of the pupils (for the move limit area)
* @param {object} eyepupil id - The actual pupil to be moved
* @param {int} speed id - The speed that the pupil should be moved
*/
var EyeMover = function(eyecontainer, eyepupil, speed){
    this.props = {
        mouseX: 0,
        mouseY: 0,
        tranX: 0,
        tranY: 0,
        ec: document.getElementById(eyecontainer),
        ec_size: 36,
        ep: document.getElementById(eyepupil),
        ep_size: 14,
        limitX: 0,
        limitY: 0,
        offset: 0
    }

    this.props.limitX = this.props.ec_size - this.props.ep_size;
    this.props.limitY = this.props.ec_size - this.props.ep_size;
    this.props.offset = this.props.ec.getBoundingClientRect();

    window.addEventListener("resize", (e) => {
        this.props.limitX = this.props.ec_size - this.props.ep_size;
        this.props.limitY = this.props.ec_size - this.props.ep_size;
        this.props.offset = this.props.ec.getBoundingClientRect();
    });
    
    window.addEventListener( 'mousemove', (e) => {
        this.props.mouseX = Math.min(e.pageX - this.props.offset.left, this.props.limitX);
        this.props.mouseY = Math.min(e.pageY - this.props.offset.top, this.props.limitY);
        if (this.props.mouseX < 0) this.props.mouseX = 0;
        // if (this.props.mouseY < 0) this.props.mouseY = 0;
        // console.log('this.props.mouseX:', this.props.mouseX, ' | e.pageX: ', e.pageX, ' | this.props.offset.top:', this.props.offset.top, ' | this.props.limitX:', this.props.limitX); 
        console.log('this.props.mouseY:', this.props.mouseY, ' | e.pageY: ', e.pageY, ' | this.props.offset.top:', this.props.offset.top, ' | this.props.limitY:', this.props.limitY); 
        console.log( document.getElementById('frank-head').getBoundingClientRect() );
    });
    
    // Aniamte using requestAnimationFrame
    function animate() {
        this.props.tranX += (this.props.mouseX - this.props.tranX) / speed;
        this.props.tranY += (this.props.mouseY - this.props.tranY) / speed;
        this.props.ep.style.transform = 'translate3D(' + this.props.tranX + 'px, ' + this.props.tranY + 'px, 0)';
        
        window.requestAnimationFrame(animate.bind(this));
    };
    window.requestAnimationFrame(animate.bind(this));
};

// init eyes
var eye1 = new EyeMover("frank-eye-left",  "frank-pupil-1", 12);
var eye2 = new EyeMover("frank-eye-right", "frank-pupil-2", 12);