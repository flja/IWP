

let s = document.getElementById("clickButton");

function waitForClick(){
    return new Promise((resolve, reject) => {
        s.addEventListener("click", (event) => {
            resolve();
        })
    });
}


async function waitForCLick2()
{
    await waitForClick().then(()=>{console.log("Hej")});
    await waitForClick().then(()=>{console.log("IWP")});
    await waitForClick().then(()=>{console.log("kører!")});
}

waitForCLick2();

waitForClick().then(()=>{
    console.log("Hej"); 
    waitForClick().then(()=>{
        console.log("IWP"); 
        waitForClick().then(()=>{
            console.log("kører!"); 
        });
    });
});



