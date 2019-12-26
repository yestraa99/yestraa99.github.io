$slide-width: 400px;
$slide-height: 200px;

#slider {
    width: $slide-width;
    height: $slide-height;
    overflow: hidden;
  border: 1px solid #c69;
}

.slide {
    width: $slide-width;
    height: $slide-height;
    float: left;
    position: relative;
}

#slide-holder {
  
    width: 400%;
    position: relative;
    left: 0;
    animation: scroller 10s infinite;
}


@keyframes scroller {
  0% { transform: translateX(0); }
  33% { transform: translateX(-$slide-width); }
  66% { transform: translateX(-$slide-width*2); }
  100% { transform: translateX(0); }
}