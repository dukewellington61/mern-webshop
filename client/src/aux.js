window.addEventListener("message", (message) => {
  if (message === "iframe") {
    console.log("iframe");
    document.querySelector("html").style.overflow = "hidden";
  }
});
