

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function makeid(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function sortByName(arr) {
    arr.sort(function (a, b) {
        var nameA = a.subject.toUpperCase(); // ignore upper and lowercase
        var nameB = b.subject.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
}
function sortByTime(arr) {
    arr.sort(function (a, b) {
        return a.sentAt - b.sentAt;
    });
}

export default {
    getRandomInt,
    getRandomString : makeid,
    sortByName,
    sortByTime
    
}
///////////



