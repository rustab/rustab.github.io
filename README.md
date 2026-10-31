# Run locally
If you want to run it locally: 

## See your running jekyll version
```bundle exec jekyll -v```

## Install the necessary gems
```bundle install```

## Build the site (with live reload)
```bundle exec jekyll serve -l```

## If you want to override any layout of your theme
1. First you need to find where your themes layout is stored
   ```
   bundle info --path <theme
   ```
   In my case this was `minima`as defined in my `_config.yml`file. 
2. Then you need to copy the layout file to your own layout
   folder 
   ``` 
   cp $(bundle info --path minima)/_layouts/default.html _layouts/default.html
   ```
3. Make the necessary changes, point to `default` in the front
   matter of your post. Your `default.html` will take precedence over the theme one. 

# References
[Test Github pages site locally](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)

## References for changing default layout
- [Github pages, override themes default](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll#customizing-your-themes-html-layout)
- [Jekyll customize themes using layouts](https://jekyllrb.com/docs/themes/)
- [Jekyll layout](https://jekyllrb.com/docs/layouts/)