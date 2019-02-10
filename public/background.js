chrome.contextMenus.create({ 
  id: 'Pofi',
  title: 'Get postal code',
  contexts: ['all']
});

chrome.contextMenus.onClicked.addListener(() => {
  console.log('opa');
  console.log(window.getSelection().toString());
});