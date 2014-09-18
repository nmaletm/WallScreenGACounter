var screenCounter = screenCounter || {};

screenCounter.updateScreen = function(){
  jQuery({someValue: this.oldCounter}).animate({someValue: this.counter}, {
  duration: this.intervalEffect,
  easing:'linear', // can be anything
  step: function() { // called on every step
    // Update the element's text with rounded-up value:
    $('#counter').text(Math.ceil(this.someValue));
  }
});
  this.oldCounter = this.counter;
};



screenCounter.init = function(){
  var me = this;
  this.oldCounter = this.counter = 0;
  this.intervalRefresh = 10000;
  this.intervalEffect = 9800;

  console.log('init');


  this.run();
  this.timer = setInterval(function () {
    me.run()
  }, this.intervalRefresh);
};

screenCounter.run = function(){
  this.counter = this.getCurrent();
  this.updateScreen();
};

screenCounter.getCurrent = function(){
  var current = Math.floor(Math.random() * 100) + 15000;
  return current;
};

screenCounter.init();