# jquery.readtime

> Read time is based on the average reading speed of an adult (roughly 275
> WPM). We take the total word count of a post and translate it into minutes.
> Then, we add 12 seconds for each inline image. **Boom, read time.**
>
> &mdash; <cite>[Read Time and You][MediumReadTime]</cite>

## Usage

### Basic

```javascript
$('article').readtime();
```

### Advanced

```javascript
$('article').readtime({
    class:   'time-to-read',
    format:  'This will take you # minutes to read',
    wrapper: 'div'
});
```

## Contributing

There’s some room for improvement with the format of the time. Couple of
thoughts would be to allow it to be configured to return the time as a decimal
or even a fraction. Also could stand to put together some unit tests. Fork and
improve as you see fit. Pull requests are welcome but please conform to the
project’s existing coding style.

## Author

Lovingly built one Saturday morning by [Josh Sherman][joshtronic]. You can
return the love by starring this project and/or tipping:
[![Gittip](http://img.shields.io/gittip/joshtronic.svg?style=flat)][gittip]

[MediumReadTime]: https://medium.com/the-story/read-time-and-you-bc2048ab620c
[joshtronic]:     http://joshtronic.com
[gittip]:         https://www.gittip.com/joshtronic/
