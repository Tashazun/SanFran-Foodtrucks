(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    24: function(e, t, a) {
      e.exports = a.p + "static/media/spoon.c51a13fb.svg";
    },
    25: function(e, t, a) {
      e.exports = a.p + "static/media/fork.7a73ec7c.svg";
    },
    27: function(e, t, a) {
      e.exports = a(44);
    },
    33: function(e, t, a) {},
    43: function(e, t, a) {},
    44: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        o = a(13),
        c = a.n(o),
        l = (a(33), a(18)),
        i = a.n(l),
        s = a(21),
        u = a(7),
        m = a(8),
        p = a(10),
        h = a(9),
        d = a(11),
        f = a(46),
        E = a(47),
        b = a(22),
        v = a(45),
        g = a(48),
        w = function(e) {
          return r.a.createElement(
            v.a,
            { position: e.coords },
            r.a.createElement(
              g.a,
              null,
              r.a.createElement(
                "div",
                null,
                r.a.createElement("h4", null, e.applicant),
                r.a.createElement("p", null, e.location),
                r.a.createElement("p", null, e.starttime, " - ", e.endtime),
                r.a.createElement("p", null, e.optionaltext)
              )
            )
          );
        },
        y = function(e) {
          var t = e.markers.map(function(e, t) {
            var a = Object(b.a)({}, e);
            return r.a.createElement(w, Object.assign({ key: t }, a));
          });
          return r.a.createElement(n.Fragment, null, t);
        },
        j = a(26),
        k = a(17),
        O = a(6),
        x = a(2),
        A = a.n(x);
      a(38);
      var z = (function(e) {
          function t() {
            return (
              Object(u.a)(this, t),
              Object(p.a)(this, Object(h.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: "createLeafletElement",
                value: function(e) {
                  var t = new A.a.markerClusterGroup(e);
                  return (
                    (this.contextValue = Object(j.a)({}, e.leaflet, {
                      layerContainer: t
                    })),
                    t
                  );
                }
              }
            ]),
            t
          );
        })(k.a),
        C = Object(O.b)(z);
      a(39);
      delete A.a.Icon.Default.prototype._getIconUrl,
        A.a.Icon.Default.mergeOptions({
          iconRetinaUrl: a(40),
          iconUrl: a(41),
          shadowUrl: a(42)
        });
      var U = (function(e) {
          function t() {
            var e, a;
            Object(u.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(p.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(r))
              )).state = { lat: 37.7749, lng: -122.4194 }),
              a
            );
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.data,
                    t = [this.state.lat, this.state.lng],
                    a = A.a.latLng(37.713159, -122.527084),
                    n = A.a.latLng(37.814666, -122.365723),
                    o = A.a.latLngBounds(a, n);
                  return r.a.createElement(
                    f.a,
                    {
                      center: t,
                      ref: "map",
                      maxBounds: o,
                      maxZoom: "20",
                      zoom: "13",
                      style: { height: "30em", width: "75%" }
                    },
                    r.a.createElement(E.a, {
                      attribution:
                        '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    }),
                    r.a.createElement(
                      C,
                      null,
                      r.a.createElement(y, { markers: e })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        B = (a(43), a(24)),
        I = a.n(B),
        L = a(25),
        S = a.n(L),
        T = a(12),
        D = (function(e) {
          function t() {
            var e, a;
            Object(u.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(p.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(r))
              )).state = { data: null }),
              a
            );
          }
          return (
            Object(d.a)(t, e),
            Object(m.a)(t, [
              {
                key: "componentDidMount",
                value: (function() {
                  var e = Object(s.a)(
                    i.a.mark(function e() {
                      var t, a, n;
                      return i.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  fetch(
                                    "https://data.sfgov.org/resource/bbb8-hzi6.json"
                                  )
                                );
                              case 3:
                                if ((t = e.sent).ok) {
                                  e.next = 6;
                                  break;
                                }
                                throw Error(t.statusText);
                              case 6:
                                return (e.next = 8), t.json();
                              case 8:
                                return (
                                  (a = e.sent),
                                  (e.next = 11),
                                  a.map(function(e) {
                                    return {
                                      applicant: e.applicant,
                                      coords: [
                                        e.location_2.coordinates[1],
                                        e.location_2.coordinates[0]
                                      ],
                                      endtime: e.endtime,
                                      location: e.location,
                                      optionaltext: e.optionaltext,
                                      starttime: e.starttime
                                    };
                                  })
                                );
                              case 11:
                                (n = e.sent),
                                  this.setState({ data: n }),
                                  (e.next = 18);
                                break;
                              case 15:
                                (e.prev = 15),
                                  (e.t0 = e.catch(0)),
                                  console.log(e.t0);
                              case 18:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 15]]
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "render",
                value: function() {
                  var e = this.state.data;
                  return r.a.createElement(
                    "div",
                    { id: "App-container" },
                    r.a.createElement(
                      "header",
                      { id: "App-header" },
                      r.a.createElement(
                        "div",
                        { id: "App-hero" },
                        r.a.createElement("h2", null, "Mobile Eats")
                      ),
                      r.a.createElement(
                        "div",
                        { id: "App-animations" },
                        r.a.createElement("img", {
                          src: S.a,
                          alt: "animated fork"
                        }),
                        r.a.createElement(
                          "div",
                          { id: "App-summary" },
                          r.a.createElement(
                            "h3",
                            null,
                            "Truck tracker for the San Franciscan foodie."
                          ),
                          r.a.createElement("hr", null),
                          r.a.createElement(
                            "h4",
                            null,
                            "Simply drag or zoom the map to find your next, perfect meal."
                          )
                        ),
                        r.a.createElement("img", {
                          src: I.a,
                          alt: "animated spoon"
                        })
                      )
                    ),
                    r.a.createElement(
                      "section",
                      { id: "App-map-frame" },
                      null !== e && r.a.createElement(U, { data: e })
                    ),
                    r.a.createElement(
                      "footer",
                      { id: "App-footer" },
                      r.a.createElement(
                        "div",
                        { id: "App-credits" },
                        r.a.createElement(
                          "p",
                          null,
                          "Photo by",
                          " ",
                          r.a.createElement(
                            "a",
                            {
                              href:
                                "https://unsplash.com/search/photos/tobias-zils"
                            },
                            "Tobias Zils"
                          ),
                          " ",
                          "on ",
                          r.a.createElement(
                            "a",
                            { href: "https://unsplash.com/" },
                            "Unsplash"
                          )
                        ),
                        r.a.createElement(
                          "p",
                          null,
                          "Candy coded with ",
                          r.a.createElement(T.c, null),
                          " and a few other things."
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { id: "App-links" },
                        r.a.createElement(
                          "a",
                          { href: "https://github.com/Tashazun" },
                          r.a.createElement(T.a, null)
                        ),
                        r.a.createElement(
                          "a",
                          { href: "https://www.linkedin.com/in/tashazuniga/" },
                          r.a.createElement(T.b, null)
                        ),
                        r.a.createElement(
                          "a",
                          { href: "https://twitter.com/artofobscura" },
                          r.a.createElement(T.d, null)
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      c.a.render(r.a.createElement(D, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  },
  [[27, 1, 2]]
]);
//# sourceMappingURL=main.b2106875.chunk.js.map
