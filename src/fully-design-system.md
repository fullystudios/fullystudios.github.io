---
layout: page
title: Design System
permalink: /design-system/
published: true
author: Jonas Sandstedt
date: 2017-04-24
background-image_1440: '../assets/introfilmen-poster.jpg'
background-image_2880: '../assets/introfilmen-poster.jpg'
vimeo_IDs: 
  - "211438822"
  - "205372936"
  - "162523357"
  - "54016145"
---

<header class="ds-header" markdown='1' style="margin-top: 0">
## Colors
</header>

<div class="c-signal-bg" markdown='1' style="padding-top: 30px; padding-bottom: 30px">

### signal - `#5F11E8`

This color will be the main association with Fully. A strong signal that shows tech and takes place.

</div>


<div class="c-people-bg" markdown='1' style="padding-top: 30px; padding-bottom: 30px">

### people - `#FFC1B4`

This color stands for the personal side of Fully. Things that describe people or personal things uses this color.

</div>


<div class="c-business-bg" markdown='1' style="padding-top: 30px; padding-bottom: 30px">

### business - `#7BD75E`

This color is used for business inqueries and other parts concerning contact with client.

</div>


<div class="c-curiosities-bg" markdown='1' style="padding-top: 30px; padding-bottom: 30px">

### curiosities - `#FFDE7F`

This color primarily for the current and constant curiosity, but also for explorations and ideas.

</div>


<div class="c-metal-bg" markdown='1' style="padding-top: 30px; padding-bottom: 30px">

### metal - `#666666`

This color is mainly here because of Joakim and his ocult ways :) No in all seriousness this color is a good option to use when we don’t want to go all black and gives a softer look to texts.

</div>


<div class="c-light-bg" markdown='1' style="padding-top: 30px; padding-bottom: 30px">

### light - `#f8f8f8`

This color is used for backgrounds and such. This light grey gives a small contrast to white but stil enough to be usefull and nice and light.

</div>


<div class="c-white-bg" markdown='1' style="padding-top: 30px; padding-bottom: 30px">

### white - `#ffffff`

Just whit. Not much to say here. A very usefull color in many situations.

</div>


<div class="c-dark-bg" markdown='1' style="padding-top: 30px; padding-bottom: 30px">

### dark - `#0A2A4F`

Use this on dark text on lighter backgrounds. But make sure the contrast is good.

</div>


<header class="ds-header" markdown='1'>
## Typography
Headlines, textblock etc.
</header>

# H1 headline

## H2 headline

### H3 headline

### H4 headline

#### H5 headline

##### H6 headline

Paragraph text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis maiores hic quo optio alias odit voluptas debitis autem voluptate, facilis quaerat numquam, porro maxime repellendus sapiente a illum eius adipisci.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. At illo, vero placeat, voluptas corporis voluptatum architecto sequi fuga. Earum ipsam commodi nisi soluta ut officiis eligendi culpa repudiandae ipsum cupiditate.

<p class="ingress">
Ingress Lorem ipsum dolor sit amet, consectetur adipisicing elit. At illo, vero placeat, voluptas corporis voluptatum architecto sequi fuga. Earum ipsam commodi nisi soluta ut officiis eligendi culpa repudiandae ip`um cupiditate.
</p>

``` html
<p class="ingress"></p>
```

<header class="ds-header" markdown='1'>
## Buttons
</header>

Standard button:
<a class="button" href="#"><span>Explore</span></a>

``` html
<a class="button" href="#"><span>Explore</span></a>
```

<div class="c-signal-bg" style="padding: 4em" markdown="1">
<p>Inverted button:
<a class="button button--invert" href="#"><span>Explore</span></a>
</p>
 ``` html
<a class="button button--invert" href="#"><span>Explore</span></a>
```
</div>
<br>
Link button:
<a href="#" class="link link--next"><span>View all cases</span></a>

``` html
<a href="#" class="link link--next"><span>View all cases</span></a>
```

<div class="c-signal-bg" style="padding: 4em" markdown="1">
<p>Inverted link:
<a href="#" class="link link--next link--invert"><span>View all cases</span></a>
</p>
 ``` html
