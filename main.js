function delay(seconds){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, seconds * 1000);
    });
}

async function delayAction() {
    console.log('Очікування...');
    await delay(3);
    console.log('3 секунди минули!');
}

delayAction();