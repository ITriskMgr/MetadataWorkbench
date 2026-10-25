// Language switch for the Metadata Workbench pages: ?lang=fr|en, then a remembered choice, then the browser.
(function () {
  var html = document.documentElement;
  function stored() { try { return localStorage.getItem("mw-lang"); } catch (e) { return null; } }
  function remember(l) { try { localStorage.setItem("mw-lang", l); } catch (e) { /* private mode */ } }
  var q = (location.search.match(/[?&]lang=(fr|en)\b/) || [])[1];
  var lang = q || stored() || ((navigator.language || "en").toLowerCase().indexOf("fr") === 0 ? "fr" : "en");
  function apply(l) {
    html.setAttribute("lang", l);
    var t = document.querySelector('meta[name="title-' + l + '"]');
    if (t) document.title = t.getAttribute("content");
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-set") === l));
    });
    document.querySelectorAll("a[data-keep-lang]").forEach(function (a) {
      var base = a.getAttribute("href").split("?")[0].split("#");
      a.setAttribute("href", base[0] + "?lang=" + l + (base[1] ? "#" + base[1] : ""));
    });
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".lang button");
    if (b) { var l = b.getAttribute("data-set"); remember(l); apply(l); }
  });
  apply(lang);
  document.addEventListener("DOMContentLoaded", function () { apply(html.getAttribute("lang")); });
})();
