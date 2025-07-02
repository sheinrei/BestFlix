function openModale(message, top) {
    const html = `
    <div class="modale">
        <div class="top-modale">
            <p class="top-modale" id="name-modale">${top}</p>
            <p id="fermer-modale" >X</p>
        </div>
        <p class="message-modale">${message}</p>
    </div>
    `

    $(".container").children().eq(1).prepend(html)
}

function waitRepons() {
    const html = `
            <div class="waitRepons">
              <p class="test">BestFlix</p>
              <p class="test2"></p>
            </div>
    `

    $(".container").children().eq(1).prepend(html)
}

function clearModaleWait() {
    clearInterval(interval)
    interval = null;
    $(".waitRepons").remove()
}