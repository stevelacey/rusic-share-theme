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
(function() {

  // This is the page that will display inside the iframe.
  var iframeSrc = 'http://hectic.rusic.com/ideas/new';

  // Styles for the iframe.
  var iframeStyle = 'position: fixed; z-index: 999999; width: 500px; height: 300px; right: 0; top: 0; border: none; overflow: hidden; background-color: white;';

  // Create an iframe element and set some attributes.
  var iframe = document.createElement('iframe');

  // Pass the current url across to the space.
  iframe.setAttribute('src', iframeSrc + '?custom1=' + encodeURIComponent(window.location.href));

  iframe.setAttribute('id', 'rusic-modal');
  iframe.setAttribute('style', iframeStyle);

  // Inject the iframe into the host page.
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(iframe);

}).call(this);