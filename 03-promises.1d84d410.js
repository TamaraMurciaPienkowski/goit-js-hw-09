!function(){var n=document.querySelector(".form");function e(n,e){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:n,delay:e}):t({position:n,delay:e})}),e)}))}n.addEventListener("submit",(function(o){o.preventDefault();for(var t=parseInt(n.delay.value,10),a=parseInt(n.step.value,10),i=parseInt(n.amount.value,10),c=0;c<i;c++)e(c+1,t+c*a).then((function(n){var e=n.position,o=n.delay;console.log("✅ Fulfilled promise ".concat(e," in ").concat(o,"ms"))})).catch((function(n){var e=n.position,o=n.delay;console.log("❌ Rejected promise ".concat(e," in ").concat(o,"ms"))}))}))}();
//# sourceMappingURL=03-promises.1d84d410.js.map