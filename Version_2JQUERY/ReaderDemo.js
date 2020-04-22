//source: https://stackoverflow.com/questions/60642215/is-it-possible-to-highlight-an-individual-line-of-text-as-you-scroll-through-a-w/60642670#60642670 

$('p').html(function() {
	return $(this).text().replace(/[\w \W \d \D]/g, "<span>$&</span>")
    
});

const offsetFromTopEdge = 150; // the lines 10px from the top edge of the window will be highlighted, you can increase this value
const $spans = $('p span');
$(window).on('scroll', onWindowScroll); // run onWindowScroll function every time users scrolls the page
onWindowScroll(); // run this function once, before any scroll happens, so the line is highlighted on the page init

function onWindowScroll () {
  const scrollTop = $(window).scrollTop();
  let firstHighlightedSpanOffsetTop;
  $spans.removeClass('hover'); // remove red background from all the spans
  $spans
    .filter(function() {
        const offset = $(this).offset();
  
    	if (firstHighlightedSpanOffsetTop === undefined) { // if none span highlighted yet
        	const isSpanMarked = scrollTop + offsetFromTopEdge < offset.top;
        	/* let's save the scrollTop value of the first highlighted span.
        	We will test against it later on to find all spans which are at the same line */
        	if (isSpanMarked) firstHighlightedSpanOffsetTop = offset.top;
        	return isSpanMarked;
        }

        // check if the span has the same offset top as the first highlighted (ergo, they're at the same line)
        return offset.top === firstHighlightedSpanOffsetTop;
    })
    .addClass('hover');
}

/*var highlight = document.querySelector("#highlight");

window.addEventListener('scroll', function(e){
	var y = window.scrollY;
	var offset = y % 30;
	highlight.style.marginTop =  - y % 30 + "px";
});*/
