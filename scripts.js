const heartBtns = document.querySelectorAll('.heartButton'); 
for (const heartBtn of heartBtns) {
    heartBtn.addEventListener('click', function() {
        const heartCount = document.getElementById("heartCountNav");
        const convertedHeartText = parseInt(heartCount.innerText);
        const totalHeart = convertedHeartText + 1;
        heartCount.innerText = totalHeart;
    });
}

const copyBtns = document.querySelectorAll('.copyButton');
for (const copyBtn of copyBtns) {
    copyBtn.addEventListener("click", function () {
        const infoCard = this.closest(".card");
        const emergencyNum = infoCard.querySelector(".emergency-number").innerText;
        navigator.clipboard.writeText(emergencyNum);
        alert('The Number ' + emergencyNum + ' Has been copied')
        const copyCount = document.getElementById("copyCountNav")
        const convertedcopyText = parseInt(copyCount.innerText);
        copyCount.innerText = convertedcopyText + 1;
    })
}

const callHistory = [];
const callButtons = document.querySelectorAll(".callButton")
for (const callButton of callButtons) {
    callButton.addEventListener("click", function () {
        const infoCard = this.closest(".card");
        const emergencyName = infoCard.querySelector(".emergency-name").innerText;
        const emergencyNum = infoCard.querySelector(".emergency-number").innerText;
        const strCoins = document.getElementById("coinCountNav")
        const intCoins = parseInt(strCoins.innerText)
        if (intCoins < 20) {
            alert("Low Coin Alert! You need minimum 20 coins to call")
            return
        }
        alert("Calling " + emergencyName + " " + emergencyNum + "...")
        const totalCoin = intCoins - 20;
        strCoins.innerText = totalCoin

        const newCallHistory = {
            name: emergencyName.innerText,
            number: emergencyNum.innerText,
            time: new Date().toLocaleTimeString()
        }
        callHistory.push(newCallHistory)
        const historyContainer = document.getElementById("callHistoryContainer")
        const section = document.createElement("div")
        section.innerHTML = `
        <div class="flex bg-[#FAFAFA] justify-between p-3 md:p-4 rounded-lg">
            <div>
                <p class="font-bold text-base md:text-lg inter text-black">${newCallHistory.name}</p>
                <p class="text-base md:text-lg hind-madurai text-[#5C5C5C]">${newCallHistory.number}</p>
            </div>
            <div class="content-center">
                <p class="text-sm md:text-lg hind-madurai text-black">${newCallHistory.time}</p>
            </div>
        </div>
        `
        historyContainer.appendChild(section)
    })
}