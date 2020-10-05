module.exports = class {
	render(context) {
		const TestLayout = require('./test.11ty.js')
		const test = new TestLayout

		return 'Base layout, content: ' + test.render(context)
	}
}
