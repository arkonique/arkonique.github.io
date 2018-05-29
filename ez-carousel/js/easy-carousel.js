/*****************************************************************************************************
 * _______				   _____,							  .__ 									 *
 * |  ____|                 / ____|                             | |									 *
 * | |__   __ _ ___ _   _  | |     __ _ _ __ ___  _   _ ___  ___| |         						 *
 * |  __| / _` / __| | | | | |    / _` | '__/ _ \| | | / __|/ _ \ |									 *
 * | |___| (_| \__ \ |_| | | |___| (_| | | | (_) | |_| \__ \  __/ |									 *
 * |______\__,_|___/\__, |  \_____\__,_|_|  \___/ \__,_|___/\___|_|									 *
 *                   __/ |                                         									 *
 *                  |___/                                          									 *
 *																									 *
 * ######          ######                             #     #                                    	 *
 * #     # #   #   #     # # #####  #####  #    # #   ##   ##   ##   #    # #####    ##   #      	 *
 * #     #  # #    #     # # #    # #    # #    # #   # # # #  #  #  ##   # #    #  #  #  #      	 *
 * ######    #     ######  # #    # #    # ###### #   #  #  # #    # # #  # #    # #    # #      	 *
 * #     #   #     #   #   # #    # #    # #    # #   #     # ###### #  # # #    # ###### #      	 *
 * #     #   #     #    #  # #    # #    # #    # #   #     # #    # #   ## #    # #    # #      	 *
 * ######    #     #     # # #####  #####  #    # #   #     # #    # #    # #####  #    # ###### 	 *
 *                                                                                              	 *
 *****************************************************************************************************/
let interval;

