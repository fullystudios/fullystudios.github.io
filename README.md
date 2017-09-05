fullystudios.github.io
=============================
Website for the Swedish agency Fully Studios

Fully Digital site is based on Jekyll, GulpJS, SASS, AutoPrefixer &amp; BrowserSync

## Jekyll Starter

This starter uses webpack, react, and jekyll.

It also includes a multi threaded rake task to sync webpack and jekyll.


## System Preparation
Only if you haven't installed Jekyll, node or Gulp installed on your machine:

1. [Jekyll](http://jekyllrb.com/) - `$ gem install jekyll`
2. [NodeJS](http://nodejs.org) - use the installer. 7.2.1 - nvm
4. [Bundle](http://bundler.io/) -  `gem install bundler`


## Local Installation
You may have to update ruby and all your local gems if they are to old:

Project requires ruby v2.4.1. See instructions for installation below
Update Ruby using rvm:
```\curl -sSL https://get.rvm.io | bash -s stable```
```rvm install ruby-2.4.1```
```rvm use ruby-2.4.1```

If you get problems with "WARN: Unresolved spec during Gem...", try running this to clean up old gems:
```bundle clean --force``

Update gems:
```gem update```

1. Clone this repo, or download it into a directory of your choice.
2. Change to branch develop 
3. Inside the directory, run: 
- `nvm use 7.2.1`
- if you dont have node 7.2.1 run `nvm install 7.2.1`
- if you dont have webpack run `npm install -g webpack`
- if you dont have bundler run `gem install bundler` (see above)
- `npm install`
- `bundle install`


## Usage 
To run in dev mode: `rake start`
To build: `rake b`


#### Error?
If nothing happens after 20s when you run `rake start`, try run `rake b`. If you get following error:
```jekyll 3.4.3 | Error:  "\xE6" on US-ASCI```
Do the following:

1. In terminal, run `locale`. If LANG or LC_ALL is blank:
2. Run `cd` and `sudo nano /etc/profile`
3. Copy paste this in the end and save:
    ```
export LC_ALL=sv_SE.UTF-8  
export LANG=sv_SE.UTF-8
    ````
5. Restart you terminal
4. run `locale` and confirm the changes. 

Error: ```jekyll 3.5.0 | Error:  undefined method `registers' for nil:NilClass```
1. gem install jekyll -v 3.5.2
2. bundle update jekyll


## Tips and tricks
* Breake browser cache: simple add this string appending to a file url: `?{{site.time | date: '%s%N'}}` eg `<script src="{{ boundle_src | prepend: site.baseurl }}?{{site.time | date: '%s%N'}}"></script>`


**jekyll**

As this is just a Jekyll project, you can use any of the commands listed in their [docs](http://jekyllrb.com/docs/usage/)


## Manual deployment
1. in _config.yml, make sure the baseurl is correct
2. run rake b
3. Move all files in pulic to the server


### Markdown
Get highlighting in markdown files in Sublime:
1. Install Package Markdown Extended
2. Activatel package ctrl + shift + p and select Markdown Extended
3. Set default: Navigate through the following menus in Sublime Text: View -> Syntax -> Open all with current extension as... -> Markdown Extended
...


## CREDITS:

based on [jekyll-webpack-react-starter](https://github.com/mdxprograms/jekyll-webpack-react) by mdxprograms