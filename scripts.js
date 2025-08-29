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