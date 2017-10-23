# DAYMUNC
This repository maintains the source files used to update and maintain the [Dayton Model United Nations Regional Conference Website](http://www.daymunc.org).

###  How the website works
Any updates made to this repository are recorded, and all changes are will be reflected on the website, all  via [GitHub Pages](https://pages.github.com/). The website was designed to be a _static_ website,  generated via [Hugo](https://gohugo.io/). 

The website is principally designed to be maintainable by future Secretary Generals (SGs) and DAYMUNC staff members. That being said, contributing updates does require a bit of technical capability, namely the ability to: 

- Use [Markdown](https://www.markdowntutorial.com/) to create or update page content on the website 
- Use [git](https://git-scm.com/docs/gittutorial) or [GitHub Desktop](https://help.github.com/desktop/guides/) to make changes to this repository 

## FAQ 

#### How do I get started? 
There is a guide specifically aimed for SGs to use to update this repository at: (TODO) 

### How do I....

#### Change one of the pages? 
The `content` directory contains the [Markdown](https://www.markdowntutorial.com/) files which correspond to each page on the website. Simply edit these files, (re)-generate the website with [hugo](https://gohugo.io/), and then push them up to this repository with [git](https://git-scm.com/docs/gittutorial). The website will update automatically after a couple minutes. 

#### Change the content of one of the "variables"?
In the `config.toml` file, there's a set of variables defined under the __[params.variables]__ section. Editting these will update the variables used in the markdown files.  

#### Add an image to the website? 
Markdown provides a way of referencing images in the same way one creates hyperlinks. To reference the image, add it to the `static/images` directory, then create a hyperlink pointing to the image _relative to the `public` folder_. So, if an image `UN_symbol.jpg` is stored in the `static/images/` directory, then in Markdown you would reference the image via: 
> ![alternative image text]\(images/UN_symbol.jpg "Mouse over text"\)

The alternative image text should be provided to make the image accessible to people that use [screen readers](https://en.wikipedia.org/wiki/Screen_reader). The 'Mouse over text' is the text to display when you 'mouse over' the image. See the [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for examples of this. 

#### Add an youtube video to the website? 
The website is generated using [Hugo](), and there are certain shortcuts for including different types of media within a page. These shortcuts are called 'shortcodes', and are discussed more in detail [here](https://gohugo.io/content-management/shortcodes/#example-youtube-input)


  

