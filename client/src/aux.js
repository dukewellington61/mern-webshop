window.addEventListener("message", (message) => {
  if (message.data === "iframe") {
    console.log("iframe");
    document.querySelector("html").style.overflow = "hidden";
  }
});
