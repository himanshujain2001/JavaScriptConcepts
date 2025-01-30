/* 
 Promise is an object which represents whether the async opertn completed or failed. We can write async code in more manageable way using promises.
 mtlb promise ka mtlb h ki "aisi cheez jo future m hogi either it will complete or it will fail."
 
 -> States of promise: 

 Pending: Initial state, neither fulfilled nor rejected.
 Fulfilled: The operation completed successfully.
 Rejected: The operation failed.

*/

///// Creation and consumption of promise: 
// resolve and reject are 2 functions where resolve is respo for promise completion or passing data while reject is used for failure of promise
  // or errors.
// multiple then honge to phle phla then complete hoga uske baad doosra then execute hoga

new Promise( (resolve, reject) => {
    setTimeout( () => {
        let error = false
        if(!error){
            console.log("Async task is completed");
            resolve({username: "abc", email: "abc@gmail.com"}) 
        }
        else{
            reject("Error")
        }
    }, 1000)
}).then( (data) => {
    console.log(`Promise is consumed and ${JSON.stringify(data)} is received from promise`); // apan n agar ${data} aisa likha to since apan 
    // string interpolation use kr rhe h to JavaScript us data ko string m convert krne ka try krega aur vo shi se(meaningful) string m convert
    // nhi ho paayega isiliye JSON.stringify use kiya h
    return data.username // yha se jo data return hoga vo agle then m jaayega and this is known as chaining
})
.then( (receivedData) => {
    console.log(`Received data returned by promise: ${receivedData}`);
})
.catch( (error) => {
    console.log(error);
})
.finally( () => console.log("Promised is either resolved or rejected."));



////// then catch k alaava async await ka bhi use kr skte h - async await thodi der wait krta h operation k hone ka agar vo ho jaata h tab hi aage
    // badhta h varna usi time error throw kr deta h. Ex: DB conncetion krna h to jab tk vo nhi hoga apan aage nhi badhna chahte.

const createdPromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let error = true
        if(!error){
            console.log("Async task is completed");
            resolve({username: "abc", email: "abc@gmail.com"}) 
        }
        else{
            reject("Error")
        }
    }, 1000)
})

// async await apne aap error handle nhi krta h to apan ko try catch ka use krna pdega to make sure that agar koi error aaye to vo handle ho jaaye.
async function consumingPromise(){
    try {
        const responseFromPromise = await createdPromise
        console.log(responseFromPromise);
    } catch (error) {
        console.log(error);
    }
}

consumingPromise()

async function getUsers(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users") // fetch ka response type promise aata h i.e. object
        console.log(typeof res); // Object
        console.log(res);
        console.log(await res.json()); // converting string to json because tabhi kuch data nikalna hoga response m se to vo tabhi niklega
        // and ye conversion bhi time taking process h isiliye await bhi use krna pdega
    } catch (error) {
        console.log(error);
    }
}

// getUsers()


///// async await k bajaay then catch se krne ka tareeka
fetch("https://jsonplaceholder.typicode.com/users")
.then( (res) => {
    return res.json()
})
.then( (data) => {
    console.log(data);
})
.catch( (error) => {
    console.log(error);
})

//// multiple then and catch laga skte h ek promise m
//// apan n fetch se request bheji ab request to chali gyi lekin vha se jaise 404 Error aaya to vo resolve(fulfill) m aayega ya reject m? 
//// Ans. - vo response m hi aayega na ki reject m mtlb isko apan 'then' m hi handle krenge phir na ki catch m
//// fetch m apan url k saath doosra param kuch data bhi bhej skte h request k saath
//// is file m async code h to phle to promise, setTimeOut() h aur phir fetch ka code h lekin ho skta h execution time k according ki fetch vaale
//// ka o/p phle aaye phir baaki sab ka aaye to aisa isiliye hota h ki fetch ki task queue alag banti h aur vo prioritize hoti h doosri task queue
//// pe