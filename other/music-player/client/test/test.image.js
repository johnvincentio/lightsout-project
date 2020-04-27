
import React from 'react';

// import TestUtils from 'react-dom/test-utils';
import TestRenderer from 'react-test-renderer';

import chai from 'chai';

import Image from '../src/components/image';

const should = chai.should();
// let expect = chai.expect;

describe('Image component', function() {
  it('Renders the image and description',  function() {
    const url = 'http://www.example.com/image.png';
    const description = 'Example description';

    console.log('in mocha test - 1');
    const testRenderer = TestRenderer.create(
      <Image url={url} description={description} />,
    );

//    const renderer = TestUtils.createRenderer();
    console.log('in mocha test - 2');
    console.log(testRenderer.toJSON());
    const result = testRenderer.toJSON();

    console.log('in mocha test - 3');
    result.props.className.should.equal('gallery-image');
    console.log('in mocha test - 4');

    const img = result.children[0];
    img.type.should.equal('img');
    img.props.src.should.equal(url);
    img.props.alt.should.equal(description);

    const p = result.children[1];
    p.type.should.equal('p');
    p.children[0].should.equal(description);
  });
});

/*
  it("renders an h1", function () {
    var component = TestUtils.renderIntoDocument(
        <MyComponent />
    );

    var h1 = TestUtils.findRenderedDOMComponentWithTag(
       component, 'h1'
    );

    expect(h1.getDOMNode().textContent)
        .toEqual("A title");
});
*/
