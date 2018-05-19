function init(instances) {
    var val = localStorage.getItem('1st_visit');
    if (!val) {
        showPromoVideo();
        var instance = M.Modal.getInstance(document.getElementById('promoVideo'));
        instance.open();
        localStorage.setItem('1st_visit','false');
    }
}