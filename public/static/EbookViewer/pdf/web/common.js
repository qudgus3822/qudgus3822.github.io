function fadeIn(el) {
    const time = 200;
    el.style.display = "block";
    el.style.opacity = 0;

    var last = +new Date();
    var tick = function () {
        el.style.opacity = +el.style.opacity + (new Date() - last) / time;
        last = +new Date();

        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
    tick();
}

function fadeOut(el) {
    // const time = 200;

    // el.style.opacity = 1;

    // var last = +new Date();
    // var tick = function () {
    //     el.style.opacity = +el.style.opacity - (new Date() - last) / time;
    //     last = +new Date();

    //     if (+el.style.opacity > 0) {
    //         (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    //     }
    //     if (el.style.opacity <= 0) {
    //         el.style.display = "none";
    //     }
    // };
    // tick();
    el.style.display = "none";
}

function dateFormatting(dateParam) {
    if (dateParam && Date.parse(dateParam)) {
        let date = new Date(dateParam);
        date = convertUTCDateToLocalDate(date);
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        month = month >= 10 ? month : '0' + month;
        day = day >= 10 ? day : '0' + day;
        hour = hour >= 10 ? hour : '0' + hour;
        minute = minute >= 10 ? minute : '0' + minute;
        second = second >= 10 ? second : '0' + second;

        return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    }
    else {
        return "";
    }
}

function noteDateFormatting(dateString) {
    const date = convertUTCDateToLocalDate2(dateString);

    return `${(date.getFullYear())}.${('0' + date.getMonth() + 1).slice(-2)}.${('0' + date.getDate()).slice(-2)}`
}

function convertUTCDateToLocalDate2(dateString) {
    let newDate;
    if (dateString && dateString.length > 0) {
        if (dateString.substr(dateString.length - 1) == "Z") {
            newDate = new Date(dateString);
        }
        else {
            newDate = new Date(dateString + "Z");
        }

    }
    else {
        newDate = (new Date());
    }
    return newDate;
}


function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;
}
