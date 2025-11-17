document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-button');
  const list = document.getElementById('list');

  // Load existing items
  chrome.storage.sync.get('readingList', (data) => {
    const readingList = data.readingList || [];
    renderList(readingList);
  });

  // Add current page
  addButton.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      const item = { title: tab.title, url: tab.url };
      
      chrome.storage.sync.get('readingList', (data) => {
        const readingList = data.readingList || [];
        
        // Check for duplicates
        const isDuplicate = readingList.some(existingItem => existingItem.url === item.url);
        
        if (!isDuplicate) {
          readingList.push(item);
          chrome.storage.sync.set({ readingList }, () => {
            renderList(readingList);
          });
        } else {
          // Optional: Show a brief message that item already exists
          addButton.textContent = 'Already Added!';
          setTimeout(() => {
            addButton.textContent = 'Add Current Page';
          }, 1500);
        }
      });
    });
  });

  function renderList(readingList) {
    list.innerHTML = '';
    
    if (readingList.length === 0) {
      const emptyMessage = document.createElement('div');
      emptyMessage.className = 'empty-message';
      emptyMessage.textContent = 'No pages saved yet. Click "Add Current Page" to get started!';
      list.appendChild(emptyMessage);
      return;
    }
    
    readingList.forEach((item, index) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.title;
      a.target = '_blank'; // Open in new tab
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        readingList.splice(index, 1);
        chrome.storage.sync.set({ readingList }, () => {
          renderList(readingList);
        });
      });
      
      li.appendChild(a);
      li.appendChild(deleteButton);
      list.appendChild(li);
    });
  }
});
