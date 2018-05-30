# Easy Carousel Plugin - A just add water carousel plugin for js



Go to [the project homepage](https://arkonique.github.io/ez-carousel)<br>
View [demo](https://arkonique.github.io/ez-carousel/demo)

Easy Carousel is a very minimalistic lightweight carousel plugin built in pure Javascript. It is written mainy for a carousel which can display many brand logos and not for traditional image carousels. Although in a future update I might add a feature to use all kinds of images as well. However at a minified size of just 7kb, it is one of the lightest ones out there.

Both es5 and es6 versions are provided in this package.

## Installation

Just download this repository and include the js file of your choice in the body's script tag. That's it.
#### For the unminified es6 version -<br>
`<script src="path/to/easy/carousel/js/file/easy-carousel.js"></script>`
#### For the minified es6 version -<br>
`<script src="path/to/easy/carousel/js/file/easy-carousel.min.js"></script>`
#### For the unminified es5 version -<br>
`<script src="path/to/easy/carousel/js/file/easy-carousel-es5.js"></script>`
#### For the minified es5 version -<br>
`<script src="path/to/easy/carousel/js/file/easy-carousel-es5.min.js"></script>`

## Usage

### HTML - 

Make a container for your carousel, and put all your image tags in there. Set whatever parameters you want in the data attributes, and you are done.

eg-
```html
	<div id="carousel" data-ez-view-number=5 data-ez-autoscroll="on" 
	 data-ez-width="100%" data-ez-height="200px" data-ez-bg="#444"
	 data-ez-arrow-color="white" data-ez-arrow-size="3rem" data-ez-linked="true">
		<img src="...">
		<img src="...">
		.
		.
		.
	</div>
```

<br><br>
### JavaScript-

Make a Carousel object using `new Carousel(<selector of the carousel container>);` and then call the object method `makeCarousel()` which does all the work for you.

eg-
```javascript
	const carousel = new Carousel("#carousel");
	carousel.makeCarousel();
```
(You can replace the const with var if you want support for older browsers and are not using atranspiler such as Babel).

The Carousel constructor takes default "#carousel" as the selector. So if you have named your carousel container with an id of `carousel`, then you can just initialise the carousel by -

```javascript
	const carousel = new Carousel();
	carousel.makeCarousel();
```

__*That is all you need to get going*__

## Options

There are many options provided to customise your carousel. More features will be added later on. You can change these options by setting their values in the data attributes of your carousel element.

| Data Attribute         | Usage                                                                                 | Default    | Input              |
| ---------------------- |:-------------------------------------------------------------------------------------:|:----------:|:------------------:|
| `data-ez-view-number`  | Specify the number of images to display on one slide of the carousel                  | 5          | Integer            |
| `data-ez-width`        | Specify the width of the carousel output                                              | 100%       | Any CSS Size Unit  |
| `data-ez-height`       | Specify the height of the carousel output                                             | 200px      | Any CSS size unit  |
| `data-ez-arrow-color`  | Specify the colour of the controller buttons                                          | black      | Any CSS color type |
| `data-ez-arrow-size`   | Specify the size of the controller arrows                                             | 2rem       | Any CSS size unit  |
| `data-ez-bg`           | Specify the background colour of the carousel                                         | white      | Any CSS color type |
| `data-ez-autoscroll`   | Specify whether the carousel will scroll through the list automatically               | off        | off/on             | 
| `data-ez-scroll-time`  | Specify the time interval for a slide change								             | 5000	      | Time in miliseconds|
| `data-ez-arrow-type`   | Specify the type of arrow to be used in the buttons (different types are listed below)| 1		  | any number in 1-10 |
| `data-ez-linked`       | Specify whether the images being displayed will have links to some website            | false      | true/false         |

**Arrow Types**
1. Basic Arrow - `data-ez-arrow-type=1` &larr; &rarr;  (Default)
2. Dotted arrow - `data-ez-arrow-type=2` &#8672; &#8674;
3. Small single angle arrow - `data-ez-arrow-type=3` &lsaquo; &rsaquo;
4. Small double angle arrow - `data-ez-arrow-type=4` &laquo; &raquo;
5. Big double dashed arrow open - `data-ez-arrow-type=5` &lArr; &rArr;
6. Zigzag arrow - `data-ez-arrow-type=6` &#8668; &zigrarr;
7. Big double dashed arrow closed - `data-ez-arrow-type=7` &#8678; &#8680;
8. Open headed arrow - `data-ez-arrow-type=8` &loarr; &roarr;
9. Curved arrow - `data-ez-arrow-type=9` &pr; &sc;
10. Big single angle arrow - `data-ez-arrow-type=10` &#10096; &#10097;


**Linked Images**
If `data-ez-linked` is set to true then a data attribute `data-ez-href` will have to be added to all the images in the carousel which will contain the link of the webpage that the image is linked to.

**eg -**

```html
    <div id="carousel" data-ez-view-number=5 data-ez-autoscroll="on"
	 data-ez-width="100%" data-ez-height="200px" data-ez-bg="#444"
	 data-ez-arrow-color="white" data-ez-arrow-size="10%" data-ez-linked="true">
        <img src="..." data-ez-href="...">
        <img src="..." data-ez-href="...">
        .
        .
        .
    </div>
```


## Features to be added

As mentioned in the previous section, some options are in production which have not been implemented yet. Other than that some other features will also be added - 

- [ ] CSS + JS based version of the library
- [ ] CSS + Jquery based version of the library
- [ ] Jquery based version of the library
- [X] ~~Auto Scroll Feature~~
- [X] ~~Linked Images (In production)~~
- [ ] Support for all kinds of images
- [X] ~~Option to change arrow type~~
- [X] ~~ES5 support~~
