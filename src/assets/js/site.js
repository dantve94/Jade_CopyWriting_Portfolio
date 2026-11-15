// Work page filters. Without JavaScript the page simply shows every section.
(function () {
  var group = document.querySelector(".filters");
  if (!group) return;
  var chips = group.querySelectorAll(".chip");
  var sections = document.querySelectorAll(".work-section");
  var valid = Array.prototype.map.call(chips, function (c) { return c.dataset.filter; });

  function apply(filter, updateUrl) {
    if (valid.indexOf(filter) === -1) filter = "all";
    chips.forEach(function (c) {
      c.setAttribute("aria-pressed", String(c.dataset.filter === filter));
    });
    sections.forEach(function (s) {
      s.hidden = filter !== "all" && s.dataset.section !== filter;
    });
    if (updateUrl) {
      var url = filter === "all" ? location.pathname : location.pathname + "#" + filter;
      history.replaceState(null, "", url);
    }
  }

  group.hidden = false;
  chips.forEach(function (c) {
    c.addEventListener("click", function () { apply(c.dataset.filter, true); });
  });

  // Links like /work/#blogs open with that filter applied.
  var initial = location.hash.replace("#", "");
  if (initial) {
    apply(initial, false);
    window.scrollTo(0, 0);
  }
})();
