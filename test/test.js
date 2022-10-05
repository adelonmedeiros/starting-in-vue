console.log = () => {};
const { expect } = require('chai');
const rewire = require('rewire');
const Vue = require('vue');
process.env.NODE_ENV = 'production';

describe('', function () {
  it("Did you replace `CoderInTraining`  with `{{ author }}` in the tweet component's `template`?", function () {
    let appModule = rewire('../js/components/Tweet.js');
    let component = appModule.__get__('Tweet');
    const data = new Vue(component).$mount().$options;
    expect(data.template).to.match(/<h3>\s*{{\s*author\s*}}\s*<\/h3>/);
  });
});