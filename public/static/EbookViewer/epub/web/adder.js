class Adder {
    constructor(textList, type) {
        this.type = type;
        this.element = this.drawParentDiv(textList);
        this.element.style.display = "none";
        this.element.style.position = "absolute";
        this.element.style.zIndex = "9999";
        this.element.style.userSelect = "none";
        this.element.addEventListener("mousedown", function () {
            // let evt = new CustomEvent("customSelectCancel");
            // document.dispatchEvent(evt);
        })
        this.element.addEventListener("touchstart", function () {
            // let evt = new CustomEvent("customSelectCancel");
            // document.dispatchEvent(evt);
        })
        this.dbInsert = function () { console.log("데이터베이스 연결 없음"); };

        document.body.appendChild(this.element);
        this.funcs = [];

        this.adderSize = 160;
    }

    show(x, y, cfi, text) {
        let adders = document.getElementsByClassName("modal-highlight");
        if (typeof (iosChecker) == "undefined" || iosChecker == true) {
            for (let i = 0; i < adders.length; i++) {
                if (adders[i].style.display != "none") {
                    return;
                }
            }
        }

        this.element.style.top = (y + 10) + "px";
        this.element.style.left = (x + 10) + "px";
        this.element.style.display = "block";

        if (document.documentElement.clientHeight < (y + this.adderSize)) {
            this.element.style.top = (y - this.adderSize - 20) + "px";
        }

        if (document.documentElement.clientWidth < (x + this.adderSize)) {
            this.element.style.left = (x - this.adderSize - 20) + "px";
        }

        // if (x + this.element.clientWidth > document.documentElement.clientWidth) {
        //     this.element.style.top = (y + 20) + "px";
        //     this.element.style.left = x - (x + this.element.clientWidth - document.documentElement.clientWidth) - 20 + "px";
        // }
        // if (y + this.element.clientHeight > document.documentElement.clientHeight) {
        //     this.element.style.top = y - (y + this.element.clientHeight - document.documentElement.clientHeight) - 20 + "px";
        // }

        // if (y < 0) {
        //     this.element.style.top = 0;
        // }
        // if (x < 0) {
        //     this.element.style.left = 0;
        // }
        this.cfi = cfi;
        this.text = text;

    }

    hide() {
        this.element.style.display = "none";
    }
    drawParentDiv(textList) {

        let parentDiv;

        parentDiv = document.createElement("div");
        parentDiv.classList.add("modal-highlight");

        let colorButtonUl = document.createElement("ul");
        colorButtonUl.classList.add("highlight__buttons");


        for (let i = 1; i <= 5; i++) {
            colorButtonUl.appendChild(this.drawImageButton("highlight-color-" + i));
        }

        parentDiv.appendChild(colorButtonUl);

        for (let i = 0; i < textList.length; i++) {
            parentDiv.appendChild(this.drawTextButton(textList[i]));
        }

        return parentDiv;
    }
    drawImageButton(color) {

        let li = document.createElement("li");
        let imageButton = document.createElement("button");
        imageButton.classList.add("color-label");
        imageButton.classList.add("highlight__button");
        // imageButton.classList.add("color-label--" + color.color);
        imageButton.classList.add(color);
        let highlightColor = "";
        highlightColor = this.propertyFromStylesheet("." + color, "background-color");
        if (highlightColor) {
            highlightColor = this.rgbToHex(highlightColor);
        }
        else {
            switch (color) {
                case "highlight-color-1":
                    highlightColor = "#FFEDA8";
                    break;
                case "highlight-color-2":
                    highlightColor = "#BCECFF";
                    break;
                case "highlight-color-3":
                    highlightColor = "#DCC6FF";
                    break;
                case "highlight-color-4":
                    highlightColor = "#FEC2be";
                    break;
                case "highlight-color-5":
                    highlightColor = "#ECFEB9";
                    break;
            }
        }

        if (this.type == "adder") {
            imageButton.onclick = () => {
                this.hide();
                let evt = new CustomEvent("addHighlight", {
                    detail: {
                        color: highlightColor,
                        cfi: this.cfi,
                        text: this.text
                    }
                });
                document.dispatchEvent(evt);
            };
        }
        else if (this.type == "modifier") {
            imageButton.onclick = () => {
                this.hide();
                let evt = new CustomEvent("modifyHighlight", {
                    detail: {
                        color: highlightColor,
                        cfi: this.cfi,
                    }
                });
                document.dispatchEvent(evt);
            };
        }

        li.appendChild(imageButton);
        return li;
    }
    drawTextButton(text) {
        let textButton = document.createElement("button");
        textButton.classList.add("highlight__text-button");
        if (text.text == "삭제") {
            textButton.onclick = () => {
                this.hide();
                let evt = new CustomEvent("removeHighlight", {
                    detail: {
                        cfi: this.cfi
                    }
                })
                document.dispatchEvent(evt);
            }
        }
        else if (text.text == "메모") {
            textButton.onclick = () => {
                this.hide();
                let evt = new CustomEvent("addMemo", {
                    detail: {
                        cfi: this.cfi,
                        text: this.text
                    }
                })
                document.dispatchEvent(evt);
            }
        }
        else if (text.text == "메모 수정") {
            textButton.onclick = () => {
                this.hide();
                let evt = new CustomEvent("modifyMemo", {
                    detail: {
                        cfi: this.cfi,
                        text: this.text
                    }
                })
                document.dispatchEvent(evt);

            }
        }
        else if (text.text == "공유") {
            textButton.onclick = () => {
                this.hide();
                let evt = new CustomEvent("shareContent", {
                    detail: {
                        cfi: this.cfi,
                        text: this.text
                    }
                })
                document.dispatchEvent(evt);
            }
        }

        textButton.innerHTML = text.text;
        return textButton;
    }

    propertyFromStylesheet(selector, attribute) {
        var value;
        [].some.call(document.styleSheets, function (sheet) {
            try {
                return [].some.call(sheet.rules, function (rule) {
                    if (selector === rule.selectorText) {
                        return [].some.call(rule.style, function (style) {
                            if (attribute === style) {
                                value = rule.style.getPropertyValue(attribute);
                                return true;
                            }

                            return false;
                        });
                    }

                    return false;
                });
            }
            catch (e) {
                // return null;
            }
        });
        return value;
    }

    rgbToHex(rgbType) {
        /* 
        ** 컬러값과 쉼표만 남기고 삭제하기. 
        ** 쉼표(,)를 기준으로 분리해서, 배열에 담기. 
        */
        var rgb = rgbType.replace(/[^%,.\d]/g, "").split(",");

        rgb.forEach(function (str, x, arr) {

            /* 컬러값이 "%"일 경우, 변환하기. */
            if (str.indexOf("%") > -1) str = Math.round(parseFloat(str) * 2.55);

            /* 16진수 문자로 변환하기. */
            str = parseInt(str, 10).toString(16);
            if (str.length === 1) str = "0" + str;

            arr[x] = str;
        });
        return "#" + rgb.join("");
    }
}