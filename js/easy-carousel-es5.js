"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Carousel = function () {
  function Carousel() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#carousel";

    _classCallCheck(this, Carousel);

    this.selector = document.querySelector(e), this.number = null == this.selector.dataset.ezViewNumber ? 5 : this.selector.dataset.ezViewNumber, this.autoScroll = null == this.selector.dataset.ezAutoscroll ? "off" : this.selector.dataset.ezAutoscroll, this.width = null == this.selector.dataset.ezWidth ? "100%" : this.selector.dataset.ezWidth, this.height = null == this.selector.dataset.ezHeight ? "200px" : this.selector.dataset.ezHeight, this.arrowColor = null == this.selector.dataset.ezArrowColor ? "black" : this.selector.dataset.ezArrowColor, this.bgColor = null == this.selector.dataset.ezBg ? "white" : this.selector.dataset.ezBg, this.arrowSize = null == this.selector.dataset.ezArrowSize ? "2rem" : this.selector.dataset.ezArrowSize, this.linked = null == this.selector.dataset.ezLinked ? "false" : this.selector.dataset.ezLinked;
  }

  _createClass(Carousel, [{
    key: "makeCarousel",
    value: function makeCarousel() {
      var e = void 0,
          t = [],
          s = "<div class='previous'><p>&#8672;</p></div><div class='rotater'>";var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.selector.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _l2 = _step.value;
          e = _l2.getAttribute("src"), t.push(e), s = s + "<div class='carousel-img-holder'><img src=" + e + " class='carousel-img' /></div>";
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      s = s + "</div><div class='next'><p>&#8674;</p></div><div class=\"carousel-buttons\"></div>", this.selector.innerHTML = s;var l = this.selector.style;var _ref = [this.bgColor, this.width, this.height, "flex", "center", "relative", "wrap"];
      l.background = _ref[0];
      l.width = _ref[1];
      l.height = _ref[2];
      l.display = _ref[3];
      l.justifyContent = _ref[4];
      l.position = _ref[5];
      l.flexWrap = _ref[6];
      var o = this.selector.childNodes[0].style,
          i = this.selector.childNodes[2].style;o.position = i.position = "relative", o.top = i.top = "0", o.height = i.height = "90%", o.width = i.width = "10%", o.display = i.display = "flex", o.alignItems = i.alignItems = "center", o.fontSize = i.fontSize = this.arrowSize, o.color = i.color = this.arrowColor, o.justifyContent = i.justifyContent = "center", o.flexFlow = "row", i.flexFlow = "row-reverse", o.left = "0", i.right = "0", o.cursor = i.cursor = "pointer";var c = this.selector.childNodes[1];c.style.display = "flex", c.style.height = "90%", c.style.width = "80%", c.style.position = "relative", c.style.overflow = "hidden";var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.selector.childNodes[1].childNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _e2 = _step2.value;
          var _t2 = .8 * this.selector.getBoundingClientRect().height,
              _s2 = _t2;_t2 += "px";var _l3 = this.selector.getBoundingClientRect().height / 10 + "px",
              _o = (this.selector.getBoundingClientRect().width - document.getElementsByClassName("next")[0].getBoundingClientRect().width - document.getElementsByClassName("previous")[0].getBoundingClientRect().width) / this.number - this.selector.getBoundingClientRect().height / 10 * 2 + "px";_e2.setAttribute("style", "height: " + _t2 + "; width: " + _o + "; margin: " + _l3 + "; display: flex; align-items: center; justify-content: center;  transition: 0.5s;"), _e2.childNodes[0].style.width = _o, _e2.childNodes[0].style.height = .8 * _s2 + "px", _e2.childNodes[0].style.margin = "auto";
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var r = this.selector.childNodes[3].style,
          n = Math.ceil(this.selector.childNodes[1].childNodes.length / this.number),
          d = this.selector.getBoundingClientRect().height / 10 + "px";var _ref2 = ["100%", d, "flex", "wrap", "center", "center"];
      r.width = _ref2[0];
      r.height = _ref2[1];
      r.display = _ref2[2];
      r.flexFlow = _ref2[3];
      r.justifyContent = _ref2[4];
      r.alignItems = _ref2[5];
      for (var _e = 0; _e < n; _e++) {
        var _t = .4 * this.selector.childNodes[3].getBoundingClientRect().height,
            _s = .4 * this.selector.childNodes[3].getBoundingClientRect().height,
            _l = _t / 2;var a = document.createElement("div");a.setAttribute("class", "carousel-button-blob"), a.setAttribute("style", "height: " + _t + "px; width: " + _s + "px; margin: " + _l + "px; background: " + this.arrowColor + "; border: 1px solid " + this.arrowColor + "; border-radius: 50%; transition: 0.2s; cursor: pointer;"), this.selector.childNodes[3].appendChild(a), a.setAttribute("id", "ez-cbb-" + (_e + 1)), 0 == _e && a.setAttribute("class", "carousel-button-blob selected");
      }this.carouselActions();
    }
  }, {
    key: "carouselActions",
    value: function carouselActions() {
      var e = void 0,
          t = void 0,
          s = void 0,
          l = void 0,
          o = void 0,
          i = void 0;l = 1, i = 0, t = this.selector, s = Math.ceil(this.selector.childNodes[1].childNodes.length / this.number), console.log(t), document.querySelector(".selected").style.background = "transparent";var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = document.querySelectorAll(".carousel-button-blob")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _t7 = _step3.value;
          if (-1 == [].concat(_toConsumableArray(_t7.classList)).indexOf("selected")) {
            e = _t7.style.background;break;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        var _loop = function _loop() {
          var s = _step4.value;
          s.onmouseover = function () {
            s.style.background = "transparent";
          }, s.onmouseout = function () {
            -1 == [].concat(_toConsumableArray(this.classList)).indexOf("selected") && (s.style.background = e);
          }, s.onclick = function () {
            var _iteratorNormalCompletion13 = true;
            var _didIteratorError13 = false;
            var _iteratorError13 = undefined;

            try {
              for (var _iterator13 = document.querySelectorAll(".carousel-button-blob")[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                var _e9 = _step13.value;
                -1 != [].concat(_toConsumableArray(_e9.classList)).indexOf("selected") && (l = _e9.id.slice(-1 * (_e9.id.length - 7)));
              }
            } catch (err) {
              _didIteratorError13 = true;
              _iteratorError13 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion13 && _iterator13.return) {
                  _iterator13.return();
                }
              } finally {
                if (_didIteratorError13) {
                  throw _iteratorError13;
                }
              }
            }

            var _iteratorNormalCompletion14 = true;
            var _didIteratorError14 = false;
            var _iteratorError14 = undefined;

            try {
              for (var _iterator14 = document.querySelectorAll(".carousel-button-blob")[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                var _e10 = _step14.value;
                -1 != [].concat(_toConsumableArray(_e10.classList)).indexOf("selected") && _e10.classList.remove("selected");
              }
            } catch (err) {
              _didIteratorError14 = true;
              _iteratorError14 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion14 && _iterator14.return) {
                  _iterator14.return();
                }
              } finally {
                if (_didIteratorError14) {
                  throw _iteratorError14;
                }
              }
            }

            this.classList.add("selected");var _iteratorNormalCompletion15 = true;
            var _didIteratorError15 = false;
            var _iteratorError15 = undefined;

            try {
              for (var _iterator15 = document.querySelectorAll(".carousel-button-blob")[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                var _t8 = _step15.value;
                -1 == [].concat(_toConsumableArray(_t8.classList)).indexOf("selected") && (_t8.style.background = e);
              }
            } catch (err) {
              _didIteratorError15 = true;
              _iteratorError15 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion15 && _iterator15.return) {
                  _iterator15.return();
                }
              } finally {
                if (_didIteratorError15) {
                  throw _iteratorError15;
                }
              }
            }

            o = s.id.slice(-1 * (s.id.length - 7));var c = t.getBoundingClientRect().width - document.getElementsByClassName("next")[0].getBoundingClientRect().width - document.getElementsByClassName("previous")[0].getBoundingClientRect().width,
                r = l - o;var _iteratorNormalCompletion16 = true;
            var _didIteratorError16 = false;
            var _iteratorError16 = undefined;

            try {
              for (var _iterator16 = t.childNodes[1].childNodes[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                var _e11 = _step16.value;
                _e11.style.transform = "translateX(" + (i + r * c) + "px)";
              }
            } catch (err) {
              _didIteratorError16 = true;
              _iteratorError16 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion16 && _iterator16.return) {
                  _iterator16.return();
                }
              } finally {
                if (_didIteratorError16) {
                  throw _iteratorError16;
                }
              }
            }

            i += r * c;
          };
        };

        for (var _iterator4 = document.querySelectorAll(".carousel-button-blob")[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      document.querySelector(".previous").onclick = function () {
        var l = void 0;var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = document.querySelectorAll(".carousel-button-blob").entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var _step5$value = _slicedToArray(_step5.value, 2),
                _e5 = _step5$value[0],
                _t3 = _step5$value[1];

            if (-1 != [].concat(_toConsumableArray(_t3.classList)).indexOf("selected")) {
              l = _t3.id, _t3.classList.remove("selected");0 == _e5 ? _t3.classList.add("selected") : document.querySelectorAll(".carousel-button-blob")[_e5 - 1].classList.add("selected");break;
            }
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        var o = t.getBoundingClientRect().width - document.getElementsByClassName("next")[0].getBoundingClientRect().width - document.getElementsByClassName("previous")[0].getBoundingClientRect().width;if ("ez-cbb-1" == l) {
          i = -1 * (s - 1) * o;var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = t.childNodes[1].childNodes[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var _e3 = _step6.value;
              _e3.style.transform = "translateX(" + i + "px)";
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }

          document.querySelectorAll(".carousel-button-blob")[0].classList.remove("selected"), document.querySelectorAll(".carousel-button-blob")[s - 1].classList.add("selected");
        } else {
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = t.childNodes[1].childNodes[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var _e4 = _step7.value;
              _e4.style.transform = "translateX(" + (i + o) + "px)";
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7.return) {
                _iterator7.return();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }

          i += o;
        }var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          for (var _iterator8 = document.querySelectorAll(".carousel-button-blob")[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var _t4 = _step8.value;
            -1 == [].concat(_toConsumableArray(_t4.classList)).indexOf("selected") ? _t4.style.background = e : _t4.style.background = "transparent";
          }
        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8.return) {
              _iterator8.return();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
        }
      }, document.querySelector(".next").onclick = function () {
        var l = void 0;var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = document.querySelectorAll(".carousel-button-blob").entries()[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var _step9$value = _slicedToArray(_step9.value, 2),
                _e8 = _step9$value[0],
                _t5 = _step9$value[1];

            if (-1 != [].concat(_toConsumableArray(_t5.classList)).indexOf("selected")) {
              l = _t5.id, _t5.classList.remove("selected");_e8 == s - 1 ? _t5.classList.add("selected") : document.querySelectorAll(".carousel-button-blob")[_e8 + 1].classList.add("selected");break;
            }
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9.return) {
              _iterator9.return();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }

        var o = t.getBoundingClientRect().width - document.getElementsByClassName("next")[0].getBoundingClientRect().width - document.getElementsByClassName("previous")[0].getBoundingClientRect().width;if (l == "ez-cbb-" + s) {
          i = 0;var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = t.childNodes[1].childNodes[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var _e6 = _step10.value;
              _e6.style.transform = "translateX(" + i + "px)";
            }
          } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion10 && _iterator10.return) {
                _iterator10.return();
              }
            } finally {
              if (_didIteratorError10) {
                throw _iteratorError10;
              }
            }
          }

          document.querySelectorAll(".carousel-button-blob")[0].classList.add("selected"), document.querySelectorAll(".carousel-button-blob")[s - 1].classList.remove("selected");
        } else {
          i -= o;var _iteratorNormalCompletion11 = true;
          var _didIteratorError11 = false;
          var _iteratorError11 = undefined;

          try {
            for (var _iterator11 = t.childNodes[1].childNodes[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
              var _e7 = _step11.value;
              _e7.style.transform = "translateX(" + i + "px)";
            }
          } catch (err) {
            _didIteratorError11 = true;
            _iteratorError11 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion11 && _iterator11.return) {
                _iterator11.return();
              }
            } finally {
              if (_didIteratorError11) {
                throw _iteratorError11;
              }
            }
          }
        }var _iteratorNormalCompletion12 = true;
        var _didIteratorError12 = false;
        var _iteratorError12 = undefined;

        try {
          for (var _iterator12 = document.querySelectorAll(".carousel-button-blob")[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
            var _t6 = _step12.value;
            -1 == [].concat(_toConsumableArray(_t6.classList)).indexOf("selected") ? _t6.style.background = e : _t6.style.background = "transparent";
          }
        } catch (err) {
          _didIteratorError12 = true;
          _iteratorError12 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion12 && _iterator12.return) {
              _iterator12.return();
            }
          } finally {
            if (_didIteratorError12) {
              throw _iteratorError12;
            }
          }
        }
      };
    }
  }]);

  return Carousel;
}();