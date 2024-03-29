+++
tags = ["config"]
title = "Configuration"
weight = 20
+++

## Global site parameters

On top of [Hugo global configuration](https://gohugo.io/overview/configuration/), the Relearn theme lets you define the following parameters in your `config.toml` (here, values are default).

Note that some of these parameters are explained in details in other sections of this documentation.

````toml {title="config.toml"}
[params]
{{% include "config/_default/params.toml" %}}
````

## Serving your page from a subfolder

If your site is served from a subfolder, eg. `https://example.com/mysite/`, you have to set the following lines to your `config.toml`

````toml
baseURL = "https://example.com/mysite/"
canonifyURLs = true
relativeURLs = true
````

Without `canonifyURLs=true` URLs in sublemental pages (like `sitemap.xml`, `rss.xml`) will be generated falsly while your HTML files will still work. See https://github.com/gohugoio/hugo/issues/5226.

## Serving your page from the filesystem

If you want your page served from the filesystem by using URLs starting with `file://` you'll need the following configuration in your `config.toml`:

````toml
relativeURLs = true
````

The theme will append an additional `index.html` to all branch bundle links by default to make the page be servable from the file system. If you don't care about the file system and only serve your page via a webserver you can also generate the links without this change by adding this to your `config.toml`

````toml
[params]
  disableExplicitIndexURLs = true
````

{{% notice note %}}
If you want to use the search feature from the file system using an older installation of the theme make sure to change your outputformat for the homepage from the now deprecated `JSON` to `SEARCH` [as seen below](#activate-search).
{{% /notice %}}

## Activate search

If not already present, add the following lines in the same `config.toml` file.

```toml
[outputs]
  home = ["HTML", "RSS", "SEARCH"]
```

This will generate a search index file at the root of your public folder ready to be consumed by the Lunr search library. Note that the `SEARCH` outputformat was named `JSON` in previous releases but was implemented differently. Although `JSON` still works, it is now deprecated.

### Activate dedicated search page

You can add a dedicated search page for your page by adding the `SEARCHPAGE` outputformat to your home page by adding the following lines in your `config.toml` file. This will cause Hugo to generate a new file `http://example.com/mysite/search.html`.

```toml
[outputs]
  home = ["HTML", "RSS", "SEARCH", "SEARCHPAGE"]
```

You can access this page by either clicking on the magnifier glass or by typing some search term and pressing `ENTER` inside of the menu's search box .

![Screenshot of the dedicated search page](search_page.png?&width=60pc)

{{% notice note %}}
To have Hugo create the dedicated search page successfully, you must not generate the URL `http://example.com/mysite/search.html` from your own content. This can happen if you set `uglyURLs=true` in your `config.toml` and defining a Markdown file `content/search.md`.

To make sure, there is no duplicate content for any given URL of your project, run `hugo --printPathWarnings`.
{{% /notice %}}

## Activate print support

You can activate print support to add the capability to print whole chapters or even the complete site. Just add the `PRINT` output format to your home, section and page in your `config.toml` as seen below:

```toml
[outputs]
  home = ["HTML", "RSS", "PRINT", "SEARCH"]
  section = ["HTML", "RSS", "PRINT"]
  page = ["HTML", "RSS", "PRINT"]
```

This will add a little printer icon in the top bar. It will switch the page to print preview when clicked. You can then send this page to the printer by using your browser's usual print functionality.

{{% notice note %}}
The resulting URL will not be [configured ugly](https://gohugo.io/templates/output-formats/#configure-output-formats) in terms of [Hugo's URL handling](https://gohugo.io/content-management/urls/#ugly-urls) even if you've set `uglyURLs=true` in your `config.toml`. This is due to the fact that for one mime type only one suffix can be configured.

Nevertheless, if you're unhappy with the resulting URLs you can manually redefine `outputFormats.PRINT` in your own `config.toml` to your liking.
{{% /notice %}}

## MathJax

The MathJax configuration parameters can also be set on a specific page. In this case, the global parameter would be overwritten by the local one. See [Math](shortcodes/math) for additional documentation.

### Example {#math-example}

MathJax is globally disabled. By default it won't be loaded by any page.

On page "Physics" you coded some JavaScript for a dynamic formulae. You can set the MathJax parameters locally to load mathJax on this page.

You also can disable MathJax for specific pages while globally enabled.

## Mermaid

The Mermaid configuration parameters can also be set on a specific page. In this case, the global parameter would be overwritten by the local one. See [Mermaid](shortcodes/mermaid) for additional documentation.

### Example {#mermaid-example}

Mermaid is globally disabled. By default it won't be loaded by any page.

On page "Architecture" you coded some JavaScript to dynamically generate a class diagram. You can set the Mermaid parameters locally to load mermaid on this page.

You also can disable Mermaid for specific pages while globally enabled.

## Home Button Configuration

If the `disableLandingPageButton` option is set to `false`, a Home button will appear
on the left menu. It is an alternative for clicking on the logo. To edit the
appearance, you will have to configure two parameters for the defined languages:

```toml
[languages]
[languages.en]
...
[languages.en.params]
landingPageName = "<i class='fas fa-home'></i> Home"
...
[languages.pir]
...
[languages.pir.params]
landingPageName = "<i class='fas fa-home'></i> Arrr! Homme"
...
```

If those params are not configured for a specific language, they will get their
default values:

```toml
landingPageName = "<i class='fas fa-home'></i> Home"
```

The home button is going to look like this:

![Default Home Button](home_button_defaults.png?width=18.75rem)

## Social Media Meta Tags

You can add social media meta tags for the [Open Graph](https://gohugo.io/templates/internal/#open-graph) protocol and [Twitter Cards](https://gohugo.io/templates/internal/#twitter-cards) to your site. These are configured as mentioned in the Hugo docs.
