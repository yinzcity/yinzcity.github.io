	let myImage = document.querySelector('img');

	myImage.onclick = function() {
	    let mySrc = myImage.getAttribute('src');
	    if(mySrc === 'a/Cat-shelley.png') {
	      myImage.setAttribute('src','a/yinz-shelley copy.png');
	    } else {
	      myImage.setAttribute('src','a/Cat-shelley.png');
	    }
	}

	myImage.onclick = function() {
	    let mySrc = myImage.getAttribute('src');
	    if(mySrc === 'a/yinz-shelley copy.png') {
	      myImage.setAttribute('src','a/Cat-shelley.png');
	    } else {
	      myImage.setAttribute('src','a/yinz-shelley copy.png');
	    }
	}