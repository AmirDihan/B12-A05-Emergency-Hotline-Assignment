const hearts = document.getElementsByClassName('heart-icon');
const calls = document.getElementsByClassName('call-btn');
const clearBtn = document.getElementById('clear-btn');
const callHistory = [];
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click',(e) => {
        e.preventDefault();
        const heartCounts = document.getElementsByClassName('heart-count');
        let heartNumber = 0;
        heartNumber =parseInt(heartCounts[0].innerText);
        heartNumber += 1;
        for(heartCount of heartCounts)
        {
            heartCount.innerText = `${heartNumber}`;
        }
    });
}
for(let i=0; i < calls.length; i++)
{
    calls[i].addEventListener('click',(e) => {
        e.preventDefault();
        const coins = document.getElementsByClassName('coin-count');
        let coinNumber = parseInt(coins[0].innerText);
        if(coinNumber < 20){
            alert('You donot have enough coins, to call you must have 20 or more coins');
        }
        else{
            const card = document.getElementsByClassName('cards')[i];
            const serviceName = card.getElementsByClassName('service-name')[0].innerText;
            const serviceNumber = card.getElementsByClassName('service-number')[0].innerText;
            alert(`calling ${serviceName} ${serviceNumber}`);
            coinNumber -= 20;
            for(coin of coins)
            {
                coin.innerText = `${coinNumber}`;
            }
            const newHistory = {
                name: serviceName,
                number: serviceNumber,
                time: new Date().toLocaleTimeString()
            }
            callHistory.push(newHistory);
            // console.log(callHistory);
            const newHistoryDiv = document.createElement('div');
            newHistoryDiv.innerHTML = `<div>
                    <h2 class="text-[18px] font-semibold">${newHistory.name}</h2>
                    <p class="text-[18px]">${newHistory.number}</p>
                </div>
                <div>
                    <p>${newHistory.time}</p>
                </div>`;
            newHistoryDiv.classList.add('p-4', 'flex', 'items-center', 'justify-between');
            const callHistorySection = document.getElementById('call-history');
            callHistorySection.appendChild(newHistoryDiv);
        }
    })
}
clearBtn.addEventListener('click', () => {
    // console.log("clear btn clicked");
    callHistory.length = 0;
    //console.log(callHistory);
    const callHistorySection = document.getElementById('call-history');
    //console.log(callHistorySection);
    callHistorySection.innerHTML="";
})