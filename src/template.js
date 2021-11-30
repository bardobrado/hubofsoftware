/*
	let title1 = "Funciona melhor com textos menores.";
	let title2 = "Mas ainda assim é um efeito maneiro";
	let origin;
	let final;
	let part = "";
	let k = 0;
	let kj = 0;
	let speed = 2050;
	let rnd;
	let rndList = [];
	let rndListOk = [];

	onMount(() => {});

	function stringReplacer(origin, final) {
	
		if (final.length < origin.length) {
		} else {
			if (document.getElementById("demo").innerHTML != final) {
				document.getElementById("demo").innerHTML = randSliceReplace(
					document.getElementById("demo").innerHTML,
					final,
					k
				);
				//kj++;
				setTimeout(stringReplacer(origin, final), speed);
			} else {
				rndList = [];
				rndListOk = [];
				kj = 0;
				part = final;
				console.log("Terminou");
			}
		}
	}

	function randSliceReplace(origin, final, ki) {
		let rnd = Math.ceil(Math.random() * final.length + 1) ;
		if (rndList.includes(rnd)) {
			return randSliceReplace(origin, final, ki);
		} else {
			rndList.concat(rnd);
			console.log("ki" + ki);
			ki++;
			part = origin.slice(0, rnd);
			part += final.charAt(rnd) + origin.slice(rnd + 1);
			return part;
		}
	}

		function sliceReplace(origin, final, k) {
		part = part.slice(0, k);
		part += final.charAt(k) + origin.slice(k + 1);

		return part;
	}

	function sliceMajor(origin) {
		part = part.slice(0, origin.length - final.length);
		return part;
	}

	
	let title1;
	let title2;
	var part;
	var k = 0;
	let kj = 0;
	var speed = 40;
	var rnd;
	var rndList = [];
	onMount(() => {
		title2 =
			"Funciona melhor com textos menores.";
		title1 =
			"Mas ainda assim é um efeito maneiro";
		part = title2;
	});

	function randSliceReplaceCrescent(origin, final, ki) {
		rnd = Math.random() * final.length;
		
		if (rndList.includes(rnd)) {
			return randSliceReplace(origin, final, ki);
		} else {
			rndList.concat(rnd);
			console.log("ki" + ki);
			ki++;
		}
		part = origin.slice(0, rnd);
		part += final.charAt(rnd) + origin.slice(rnd + 1);
		return part;
	}

	function randSliceReplaceDecrescent(origin, final, ki) {
		rnd = Math.random() * final.length;
		
		if (rndList.includes(rnd)) {
			return randSliceReplace(origin, final, ki);
		} else {
			rndList.concat(rnd);
			console.log("ki" + k);
			ki++;
		}
		part = origin.slice(0, rnd);
		part += final.charAt(rnd) + origin.slice(rnd + 1);
		return part;
	}

	function removeExcedent(origin, final, km) {
		part = origin;

		if (kj < origin.length - final.length) {
			part =
				origin.slice(0, final.length) +
				part.slice(final.length, origin.length - kj);
			kj++;
		}

		return part;
	}



	function typeWriter() {
		if (k < title1.length && part != title1) {
			document.getElementById("demo").innerHTML =
				randSliceReplaceCrescent(part, title1, k);

			setTimeout(typeWriter, speed);
		} else {
			rndList = [];
			k = 0;
			part = title1;
			console.log("Terminou");
		}
	}

	function typeWriterB() {
		if (kj < title2.length && part.slice(0, title2.length) != title2) {
			document.getElementById("demo").innerHTML =
				randSliceReplaceDecrescent(part, title2, kj);
			setTimeout(typeWriterB, speed);
		} else {
			typewriterB2();

			rndList = [];

			k = 0;
			part = title2;
			console.log("Terminou");
		}
	}

	function typewriterB2() {
		if (title2.length < title1.length) {
			document.getElementById("demo").innerHTML = removeExcedent(
				title1,
				title2,
				kj
			);
		}

		setTimeout(typewriterB2, speed);
	}
	*/