
browser.contextMenus.create(
  {
    id: "firepen-open",
    title: "Open Firepen",
    contexts: ["all"],
    icons: {
      "48" : "/assets/icons/pfp.png"
    }
  },
  onCreated
);

browser.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "firepen-open":
      console.log("successfully opened");
      break;
    // …
  }
});

function onError(error) {
  console.log(`Error: ${error}`);
}

function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}