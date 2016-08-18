## Synopsis

This project is a nodejs-react frontend for my personal blog/website served by amiller-python backend. It displays blog posts, snowboarding trip pictures, fishing pictures, and my music taste. Pull requests welcome! :)


## Motivation

The purpose of this project is to get familiar with nodejs ecosystem and react framework.


## Installation

There is a makefile and run.sh script included to get you going. But they are not needed if you are already familiar with nodejs projects. Simply do an npm install && ./node_modules/gulp/bin/gulp.js serve


## TODO (frontend and backend mixed)
You'll notice that alot of functionality is missing. Trying to do as much wire framing as I can and then I will switch over to the backend.

Pipeline for easy updating and deployments

Tooo much white, needs some color. Some type of bootstrap themeing would be the best

Gallery work for snowboarding and fishing

The Blog system, no DB.

The Blog comment sections, needs blackholeDB. :)

Bootstrap and jQuery included the node way and not in index.html

Google analytics integration

Env file for secret info like DB passwords and such

Music page needs last.fm and spotify integration

Some type of "Shell process" that can take images from a folder, scale them to 4 different sizes (for the gallery), upload them to AWS, and adds a gallery json block to the gallery json array file.

Mailing list sign up, email, and auto notify functionality. Should trigger on a latest_news posts

latest news should only show the last N posts, but be pageable/drop openable

Gallery expiring link integration

## Contributors

Drew Miller


## License

MIT License

Copyright (c) 2016 Drew Miller

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
