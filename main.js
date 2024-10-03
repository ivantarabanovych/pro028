async function getResultFromPromise() {
    try{
        const result = await promiseFunction();
        console.log(result);
    } catch (error){
        console.error('Error', error);
    }
}