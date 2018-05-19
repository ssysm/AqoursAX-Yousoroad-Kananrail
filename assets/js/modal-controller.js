function showPromoVideo() {
    document.getElementById('promoVideo').innerHTML =
        `
        <div class="video-container">
            <iframe id="promoVideoIF" src="https://streamable.com/s/07xpr/sqewwx" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
        </div>
        `
}

function removePromoVideo() {
    document.getElementById('promoVideo').innerHTML = "";
}