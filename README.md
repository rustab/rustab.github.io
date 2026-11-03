# Run locally
If you want to run it locally: 

## See your running jekyll version
```bundle exec jekyll -v```

## Install the necessary gems
```bundle install```

## Build the site (with live reload)
```bundle exec jekyll serve -l```

## If you want to override any layout of your theme
### Get reference from remote source (RECOMMENDED)
It's prefereable that you get the reference that you want to override directly from the source. The theme that is actually is used is the one that is defined in your `_config.yml`. Hopefully this coincides with the gem you have installed locally.

1. I use `minima` so for my case I will just go to the [base.html](https://github.com/jekyll/minima/blob/1e8a445e8fd7280d0fd9d448c0f71c93a2565837/_layouts/base.html) for the specific revision. 
2. Copy that content to a file of the same name in your `_layouts` folder
3. Make necessary edits and point to the correct layout in the frontmatter of your pages.

### Get reference from locally installed gem
1. First you need to find where your themes layout is stored
   ```
   bundle info --path <theme
   ```
   In my case this was `minima`as defined in my `_config.yml`file. 
2. Then you need to copy the layout file to your own layout
   folder 
   ``` 
   cp $(bundle info --path minima)/_layouts/default.html _layouts/default.html
   ```~~
3. Make the necessary changes, point to `base` in the front
   matter of your post. Your `base.html` will take precedence over the theme one. 

# References

## Testing locally
[Test Github pages site locally](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)

## References for changing default layout
- [Github pages, override themes default](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll#customizing-your-themes-html-layout)
- [Jekyll customize themes using layouts](https://jekyllrb.com/docs/themes/)
- [Jekyll layout](https://jekyllrb.com/docs/layouts/)

## RSS Feed
- [Jekyll Feed](https://github.com/jekyll/jekyll-feed)