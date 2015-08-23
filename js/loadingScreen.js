var spinTween = new TweenMax.to("#logoBorder", 1.4, {
	rotation: 360,
	transformOrigin: "center",
	repeat: -1,
	ease: SlowMo.ease.config(0.5, 0.5, false)
});

var fadeTween = new TweenMax.fromTo("#logoLetters, #loadingText", 1.2, { opacity: 1 }, {
	opacity: 0.5,
	repeat: -1,
	repeatDelay: 0.2,
	yoyo: true
});

function finishLoadingAnimation() {
	TweenMax.killAll();

	var removeLoadingScreen = function() {
		document.getElementById('content').style.display = 'block';
		document.getElementById('loadingScreen').style.display = 'none';
	};

	var makeContentVisible = function() {
		document.getElementById('content').style.visibility = 'visible';
	};

	var removeLoadingBarFromFlow = function() {
		document.getElementById('loadingLines').style.display = 'none';
	};

	var changeLoadingToDone = function() {
		document.getElementById('loadingText').innerHTML = 'Done';
	};

	var colorShiftTL = new TimelineMax({paused: true})
	.to("#logoBorder", 2, { fill: "#50514f" })
	.to("#logoLetters", 2, { fill: "#F4F4F4"}, "-=2");

	var tl = new TimelineMax({paused: true});

	var finishRotate = new TweenMax.to("#logoBorder", 1.2, {
		rotation: 360,
		transformOrigin: "center"
	});

	var finishFade = new TweenMax.to("#logoLetters, #loadingText", 1.2, { opacity: 1 });

	var leaveLeftLine = new TweenMax.to("#leftLine", 1, {
		opacity: 0,
		margin: "0 10% 0 0"
	});

	var leaveRightLine = new TweenMax.to("#rightLine", 1, {
		opacity: 0,
		margin: "0 0 0 10%"
	});

	tl
	.add([finishRotate, finishFade])
	.call(changeLoadingToDone)
	.to("#logoBorder", 0.25, { scale: 0.95, yoyo: true, repeat: 1 }, "-=1")
	.to("loadingLine", 1, {opacity: 0 }, "-=1.1")
	.to("#loadingText", 1, {opacity: 0 }, "-=0.5")
	.add([leaveLeftLine, leaveRightLine], "-=1")
	.call(removeLoadingBarFromFlow)
	.to("#mainLogo", 1, { margin: "25px 0 0 50px" })
	.call(removeLoadingScreen)
	.call(makeContentVisible);


	tl.play();
}

setTimeout(function() {
	finishLoadingAnimation();
}, 15000);
