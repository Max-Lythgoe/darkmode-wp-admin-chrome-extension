var link = document.createElement('link');
link.href = chrome.extension.getURL('admin-style.css');
link.rel = 'stylesheet';
document.head.appendChild(link);
