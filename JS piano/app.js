let keyPiano = {
    "1" : 'audio/audio_1.mp3',
    "2" : 'audio/audio_2.mp3',
    "3" : 'audio/audio_3.mp3',
    "4" : 'audio/audio_4.mp3',
    "5" : 'audio/audio_5.mp3',
    "6" : 'audio/audio_6.mp3',
    "7" : 'audio/audio_7.mp3',
    "8" : 'audio/audio_8.mp3',
    "9" : 'audio/audio_9.mp3',
    "0" : 'audio/audio_10.mp3',
    "a" : 'audio/audio_a.mp3',
    "b" : 'audio/audio_b.mp3',
    "c" : 'audio/audio_c.mp3',
    "d" : 'audio/audio_d.mp3',
    "e" : 'audio/audio_e.mp3',
    "f" : 'audio/audio_f.mp3',
    "g" : 'audio/audio_g.mp3'

}
document.addEventListener('keydown', 
(event) => playPiano(event.key));
function playPiano(key){
    audio = new Audio(keyPiano[key]); 
    audio.play();
    let keyClick = document.querySelector(`[data-key="${key}"]`);
    if(keyClick){
        keyClick.classList.add('active');
        const remmoveActive = setInterval(() => {
            keyClick.classList.remove('active')
        }, 500);
    }
}
let keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', (e)=>{
        playPiano(key.dataset.key);
    })
})