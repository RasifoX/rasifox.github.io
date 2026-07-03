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

  var bottom = intro.querySelector(".intro-panel.bottom");
  if (bottom) bottom.addEventListener("animationend", finish);

  // safety net in case animationend does not fire, and tap to skip
  setTimeout(finish, 2500);
  intro.addEventListener("click", finish);
})();
