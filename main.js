async function requestData() {
    try{
        const responce1 = await fetch('https://api.example.com/data1');
        const data1 = await responce1.json();
        console.log('Дані з першого запиту', data1);
        
        const responce2 = await fetch('https://api.example.com/data2/${data1.id}');
        const data2 = await responce2.json();
        console.log('Дані з другого запиту', data2);
    } catch (error){
        console.error('Помилка під час виконання запитів', error);
    }
}

requestData();