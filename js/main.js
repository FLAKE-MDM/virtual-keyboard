const keyboardData = [
    {
        key: "`",
        keyAlter: "~",
        keyRu: "ё",
        code: "Backquote",
    },
    {
        key: "1",
        keyAlter: "!",
        code: "Digit1"
    },
    {
        key: "2",
        keyAlter: "@",
        code: "Digit2"
    },
    {
        key: "3",
        keyAlter: "#",
        code: "Digit3"
    },
    {
        key: "4",
        keyAlter: "$",
        code: "Digit4"
    },
    {
        key: "5",
        keyAlter: "%",
        code: "Digit5"
    },
    {
        key: "6",
        keyAlter: "^",
        code: "Digit6"
    },
    {
        key: "7",
        keyAlter: "&",
        code: "Digit7"
    },
    {
        key: "8",
        keyAlter: "*",
        code: "Digit8"
    },
    {
        key: "9",
        keyAlter: "(",
        code: "Digit9"
    },
    {
        key: "0",
        keyAlter: ")",
        code: "Digit0"
    },
    {
        key: "-",
        keyAlter: "_",
        code: "Minus",
    },
    {
        key: "=",
        keyAlter: "+",
        code: "Equal",
    },
    {
        key: "Backspace",
        code: "Backspace",
        class: "key-item_service"
    },
    {
        key: "Tab",
        code: "Tab",
        class: "key-item_service"
    },
    {
        key: "q",
        keyRu: "й",
        code: "KeyQ"
    },
    {
        key: "w",
        keyRu: "ц",
        code: "KeyW"
    },
    {
        key: "e",
        keyRu: "у",
        code: "KeyE"
    },
    {
        key: "r",
        keyRu: "к",
        code: "KeyR"
    },
    {
        key: "t",
        keyRu: "е",
        code: "KeyT"
    },
    {
        key: "y",
        keyRu: "н",
        code: "KeyY"
    },
    {
        key: "u",
        keyRu: "г",
        code: "KeyU"
    },
    {
        key: "i",
        keyRu: "ш",
        code: "KeyI"
    },
    {
        key: "o",
        keyRu: "щ",
        code: "KeyO"
    },
    {
        key: "p",
        keyRu: "з",
        code: "KeyP"
    },
    {
        key: "[",
        keyAlter: "{",
        keyRu: "х",
        code: "BracketLeft"
    },
    {
        key: "]",
        keyAlter: "}",
        keyRu: "ъ",
        code: "BracketRight"
    },
    {
        key: "\\",
        keyAlter: "|",
        keyRu: "\\",
        keyRuAlter: "/",
        code: "Backslash"
    },
    {
        key: "Delete",
        code: "Delete",
        class: "key-item_service",
    },
    {
        key: "CapsLock",
        code: "CapsLock",
        class: "key-item_service"
    },
    {
        key: "a",
        keyRu: "ф",
        code: "KeyA"
    },
    {
        key: "s",
        keyRu: "ы",
        code: "KeyS"
    },
    {
        key: "d",
        keyRu: "в",
        code: "KeyD"
    },
    {
        key: "f",
        keyRu: "а",
        code: "KeyF"
    },
    {
        key: "g",
        keyRu: "п",
        code: "KeyG"
    },
    {
        key: "h",
        keyRu: "р",
        code: "KeyH"
    },
    {
        key: "j",
        keyRu: "о",
        code: "KeyJ"
    },
    {
        key: "k",
        keyRu: "л",
        code: "KeyK"
    },
    {
        key: "l",
        keyRu: "д",
        code: "KeyL"
    },
    {
        key: ";",
        keyAlter: ":",
        keyRu: "ж",
        code: "Semicolon",
    },
    {
        key: "'",
        keyAlter: "\"",
        keyRu: "э",
        code: "Quote",
    },
    {
        key: "Enter",
        code: "Enter",
        class: "key-item_service"
    },
    {
        key: "Shift",
        code: "ShiftLeft",
        class: "key-item_service"
    },
    {
        key: "z",
        keyRu: "я",
        code: "KeyZ"
    },
    {
        key: "x",
        keyRu: "ч",
        code: "KeyX"
    },
    {
        key: "c",
        keyRu: "с",
        code: "KeyC"
    },
    {
        key: "v",
        keyRu: "м",
        code: "KeyV"
    },
    {
        key: "b",
        keyRu: "и",
        code: "KeyB"
    },
    {
        key: "n",
        keyRu: "т",
        code: "KeyN"
    },
    {
        key: "m",
        keyRu: "ь",
        code: "KeyM"
    },
    {
        key: ",",
        keyAlter: "<",
        keyRu: "б",
        code: "Comma"
    },
    {
        key: ".",
        keyAlter: ">",
        keyRu: "ю",
        code: "Period"
    },
    {
        key: "/",
        keyAlter: "?",
        keyRu: ".",
        keyRuAlter: ",",
        code: "Slash"
    },
    {
        key: "↑",
        code: "ArrowUp",
        class: "key-item_service"
    },
    {
        key: "Shift",
        code: "ShiftRight",
        class: "key-item_service"
    },
    {
        key: "Ctrl",
        code: "ControlLeft",
        class: "key-item_service"
    },
    {
        key: "⊞",
        code: "MetaLeft",
        class: "key-item_service"
    },
    {
        key: "Alt",
        code: "AltLeft",
        class: "key-item_service"
    },
    {
        key: " ",
        code: "Space",
        class: "key-item_service"
    },
    {
        key: "Alt",
        code: "AltRight",
        class: "key-item_service"
    },
    {
        key: "←",
        code: "ArrowLeft",
        class: "key-item_service"
    },
    {
        key: "↓",
        code: "ArrowDown",
        class: "key-item_service"
    },
    {
        key: "→",
        code: "ArrowRight",
        class: "key-item_service"
    },
    {
        key: "Ctrl",
        code: "ControlRight",
        class: "key-item_service"
    }
]



