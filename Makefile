all:
	npm install
	./node_modules/gulp/bin/gulp.js serve

serve:
	./node_modules/gulp/bin/gulp.js serve

build:
	./node_modules/gulp/bin/gulp.js build

clean:
	./node_modules/gulp/bin/gulp.js clean

cleanall:
	rm -rf ./node_modules


