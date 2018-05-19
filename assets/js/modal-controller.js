function showPromoVideo() {
    document.getElementById('promoVideo').innerHTML = '<video class="responsive-video" controls autoplay controlsList="nodownload" oncontextmenu="return false"><source src="./assets/video/yousorail_pv.mp4" type="video/mp4"></video>';
}

function removePromoVideo() {
    document.getElementById('promoVideo').innerHTML = "";
}