var assert = require('assert');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Header = require('../../common/components/Header.react');

describe('Header component', function() {
  var renderedComponent;

  before('render it', function() {
    renderedComponent = TestUtils.renderIntoDocument(
      <Header text={'Derp'} />
    );
  });

  it('is an h1', function() {
    var headers = TestUtils.scryRenderedDOMComponentsWithTag(renderedComponent, 'h1');
    assert(headers.length === 1);
  });
});
