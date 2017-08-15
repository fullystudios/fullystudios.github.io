module.exports =
class VideoPlayer {
	constructor () {
        this.triggerTime = 6.3;
        this.loopTime = 1.5; // seconds from the end that the film gonna loop from
        this.videoModal = document.querySelector('[data-videomodal]');
        this.videoModal.classList.remove('navigation__modal--open');

        this.videoElement = document.querySelectorAll('[data-videoplayer]');
        this.videoElement.forEach((el, index) => {
            this.setupEvents(el);
        });

    } 
    
    // Lissen for the video to start playing, and loop it when it ends
    setupEvents (el) {
        el.addEventListener('playing', evt => {
            this.modalTrigger.call(this, el);
        });
        el.addEventListener('ended', evt => {
            this.videoLoop(el);
        });
    }
    
    modalTrigger (el) {
        let loop = () => {
            if (el.currentTime < this.triggerTime) {
                window.requestAnimationFrame(loop);
            } else {
                this.openModal(this.videoModal);
            }
        }
        
        window.requestAnimationFrame(loop);
    }

    openModal (el) {
        el.classList.add('navigation__modal--open');
    }

    videoLoop (el) {
        el.currentTime = el.duration - this.loopTime;
        el.play();
    }
}
