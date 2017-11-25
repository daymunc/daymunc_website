# DAYMUNC
This repository maintains the source files used to update and maintain the __Dayton Model United Nations Regional Conference Website__.
The website can be viewed through the canonical URL http://www.daymunc.org, or through the source URL https://daymunc.github.io/daymunc_website/.
If there is disagreement between these two, the latter is up to date, and the former just needs a little bit of time to refresh.

###  How the website works
The purpose of this effort is to enable SG's and other DAYMUNC staff members to maintain the DAYMUNC website themselves.

To make a change to the website, there are two options:

1) Update the site with [forestry.io](https://forestry.io/) (easier to use)
2) [Push](http://anitacheng.com/git-for-non-developers) changes to the master branch, and then update the gh-pages branch.

You need admin access to this repository.
Either request access by making an [issue](https://github.com/daymunc/daymunc_website/issues) here
or contact me (Matt) at matt.piekenbrock (at) gmail.

All changes and updates are recorded.

### More details

The actual 'HTML' is generated in the 'gh-pages' [branch](https://git-scm.com/book/en/v1/Git-Branching-What-a-Branch-Is).
When the [gh-pages](https://github.com/daymunc/daymunc_website/tree/gh-pages) is updated all changes are will be reflected on the website.

The actual hosting is done via [GitHub Pages](https://pages.github.com/). The website was designed to be a _static_ website, generated via [Hugo](https://gohugo.io/).
If you use the forestry.io to make the changes, you don't really need to know these.

The website is principally designed to be maintainable by future, non-technical Secretary Generals (SGs) and DAYMUNC staff members.
That being said, contributing updates does require a bit of technical capability, namely the ability to:

- Navigate the interface at Forestry.io if using option 1, or
- Use [Markdown](https://www.markdowntutorial.com/) to create or update page content on the website (option 2)
- Use [git](https://git-scm.com/docs/gittutorial) or [GitHub Desktop](https://help.github.com/desktop/guides/) to make changes to this repository (option 2)

## FAQ

#### How do I get started?
There is a guide specifically aimed for SGs to use to update this repository at: (TODO)

### How do I....

#### Change one of the pages?

##### With Forestry
Assuming you have the site setup with Forestry, go to any page under the "Pages" section on the left sidebar,
make your changes, and then click "Publish." Make sure it's not a draft. Note that Publishing any single page will
actually rebuild the entire site, and publish all non-draft changes.

##### Without Forestry
The `content` directory contains the [Markdown](https://www.markdowntutorial.com/) files which correspond to each page on the website.
Edit these files, and then regenerate the website with [hugo](https://gohugo.io/). This has a bit of learning curve, but just requires you
to run the `hugo` command once from the terminal.

Then, using [git](https://git-scm.com/docs/gittutorial), run the command in the `commit-gh-pages.sh` file at the top level directory, which will
commit the changes to the `gh-pages` branch. Finally, push up the changes to this repository, and the website should update.

#### Change the content of one of the "variables"?
In several of the pages, there's 'variables' that look like this: `{{< variables daymunc_date >}}`
These are meta-data fields which are defined once (in one file), and are used several times throughout the site.
This allows things that get repeated a lot (like the DAYMUNC roman numeral) to get reused without requiring the
SG's/whoever to change it 23 times in every single page.

These shortcuts are called 'shortcodes', and are discussed more in detail [here](https://gohugo.io/content-management/shortcodes/#example-youtube-input)
To update one of these:

##### With Forestry
Go to the 'Site Params' section on the forestry site dashboard, click 'variables', then edit the fields.

##### Without Forestry
In the `config.toml` file, there's a set of variables defined under the __[params.variables]__ section.
Editing these will update the variables used in the markdown files.

#### Add an image to the website?
Markdown provides a way of referencing images in the same way one creates hyperlinks. To reference the image, add it to the `static/images` directory, then create a hyperlink pointing to the image _relative to the `public` folder_. So, if an image `UN_symbol.jpg` is stored in the `static/images/` directory, then in Markdown you would reference the image via:
> ![alternative image text]\(images/UN_symbol.jpg "Mouse over text"\)

The alternative image text should be provided to make the image accessible to people that use [screen readers](https://en.wikipedia.org/wiki/Screen_reader). The 'Mouse over text' is the text to display when you 'mouse over' the image. See the [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for examples of this.

#### Add an youtube video to the website?
The website is generated using [Hugo](gohugo.io), and there are certain shortcuts for including different types of media within a page.

#### Do something not mentioned here?
Contact me (Matt).


