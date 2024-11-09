$(function() {
	// auto grid layout
	// var msnry = new Masonry( '#grid', {
	var $grid = $('#grid').masonry({
	  columnWidth: 200,
	  gutter: 10,
	  itemSelector: '#grid a',
	  transitionDuration: 0
	});

	// re-layout grid after each image loads
	$grid.imagesLoaded().progress( function() {
	  $grid.masonry('layout');
	});

	// make image popup box on click image
	$('#grid').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image',
	  gallery : {
	  	enabled: true
	  }
	});

	// tags!!!!

	// gather a list of all tags from the tagged images on the page
	var taggedImages = $('a[data-tags]');
	var i = taggedImages.length;
	var currentTag;
	var allTags = [];
	while(i--) {
		currentTag = taggedImages[i].getAttribute('data-tags');
		if (allTags.indexOf(currentTag) === -1) {
			allTags.push(currentTag);
		}
	}

	// print list of tags
	var j = allTags.length;
	var tagsMenu = document.createDocumentFragment();
	var tagLink;
	var currentTagName;

	var allLink = document.createElement('a');
	allLink.setAttribute('href', '#view-all');
	allLink.appendChild(document.createTextNode('all'));
	tagsMenu.appendChild(allLink);

	while (j--) {
		currentTagName = allTags[j];
		tagLink = document.createElement('a');
		tagLink.setAttribute('href', '#' + currentTagName);
		tagLink.setAttribute('data-tag', currentTagName);
		tagLink.appendChild(document.createTextNode(currentTagName));
		tagsMenu.appendChild(tagLink);
	}

	var tagMenuContainer = document.getElementById('tag-menu');
	tagMenuContainer.appendChild(tagsMenu);

	$('#tag-menu a[href=#view-all]').on('click', function(event) {
		taggedImages.show();
		$grid.masonry('layout');
	});

	$('#tag-menu a:not([href=#view-all])').on('click', function(event){
		var selectedTag = event.target.getAttribute('data-tag');
		$('#grid a[data-tags=' + selectedTag + ']').show();
		$('#grid a:not([data-tags=' + selectedTag + '])').hide();
		$grid.masonry('layout');
	});
});
