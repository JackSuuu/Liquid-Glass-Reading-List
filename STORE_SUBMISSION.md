# Chrome Web Store Submission Information

## Single Purpose Description
This extension serves a single purpose: to help users save and manage a reading list of web pages they want to read later. Users can quickly add the current page to their list, view saved pages in a popup interface, and remove items they've finished reading.

---

## Permission Justifications

### Storage Permission
**Why we need it:**
The storage permission is required to save the user's reading list data persistently across browser sessions. Without this permission, the reading list would be lost every time the user closes their browser.

**How we use it:**
- Save webpage URLs and titles when the user clicks "Add Current Page"
- Retrieve the saved reading list to display in the popup
- Update the list when users delete items
- Sync the reading list across the user's devices via Chrome sync storage

**Data stored:**
Only the URLs and page titles that users explicitly choose to save. No other browsing data is collected or stored.

---

### Tabs Permission
**Why we need it:**
The tabs permission is required to access the current active tab's URL and title when the user wants to add it to their reading list.

**How we use it:**
- Read the current tab's URL and page title only when the user clicks the "Add Current Page" button
- This is a user-initiated action - we do not access tabs in the background
- We do not monitor browsing history or track user activity

**Scope:**
The permission is used exclusively for the single action of capturing the current page's information when requested by the user.

---

## Privacy Policy URL
Once you push the PRIVACY.md file to GitHub, your privacy policy URL will be:

**https://github.com/JackSuuu/Liquid-Glass-Reading-List/blob/main/PRIVACY.md**

Alternatively, you can use GitHub Pages for a cleaner URL:
**https://jacksuuu.github.io/Liquid-Glass-Reading-List/PRIVACY**

---

## Additional Store Listing Information

### Category
**Productivity** - Tools that help users organize and manage their workflow

### Detailed Description for Store
A beautiful browser extension with a glassmorphism design inspired by Apple's aesthetic. LiquidGlass Reading List helps you save and organize web pages you want to read later.

**Features:**
✨ Stunning liquid glass UI with frosted blur effects and smooth animations
📚 One-click saving of the current webpage
🗑️ Easy deletion of items you've finished reading
🔄 Automatic syncing across all your Chrome browsers
🚫 Smart duplicate detection prevents adding the same page twice
📱 Clean, modern interface that's a pleasure to use
🍎 Apple-inspired design with beautiful gradients and transparency

**How to Use:**
1. Click the extension icon in your browser toolbar
2. Click "Add Current Page" to save the current webpage
3. View all your saved pages in the elegant popup interface
4. Click any link to open it in a new tab
5. Click "Delete" to remove items from your list

**Privacy First:**
All your data stays on your device. We don't collect, track, or share any information. Your reading list is completely private and only syncs through your own Chrome account.

Perfect for researchers, students, content curators, or anyone who wants to keep track of articles and pages to read later - all wrapped in a gorgeous, modern interface.

---

## Support Information

**Support Email:** [Add your email here]

**Support Website:** https://github.com/JackSuuu/Liquid-Glass-Reading-List

**GitHub Issues:** https://github.com/JackSuuu/Liquid-Glass-Reading-List/issues