<a href="#" class="link link--next link--invert"><span>View all cases</span></a>
```
</div>
<br>

<header class="ds-header" markdown='1'>
## Boxes
Boxes with different dropshadows for text and images.
</header>

<div class="box" markdown="1">

## The secret clubhouse
Lorem ipsum dolor sit amet, consectetur adipisicing elit. At illo, vero placeat, voluptas corporis voluptatum architecto sequi fuga. Earum ipsam commodi nisi soluta ut officiis eligendi culpa repudiandae ipsum cupiditate.

``` html
<div class="box"></div>
```

</div>

<div class="box box--right box--people" markdown="1" style="background-image:url(http://placekitten.com/g/1920/600); color:white">

``` html
<div class="box box--right box--people" style="background-image:url(http://placekitten.com/g/1920/600)"></div>
```
</div>

<div class="box box--business" markdown="1">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. At illo, vero placeat, voluptas corporis voluptatum architecto sequi fuga. Earum ipsam commodi nisi soluta ut officiis eligendi culpa repudiandae ipsum cupiditate.

``` html
<div class="box box--business"></div>
```
</div>

<div class="box box--right box--curiosities" markdown="1">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. At illo, vero placeat, voluptas corporis voluptatum architecto sequi fuga. Earum ipsam commodi nisi soluta ut officiis eligendi culpa repudiandae ipsum cupiditate.

``` html
<div class="box box--right box--curiosities"></div>
```
</div>

<div class="box box--metal" markdown="1">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. At illo, vero placeat, voluptas corporis voluptatum architecto sequi fuga. Earum ipsam commodi nisi soluta ut officiis eligendi culpa repudiandae ipsum cupiditate.

``` html
<div class="box box--metal"></div>
```
</div>

<div class="box box--right box--up" markdown="1">

Make the shadow go upwards instead by using the class `box--up`
``` html
<div class="box box--right box--up"></div>
```
</div>

<div class="box box--bgsignal" markdown="1">
Also works with `.box--bgpeople`, `.box--bgcuriosities`, `.box--bgbusiness` and  `.box--bgmetal`

``` html
<div class="box box--metal">
```
</div>





<header class="ds-header" markdown='1'>
## boxgrid
a grid with images and texts. Used in "other projects"
</header>

<div class="boxgrid">
<h2 class="boxgrid__header h4">Check out our other projects</h2>
<figure class="boxgrid__box">
    {% comment %}Change this color to an average color from the image{% endcomment %}
    <div class="image-loader" style="background: #ccc"> 
        <img 
        src=" http://placekitten.com/g/1440/830"
        alt="A beautiful cat">	
    </div>
    <figcaption class="boxgrid__caption">
        <h3>A beautiful cat</h3>
        <p>lorem ipsum</p>
    </figcaption>
</figure>

<figure class="boxgrid__box">
    <div class="image-loader" style="background: #c1c1c1">
        <img 
        src="http://placekitten.com/g/1440/830"
        alt="A beautiful cat">	
    </div>
    <figcaption class="boxgrid__caption">
        <h3>Another beautiful cat</h3>
        <p>Lorem ipsum dolem es simet</p>
    </figcaption>
</figure>
</div>

``` html
<div class="boxgrid">
    <h2 class="boxgrid__header h4">Boxgrid title</h2>

    <figure class="boxgrid__box">
        <div class="image-loader" style="background: #c1c1c1"> <!--Change this color to an average color from the image-->
            <img src="" alt="Fig title">	
        </div>
        <figcaption class="boxgrid__caption">
            <h3>Fig title</h3>
            <p>Fig Description</p>
        </figcaption>
    </figure>
