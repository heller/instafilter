**Instafilter** is a jQuery plugin that uses fuzzy matching to filter a list of items as you type.

It allows you to restrict the searchable text of each item, so that HTML tags, URLs, etc. don't cause false positives.

Usage:
```javascript
	$('#search').liveUpdate({
          listSelector:     '#items',
          itemSelector:     'li',
          contentSelector:  '.text'});
```

`#search`: This selector should match the search box, a single text field element.

`listSelector`: An outer element to search within. By changing this, you can have several lists being searched on the same page.

`itemSelector`: The bounding element of an individual list item (not necessarily an `li` element).

`contentSelector`: The boundary of the searchable text within each item. Text not within this selector is not searched.


Adapted from:

http://ejohn.org/blog/jquery-livesearch/#postcomment

http://orderedlist.com/blog/articles/live-search-with-quicksilver-style-for-jquery/

See Also:
https://github.com/riklomas/quicksearch
