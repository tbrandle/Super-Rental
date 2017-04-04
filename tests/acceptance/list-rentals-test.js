import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('visiting /', function(assert) {
  moduleForAcceptance('Acceptance | list-rentals');

  test('should show rentals as the home page', function (assert) {
    visit('/');
    andThen(function() {
      assert.equal(currentURL(), '/rentals', 'should redirect automatically');
    })
  });

  test('should link to information about the company.', function (assert) {
    visit('/');
    click('a:contains("About")');
    andThen(function () {
      assert.equal(currentURL(), '/about', 'should navigate to about')
    })
  });

  test('should link to contact information.', function (assert) {
    visit('/');
    click('a:contains("Contact")');
    asnThen(function () {
      assert.equal(currentURL(), '/contact', 'hould navigate to the contact page')
    })
  });

  test('should list available rentals.', function (assert) {
    visit('/');
    andThen(function() {
   assert.equal(find('.listing').length, 3, 'should see 3 listings');
 });
  });

  test('should filter the list of rentals by city.', function (assert) {
  });

  test('should show details for a selected rental', function (assert) {
  });

});
