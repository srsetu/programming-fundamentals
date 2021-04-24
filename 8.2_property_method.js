let obj = {
    addr: {
        city: 'Manikganj',
        zip: 1800,
    },
};

obj.setu = 'Saidur';
obj.sayHi = function () {
    console.log('Hello ' + this.setu);
    return 0;
};

obj['lastname'] = 'Rahman';

let prop = 'lastname';

console.log(obj.sayHi());
