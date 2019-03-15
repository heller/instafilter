**Instafilter** filters a list of items as you type, with fuzzy matching.

It allows you to restrict the searchable text of each item, so that HTML tags, URLs, etc. don't cause false positives.

**Live demo:**
http://heller.github.io/instafilter/

Usage:
```javascript
    let options = {
      listSelector:     '#items',
      itemSelector:     'li',
      contentSelector:  '.text'
    };
    window.onload = function() {
      let searchInput = document.getElementById('search');
      Instafilter.activate(searchInput, options);
      document.getElementById('search').focus();
    };
```

`#search`: This selector should match the search box, a single text field element.

`listSelector`: An outer element to search within. By changing this, you can have several lists being searched on the same page.

`itemSelector`: The bounding element of an individual list item (not necessarily an `li` element).

`contentSelector`: The boundary of the searchable text within each item. Text not within this selector is not searched.


Inspired by:

http://ejohn.org/blog/jquery-livesearch/#postcomment

http://orderedlist.com/blog/articles/live-search-with-quicksilver-style-for-jquery/

See Also:
https://github.com/riklomas/quicksearch
