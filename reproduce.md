1. Installed the laest version of `wrangler`:

```
➜  wrangler-troubleshooting npx wrangler --version
 ⛅️ wrangler 3.1.1
 ```

2. Created a new project:

```
➜  wrangler-troubleshooting npx wrangler init
 ⛅️ wrangler 3.1.1
------------------
Using npm as package manager, as there is already a package-lock.json file.
▲ [WARNING] The `init` command is no longer supported. Please use `npm create cloudflare@2` instead.

  The `init` command will be removed in a future version.


Running `npm create cloudflare@2`...
Need to install the following packages:
  create-cloudflare@2.0.10
Ok to proceed? (y) y

using create-cloudflare version 2.0.10

╭ Create an application with Cloudflare Step 1 of 3
│
├ Where do you want to create your application?
│ dir troubleshoot
│
├ What type of application do you want to create?
│ type Example router & proxy Worker
│
├ Do you want to use TypeScript?
│ typescript yes
│
├ Copying files from "common" template
│
├ Do you want to use git for version control?
│ git yes
│
╰ Application created

╭ Installing dependencies Step 2 of 3
│
├ Installing dependencies
│ installed via `npm install`
│
├ Committing new files
│ git initial commit
│
╰ Dependencies Installed

╭ Deploy with Cloudflare Step 3 of 3
│
├ Do you want to deploy your application?
│ no deploying via `npm run deploy`
│
├  APPLICATION CREATED  Deploy your application with npm run deploy
│
│ Run the development server npm run start
│ Deploy your application npm run deploy
│ Read the documentation https://developers.cloudflare.com/workers
│ Stuck? Join us at https://discord.gg/cloudflaredev
│
╰ See you again soon!
```

3. Create KV namespace for debugging purposes:

```
➜  troubleshoot git:(main) ✗ npx wrangler kv:namespace create wrangler_troubleshooting
 ⛅️ wrangler 3.1.1
------------------
✔ Select an account › ...
🌀 Creating namespace with title "troubleshoot-wrangler_troubleshooting"
✨ Success!
Add the following to your configuration file in your kv_namespaces array:
{ binding = "wrangler_troubleshooting", id = "..." }
```

4. Added KV binding to `wrangler.toml`, where both `preview_id` and `id` is the `id` of the KV namespace from step 3:


```
kv_namespaces = [
  { binding = "KV_TEST", id = "...", preview_id = "..." },
]
```
And added TS type to `worker-configuration.d.ts`:
```ts
interface Env {
	wrangler_troubleshooting: KVNamespace;
}
```


5. 