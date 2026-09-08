const observer = new MutationObserver((mutations) => {
   for (const mutation of mutations) {
      if (!mutation.addedNodes) {
         continue;
      }
      const target = mutation.target as HTMLElement;
      if (!target.classList.contains("name_txt")) {
         continue;
      }

      console.log(target, mutation);
   }
});

console.info("[PSCT] Adding Card observers");
for (const card of document.querySelectorAll(".cards")) {
   if (card.parentElement?.id === "start") {
      continue;
   }
   observer.observe(card, { childList: true, subtree: true });
   console.info("[PSCT] Added observer to", card);
}
