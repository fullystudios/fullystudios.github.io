module.exports =
class Opinioated {
	constructor () {
        const swipers = document.querySelectorAll('[data-coeswipe]');
        const swipersArr = [...swipers];
        
        swipersArr.forEach(swiper => {
            this.setup(swiper);
        });
    }
   
    setup (swiper) {
        const images = document.querySelectorAll('[data-coeswipeimage]');
        const swiperImages = [ ...images ];

        swiperImages.forEach(image => {
            image.addEventListener( 'mousemove', this.changeImage);
            image.addEventListener( 'touchmove', this.changeImage);
        });
    }

    changeImage (e) {
        let image = e.target;
        
        // if (!e.offsetX && e.changedTouches === 'undefined') return;

        // Get pointer offset depending if the pointer is a mouse or touch
        let imageOffset = e.offsetX ? e.offsetX : e.changedTouches[0].clientX - e.changedTouches[0].target.offsetLeft;
        
        // let rPos = pageX - imageOffset;
        let elementWidth = image.offsetWidth;
        let elementPart = elementWidth / 4;

        let currentPart = 1;
        if (imageOffset > elementWidth - elementPart ) {
            currentPart = 4;
            image.style.backgroundPositionX = '100%';
        }
        else if (imageOffset > elementWidth - (elementPart*2) ) {
            currentPart = 3;
            image.style.backgroundPositionX = '66.66%';
        }
        else if (imageOffset > elementWidth - (elementPart*3) ) {
            currentPart = 2;
            image.style.backgroundPositionX = '33.33%';
        }
        else {
            currentPart = 1;
            image.style.backgroundPositionX = '0%';
        }

        // console.log('currentPart', currentPart);
        // console.log('imageOffset', imageOffset);
        // console.log('____');
    }

};







// $('.slide-content').mousemove(function(event) {  
//     var current = $(this).parents('.slider').slick('slickCurrentSlide');

//     if (current !== 4) {        
//       var pageCoords = event.pageX;
//       var elementOffset = $(this).offset().left;
//       var rPos = pageCoords - elementOffset;
//       var elementWidth = $(this).width();
//       var elementPart = elementWidth / 4;

//       console.log('mousemove. current !== 4. current:' + current);

//       if (rPos > elementWidth - elementPart ) {
//         $(this).parents('.slider').slick('slickGoTo',3);
//       }
//       else if (rPos > elementWidth - (elementPart*2) ) {
//         $(this).parents('.slider').slick('slickGoTo',2);
//       }
//       else if (rPos > elementWidth - (elementPart*3) ) {
//         $(this).parents('.slider').slick('slickGoTo',1);
//       }
//       else {
//         $(this).parents('.slider').slick('slickGoTo',0);
//       }
//     }
//   }).on("touchend", function(ev) {
//       var current = $(this).parents('.slider').slick('slickCurrentSlide');

//       if (current !== 4) {
//         $(this).parents('.slider').slick('slickGoTo',4);
//         $(this).parents('.slider').parent().addClass('clicked');
//       }
//   });