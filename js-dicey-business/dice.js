"use strict";
var Die = /** @class */ (function () {
    function Die() {
        Die.diceArray.push(this);
        this.val = 0;
        this.div = $('<div></div>');
        this.render();
        this.roll();
        this.reroll();
        this.remove();
    }
    Die.prototype.render = function () {
        this.div = $('<div class="die shadow"></div>');
        $('.die-container').append(this.div);
    };
    Die.prototype.roll = function () {
        this.val = Math.floor((Math.random() * 6) + 1);
        this.div.text(this.val);
    };
    Die.prototype.reroll = function () {
        var _this = this;
        this.div.click(function () {
            _this.removeStyle();
            _this.roll();
        });
    };
    Die.prototype.remove = function () {
        var _this = this;
        this.div.dblclick(function () {
            _this.div.remove();
            var index = Die.diceArray.indexOf(_this);
            Die.diceArray.splice(index, 1);
        });
    };
    Die.prototype.removeStyle = function () {
        var _this = this;
        var cssClassArray = ['die-2', 'two', 'three', 'four-and-six', 'five'];
        cssClassArray.forEach(function (style) { return _this.div.removeClass(style); });
        this.div.addClass('die');
    };
    Die.prototype.changeStyle = function () {
        var span = $('<span class="dot"></span>');
        var span2 = $('<span class="dot"></span><span class="dot"></span>');
        var span3 = $('<span class="dot"></span><span class="dot"></span><span class="dot"></span>');
        var span4 = $('<div class="column"><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span></div>');
        var span5 = $('<div class="column"><span class="dot"></span><span class="dot"></span></div><div class ="column"><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span></div>');
        var span6 = $('<div class="column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>');
        switch (this.val) {
            case 1:
                this.div.text('');
                this.div.append(span);
                break;
            case 2:
                this.div.text('');
                this.div.removeClass('die').addClass('die-2 two');
                this.div.append(span2);
                break;
            case 3:
                this.div.text('');
                this.div.removeClass('die').addClass('die-2 three');
                this.div.append(span3);
                break;
            case 4:
                this.div.text('');
                this.div.removeClass('die').addClass('die-2 four-and-six');
                this.div.append(span4);
                break;
            case 5:
                this.div.text('');
                this.div.removeClass('die').addClass('die-2 five');
                this.div.append(span5);
                break;
            case 6:
                this.div.text('');
                this.div.removeClass('die').addClass('die-2 four-and-six');
                this.div.append(span6);
                break;
        }
    };
    Die.diceArray = [];
    return Die;
}());
$('.new-die').click(function () { return new Die(); });
$('.roll-die').click(function () {
    Die.diceArray.forEach(function (die) {
        die.removeStyle();
        die.roll();
    });
});
$('.sum-die').click(function () {
    var sum = Die.diceArray.reduce(function (total, die) { return (total += die.val); }, 0);
    Swal.fire("The sum is: " + sum);
});
$(".change-die").click(function () { return Die.diceArray.forEach(function (die) { return die.changeStyle(); }); });
