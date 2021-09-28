var spinDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="spin"></span>');
  this.setPosition(top, left);
  // this.step();
};

spinDancer.prototype = Object.create(makeDancer.prototype);
spinDancer.prototype.constructor = spinDancer;

spinDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};

// spinDancer.prototype.setPosition = function(top, left) {
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);
// };


spinDancer.prototype.spin = function() {
  this.$node.animate({
    height: '150px',
    width: '150px'
  }, (function() {
    this.spin();
  }).bind(this));
};