</div>
```

### A compat boxgrid:

<div class="boxgrid boxgrid--compact">
<h2 class="boxgrid__header h4">Recent work</h2>
    <figure class="boxgrid__box">
        {% comment %}Change this color to an average color from the image{% endcomment %}
        <div class="image-loader" style="background: #ccc"> 
            <img 
            src=" http://placekitten.com/g/1440/830"
            alt="A beautiful cat">	
        </div>
        <figcaption class="boxgrid__caption">
            <h3 class="h4">A beautiful cat</h3>
            <p>lorem ipsum</p>
            <a href="#" class="button"><span>View case</span></a>
        </figcaption>
    </figure>
    <figure class="boxgrid__box">
        <div class="image-loader" style="background: #c1c1c1">
            <img 
            src="http://placekitten.com/g/1440/830"
            alt="A beautiful cat">	
        </div>
        <figcaption class="boxgrid__caption">
            <h3 class="h4">Another beautiful cat</h3>
            <p>Lorem ipsum</p>
            <a href="#" class="button"><span>View case</span></a>
        </figcaption>
    </figure>
    <figure class="boxgrid__box">
        <div class="image-loader" style="background: #c1c1c1">
            <img 
            src="http://placekitten.com/g/1440/830"
            alt="A beautiful cat">	
        </div>
        <figcaption class="boxgrid__caption">
            <h3 class="h4">Another beautiful cat</h3>
            <p>Lorem ipsum dolem es simet es lorem ipsum</p>
            <a href="#" class="button"><span>View case</span></a>
        </figcaption>
    </figure>
    <figure class="boxgrid__box">
        <div class="image-loader" style="background: #c1c1c1">
            <img 
            src="http://placekitten.com/g/1440/830"
            alt="A beautiful cat">	
        </div>
        <figcaption class="boxgrid__caption">
            <h3 class="h4">Another beautiful cat</h3>
            <p>Lorem ipsum</p>
            <a href="#" class="button"><span>View case</span></a>
        </figcaption>
    </figure>
    <figure class="boxgrid__box">
        <div class="image-loader" style="background: #c1c1c1">
            <img 
            src="http://placekitten.com/g/1440/830"
            alt="A beautiful cat">	
        </div>
        <figcaption class="boxgrid__caption">
            <h3 class="h4">Lorem ipsum</h3>
            <p>Lorem ipsum dolem es simet lorem</p>
            <a href="#" class="button"><span>View case</span></a>
        </figcaption>
    </figure>
    <figure class="boxgrid__box">
        <div class="image-loader" style="background: #c1c1c1">
            <img 
            src="http://placekitten.com/g/1440/830"
            alt="A beautiful cat">	
        </div>
        <figcaption class="boxgrid__caption">
            <h3 class="h4">Another beautiful cat</h3>
            <p>Lorem ipsum dolem es simet</p>
            <a href="#" class="button"><span>View case</span></a>
        </figcaption>
    </figure>
</div>

``` html
<div class="boxgrid boxgrid--compact">
...
</div>
```

<header class="ds-header" markdown='1'>
## images
Load images with style
</header>

<h3 id="backgrund-image">Fixed ratio image loader</h3>

<div class="image-loader" style="background: #c1c1c1">
    <img 
    src="http://placekitten.com/g/1440/830"
    alt="A beautiful cat">	
</div>

``` html
<div class="image-loader" style="background: #c1c1c1">
    <img 
    src="http://placekitten.com/g/1440/830"
    alt="A beautiful cat">	
</div>

```

<br>
<h3 id="backgrund-image">Backgrund image</h3>

<style>
    #{{page.slug}}_bg {
        background-image: url(../assets/introfilmen-poster.jpg);
    }
    @media (min-width: 800px) {
        #{{page.slug}}_bg {
            background-image: url(../assets/introfilmen-poster.jpg);
        }
    }
</style>
<div class="background-image background-image--padding flexcenter invert" id="{{page.slug}}_bg" markdown="1">
    Availible classes:
    .background-image
    .background-image--padding
    .background-image--largepadding
</div>

```
{% raw %}
<style>
    #{{page.slug}}_bg {
        background-image: url(../assets/introfilmen-poster.jpg);
    }
    @media (min-width: 800px) {
        #{{page.slug}}_bg {
            background-image: url(../assets/introfilmen-poster.jpg);
        }
    }
</style>
<div class="background-image background-image--padding flexcenter invert" id="{{page.slug}}_bg">
    <p>Lorem ipsum</p>
</div>
{% endraw %}
```

<br>
<h3 id="imagegrid">Imagegrid</h3>
<p>Also works with images 😁</p>

{% unless page.vimeo_IDs == nil %}
<section class="imagegrid imagegrid--firstlarge">
	{% for video in page.vimeo_IDs %}
	<div class="imagegrid__image">
		<div class="video">
			<iframe src="https://player.vimeo.com/video/{{video}}" width="1920" height="1080" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
		</div>
	</div>
        
{% endfor %}
    <div class="imagegrid__image imagegrid__image--two">
        <img src="../assets/introfilmen-poster.jpg">
    </div>
    <div class="imagegrid__image imagegrid__image--two">
        <img src="../assets/introfilmen-poster.jpg">
    </div>
</section>
{% endunless %}

<p>This example takes an array of vimeo video ID's</p>
``` html
{% raw %}
{% unless page.vimeo_IDs == nil %}
<section class="imagegrid imagegrid--firstlarge">
	{% for video in page.vimeo_IDs %}
	<div class="imagegrid__image">
		<div class="video">
			<iframe src="https://player.vimeo.com/video/{{video}}" width="1920" height="1080" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
		</div>
	</div>
	{% endfor %}
    <div class="imagegrid__image imagegrid__image--two"></div>
    <div class="imagegrid__image imagegrid__image--two"></div>
