/**
 * Basic bookmarklet template.
 *
 * Change the `iframeSrc` variable to point to your space's new idea
 * page. You can adjust the iframe styles and position using the
 * `iframeStyle` variable.
 *
 * For turning this script into a bookmarklet, you should probably take
 * a look at https://gist.github.com/1856012.
 */
(rusic_bookmarklet = function() {
  var bookmarket = document.getElementById('rusic-modal');
  
  if (typeof bookmarklet == 'undefined') {
    // This is the page that will display inside the iframe.
    var iframeSrc = 'http://steve.rusic.com/share/ideas/new',
          iframeWidth = 500,
          iframeHeight = 300;

    // Create an iframe element and set some attributes.
    bookmarklet = document.createElement('iframe');

    // Pass the current url across to the space.
    bookmarklet.setAttribute('src', iframeSrc + '?title=' + document.getElementsByTagName('title')[0].text.replace(/(^[\s\xA0]+|[\s\xA0]+$)/g, '') + '&custom1=' + encodeURIComponent(window.location.href));

    bookmarklet.setAttribute('id', 'rusic-modal');
    bookmarklet.setAttribute('style', 'background: white; border: 1px solid #AAA; position: fixed; z-index: 999999; width: ' + iframeWidth + 'px; height: ' + iframeHeight + 'px; top: 50%; left: 50%; margin: -' + iframeHeight / 2 + 'px 0 0 -' + iframeWidth / 2 + 'px; padding: 10px; box-shadow: 0 0 100px black; box-sizing: border-box; overflow: hidden;');

    // Inject the iframe into the host page.
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(bookmarklet);
  } else {
     if (bookmarklet.display == 'block') {
        bookmarklet.display = 'none';
     } else {
        bookmarklet.display = 'block';
     }
  }
}).call(this);