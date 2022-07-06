/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  'ELLM1JRMTC', // Your Application ID here
  'bdfc6769ae037ff5c2fecbafe990a8ec' // Your Search-Only API Key here 
);

const search = instantsearch({
  indexName: '[Algolia Academy]crawler_lab',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
      <div>
        <img src="{{image}}" align="left" style="width:100px" alt="{{name}}" />
      <div class="hit-title">
        {{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}
      </div>
      <div class="hit-description">
        {{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}
      </div>
      <div class="hit-author">
        {{#helpers.highlight}}{ "attribute": "author" }{{/helpers.highlight}}
      </div>
      <div class="hit-link">
        <a href="{{url}}">Read More</a>
      </div>
    </div>
`,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),

  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  }),

  instantsearch.widgets.refinementList({
    container: '#category',
    attribute: 'category',
    searchable: true,
    limit: 3,
    showMore: true,
  }),

  instantsearch.widgets.refinementList({
    container: '#author',
    attribute: 'author',
    searchable: true,
    limit: 3,
    showMore: true,
  }),

  instantsearch.widgets.configure({
    hitsPerPage: 10,
  }),
]);

search.start();
