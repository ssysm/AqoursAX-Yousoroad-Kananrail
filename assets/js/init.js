document.addEventListener('DOMContentLoaded', function () {
    M.Sidenav.init(document.getElementsByClassName('sidenav')[0]);
    var modalInstances = M.Modal.init(document.getElementById('promoVideo'), {
        onCloseStart: function () {
            stopVid();
        }
    });
    init(modalInstances);
});
function init(instances) {
    var val = localStorage.getItem('1st_visit');
    if (!val) {
        var instance = M.Modal.getInstance(document.getElementById('promoVideo'));
        instance.open();
        playVid();
        localStorage.setItem('1st_visit', 'false');
    }
}