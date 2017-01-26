# microdi-ts

Spike TypeScript shim for [microdi-js](https://github.com/KeithWoods/microdi-js).

TODO

* Expose `Guard` in microdi-js and use where appropriate here.
* Make onBeginResolve hook in microdi-js to give microdi-ts a chance to verify parameter count correct.
  * This hook should be passed something like: `{identifier:string|Symbol, injectedArgs:Array<Any>, additionalArgs:Array<Any>}`
* Write tests.