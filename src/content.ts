const observer = new MutationObserver(async (mutations) => {
   for (const mutation of mutations) {
      if (!mutation.addedNodes) {
         continue;
      }
      const target = mutation.target as HTMLElement;
      if (!target.classList.contains("name_txt")) {
         continue;
      }

      const descriptionUrl = chrome.runtime.getURL(`descriptions/${target.textContent}.html`);
      try {
         target.closest(".cards")!.querySelector("#preview_txt .os_viewport")!.innerHTML = await (
            await fetch(new Request(descriptionUrl))
         ).text();
      } catch {}
   }
});

for (const card of document.querySelectorAll(".cards")) {
   if (card.parentElement?.id === "start") {
      continue;
   }
   observer.observe(card, { childList: true, subtree: true });
}
