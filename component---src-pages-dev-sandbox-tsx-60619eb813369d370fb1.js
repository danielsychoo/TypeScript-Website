(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/wcJ":function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("ERkP"),o=t.n(a),i=t("rAX/"),r=function(e){var n=e.children,t=e.hideOnTouch;return Object(a.useEffect)((function(){if(Object(i.a)()){for(var e=document.getElementById("touch-suppressible");e.firstChild;)e.removeChild(e.firstChild);if(t)return;var n=document.createElement("h4");n.textContent="Section best on a computer";var a=document.createElement("p");a.textContent="This part of the site does not run well on a touch-oriented browser. We recommend switching to a computer to carry on.",e.appendChild(n),e.appendChild(a)}}),[]),o.a.createElement("div",{id:"touch-suppressible"},n)}},"73Cn":function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("ERkP"),o=t("Wbzz"),i=function(e){var n=function(n){return e.active&&e.active.toLowerCase()===n?"active":""};return a.createElement("nav",{className:"navbar-sub dev-tools"},a.createElement("ul",{className:"nav"},a.createElement("li",{className:"name"},a.createElement("h3",null,"Developer Tools")),a.createElement("li",{style:{display:"none"}},a.createElement("a",{className:n("compiler api"),href:Object(o.withPrefix)("/dev/compiler")},"Compiler API")),a.createElement("li",null,a.createElement("a",{className:n("sandbox"),href:Object(o.withPrefix)("/dev/sandbox")},"Sandbox")),a.createElement("li",null,a.createElement("a",{className:n("twoslash"),href:Object(o.withPrefix)("/dev/twoslash")},"Twoslash")),a.createElement("li",null,a.createElement("a",{className:n("typescript vfs"),href:Object(o.withPrefix)("/dev/typescript-vfs")},"TypeScript VFS")),a.createElement("li",null,a.createElement("a",{className:n("playground plugins"),href:Object(o.withPrefix)("/dev/playground-plugins")},"Playground Plugins")),a.createElement("li",null,a.createElement("a",{className:n("bug workbench"),href:Object(o.withPrefix)("/dev/bug-workbench")},"Bug Workbench"))))}},pzji:function(e,n,t){},"rAX/":function(e,n,t){"use strict";function a(){var e=!1;if("maxTouchPoints"in navigator)e=navigator.maxTouchPoints>0;else if("msMaxTouchPoints"in navigator)e=navigator.msMaxTouchPoints>0;else{var n="undefined"!=typeof window&&window.matchMedia&&matchMedia("(pointer:coarse)");if(n&&"(pointer:coarse)"===n.media)e=!!n.matches;else if("orientation"in window)e=!0;else{var t=navigator.userAgent;e=/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(t)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(t)}}return e}t.d(n,"a",(function(){return a}))},ywWb:function(e,n,t){"use strict";t.r(n),function(e){var a=t("a1TR"),o=t.n(a),i=(t("3yYM"),t("Ab9Y")),r=t("ERkP"),s=t.n(r),c=t("9Dj+"),l=t("Wbzz"),d=(t("pzji"),t("GO2c")),p=t("73Cn"),m=t("rAX/"),u=t("/wcJ"),h=function(n){return Object(r.useEffect)((function(){if(!Object(m.a)()){var n=document.createElement("script");n.src=Object(l.withPrefix)("/js/vs.loader.js"),n.async=!0,n.onload=function(){var n=e.require;n.config({paths:{vs:"https://typescript.azureedge.net/cdn/4.0.5/monaco/min/vs",sandbox:Object(l.withPrefix)("/js/sandbox")},ignoreDuplicateModules:["vs/editor/editor.main"]}),n(["vs/editor/editor.main","vs/language/typescript/tsWorker","sandbox/index"],function(){var e=Object(i.a)(o.a.mark((function e(n,t,a){var i,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return'import {markdown, danger} from "danger"\n\nexport default async function () {\n    // Check for new @types in devDependencies\n    const packageJSONDiff = await danger.git.JSONDiffForFile("package.json")\n    const newDeps = packageJSONDiff.devDependencies.added\n    const newTypesDeps = newDeps?.filter(d => d.includes("@types")) ?? []\n\n    if (newTypesDeps.length){\n        markdown("Added new types packages " + newTypesDeps.join(", "))\n    }\n}',n&&t&&a&&(null===(i=document.getElementById("loader").parentNode)||void 0===i||i.removeChild(document.getElementById("loader"))),document.getElementById("monaco-editor-embed").style.display="block",e.next=6,a.createTypeScriptSandbox({text:'import {markdown, danger} from "danger"\n\nexport default async function () {\n    // Check for new @types in devDependencies\n    const packageJSONDiff = await danger.git.JSONDiffForFile("package.json")\n    const newDeps = packageJSONDiff.devDependencies.added\n    const newTypesDeps = newDeps?.filter(d => d.includes("@types")) ?? []\n\n    if (newTypesDeps.length){\n        markdown("Added new types packages " + newTypesDeps.join(", "))\n    }\n}',compilerOptions:{},domID:"monaco-editor-embed",useJavaScript:!1},n,t);case 6:(r=e.sent).editor.focus(),setTimeout((function(){document.querySelectorAll(".html-code").forEach((function(e){r.monaco.editor.colorize(e.textContent||"","html",{tabSize:2}).then((function(n){e.innerHTML=n}))})),document.querySelectorAll(".ts-code").forEach((function(e){r.monaco.editor.colorize(e.textContent||"","typescript",{tabSize:2}).then((function(n){e.innerHTML=n}))}))}),300);case 9:case"end":return e.stop()}}),e)})));return function(n,t,a){return e.apply(this,arguments)}}())},document.body.appendChild(n)}}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{title:"Developers - Sandbox",description:"The TypeScript sandbox powers the TypeScript Playground. Learn how you can make your experiences like the playground using the sandbox.",lang:"en"},s.a.createElement("div",{id:"dev"},s.a.createElement(p.a,{active:"sandbox"}),s.a.createElement("div",{className:"raised content main-content-block"},s.a.createElement("div",{className:"split-sixhundred"},s.a.createElement("h1",{style:{marginTop:"20px"}},"TypeScript Sandbox"),s.a.createElement("p",null,"A DOM library for interacting with TypeScript and JavaScript code, which powers the heart of the ",s.a.createElement("a",{href:Object(l.withPrefix)("/play/")},"TypeScript playground")),s.a.createElement("p",null,"You can use the TypeScript sandbox for:"),s.a.createElement("ul",null,s.a.createElement("li",null,"Building IDE-like experiences for people to explore your library's API"),s.a.createElement("li",null,"Building interactive web tools which use TypeScript, with a lot of the Playgrounds developer experience for free")),s.a.createElement("p",null,"For example, the sandbox to the side has grabbed the Types for ",s.a.createElement("a",{href:"https://danger.systems/js/"},"DangerJS")," with no modifications for this code sample. This is because the Playground's Automatic Type Acquisition is enabled by default. It will also look for the same parameters for code, and selection indexes inside the URL."),s.a.createElement("p",null,"Try clicking ",s.a.createElement("a",{href:"?q=1#code/PTAEBUAsFMGdtAYwPYFtXQHYBdagO7QBOCiJAhttACagCWmo2MEAngA7QDKZd72oAAoAbcqwDmRZAFdM1AFAhQ5OUxiNmCAKoAlADKhI5WJALGkydnRqhkAN2JNkahJmj5QuvfMVgodPAwVPBVWUHYpACtoRAFpWAZxNk4eIj4BWBVqACNkAA84JBVfUGhjOmEw+FUUagRyKVlabGcyxFNkTSJQHxRMWAEYYWFnAF5QACIACWhh5wB1ZCJhagn5PthkYWgAOhHxAAohkYBKIA"},"this URL")," to see that in action. "),s.a.createElement("p",null,"This library builds on top of the ",s.a.createElement("a",{href:"https://microsoft.github.io/monaco-editor/index.html"},"Monaco Editor"),", providing a higher level API but offering access to all the lower-level APIs via a single ",s.a.createElement("code",null,"sandbox")," object."),s.a.createElement("p",null,"You can find the code for the TypeScript Sandbox inside the ",s.a.createElement("a",{href:"https://github.com/microsoft/TypeScript-Website/tree/v2/packages/sandbox#typescript-sandbox"},"microsoft/TypeScript-Website")," mono-repo.")),s.a.createElement(u.a,{hideOnTouch:!0},s.a.createElement("div",{className:"sixhundred",style:{borderLeft:"1px solid gray"}},s.a.createElement("div",{id:"loader"},s.a.createElement("div",{className:"lds-grid"},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null)),s.a.createElement("p",{id:"loading-message",role:"status"},"Downloading Sandbox...")),s.a.createElement("div",{style:{height:"400px",display:"none"},id:"monaco-editor-embed"})))),s.a.createElement("div",{className:"raised main-content-block"},s.a.createElement("h2",null,"Usage"),s.a.createElement("p",null,"A sandbox uses the same tools as monaco-editor, meaning this library is shipped as an AMD bundle which you can use the ",s.a.createElement("a",{href:"https://github.com/microsoft/vscode-loader/"},"VSCode Loader")," to ",s.a.createElement("code",null,"require"),"."),s.a.createElement("p",null,"Because we need it for the TypeScript website, you can use our hosted copy ",s.a.createElement("a",{href:"https://typescriptlang.org/js/vs.loader.js",title:"Link to the JS for the visual studio require loader"},"here.")),s.a.createElement("h3",null,"Get Started"),s.a.createElement("p",null,"Create a new file: ",s.a.createElement("code",null,"index.html")," and paste this code into that file."),s.a.createElement("pre",null,s.a.createElement("code",{className:"html-code"},"<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n  </head>\n  <div id=\"loader\">Loading...</div>\n  <div id=\"monaco-editor-embed\" style=\"height: 800px;\" />\n  <script>\n    // First set up the VSCode loader in a script tag\n    const getLoaderScript = document.createElement('script')\n    getLoaderScript.src = 'https://www.typescriptlang.org/js/vs.loader.js'\n    getLoaderScript.async = true\n    getLoaderScript.onload = () => {\n      // Now the loader is ready, tell require where it can get the version of monaco, and the sandbox\n      // This version uses the latest version of the sandbox, which is used on the TypeScript website\n\n      // For the monaco version you can use unpkg or the TypeSCript web infra CDN\n      // You can see the available releases for TypeScript here:\n      // https://typescript.azureedge.net/indexes/releases.json\n      //\n      require.config({\n        paths: {\n          vs: 'https://typescript.azureedge.net/cdn/4.0.5/monaco/min/vs',\n          // vs: 'https://unpkg.com/@typescript-deploys/monaco-editor@4.0.5/min/vs',\n          sandbox: 'https://www.typescriptlang.org/js/sandbox',\n        },\n        // This is something you need for monaco to work\n        ignoreDuplicateModules: ['vs/editor/editor.main'],\n      })\n\n      // Grab a copy of monaco, TypeScript and the sandbox\n      require(['vs/editor/editor.main', 'vs/language/typescript/tsWorker', 'sandbox/index'], (\n        main,\n        _tsWorker,\n        sandboxFactory\n      ) => {\n        const initialCode = `import {markdown, danger} from \"danger\"\n\nexport default async function () {\n    // Check for new @types in devDependencies\n    const packageJSONDiff = await danger.git.JSONDiffForFile(\"package.json\")\n    const newDeps = packageJSONDiff.devDependencies.added\n    const newTypesDeps = newDeps?.filter(d => d.includes(\"@types\")) ?? []\n    if (newTypesDeps.length){\n        markdown(\"Added new types packages \" + newTypesDeps.join(\", \"))\n    }\n}\n`\n\n        const isOK = main && window.ts && sandboxFactory\n        if (isOK) {\n          document.getElementById('loader').parentNode.removeChild(document.getElementById('loader'))\n        } else {\n          console.error('Could not get all the dependencies of sandbox set up!')\n          console.error('main', !!main, 'ts', !!window.ts, 'sandbox', !!sandbox)\n          return\n        }\n\n        // Create a sandbox and embed it into the the div #monaco-editor-embed\n        const sandboxConfig = {\n          text: initialCode,\n          compilerOptions: {},\n          domID: 'monaco-editor-embed',\n        }\n\n        sandboxFactory.createTypeScriptSandbox(sandboxConfig, main, window.ts).then(sandbox => {\n          sandbox.editor.focus()\n        })\n      })\n    }\n\n    document.body.appendChild(getLoaderScript)\n  <\/script>\n</html>")),s.a.createElement("p",null,"Opening the file ",s.a.createElement("code",null,"index.html")," in a web browser will load up the same sandbox up at the top of the page."),s.a.createElement("h3",null,"Some examples of the API"),f.map((function(e){return s.a.createElement("div",{className:"split-code",key:e.blurb},s.a.createElement("p",null,e.blurb),s.a.createElement("pre",null,s.a.createElement("code",{className:"ts-code"},e.code.trim())))})),s.a.createElement("p",null,"The API is mainly a light shim over the ",s.a.createElement("a",{href:"https://microsoft.github.io/monaco-editor/api/index.html"},"monaco-editor API")," with the ",s.a.createElement("a",{href:"https://github.com/microsoft/monaco-typescript"},"monaco-typescript API"),".")))))};n.default=function(e){return s.a.createElement(d.a,{locale:"en"},s.a.createElement(h,e))};var f=[{blurb:"Converting the user's TypeScript into JavaScript",code:"const sandbox = await createTypeScriptSandbox(sandboxConfig, main, ts)\n\n// Async because it needs to go  \nconst js = await sandbox.getRunnableJS()\nconsole.log(js)"},{blurb:"Get the DTS for the user's editor",code:"const sandbox = await createTypeScriptSandbox(sandboxConfig, main, ts)\n\nconst dts = await sandbox.getDTSForCode()\nconsole.log(dts)"},{blurb:"Make a request for an LSP response",code:"const sandbox = await createTypeScriptSandbox(sandboxConfig, main, ts)\n\n// A worker here is a web-worker, set up by monaco-typescript\n// which does the computation in the background \nconst worker = await sandbox.getWorkerProcess()\nconst definitions =  await client.getDefinitionAtPosition(model.uri.toString(), 6)\n  "},{blurb:"Change compiler flags using a few different APIs",code:'const sandbox = await createTypeScriptSandbox(sandboxConfig, main, ts)\n\n// Hook in to all changes to the compiler\nsandbox.setDidUpdateCompilerSettings((newOptions) => {\n  console.log("Compiler settings changed: ", newOptions)\n})\n\n// Update via key value\nsandbox.updateCompilerSetting("allowJs", true)\n// Update via an object\nsandbox.updateCompilerSettings({ jsx: 0 })\n// Replace the compiler settings\nsandbox.setCompilerSettings({})\n'},{blurb:"Highlight some code in the editor",code:"const sandbox = await createTypeScriptSandbox(sandboxConfig, main, ts)\n\nconst start = {\n  lineNumber: 0,\n  column: 0\n}\n\nconst end = {\n  lineNumber: 0,\n  column: 4\n}\n\nconst decorations = sandbox.editor.deltaDecorations([], [\n  {\n    range: new sandbox.monaco.Range(start.lineNumber, start.column, end.lineNumber, end.column),\n    options: { inlineClassName: 'error-highlight' },\n  },\n])\n"}]}.call(this,t("fRV1"))}}]);
//# sourceMappingURL=component---src-pages-dev-sandbox-tsx-60619eb813369d370fb1.js.map