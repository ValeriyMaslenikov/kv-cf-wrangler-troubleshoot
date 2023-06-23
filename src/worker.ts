export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const testKey = 'test-key';
		console.log(await env.wrangler_troubleshooting.put(testKey, 'test-value'));
		console.log(await env.wrangler_troubleshooting.get(testKey));

		return new Response(JSON.stringify({ Hello: 'World!' }));
	},
};
