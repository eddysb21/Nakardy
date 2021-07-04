document.addEventListener('DOMContentLoaded', () =>{
    const elementoscarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementoscarousel,{
        duration: 450,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 6,
        indicators: true,
        noWrap: false,
        padding: -30
    })
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {
        duration: 1500,
    });
  });
