(function () {
  var intro = document.getElementById("intro");
  if (!intro) return;

  var remove = function () {
    if (intro && intro.parentNode) intro.parentNode.removeChild(intro);
  };

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { remove(); return; }

  var done = false;
  var finish = function () {
    if (done) return;
    done = true;
    remove();
  };

  // The acid wipe sweeps out last, so its animationend marks the true end.
  var wipe = intro.querySelector(".intro-wipe");
  if (wipe) {
    wipe.addEventListener("animationend", function (e) {
      if (e.animationName === "intro-wipe-out") finish();
    });
  }

  // safety net in case animationend does not fire, and tap or key to skip
  setTimeout(finish, 2600);
  intro.addEventListener("click", finish);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.key === "Enter" || e.key === " ") finish();
  });
})();
