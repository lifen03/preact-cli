const { join } = require('path');
const shell = require('shelljs');
const { subject } = require('./lib/output');

describe('preact info', () => {
	it('--src', async () => {
		let dir = await subject('minimal');
		shell.exec(`npm --prefix ${dir} i preact preact-render-to-string`);

		const _cwd = process.cwd();

		shell.cd(dir);
		const { code, stdout } = shell.exec('npx preact info');
		['OS', 'Node', 'preact', 'preact-render-to-string'].forEach(label => {
			expect(stdout).toMatch(`${label}:`);
		});
		expect(code).toBe(0);

		shell.cd(_cwd);
	});

	describe('CLI Options', () => {
		it('--invalid-arg', () => {
			const { code, stderr } = shell.exec(
				`node ${join(__dirname, '../lib/index.js')} info --invalid-arg`
			);
			expect(stderr).toMatch(
				"Invalid argument '--invalid-arg' passed to info."
			);
			expect(code).toBe(1);
		});
	});
});
