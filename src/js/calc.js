$(document).ready(function() {
	'use strict';
	var now = '', func = function todo(id) {
		var num = id.replace('btn','');
		if(isNaN(Number(num))) {
			switch(num) {
				case 'AC' : now = '';                           break;
				case 'DEL': now = now.slice(0, now.length - 1); break;
				case 'MOD': now += '%';                         break;
				case 'ADD': now += '+';                         break;
				case 'MIN': now += '-';                         break;
				case 'TME': now += '*';                         break;
				case 'DIV': now += '/';                         break;
				case 'DBZ': now += '00';                        break;
				case 'DOT': now += '.';                         break;
				case 'CLC': calc(); return;
			};
		} else {
			now += num;
		}
		if(now.length > 7) {
			err();
			console.log('Overflow Error');
		} else {
			$('.outputText').text(now);
		}
	}, calc = function calc() {
		try {
			var x = Math.floor(eval(now)*1e7)/1e7;
			$('.outputText').text(x);
			if(String(x).length > 7) {
				err();
				console.log('Overflow Error');
			}
			now = '';
		} catch {
			err();
			console.log('Calculate Error');
		}
	}, err = function err() {
		$('.outputText').text('ERROR');
		now = '';
	};
	$('.button').click(function() {
		func(this.id);
	});
});
