/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // check if the feed url is empty
         it('each feed has a valid url', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });

         //check if the feed has a valid name
         it('each feed has a valid name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });


    describe('The menu', function() {
        // check if the slie menu if hidden by default
       it('should be hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });


      // check if the slide menu button works
      it('should toggle the class of menu-hidden', function() {
            if ($('body').hasClass('menu-hidden')) {
                $('.menu-icon-link').trigger('click');
                expect($('body').hasClass('menu-hidden')).toBe(false);
            }

            if (! $('body').hasClass('menu-hidden')) {
                $('.menu-icon-link').trigger('click');
                expect($('body').hasClass('menu-hidden')).toBe(true);
            }

      });
    });


    describe('Initial Entries', function() {
        // load different entry each time, and check if entry is larger than 0
        var idx  = -1;
        beforeEach(function(done) {
            idx = idx + 1;
            loadFeed(idx, done);
        });

      it ('shoud have at least one entry in feed 0', function() {
            console.log($('.feed').find('.entry').length);
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
        });

        it ('shoud have at least one entry in feed 1', function() {
            console.log($('.feed').find('.entry').length);
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
        });

        it ('shoud have at least one entry in feed 2', function() {
            console.log($('.feed').find('.entry').length);
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
        });

        it ('shoud have at least one entry in feed 3', function() {
            console.log($('.feed').find('.entry').length);
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
        });
    });


    describe('New Feed', function() {
        /* TODO: Write a test that ensures when a 'new feed' is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         var result;
         beforeEach(function(done) {
            // intial load to be 3, and each load will compare with this
            loadFeed(3, function() {
                result = $('.feed').find('h2').text();
                done();
            });
         });

        // default is 3, and change to 2 see if the content changes
         it('change page', function(done) {
            loadFeed(2, function() {
            expect(result).not.toEqual($('.feed').find('h2').text());
                done();
            });
         });

    });


}());
