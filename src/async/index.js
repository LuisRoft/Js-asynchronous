const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
            ? setTimeout(() => resolve('Do Something Async'), 3000) 
            : reject(new Error('Error .-.'))
    });
};

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);    
};

console.log('Before');
doSomething();
console.log('After');

const doSomething2 = async () => {
    try {
        const something = await doSomethingAsync();
        console.log('2: ', something);
    } catch (error) {
        console.error(error);
    }
};

console.log('Before 2');
doSomething2();
console.log('After 2');