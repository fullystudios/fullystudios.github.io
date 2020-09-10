[![fullystudios.se](https://fullystudios.se/mailsignatur/fully-studios.gif)](https://fullystudios.se)

Website for the Swedish agency Fully Studios

[Fully Studios site](https://fullystudios.se) is build on [Jekyll](https://jekyllrb.com/) in combination with [Webpack](https://webpack.js.org/) where we run [Babel](https://babeljs.io/) to be able to compile ES6+ code to ES5.


## System Preparation
Only if you haven't installed Jekyll, node or Gulp installed on your machine:

1. [NodeJS](http://nodejs.org) - v7.2.1 [Download here](https://nodejs.org/en/download/)
2. [Ruby](https://www.ruby-lang.org/) v2.5.1. Instructions for installation belove:
3. [Bundle](http://bundler.io/) -  `gem install bundler`

Update Ruby using [rvm](https://rvm.io/):
0. (only Linux:) `sudo apt install gnupg2`
1. `gpg2 --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB`
2. `\curl -sSL https://get.rvm.io | bash -s stable`
3. `rvm install ruby-2.5.1`
4. `rvm use ruby-2.5.1`


## Local Installation
You may have to update ruby and all your local gems if they are to old:

Update gems:
```gem update```

1. Clone this repo, or download it into a directory of your choice.
2. Change to branch develop
3. Inside the directory, run (if you have an old node version):
- `nvm use 7.2.1` ()
- if you dont have node 7.2.1 run `nvm install 7.2.1`
- if you dont have bundler run `gem install bundler` (see above)
- `npm install`
- `bundle install`


## Usage
To run in dev mode: `npm run start`
To build for deployment: `npm run build`


## Error?

If you don't have ruby -v 2.5.1 and cant install due to permissions error in homebrew. Check this out:
https://github.com/rvm/rvm/issues/4402
Steps:
1. rvm get master
2. rvm install 2.5.1
3. rvm use 2.5.1

If your js file does not compile, it´s probably a js error. Try running webpack with `--verbose` and see if you have any errors:
```npm run webpack --verbose```

If you get this problem `WARN: Unresolved spec during Gem...`, try running this to clean up old gems:
```bundle clean --force``

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
1. gem install jekyll -v 3.8.5
2. bundle update jekyll

Error: `rvm not found`
[https://stackoverflow.com/questions/11677771/rvm-command-not-found-mac-ox](Sourcepath)
You need to add path to bash

Error: `Address already in use`
The port :4000 is already in use by another instance of node. Try `killall node` to terminate all other processes and run `npm run start` again.

## Tips and tricks
* Break browser cache: simple add this string appending to a file url: `?{{site.time | date: '%s%N'}}` eg `<script src="{{ boundle_src | prepend: site.baseurl }}?{{site.time | date: '%s%N'}}"></script>`

#### jekyll

As this is just a Jekyll project, you can use any of the commands listed in their [docs](http://jekyllrb.com/docs/usage/). But notice that the js files wont update because they is compiled with Webpack and Babel to ES5.

#### Markdown
Get highlighting in markdown files in Sublime:
1. Install Package Markdown Extended
2. Activatel package ctrl + shift + p and select Markdown Extended
3. Set default: Navigate through the following menus in Sublime Text: View -> Syntax -> Open all with current extension as... -> Markdown Extended
...

## Automatic stage deploy
1. Get access from Jonas to https://vercel.com/fullystudios
2. run npx vercel to make a initial local config on you system (connect to project fs and choose location ./public)
3. run `npm run stage`

## Manual deployment
1. in _config.yml, make sure the baseurl is correct
2. rake build
3. Move all files in pulic to the server EXCEPT robots.txt
4 .Push all files to master (if you want, you can use `npm run publish` for this)



## CREDITS:

based on [jekyll-webpack-react-starter](https://github.com/mdxprograms/jekyll-webpack-react) by mdxprograms
