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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('each feed has a valid url', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('each feed has a valid name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('should be hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('should toggle the class of menu-hidden', function() {
            // test it for a 100 time
            for (let i = 0; i < 100; i++) {
                if ($('body').hasClass('menu-hidden')) {
                    $('.menu-icon-link').trigger('click');
                    expect($('body').hasClass('menu-hidden')).toBe(false);
                }

                if (! $('body').hasClass('menu-hidden')) {
                    $('.menu-icon-link').trigger('click');
                    expect($('body').hasClass('menu-hidden')).toBe(true);
                }
            }

          });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        // load different entry each time, and check if entry is larger than 1
        var idx = 0;
        beforeEach(function(done) {
            loadFeed(idx, done);
            idx = idx + 1;
        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it ('shoud have at least one entry in feed 0', function(done) {
            console.log($('.feed').find('a').toArray().length);
            expect($('.feed').find('a').toArray().length).toBeGreaterThan(1);
            done();
        });

        it ('shoud have at least one entry in feed 1', function(done) {
            console.log($('.feed').find('a').toArray().length);
            expect($('.feed').find('a').toArray().length).toBeGreaterThan(1);
            done();
        });

        it ('shoud have at least one entry in feed 2', function(done) {
            console.log($('.feed').find('a').toArray().length);
            expect($('.feed').find('a').toArray().length).toBeGreaterThan(1);
            done();
        });

        it ('shoud have at least one entry in feed 3', function(done) {
            console.log($('.feed').find('a').toArray().length);
            expect($('.feed').find('a').toArray().length).toBeGreaterThan(1);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
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
         })

        // default is 3, and change to 2 and 1 and 0 to see if the content changes
         it('first load', function(done) {
            loadFeed(2, function() {
            expect(result === $('.feed').find('h2').text()).toBe(false);
                done();
            });
         });


         it('second load', function(done) {
            loadFeed(1, function() {
            expect(result === $('.feed').find('h2').text()).toBe(false);
                done();
            });
         });

         it('third load', function(done) {
            loadFeed(0, function() {
            expect(result === $('.feed').find('h2').text()).toBe(false);
                done();
            });
         });
    });


}());
