document.addEventListener('DOMContentLoaded', function () {
    var players = Plyr.setup('.video',{
        controls:['play-large', 'play', 'progress', 'current-time', 'mute', 'volume','pip', 'airplay', 'fullscreen']
    });
    M.Sidenav.init(document.getElementsByClassName('sidenav')[0]);
    var modalInstances = M.Modal.init(document.getElementById('promoVideo'), {
        onCloseStart: function () {
            players[0].stop();
            players[1].stop();
        }
    });
    init(modalInstances);
});
function init(instances) {
    var val = localStorage.getItem('1st_visit');
    if (!val) {
        var instance = M.Modal.getInstance(document.getElementById('promoVideo'));
        instance.open();
        localStorage.setItem('1st_visit', 'false');
    }
}