class Carousel {
    constructor(selector = "#carousel") {
        const number = 5;
        const autoscroll = 'off';
        const width = "100%";
        const height = "200px";
        const bgcolor = "white";
        const arrowcolor = "black";
        const arrowsize = "2rem";
        const arrowtype = 1;
        const linked = "false";
        const scrolltime = 5000;

        this.selector = document.querySelector(selector);
        this.number = (this.selector.dataset.ezViewNumber == undefined) ? number : this.selector.dataset.ezViewNumber;
        this.autoScroll = (this.selector.dataset.ezAutoscroll == undefined) ? autoscroll : this.selector.dataset.ezAutoscroll;
        this.width = (this.selector.dataset.ezWidth == undefined) ? width : this.selector.dataset.ezWidth;
        this.height = (this.selector.dataset.ezHeight == undefined) ? height : this.selector.dataset.ezHeight;
        this.arrowColor = (this.selector.dataset.ezArrowColor == undefined) ? arrowcolor : this.selector.dataset.ezArrowColor;
        this.bgColor = (this.selector.dataset.ezBg == undefined) ? bgcolor : this.selector.dataset.ezBg;
        this.arrowSize = (this.selector.dataset.ezArrowSize == undefined) ? arrowsize : this.selector.dataset.ezArrowSize;
        this.linked = (this.selector.dataset.ezLinked == undefined) ? linked : this.selector.dataset.ezLinked;
        this.arrowType = (this.selector.dataset.ezArrowType == undefined) ? arrowtype : this.selector.dataset.ezArrowType;
        this.identifier = selector;
        this.scrollTime = (this.selector.dataset.ezScrollTime == undefined) ? scrolltime : this.selector.dataset.ezScrollTime;
        this.linked = (this.selector.dataset.ezLinked == undefined) ? linked : this.selector.dataset.ezLinked;

        if (this.arrowType == 1) {
            this.arrowSymbol_l = "&larr;";
            this.arrowSymbol_r = "&rarr;";
        } else if (this.arrowType == 2) {
            this.arrowSymbol_l = "&#8672;";
            this.arrowSymbol_r = "&#8674;";
        } else if (this.arrowType == 3) {
            this.arrowSymbol_l = "&lsaquo;";
            this.arrowSymbol_r = "&rsaquo;";
        } else if (this.arrowType == 4) {
            this.arrowSymbol_l = "&laquo;";
            this.arrowSymbol_r = "&raquo;";
        } else if (this.arrowType == 5) {
            this.arrowSymbol_l = "&lArr;";
            this.arrowSymbol_r = "&rArr;";
        } else if (this.arrowType == 6) {
            this.arrowSymbol_l = "&#8668;";
            this.arrowSymbol_r = "&zigrarr;";
        } else if (this.arrowType == 7) {
            this.arrowSymbol_l = "&#8678;";
            this.arrowSymbol_r = "&#8680;";
        } else if (this.arrowType == 8) {
            this.arrowSymbol_l = "&loarr;";
            this.arrowSymbol_r = "&roarr;";
        } else if (this.arrowType == 9) {
            this.arrowSymbol_l = "&pr;";
            this.arrowSymbol_r = "&sc;";
        } else if (this.arrowType == 10) {
            this.arrowSymbol_l = "&#10096;";
            this.arrowSymbol_r = "&#10097;";
        } else {
            this.arrowSymbol_l = "&#8672;";
            this.arrowSymbol_r = "&#8674;";
        }

    }
    makeCarousel() {
        //Since this is a pure javascript solution, all the styles are generated inline. I might improve this in a future version


        //Generating New HTML
        let srcList = [];
        let str = `<div class='previous'><p>${this.arrowSymbol_l}</p></div><div class='rotater'>`;
        let src, href;
        for (let i of this.selector.children) {
            src = i.getAttribute("src");
            srcList.push(src);
            if (this.linked == 'false') {
                str = `${str}<div class='carousel-img-holder'><img src=${src} class='carousel-img' /></div>`;
            } else {
                href = i.getAttribute("data-ez-href");
                str = `${str}<a class='carousel-links' href=${href}><div class='carousel-img-holder'><img src=${src} class='carousel-img' /></div></a>`
            }
        }
        str = `${str}</div><div class='next'><p>${this.arrowSymbol_r}</p></div><div class="carousel-buttons"></div>`;
        this.selector.innerHTML = str;

        //-------------------------------------------> Styling Elements

        //Styling The outer carousel container (which contains all the arrows, buttons and images)
        const styler = this.selector.style;
        [styler.background, styler.width, styler.height, styler.display, styler.justifyContent, styler.position, styler.flexWrap] = [this.bgColor, this.width, this.height, "flex", "center", "relative", "wrap"];
        //Styling the previous and next buttons
        const prev = this.selector.childNodes[0].style;
        const next = this.selector.childNodes[2].style;
        prev.position = next.position = "relative";
        prev.top = next.top = "0";
        prev.height = next.height = "90%";
        prev.width = next.width = "10%";
        prev.display = next.display = "flex";
        prev.alignItems = next.alignItems = "center";
        prev.fontSize = next.fontSize = this.arrowSize;
        prev.color = next.color = this.arrowColor;
        prev.justifyContent = next.justifyContent = "center";
        prev.flexFlow = "row";
        next.flexFlow = "row-reverse";
        prev.left = "0";
        next.right = "0";
        prev.cursor = next.cursor = "pointer";

        //Styling the inner container "rotater" which will  only contain the images
        const rotate = this.selector.childNodes[1];
        rotate.style.display = "flex";
        rotate.style.height = "90%";
        rotate.style.width = "80%";
        rotate.style.position = "relative";
        rotate.style.overflow = "hidden";
        //Styling all the image containing divs and images in the rotater
        for (let i of this.selector.childNodes[1].childNodes) {
            let height = this.selector.getBoundingClientRect().height * 0.8;
            let heightNum = height;
            height = height + "px";
            let margin = (this.selector.getBoundingClientRect().height / 10) + "px";
            let width = (((this.selector.getBoundingClientRect().width - document.querySelectorAll(`${this.identifier} .next`)[0].getBoundingClientRect().width - document.querySelectorAll(`${this.identifier} .previous`)[0].getBoundingClientRect().width) / this.number) - 2 * (this.selector.getBoundingClientRect().height / 10)) + "px";
            i.setAttribute('style', `height: ${height}; width: ${width}; margin: ${margin}; display: flex; align-items: center; justify-content: center;  transition: 0.5s;`);
            i.childNodes[0].style.width = width;
            i.childNodes[0].style.height = (0.8 * heightNum) + "px";
            i.childNodes[0].style.margin = "auto";
        }


        if (this.linked == 'true') {
            for (let i of this.selector.childNodes[1].childNodes) {
                let height = this.selector.getBoundingClientRect().height * 0.8;
                let heightNum = height;
                height = height + "px";
                let margin = (this.selector.getBoundingClientRect().height / 10) + "px";
                let width = (((this.selector.getBoundingClientRect().width - document.querySelectorAll(`${this.identifier} .next`)[0].getBoundingClientRect().width - document.querySelectorAll(`${this.identifier} .previous`)[0].getBoundingClientRect().width) / this.number) - 2 * (this.selector.getBoundingClientRect().height / 10)) + "px";
                i.childNodes[0].setAttribute('style', `height: ${height}; width: ${width}; margin: ${margin}; display: flex; align-items: center; justify-content: center;  transition: 0.5s;`);
                i.childNodes[0].childNodes[0].style.width = width;
                i.childNodes[0].childNodes[0].style.height = (0.8 * heightNum) + "px";
                i.childNodes[0].childNodes[0].style.margin = "auto";
            }
        }

        //styling the button container and generating and styling buttons
        const buttonCont = this.selector.childNodes[3].style;
        const buttonNum = Math.ceil(this.selector.childNodes[1].childNodes.length / this.number);
        const buttonHeight = (this.selector.getBoundingClientRect().height / 10) + "px";
        [buttonCont.width, buttonCont.height, buttonCont.display, buttonCont.flexFlow, buttonCont.justifyContent, buttonCont.alignItems] = ["100%", buttonHeight, "flex", "wrap", "center", "center"];

        for (let i = 0; i < buttonNum; i++) {
            const button_h = 0.4 * this.selector.childNodes[3].getBoundingClientRect().height;
            const button_w = 0.4 * this.selector.childNodes[3].getBoundingClientRect().height;
            const button_m = button_h / 2;
            var button_div = document.createElement("div");
            button_div.setAttribute("class", "carousel-button-blob");
            button_div.setAttribute("style", `height: ${button_h}px; width: ${button_w}px; margin: ${button_m}px; background: ${this.arrowColor}; border: 1px solid ${this.arrowColor}; border-radius: 50%; transition: 0.2s; cursor: pointer;`);
            this.selector.childNodes[3].appendChild(button_div);
            button_div.setAttribute("id", `ez-cbb-${i+1}`);
            if (i == 0) {
                button_div.setAttribute("class", "carousel-button-blob selected");
            }

        }

        //---------------------------------------------Styling complete!!!!!------------------------------->

        this.carouselActions();
        if (this.autoScroll == "on") {
            this.autoScroller();
        }

    }

