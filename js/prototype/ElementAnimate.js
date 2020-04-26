// ref https://daneden.github.io/animate.css/

const pt = Element.prototype;
const animationEnd = 'animationend';
//const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

pt.fadeOut = function() {
  this.addClass('animated fadeOut');
  if (!this._hasFadeOutEvent) {
    this.on(animationEnd, () => {
      let cssClass = 'animated fadeOut';
      if (this.hasClass(cssClass)) {
        this.removeClass(cssClass);
        this.hide();
      }
    });
  }
  this._hasFadeOutEvent = true;
};

pt.animateCss = function (animationName) {
  this.addClass('animated ' + animationName);
  if (!this._hasAnimatedEvent) {
    this.on(animationEnd, function() {
      this.removeClass('animated ' + animationName);
    });
  }
  this._hasAnimatedEvent = true;
};

/**
    animationend or transitionend
    https://davidwalsh.name/css-animation-callback
  <script type="text/javascript">
    (function() {
      var e = document.getElementsByClassName('sample')[0];

      function whichTransitionEvent(){
          var t;
          var el = document.createElement('fakeelement');
          var transitions = {
            'transition':'transitionend',
            'OTransition':'oTransitionEnd',
            'MozTransition':'transitionend',
            'WebkitTransition':'webkitTransitionEnd'
          }

          for(t in transitions){
              if( el.style[t] !== undefined ){
                  return transitions[t];
              }
          }
      }

      var transitionEvent = whichTransitionEvent();
      transitionEvent && e.addEventListener(transitionEvent, function() {
        console.log('Transition complete!  This is the callback, no library needed!');
      });

      startFade = function() {
        e.className+= ' hide';
      }
    })();
  </script>
  */