const body = document.querySelector("body");
const keyArr = [];

let container = document.createElement("div");
container.className = "container";

let info = document.createElement("div");
info.className = "info";
info.insertAdjacentHTML("afterbegin", "<h1 class=\"title\">RSS Virtual Keyboard</h1><p>Клавиатура создана в операционной системе Windows</p><p>Для переключения языка комбинация: левыe Shift + Alt</p>");

let textField = document.createElement("textarea");
textField.className = "text-field";

let keyboard = document.createElement("div");
keyboard.className = "keyboard";

container.append(info);
container.append(textField);
container.append(keyboard);
body.append(container);

class Key{
    constructor(obj, lang = "en", caps = "false", shift = "false"){
        this.lang = lang;
        this.caps = caps;
        this.shift = shift;
        this.key = obj.key;
        this.keyAlter = obj.keyAlter;
        this.keyRu = obj.keyRu;
        this.keyRuAlter = obj.keyRuAlter;
        this.code = obj.code;
        this.class = String(obj.class) != "undefined" ? obj.code + " key-item " + obj.class : obj.code + " key-item";
    }

    render(){
        let current = this.key;

        if(this.lang == "ru" && this.keyRu){
            current = this.keyRu;
            if(this.caps == "true" && this.key.length == 1){
                current = (this.keyRu).toUpperCase()
            }
            if(this.shift == "true" && this.key.length == 1){
                current = typeof this.keyRuAlter != "undefined" ? this.keyRuAlter : (this.keyRu).toUpperCase();
            }
        } else{
            if(this.caps == "true" && this.key.length == 1){
                current = (this.key).toUpperCase();
            }
            if(this.shift == "true" && this.key.length == 1){
                current = typeof this.keyAlter != "undefined" ? this.keyAlter : (this.key).toUpperCase();
            }
        }

        let keyItem = document.createElement("div");
        keyItem.className = this.class;
        keyItem.textContent = current;

        keyboard.append(keyItem);

        keyItem.addEventListener("mousedown", (e) => {
            let currentValue = current;
            textField.focus();
            if(this.code == "ShiftLeft" || this.code == "ShiftRight"){
                keyboard.innerHTML = "";
                for(let i = 0; i < keyArr.length; i++){
                    keyArr[i].setValue("shift", "true");
                    keyArr[i].render();
                }
            }
            if(this.code == "CapsLock"){
                keyboard.innerHTML = "";
                let caps = keyArr[0].caps;
                console.log(Boolean(caps));
                for(let i = 0; i < keyArr.length; i++){
                    caps === "true" ? keyArr[i].setValue("caps", "false") : keyArr[i].setValue("caps", "true");
                    keyArr[i].render();
                }
            }
            if(currentValue.length == 1 && this.code != "MetaLeft"){
                textField.value += currentValue;
            }

        });

        keyItem.addEventListener("mouseup", () =>{
            let currentValue = this.key;
            keyboard.innerHTML = "";
            for(let i = 0; i < keyArr.length; i++){
                keyArr[i].setValue("shift", "false");
                keyArr[i].render();
            }
        })

    }

    setValue(name, val){
        this[name] = val
    }
}


function generateContent(){
    for(let i = 0; i < keyboardData.length; i++){
        let current = new Key(keyboardData[i]);
        current.render();
        keyArr.push(current)
    }
}


document.addEventListener("DOMContentLoaded", () => {
    generateContent();
    textField.focus();

    // let shiftLeft = document.querySelector(".ShiftLeft");
    // let shiftRight = document.querySelector(".ShiftRight");
    // shiftLeft.addEventListener("mousedown", () => {
    //     Key.shift = true;
    //     keyboard.classList.add("upper-active")
    // });

    // shiftLeft.addEventListener("mouseup", () => {
    //     Key.shift = false;
    //     keyboard.classList.remove("upper-active")
    // });

})

body.addEventListener("keydown", (e) => {
    textField.focus();
    let code = "." + e.code;
    let key_pres = document.querySelector(code);
    key_pres.classList.add("key-item_pres");

    // if(e.code == "ShiftLeft" || e.code == "ShiftRight"){
    //     Key.shift = true;
    //     keyboard.classList.add("upper-active")
    // }

});

body.addEventListener("keyup", (e) => {
    document.querySelector(".key-item_pres").classList.remove("key-item_pres");
    // Key.pro.shift = false;
    // keyboard.classList.remove("upper-active")
});

// keyboard.addEventListener("click", (e) => {
//     if(e.target !== keyboard){
//         let sumbol = e.target.textContent;
//         if(sumbol.length == 1){
//             if(e.shiftKey){
//                 textField.value += sumbol.toUpperCase();
//             } else{
//                 textField.value += sumbol;
//             }
//         }
//     }
// })

