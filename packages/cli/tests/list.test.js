const { join } = require('path');
const shell = require('shelljs');

describe('preact list', () => {
	it('lists the official templates', () => {
		const { code, stdout } = shell.exec(
			`node ${join(__dirname, '../lib/index.js')} list`
		);
		[
			'default',
			'netlify',
			'simple',
			'typescript',
			'widget',
			'widget-typescript',
		].forEach(repoName => {
			expect(stdout).toMatch(new RegExp(`${repoName}.* -`, 'g'));
		});
		expect(code).toBe(0);
	});

	describe('CLI Options', () => {
		it('--invalid-arg', () => {
			const { code, stderr } = shell.exec(
				`node ${join(__dirname, '../lib/index.js')} list --invalid-arg`
			);
			expect(stderr).toMatch(
				"Invalid argument '--invalid-arg' passed to list."
			);
			expect(code).toBe(1);
		});
	});
});
