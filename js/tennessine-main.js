function switchMode(mode, framework, id) {
    const element = document.getElementById(id)
    element.setAttribute("data-" + framework + "-theme", mode)
}

function ClickSwitchLang(lang, id) {
    const element = document.getElementById(id)
    element.setAttribute("lang", lang)
    return lang
}

function FormSwitchLang(lang, id) {
    const element = document.getElementById(id).value
    element.setAttribute("lang", lang)
    return lang
}

function changeText(value, id) {
    const element = document.getElementById(id);
    element.textContent = value
    return value
}

function localStorageController(action, key, value) {
    if (action === "s" || action === "save") {
        localStorage.setItem(key, value)
        return "success"
    } else if (action === "l" || action === "load") {
        const readed = localStorage.getItem(key)
        setTimeout(() => {
            console.log("success");
        }, 10)
        return readed
    } else if (action === "r" || action === "remove") {
        localStorage.removeItem(key)
        return "deleted"
    } else if (action === "d" || action === "delete") {
        localStorage.clear()
        return "deleted"
    } else {
        console.log("No operator was found to operate with!");
        return "fail"
    }


}
function sessionStorageController(action, key, value) {
    if (action === "s" || action === "save") {
        sessionStorage.setItem(key, value)
        return "success"
    } else if (action === "l" || action === "load") {
        const readed = sessionStorage.getItem(key)
        setTimeout(() => {
            console.log("success");
        }, 10)
        return readed
    } else if (action === "r" || action === "remove") {
        sessionStorage.removeItem(key)
        return "deleted"
    } else if (action === "d" || action === "delete") {
        sessionStorage.clear()
        return "deleted"
    } else {
        console.log("No operator was found to operate with!");
        return "fail"
    }


}