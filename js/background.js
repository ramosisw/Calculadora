chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('html/windowMain.html', {
  	id: 'main',
    'bounds': {
      'width': 400,
      'height': 400
    }
  });
});