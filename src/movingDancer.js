var moveDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="move"></span>');
  this.setPosition(top, left);

};

moveDancer.prototype = Object.create(makeDancer.prototype);
moveDancer.prototype.constructor = moveDancer;

moveDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  var randY = $('body').height() / 3 * (2 * Math.random() - 1);
  var randX = $('body').width() / 3 * (2 * Math.random() - 1);

  setTimeout(function() {

    var currentY = this.$node.position().top;
    var currentX = this.$node.position().left;

    makeDancer.prototype.setPosition.call(this, currentY + randY, currentX + randX);

  }.bind(this), 0);
  // makeDancer.prototype.step.call(this);

  // this.$node.toggle();
};