</section>
{% endunless %}
{% endraw %}
```

<header class="ds-header" markdown='1'>
## Layouts
</header>

<h3 id="imagebox+text">Imagebox + text</h3>
<p>Example of a custom CSS grid layout using a container with the class `grid`.</p>

<div class="grid grid--space case-highlight" markdown='1'>
<div class="flexcenter background-image invert grid__offsetcolumn1-2" id="lettering2" markdown='1' style="background-image: url(../assets/introfilmen-poster.jpg)">

### div #exampleimage
``` scss
grid-column: 1 / span 12;
grid-row: 4 / span 13;
@include media-query($on-laptop) {
    grid-column: 1 / span 8;
    grid-row: 2 / span 13;
}
```

### div #exampletext
``` scss
grid-column: 2 / span 13;
grid-row: 1 / span 4; 
@include media-query($on-laptop) {
    grid-column: 8 / span 5;
    grid-row: 1 / span 8;
}
```

</div>
<div class="boxtext grid__offsetcolumn2-2">
    <h2>.boxtext</h2>
    <p>Dolem es simet lorem</p>
    <a href="#" class="button"><span>View case study</span></a>
    <a href="#" class="link link--next"><span>View all cases</span></a>
</div>
</div>

``` html
<div class="grid grid--space">
    <div class="background-image grid__offsetcolumn1-2" id="exampleimage" style="background-image: url(assets/introfilmen-poster.jpg)"></div>
    <div class="boxtext grid__offsetcolumn2-2" id="exampletext"></div>
</div>
```

<br>
<h3 id="two-columns">2 columns text / image</h3>

<div class="grid grid--space grid--padding">
    <div class="grid__column1-2">
        <p>Column 1 - lorem ipsum dolem es simet lorem ipsum dolem es simet lorem ipsum dolem es simet</p>
    </div>
    <div class="grid__column2-2 flexcenter">
        <img class="image"
            alt="{{page.section3_image_alt}}"
            width="1440" height="1653"
            src="../assets/introfilmen-poster.jpg" 
            srcset="../assets/introfilmen-poster.jpg 1440w,
                    ../assets/introfilmen-poster.jpg 720w"
            sizes="(min-width: 580px) 50vw,
                    100vw">
    </div>
</div>

```scss
{% raw %}
<div class="grid grid--space grid--padding">
    <div class="grid__column1-2">
        {{ page.section3 | markdownify }}
    </div>
    <div class="grid__column2-2 flexcenter">
        <img class="image"
            alt="{{page.section3_image_alt}}"
            width="1440" height="1653"
            src="{{site.baseurl}}/assets/work/{{page.slug}}/{{ page.section3_image_small }}" 
            srcset="{{site.baseurl}}/assets/work/{{page.slug}}/{{ page.section3_image_medium }} 1440w,
                    {{site.baseurl}}/assets/work/{{page.slug}}/{{ page.section3_image_small }} 720w"
           sizes="(min-width: 580px) 50vw,
                   100vw">
    </div>
</div>
{% endraw %}
```

<br>
<h3 id="boxttext-frame">A Boxtext width a frame</h3>
<p markdown='1'>Availible classes: `boxtext--frame--curiosities`, `boxtext--frame--darkoncuriosity` `boxtext--frame--dark`, `boxtext--frame--people`</p>
<div class="boxtext boxtext--frame">
<h2 style="max-width:13em">.boxtext--frame</h2>
<a href="#" class="button"><span>Read all about it</span></a>
<a href="mailto:{{site.email}}" class="link link--next link--invert"><span>Or drop us a line</span></a>
</div>


``` html
<div class="boxtext boxtext--frame">
[...]
</div>
```

<br><br><br>