    carouselActions() {
        let bg, selector, total, current, target, translate, identifier;
        current = 1;
        translate = 0;
        selector = this.selector;
        identifier = this.identifier;
        total = Math.ceil(this.selector.childNodes[1].childNodes.length / this.number);
        console.log(selector);
        document.querySelector(`${this.identifier} .selected`).style.background = 'transparent';
        for (let i of document.querySelectorAll(`${identifier} .carousel-button-blob`)) {
            if ([...i.classList].indexOf("selected") == -1) {
                bg = i.style.background;
                break;
            }
        }

        //-----------------Carousel blob buttons actions-------------------->
        for (let i of document.querySelectorAll(`${identifier} .carousel-button-blob`)) {
            i.onmouseover = function() {
                i.style.background = "transparent";
            }

            i.onmouseout = function() {
                if ([...this.classList].indexOf("selected") == -1) {
                    i.style.background = bg;
                }
            }

            i.onclick = function() {
                for (let j of document.querySelectorAll(`${identifier} .carousel-button-blob`)) {
                    if ([...j.classList].indexOf("selected") != -1) {
                        current = j.id.slice(-1 * (j.id.length - 7))
                    }
                }
                for (let j of document.querySelectorAll(`${identifier} .carousel-button-blob`)) {
                    if ([...j.classList].indexOf("selected") != -1) {
                        j.classList.remove("selected");
                    }
                }
                this.classList.add("selected");
                for (let j of document.querySelectorAll(`${identifier} .carousel-button-blob`)) {
                    if ([...j.classList].indexOf("selected") == -1) {
                        j.style.background = bg;
                    }
                }
                target = i.id.slice(-1 * (i.id.length - 7))
                let width = (selector.getBoundingClientRect().width - document.querySelectorAll(`${identifier} .next`)[0].getBoundingClientRect().width - document.querySelectorAll(`${identifier} .previous`)[0].getBoundingClientRect().width);
                let gap = current - target;
                for (let j of selector.childNodes[1].childNodes) {
                    j.style.transform = `translateX(${translate+gap*width}px)`;
                }
                translate = translate + gap * width;
            }

        }

        //-----------------Previous and next button actions----------------->
        document.querySelector(`${identifier} .previous`).onclick = function() {
            let id;
            for (let [j, i] of document.querySelectorAll(`${identifier} .carousel-button-blob`).entries()) {
                if ([...i.classList].indexOf("selected") != -1) {
                    id = i.id;
                    i.classList.remove("selected");
                    var a = (j == 0) ? i.classList.add("selected") : document.querySelectorAll(`${identifier} .carousel-button-blob`)[j - 1].classList.add("selected");
                    break;
                }
            }
            let width = (selector.getBoundingClientRect().width - document.querySelectorAll(`${identifier} .next`)[0].getBoundingClientRect().width - document.querySelectorAll(`${identifier} .previous`)[0].getBoundingClientRect().width);
            if (id == "ez-cbb-1") {
                translate = -1 * (total - 1) * width;
                for (let j of selector.childNodes[1].childNodes) {
                    j.style.transform = `translateX(${translate}px)`;
                }
                document.querySelectorAll(`${identifier} .carousel-button-blob`)[0].classList.remove("selected");
                document.querySelectorAll(`${identifier} .carousel-button-blob`)[total - 1].classList.add("selected");

            } else {


                for (let j of selector.childNodes[1].childNodes) {
                    j.style.transform = `translateX(${translate+width}px)`;
                }
                translate = translate + width;

            }

            for (let i of document.querySelectorAll(`${identifier} .carousel-button-blob`)) {
                if ([...i.classList].indexOf("selected") == -1) {
                    i.style.background = bg;
                } else {
                    i.style.background = "transparent";
                }
            }
        }

        document.querySelector(`${identifier} .next`).onclick = function() {
            let id;
            for (let [j, i] of document.querySelectorAll(`${identifier} .carousel-button-blob`).entries()) {
                if ([...i.classList].indexOf("selected") != -1) {
                    id = i.id;
                    i.classList.remove("selected");
                    var a = (j == (total - 1)) ? i.classList.add("selected") : document.querySelectorAll(`${identifier} .carousel-button-blob`)[j + 1].classList.add("selected");
                    break;
                }
            }
            let width = (selector.getBoundingClientRect().width - document.querySelectorAll(`${identifier} .next`)[0].getBoundingClientRect().width - document.querySelectorAll(`${identifier} .previous`)[0].getBoundingClientRect().width);

            if (id == `ez-cbb-${total}`) {
                translate = 0;
                for (let j of selector.childNodes[1].childNodes) {
                    j.style.transform = `translateX(${translate}px)`;
                }

                document.querySelectorAll(`${identifier} .carousel-button-blob`)[0].classList.add("selected");
                document.querySelectorAll(`${identifier} .carousel-button-blob`)[total - 1].classList.remove("selected");

            } else {
                translate = translate - width;
                for (let j of selector.childNodes[1].childNodes) {
                    j.style.transform = `translateX(${translate}px)`;
                }
            }

            for (let i of document.querySelectorAll(`${identifier} .carousel-button-blob`)) {
                if ([...i.classList].indexOf("selected") == -1) {
                    i.style.background = bg;
                } else {
                    i.style.background = "transparent";
                }
            }
        }

    }

