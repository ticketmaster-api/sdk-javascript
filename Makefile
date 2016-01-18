install: node_modules/

clean:
	@rm -rf node_modules/

node_modules/:
	@npm install

test: node_modules/
	@npm test
