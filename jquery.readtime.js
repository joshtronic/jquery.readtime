/**
 * jquery.readtime.js
 *
 * Calculates read time of an element. Uses Medium’s formula based on the
 * average reading speed of an adult (roughly 275 WPM) and then tacking on an
 * additional 12 seconds for each inline image.
 *
 * @author  Josh Sherman <josh@gravityblvd.com>
 * @license The MIT License - http://opensource.org/licenses/MIT
 * @link    https://github.com/joshtronic/jquery.readtime
 */

(function($)
{
    $.fn.readtime = function(options)
    {
        // Default options
        var defaults = {
            class:   'readtime',   // Class name of the output element
            format:  '# min read', // # == the number of minutes
            wrapper: 'time'        // What the output will be wrapped in
        };

        options = $.extend(defaults, options);

        return this.each(function()
        {
            // Strips the HTML out of the element
            var text = this.textContent || this.innerText || '';

            // Counts the words
            var words = text.replace(/(^\s*)|(\s*$)/gi, '')
                            .replace(/[ ]{2,}/gi, ' ').replace(/\n /, '\n')
                            .split(' ').length;

            // Calculates the read time for the words (in seconds)
            var time = (words / 275) * 60;

            // Counts any images in the element and adds more time
            time += ($(this).find('img').length * 12);

            // Gets us back to minutes and rounds to an integer
            time = Math.round(time / 60);

            // Formats the time
            time = options.format.replace(/#/, time);

            // Creates our element and prepends it to this
            var element = document.createElement(options.wrapper);

            $(element).addClass(options.class).html(time)
                      .prependTo($(this));
        });
    };
}(jQuery));
