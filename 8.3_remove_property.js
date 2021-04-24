let obj = {
    name: 'Saidur',
    addr: 'Manikganj',
    sayhello: function () {
        console.log('Hello');
    },
};

// delete obj.addr;
// delete obj.sayhello;

// how to get object length
Object.size = function (obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

console.log(Object.size(obj));