    autoScroller() {
        for (let i of document.querySelectorAll(`${this.identifier} .carousel-button-blob`)) {
            i.onclick = function() {};
        }

        let e = this;
        e.selector.childNodes[0].innerHTML = e.selector.childNodes[2].innerHTML = "";
        e.selector.childNodes[0].style.width = e.selector.childNodes[2].style.width = "0";
        const rotate = this.selector.childNodes[1];
        rotate.style.display = "flex";
        rotate.style.height = "90%";
        rotate.style.width = "100%";
        rotate.style.position = "relative";
        rotate.style.overflow = "hidden";
        //Styling all the image containing divs and images in the rotater
        for (let i of this.selector.childNodes[1].childNodes) {
            let height = this.selector.getBoundingClientRect().height * 0.8;
            let heightNum = height;
            height = height + "px";
            let margin = (this.selector.getBoundingClientRect().height / 10) + "px";
            let width = (((this.selector.getBoundingClientRect().width - document.querySelectorAll(`${this.identifier} .next`)[0].getBoundingClientRect().width - document.querySelectorAll(`${this.identifier} .previous`)[0].getBoundingClientRect().width) / this.number) - 2 * (this.selector.getBoundingClientRect().height / 10)) + "px";
            i.setAttribute('style', `height: ${height}; width: ${width}; margin: ${margin}; display: flex; align-items: center; justify-content: center;  transition: 0.5s;`);
            i.childNodes[0].style.width = width;
            i.childNodes[0].style.height = (0.8 * heightNum) + "px";
            i.childNodes[0].style.margin = "auto";
        }

        for (let i of document.querySelectorAll(`${this.identifier} .carousel-button-blob`)) {
            i.style.cursor = "default";
        }



        let identifier = e.identifier;
        let id;
        let translate = 0;
        let bg;
        let width = (e.selector.getBoundingClientRect().width - document.querySelectorAll(`${identifier} .next`)[0].getBoundingClientRect().width - document.querySelectorAll(`${identifier} .previous`)[0].getBoundingClientRect().width);
        let total = Math.ceil(e.selector.childNodes[1].childNodes.length / this.number);
        document.body.onload = function() {
            interval = setInterval(function() {
                for (let i of document.querySelectorAll(`${identifier} .carousel-button-blob`)) {
                    if ([...i.classList].indexOf("selected") == -1) {
                        bg = i.style.background;
                        break;
                    }
                }
                for (let [j, i] of document.querySelectorAll(`${identifier} .carousel-button-blob`).entries()) {
                    if ([...i.classList].indexOf('selected') != -1) {
                        id = i.id;
                        i.classList.remove('selected');
                        var a = (j == (total - 1)) ? i.classList.add('selected') : document.querySelectorAll(`${identifier} .carousel-button-blob`)[j + 1].classList.add('selected');
                        break;
                    }
                }

                if (id == `ez-cbb-${total}`) {
                    translate = 0;
                    for (let i of e.selector.childNodes[1].childNodes) {
                        i.style.transform = `translateX(${translate}px)`;
                    }
                    document.querySelectorAll(`${identifier} .carousel-button-blob`)[0].classList.add("selected");
                    document.querySelectorAll(`${identifier} .carousel-button-blob`)[total - 1].classList.remove("selected");
                } else {
                    translate = translate - width;
                    for (let i of e.selector.childNodes[1].childNodes) {
                        i.style.transform = `translateX(${translate}px)`;
                    }
                }

                for (let i of document.querySelectorAll(`${identifier} .carousel-button-blob`)) {
                    if ([...i.classList].indexOf("selected") == -1) {
                        i.style.background = bg;
                    } else {
                        i.style.background = "transparent";
                    }
                }
            }, e.scrollTime)
        }
    }

}