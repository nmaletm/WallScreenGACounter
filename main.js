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
  this.intervalRefresh = 15000;
  this.intervalEffect  = 15000;
  this.url = 'https://nestor-super-proxy.appspot.com/query?id=ahRzfm5lc3Rvci1zdXBlci1wcm94eXIVCxIIQXBpUXVlcnkYgICAgICAgAoM';
  console.log('init');


  this.run();
  this.timer = setInterval(function () {
    me.run()
  }, this.intervalRefresh);
};

screenCounter.run = function(){
  var me = this;
  $.ajax({
    url:this.url,
    dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
    success:function(json){
      me.counter = json.rows[0];
      me.updateScreen();
    },
    error:function(){
      conslole.log("Error");
    }      
  });
};



screenCounter.init();