function ArrayMethods(array) {
    this.array = array || [];

    this.unshift = (...args) => {
        this.array = [...args, ...this.array];
        return this.array;
    }
    this.shift = () => {
        const removedItem = this.array[0];
        this.array = this.array.slice(1);
        return removedItem;
    }
    this.pop = () => {
        const removedItem = this.array[this.array.length - 1];
        this.array = this.array.slice(0, this.array.length - 1);
        
        return removedItem;
    }
    this.push = (...args) => {
        this.array = [...this.array, ...args];
        return this.array;
    }
    this.forEach = (callback) => {
        for (let i = 0; i < this.array.length; i++) {
            callback(this.array[i], i, this.array);
        }
    }
    this.findIndex = (callback) => {
        for (let i = 0; i < this.array.length; i++) {
            if (callback(this.array[i], i, this.array)) {
                return i;
            }
        }
        return -1;
    }
    this.find = (callback) => {
        for (let i = 0; i < this.array.length; i++) {
            if (callback(this.array[i], i, this.array)) {
                return this.array[i];
            }
        }
    }
    this.every = (callback) => {
        for (let i = 0; i < this.array.length; i++) {
            if (!callback(this.array[i], i, this.array)) {
                return false;
            }
        }
        return true;
    }
    this.some = (callback) => {
        for (let i = 0; i < this.array.length; i++) {
            if (callback(this.array[i], i, this.array)) {
                return true;
            }
        }
        return false;
    }
    this.map = (callback) => {
        const newArray = [];
        for (let i = 0; i < this.array.length; i++) {
            newArray.push(callback(array[i], i, array));
        }
        return newArray;
    }
    this.filter = (callback) => {
        const newArray = [];
        for (let i = 0; i < this.array.length; i++) {
            if (callback(array[i], i, array)) {
                newArray.push(array[i]);
            }
        }
        return newArray;
    }
    this.reduce = (callback, initialValue) => {
        let accumulator = initialValue || 0;
        for (let i = 0; i < this.array.length; i++) {
            accumulator = callback(accumulator, this.array[i], i, this.array);
        }
        return accumulator;
    }
    this.slice = (start, end) => {
        const newArray = [];
        for (let i = start; i < end; i++) {
            newArray.push(this.array[i]);
        }
        return newArray;
    }
    this.splice = (start, deleteCount, ...args) => {
        const newArray = [];
        for (let i = 0; i < start; i++) {
            newArray.push(this.array[i]);
        }
        newArray.push(...args);
        for (let i = start + deleteCount; i < this.array.length; i++) {
            newArray.push(this.array[i]);
        }
        
        const deletedItems = [];
        for (let i = start; i < start + deleteCount; i++) {
            deletedItems.push(this.array[i]);
        }

        this.array = newArray;

        return deletedItems;
    }
    this.flat = (depth = 1) => {
        const newArray = [];

        for(let i = 0; i < this.array.length; i++) {
            if(depth > 0 && Array.isArray(this.array[i])) {
                newArray.push(...this.array[i].flat(depth - 1));
            } else {
                newArray.push(this.array[i]);
            }
        }
        this.array = newArray;
        return newArray;
    }
}


const array = new ArrayMethods([1, 2, 3, 4, 5]);

console.log('unshift: ',array.unshift(0));
console.log('shift:', array.shift());
console.log('push: ', array.push(6));
console.log('pop: ', array.pop());
console.log('forEach: ', array.forEach(item => console.log(item)));
console.log('findIndex: ', array.findIndex(item => item === 3));
console.log('find: ', array.find(item => item === 3));
console.log('every: ', array.every(item => item < 10));
console.log('some: ', array.some(item => item > 10));
console.log('map: ', array.map(item => item * 2));
console.log('filtr: ', array.filter(item => item % 2 === 0));
console.log('reduce: ', array.reduce((acc, item) => acc + item, 0));
console.log('slice: ', array.slice(1, 3));
console.log('splice: ', array.splice(1, 2));

const nestedArray = new ArrayMethods([1, 2, [3, 4, [5, 6, [7, 8]]]]);
console.log('flat: ', nestedArray.flat());
console.log('flat: ', nestedArray.flat(2));