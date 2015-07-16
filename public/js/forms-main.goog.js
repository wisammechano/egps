(function () {
  var h,
  l = this;
  function aa(a) {
    var b = typeof a;
    if ('object' == b) if (a) {
      if (a instanceof Array) return 'array';
      if (a instanceof Object) return b;
      var c = Object.prototype.toString.call(a);
      if ('[object Window]' == c) return 'object';
      if ('[object Array]' == c || 'number' == typeof a.length && 'undefined' != typeof a.splice && 'undefined' != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable('splice')) return 'array';
      if ('[object Function]' == c || 'undefined' != typeof a.call && 'undefined' != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable('call')) return 'function'
    } else return 'null';
     else if ('function' ==
    b && 'undefined' == typeof a.call) return 'object';
    return b
  }
  function m(a) {
    return 'array' == aa(a)
  }
  function ca(a) {
    var b = aa(a);
    return 'array' == b || 'object' == b && 'number' == typeof a.length
  }
  function n(a) {
    return 'string' == typeof a
  }
  function da(a) {
    return 'function' == aa(a)
  }
  function ea(a) {
    var b = typeof a;
    return 'object' == b && null != a || 'function' == b
  }
  function fa(a) {
    return a[ha] || (a[ha] = ++ia)
  }
  var ha = 'closure_uid_' + (1000000000 * Math.random() >>> 0),
  ia = 0;
  function ja(a, b, c) {
    return a.call.apply(a.bind, arguments)
  }
  function ka(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c)
      }
    }
    return function () {
      return a.apply(b, arguments)
    }
  }
  function p(a, b, c) {
    p = Function.prototype.bind && - 1 != Function.prototype.bind.toString().indexOf('native code') ? ja : ka;
    return p.apply(null, arguments)
  }
  function la(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var b = c.slice();
      b.push.apply(b, arguments);
      return a.apply(this, b)
    }
  }
  var ma = Date.now || function () {
    return + new Date
  };
  function na(a, b) {
    var c = a.split('.'),
    d = l;
    c[0] in d || !d.execScript || d.execScript('var ' + c[0]);
    for (var e; c.length && (e = c.shift()); ) c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {
    }
     : d[e] = b
  }
  function q(a, b) {
    function c() {
    }
    c.prototype = b.prototype;
    a.w = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.xc = function (a, c, f) {
      return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
    }
  }
  Function.prototype.bind = Function.prototype.bind || function (a, b) {
    if (1 < arguments.length) {
      var c = Array.prototype.slice.call(arguments, 1);
      c.unshift(this, a);
      return p.apply(null, c)
    }
    return p(this, a)
  };
  var oa;
  function pa(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '')
  }
  function qa(a) {
    if (!ra.test(a)) return a;
    - 1 != a.indexOf('&') && (a = a.replace(sa, '&amp;'));
    - 1 != a.indexOf('<') && (a = a.replace(ta, '&lt;'));
    - 1 != a.indexOf('>') && (a = a.replace(ua, '&gt;'));
    - 1 != a.indexOf('"') && (a = a.replace(va, '&quot;'));
    - 1 != a.indexOf('\'') && (a = a.replace(wa, '&#39;'));
    return a
  }
  var sa = /&/g,
  ta = /</g,
  ua = />/g,
  va = /"/g,
  wa = /'/g,
  ra = /[&<>"']/;
  function xa(a, b) {
    return a < b ? - 1 : a > b ? 1 : 0
  }
  function ya(a) {
    return String(a).replace(/\-([a-z])/g, function (a, c) {
      return c.toUpperCase()
    })
  }
  function za(a) {
    var b = n(void 0) ? 'undefined'.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08')  : '\\s';
    return a.replace(new RegExp('(^' + (b ? '|[' + b + ']+' : '') + ')([a-z])', 'g'), function (a, b, e) {
      return b + e.toUpperCase()
    })
  };
  var s = Array.prototype,
  Ca = s.indexOf ? function (a, b, c) {
    return s.indexOf.call(a, b, c)
  }
   : function (a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c)  : c;
    if (n(a)) return n(b) && 1 == b.length ? a.indexOf(b, c)  : - 1;
    for (; c < a.length; c++) if (c in a && a[c] === b) return c;
    return - 1
  },
  u = s.forEach ? function (a, b, c) {
    s.forEach.call(a, b, c)
  }
   : function (a, b, c) {
    for (var d = a.length, e = n(a) ? a.split('')  : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
  },
  Da = s.filter ? function (a, b, c) {
    return s.filter.call(a, b, c)
  }
   : function (a, b, c) {
    for (var d = a.length, e = [
    ], f = 0, g = n(a) ?
    a.split('')  : a, k = 0; k < d; k++) if (k in g) {
      var w = g[k];
      b.call(c, w, k, a) && (e[f++] = w)
    }
    return e
  },
  Ea = s.map ? function (a, b, c) {
    return s.map.call(a, b, c)
  }
   : function (a, b, c) {
    for (var d = a.length, e = Array(d), f = n(a) ? a.split('')  : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
    return e
  };
  function v(a, b) {
    return 0 <= Ca(a, b)
  }
  function Fa(a) {
    return s.concat.apply(s, arguments)
  }
  function Ga(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c
    }
    return []
  }
  function Ha(a, b, c, d) {
    s.splice.apply(a, Ia(arguments, 1))
  }
  function Ia(a, b, c) {
    return 2 >= arguments.length ? s.slice.call(a, b)  : s.slice.call(a, b, c)
  };
  function Ja(a, b) {
    for (var c in a) b.call(void 0, a[c], c, a)
  }
  function Ka() {
    var a = La,
    b;
    for (b in a) return !1;
    return !0
  }
  var Ma = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(' ');
  function Na(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < Ma.length; f++) c = Ma[f],
      Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  };
  function Oa() {
    return !0
  };
  var Pa = 'StopIteration' in l ? l.StopIteration : Error('StopIteration');
  function Qa() {
  }
  Qa.prototype.next = function () {
    throw Pa;
  };
  Qa.prototype.Ha = function () {
    return this
  };
  function Ra(a) {
    if (a instanceof Qa) return a;
    if ('function' == typeof a.Ha) return a.Ha(!1);
    if (ca(a)) {
      var b = 0,
      c = new Qa;
      c.next = function () {
        for (; ; ) {
          if (b >= a.length) throw Pa;
          if (b in a) return a[b++];
          b++
        }
      };
      return c
    }
    throw Error('Not implemented');
  }
  function Sa(a) {
    var b = Ta;
    if (ca(b)) try {
      u(b, a, void 0)
    } catch (c) {
      if (c !== Pa) throw c;
    } else {
      b = Ra(b);
      try {
        for (; ; ) a.call(void 0, b.next(), void 0, b)
      } catch (d) {
        if (d !== Pa) throw d;
      }
    }
  };
  function Xa(a, b) {
    this.u = {
    };
    this.b = [
    ];
    this.Ga = this.f = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error('Uneven number of arguments');
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else if (a) {
      var e;
      if (a instanceof Xa) e = a.ga(),
      d = a.W();
       else {
        var c = [
        ],
        f = 0;
        for (e in a) c[f++] = e;
        e = c;
        c = [
        ];
        f = 0;
        for (d in a) c[f++] = a[d];
        d = c
      }
      for (c = 0; c < e.length; c++) this.set(e[c], d[c])
    }
  }
  h = Xa.prototype;
  h.W = function () {
    Ya(this);
    for (var a = [
    ], b = 0; b < this.b.length; b++) a.push(this.u[this.b[b]]);
    return a
  };
  h.ga = function () {
    Ya(this);
    return this.b.concat()
  };
  h.ea = function (a) {
    return Za(this.u, a)
  };
  h.remove = function (a) {
    return Za(this.u, a) ? (delete this.u[a], this.f--, this.Ga++, this.b.length > 2 * this.f && Ya(this), !0)  : !1
  };
  function Ya(a) {
    if (a.f != a.b.length) {
      for (var b = 0, c = 0; b < a.b.length; ) {
        var d = a.b[b];
        Za(a.u, d) && (a.b[c++] = d);
        b++
      }
      a.b.length = c
    }
    if (a.f != a.b.length) {
      for (var e = {
      }, c = b = 0; b < a.b.length; ) d = a.b[b],
      Za(e, d) || (a.b[c++] = d, e[d] = 1),
      b++;
      a.b.length = c
    }
  }
  h.get = function (a, b) {
    return Za(this.u, a) ? this.u[a] : b
  };
  h.set = function (a, b) {
    Za(this.u, a) || (this.f++, this.b.push(a), this.Ga++);
    this.u[a] = b
  };
  h.forEach = function (a, b) {
    for (var c = this.ga(), d = 0; d < c.length; d++) {
      var e = c[d],
      f = this.get(e);
      a.call(b, f, e, this)
    }
  };
  h.G = function () {
    return new Xa(this)
  };
  h.Ha = function (a) {
    Ya(this);
    var b = 0,
    c = this.b,
    d = this.u,
    e = this.Ga,
    f = this,
    g = new Qa;
    g.next = function () {
      for (; ; ) {
        if (e != f.Ga) throw Error('The map has changed since the iterator was created');
        if (b >= c.length) throw Pa;
        var g = c[b++];
        return a ? g : d[g]
      }
    };
    return g
  };
  function Za(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  };
  var $a;
  a: {
    var ab = l.navigator;
    if (ab) {
      var bb = ab.userAgent;
      if (bb) {
        $a = bb;
        break a
      }
    }
    $a = ''
  }
  function x(a) {
    return - 1 != $a.indexOf(a)
  };
  var cb = {
  },
  db,
  eb,
  y = x('Opera') || x('OPR'),
  z = x('Trident') || x('MSIE'),
  A = x('Gecko') && - 1 == $a.toLowerCase().indexOf('webkit') && !(x('Trident') || x('MSIE')),
  B = - 1 != $a.toLowerCase().indexOf('webkit'),
  fb = B && x('Mobile'),
  gb = $a;
  db = !!gb && - 1 != gb.indexOf('Android');
  eb = !!gb && - 1 != gb.indexOf('iPhone');
  var hb = !!gb && - 1 != gb.indexOf('iPad');
  function ib() {
    var a = l.document;
    return a ? a.documentMode : void 0
  }
  var jb = function () {
    var a = '',
    b;
    if (y && l.opera) return a = l.opera.version,
    da(a) ? a()  : a;
    A ? b = /rv\:([^\);]+)(\)|;)/ : z ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : B && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec($a)) ? a[1] : '');
    return z && (b = ib(), b > parseFloat(a)) ? String(b)  : a
  }(),
  kb = {
  };
  function C(a) {
    var b;
    if (!(b = kb[a])) {
      b = 0;
      for (var c = pa(String(jb)).split('.'), d = pa(String(a)).split('.'), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
        var g = c[f] || '',
        k = d[f] || '',
        w = RegExp('(\\d*)(\\D*)', 'g'),
        I = RegExp('(\\d*)(\\D*)', 'g');
        do {
          var J = w.exec(g) || ['',
          '',
          ''],
          T = I.exec(k) || ['',
          '',
          ''];
          if (0 == J[0].length && 0 == T[0].length) break;
          b = xa(0 == J[1].length ? 0 : parseInt(J[1], 10), 0 == T[1].length ? 0 : parseInt(T[1], 10)) || xa(0 == J[2].length, 0 == T[2].length) || xa(J[2], T[2])
        } while (0 == b)
      }
      b = kb[a] = 0 <= b
    }
    return b
  }
  var lb = l.document,
  mb = lb && z ? ib() || ('CSS1Compat' == lb.compatMode ? parseInt(jb, 10)  : 5)  : void 0;
  var nb = RegExp('^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$');
  function ob(a) {
    if (pb) {
      pb = !1;
      var b = l.location;
      if (b) {
        var c = b.href;
        if (c && (c = (c = ob(c) [3] || null) && decodeURIComponent(c)) && c != b.hostname) throw pb = !0,
        Error();
      }
    }
    return a.match(nb)
  }
  var pb = B;
  function tb(a, b) {
    var c;
    if (a instanceof tb) this.n = void 0 !== b ? b : a.n,
    ub(this, a.ca),
    c = a.Fa,
    D(this),
    this.Fa = c,
    c = a.L,
    D(this),
    this.L = c,
    vb(this, a.Aa),
    c = a.$,
    D(this),
    this.$ = c,
    wb(this, a.Q.G()),
    c = a.fa,
    D(this),
    this.fa = c;
     else if (a && (c = ob(String(a)))) {
      this.n = !!b;
      ub(this, c[1] || '', !0);
      var d = c[2] || '';
      D(this);
      this.Fa = d ? decodeURIComponent(d)  : '';
      d = c[3] || '';
      D(this);
      this.L = d ? decodeURIComponent(d)  : '';
      vb(this, c[4]);
      d = c[5] || '';
      D(this);
      this.$ = d ? decodeURIComponent(d)  : '';
      wb(this, c[6] || '', !0);
      c = c[7] || '';
      D(this);
      this.fa = c ? decodeURIComponent(c)  :
      ''
    } else this.n = !!b,
    this.Q = new xb(null, 0, this.n)
  }
  h = tb.prototype;
  h.ca = '';
  h.Fa = '';
  h.L = '';
  h.Aa = null;
  h.$ = '';
  h.fa = '';
  h.ac = !1;
  h.n = !1;
  h.toString = function () {
    var a = [
    ],
    b = this.ca;
    b && a.push(yb(b, zb), ':');
    if (b = this.L) {
      a.push('//');
      var c = this.Fa;
      c && a.push(yb(c, zb), '@');
      a.push(encodeURIComponent(String(b)));
      b = this.Aa;
      null != b && a.push(':', String(b))
    }
    if (b = this.$) this.L && '/' != b.charAt(0) && a.push('/'),
    a.push(yb(b, '/' == b.charAt(0) ? Ab : Bb));
    (b = this.Q.toString()) && a.push('?', b);
    (b = this.fa) && a.push('#', yb(b, Cb));
    return a.join('')
  };
  h.G = function () {
    return new tb(this)
  };
  function ub(a, b, c) {
    D(a);
    a.ca = c ? b ? decodeURIComponent(b)  : '' : b;
    a.ca && (a.ca = a.ca.replace(/:$/, ''))
  }
  function vb(a, b) {
    D(a);
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error('Bad port number ' + b);
      a.Aa = b
    } else a.Aa = null
  }
  function wb(a, b, c) {
    D(a);
    b instanceof xb ? (a.Q = b, a.Q.$a(a.n))  : (c || (b = yb(b, Db)), a.Q = new xb(b, 0, a.n))
  }
  function D(a) {
    if (a.ac) throw Error('Tried to modify a read-only Uri');
  }
  h.$a = function (a) {
    this.n = a;
    this.Q && this.Q.$a(a);
    return this
  };
  function Eb(a) {
    return a instanceof tb ? a.G()  : new tb(a, void 0)
  }
  function yb(a, b) {
    return n(a) ? encodeURI(a).replace(b, Fb)  : null
  }
  function Fb(a) {
    a = a.charCodeAt(0);
    return '%' + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
  }
  var zb = /[#\/\?@]/g,
  Bb = /[\#\?:]/g,
  Ab = /[\#\?]/g,
  Db = /[\#\?@]/g,
  Cb = /#/g;
  function xb(a, b, c) {
    this.m = a || null;
    this.n = !!c
  }
  function Gb(a) {
    if (!a.c && (a.c = new Xa, a.f = 0, a.m)) for (var b = a.m.split('&'), c = 0; c < b.length; c++) {
      var d = b[c].indexOf('='),
      e = null,
      f = null;
      0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1))  : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, ' '));
      e = Hb(a, e);
      a.add(e, f ? decodeURIComponent(f.replace(/\+/g, ' '))  : '')
    }
  }
  h = xb.prototype;
  h.c = null;
  h.f = null;
  h.add = function (a, b) {
    Gb(this);
    this.m = null;
    a = Hb(this, a);
    var c = this.c.get(a);
    c || this.c.set(a, c = [
    ]);
    c.push(b);
    this.f++;
    return this
  };
  h.remove = function (a) {
    Gb(this);
    a = Hb(this, a);
    return this.c.ea(a) ? (this.m = null, this.f -= this.c.get(a).length, this.c.remove(a))  : !1
  };
  h.ea = function (a) {
    Gb(this);
    a = Hb(this, a);
    return this.c.ea(a)
  };
  h.ga = function () {
    Gb(this);
    for (var a = this.c.W(), b = this.c.ga(), c = [
    ], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c
  };
  h.W = function (a) {
    Gb(this);
    var b = [
    ];
    if (n(a)) this.ea(a) && (b = Fa(b, this.c.get(Hb(this, a))));
     else {
      a = this.c.W();
      for (var c = 0; c < a.length; c++) b = Fa(b, a[c])
    }
    return b
  };
  h.set = function (a, b) {
    Gb(this);
    this.m = null;
    a = Hb(this, a);
    this.ea(a) && (this.f -= this.c.get(a).length);
    this.c.set(a, [
      b
    ]);
    this.f++;
    return this
  };
  h.get = function (a, b) {
    var c = a ? this.W(a)  : [
    ];
    return 0 < c.length ? String(c[0])  : b
  };
  h.toString = function () {
    if (this.m) return this.m;
    if (!this.c) return '';
    for (var a = [
    ], b = this.c.ga(), c = 0; c < b.length; c++) for (var d = b[c], e = encodeURIComponent(String(d)), d = this.W(d), f = 0; f < d.length; f++) {
      var g = e;
      '' !== d[f] && (g += '=' + encodeURIComponent(String(d[f])));
      a.push(g)
    }
    return this.m = a.join('&')
  };
  h.G = function () {
    var a = new xb;
    a.m = this.m;
    this.c && (a.c = this.c.G(), a.f = this.f);
    return a
  };
  function Hb(a, b) {
    var c = String(b);
    a.n && (c = c.toLowerCase());
    return c
  }
  h.$a = function (a) {
    a && !this.n && (Gb(this), this.m = null, this.c.forEach(function (a, c) {
      var d = c.toLowerCase();
      c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.m = null, this.c.set(Hb(this, d), Ga(a)), this.f += a.length))
    }, this));
    this.n = a
  };
  var Ib = !z || z && 9 <= mb;
  !A && !z || z && z && 9 <= mb || A && C('1.9.1');
  z && C('9');
  var Jb = z || y || B;
  function Kb(a) {
    a = a.className;
    return n(a) && a.match(/\S+/g) || []
  }
  function Lb(a, b) {
    for (var c = Kb(a), d = Ia(arguments, 1), e = c.length + d.length, f = c, g = 0; g < d.length; g++) v(f, d[g]) || f.push(d[g]);
    a.className = c.join(' ');
    return c.length == e
  }
  function Mb(a, b, c) {
    for (var d = Kb(a), e = !1, f = 0; f < d.length; f++) d[f] == b && (Ha(d, f--, 1), e = !0);
    e && (d.push(c), a.className = d.join(' '))
  };
  function E(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0
  }
  E.prototype.G = function () {
    return new E(this.x, this.y)
  };
  E.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')'
  };
  E.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
  };
  function Nb(a, b) {
    this.width = a;
    this.height = b
  }
  Nb.prototype.G = function () {
    return new Nb(this.width, this.height)
  };
  Nb.prototype.toString = function () {
    return '(' + this.width + ' x ' + this.height + ')'
  };
  Nb.prototype.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
  };
  function Ob(a) {
    return a ? new Pb(Sb(a))  : oa || (oa = new Pb)
  }
  function Tb(a, b) {
    return n(b) ? a.getElementById(b)  : b
  }
  function F(a, b) {
    var c = b || document;
    return c.querySelectorAll && c.querySelector ? c.querySelectorAll('.' + a)  : Ub('*', a, b)
  }
  function G(a, b) {
    var c = b || document,
    d = null;
    return (d = c.querySelectorAll && c.querySelector ? c.querySelector('.' + a)  : Ub('*', a, b) [0]) || null
  }
  function Ub(a, b, c) {
    var d = document;
    c = c || d;
    a = a && '*' != a ? a.toUpperCase()  : '';
    if (c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? '.' + b : ''));
    if (b && c.getElementsByClassName) {
      c = c.getElementsByClassName(b);
      if (a) {
        for (var d = {
        }, e = 0, f = 0, g; g = c[f]; f++) a == g.nodeName && (d[e++] = g);
        d.length = e;
        return d
      }
      return c
    }
    c = c.getElementsByTagName(a || '*');
    if (b) {
      d = {
      };
      for (f = e = 0; g = c[f]; f++) a = g.className,
      'function' == typeof a.split && v(a.split(/\s+/), b) && (d[e++] = g);
      d.length = e;
      return d
    }
    return c
  }
  function Vb(a, b) {
    Ja(b, function (b, d) {
      'style' == d ? a.style.cssText = b : 'class' == d ? a.className = b : 'for' == d ? a.htmlFor = b : d in Wb ? a.setAttribute(Wb[d], b)  : 0 == d.lastIndexOf('aria-', 0) || 0 == d.lastIndexOf('data-', 0) ? a.setAttribute(d, b)  : a[d] = b
    })
  }
  var Wb = {
    cellpadding: 'cellPadding',
    cellspacing: 'cellSpacing',
    colspan: 'colSpan',
    frameborder: 'frameBorder',
    height: 'height',
    maxlength: 'maxLength',
    role: 'role',
    rowspan: 'rowSpan',
    type: 'type',
    usemap: 'useMap',
    valign: 'vAlign',
    width: 'width'
  };
  function Xb() {
    var a = window.document,
    a = 'CSS1Compat' == a.compatMode ? a.documentElement : a.body;
    return new Nb(a.clientWidth, a.clientHeight)
  }
  function Yb(a) {
    var b = B || 'CSS1Compat' != a.compatMode ? a.body || a.documentElement : a.documentElement;
    a = a.parentWindow || a.defaultView;
    return z && C('10') && a.pageYOffset != b.scrollTop ? new E(b.scrollLeft, b.scrollTop)  : new E(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
  }
  function M(a, b, c) {
    var d = arguments,
    e = document,
    f = d[0],
    g = d[1];
    if (!Ib && g && (g.name || g.type)) {
      f = [
        '<',
        f
      ];
      g.name && f.push(' name="', qa(g.name), '"');
      if (g.type) {
        f.push(' type="', qa(g.type), '"');
        var k = {
        };
        Na(k, g);
        delete k.type;
        g = k
      }
      f.push('>');
      f = f.join('')
    }
    f = e.createElement(f);
    g && (n(g) ? f.className = g : m(g) ? Lb.apply(null, [
      f
    ].concat(g))  : Vb(f, g));
    2 < d.length && Zb(e, f, d);
    return f
  }
  function Zb(a, b, c) {
    function d(c) {
      c && b.appendChild(n(c) ? a.createTextNode(c)  : c)
    }
    for (var e = 2; e < c.length; e++) {
      var f = c[e];
      !ca(f) || ea(f) && 0 < f.nodeType ? d(f)  : u($b(f) ? Ga(f)  : f, d)
    }
  }
  function ac(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a)  : null
  }
  function bc(a, b) {
    var c = b.parentNode;
    c && c.replaceChild(a, b)
  }
  function cc(a) {
    if (Jb && !(z && C('9') && !C('10') && l.SVGElement && a instanceof l.SVGElement)) return a.parentElement;
    a = a.parentNode;
    return ea(a) && 1 == a.nodeType ? a : null
  }
  function Sb(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
  }
  function dc(a, b) {
    if ('textContent' in a) a.textContent = b;
     else if (3 == a.nodeType) a.data = b;
     else if (a.firstChild && 3 == a.firstChild.nodeType) {
      for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
      a.firstChild.data = b
    } else {
      for (var c; c = a.firstChild; ) a.removeChild(c);
      a.appendChild(Sb(a).createTextNode(String(b)))
    }
  }
  function $b(a) {
    if (a && 'number' == typeof a.length) {
      if (ea(a)) return 'function' == typeof a.item || 'string' == typeof a.item;
      if (da(a)) return 'function' == typeof a.item
    }
    return !1
  }
  function ec(a) {
    return fc(a, function (a) {
      var c;
      if (c = 'A' == a.nodeName) c = v(Kb(a), 'gweb-smoothscroll-control');
      return c
    })
  }
  function fc(a, b) {
    for (var c = 0; a; ) {
      if (b(a)) return a;
      a = a.parentNode;
      c++
    }
    return null
  }
  function Pb(a) {
    this.U = a || l.document || document
  }
  Pb.prototype.createElement = function (a) {
    return this.U.createElement(a)
  };
  Pb.prototype.createTextNode = function (a) {
    return this.U.createTextNode(String(a))
  };
  Pb.prototype.appendChild = function (a, b) {
    a.appendChild(b)
  };
  Pb.prototype.contains = function (a, b) {
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ('undefined' != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a
  };
  var gc = !z || z && 9 <= mb,
  hc = z && !C('9');
  !B || C('528');
  A && C('1.9b') || z && C('8') || y && C('9.5') || B && C('528');
  A && !C('8') || z && C('9');
  function N() {
    0 != ic && (jc[fa(this)] = this)
  }
  var ic = 0,
  jc = {
  };
  N.prototype.ob = !1;
  N.prototype.va = function () {
    if (!this.ob && (this.ob = !0, this.d(), 0 != ic)) {
      var a = fa(this);
      delete jc[a]
    }
  };
  N.prototype.d = function () {
    if (this.wb) for (; this.wb.length; ) this.wb.shift() ()
  };
  function O(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.O = !1;
    this.zb = !0
  }
  O.prototype.d = function () {
  };
  O.prototype.va = function () {
  };
  O.prototype.stopPropagation = function () {
    this.O = !0
  };
  O.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
    this.zb = !1
  };
  function kc(a) {
    kc[' '](a);
    return a
  }
  kc[' '] = function () {
  };
  function P(a, b) {
    O.call(this, a ? a.type : '');
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.j = this.state = null;
    if (a) {
      var c = this.type = a.type;
      this.target = a.target || a.srcElement;
      this.currentTarget = b;
      var d = a.relatedTarget;
      if (d) {
        if (A) {
          var e;
          a: {
            try {
              kc(d.nodeName);
              e = !0;
              break a
            } catch (f) {
            }
            e = !1
          }
          e || (d = null)
        }
      } else 'mouseover' == c ? d =
      a.fromElement : 'mouseout' == c && (d = a.toElement);
      this.relatedTarget = d;
      this.offsetX = B || void 0 !== a.offsetX ? a.offsetX : a.layerX;
      this.offsetY = B || void 0 !== a.offsetY ? a.offsetY : a.layerY;
      this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
      this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
      this.screenX = a.screenX || 0;
      this.screenY = a.screenY || 0;
      this.button = a.button;
      this.keyCode = a.keyCode || 0;
      this.charCode = a.charCode || ('keypress' == c ? a.keyCode : 0);
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey =
      a.metaKey;
      this.state = a.state;
      this.j = a;
      a.defaultPrevented && this.preventDefault()
    }
  }
  q(P, O);
  P.prototype.stopPropagation = function () {
    P.w.stopPropagation.call(this);
    this.j.stopPropagation ? this.j.stopPropagation()  : this.j.cancelBubble = !0
  };
  P.prototype.preventDefault = function () {
    P.w.preventDefault.call(this);
    var a = this.j;
    if (a.preventDefault) a.preventDefault();
     else if (a.returnValue = !1, hc) try {
      if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = - 1
    } catch (b) {
    }
  };
  P.prototype.Wb = function () {
    return this.j
  };
  P.prototype.d = function () {
  };
  var lc = 'closure_listenable_' + (1000000 * Math.random() | 0);
  function mc(a) {
    try {
      return !(!a || !a[lc])
    } catch (b) {
      return !1
    }
  }
  var nc = 0;
  function oc(a, b, c, d, e) {
    this.N = a;
    this.Ba = null;
    this.src = b;
    this.type = c;
    this.ta = !!d;
    this.xa = e;
    this.key = ++nc;
    this.ba = this.sa = !1
  }
  function pc(a) {
    a.ba = !0;
    a.N = null;
    a.Ba = null;
    a.src = null;
    a.xa = null
  };
  function qc(a) {
    this.src = a;
    this.g = {
    };
    this.oa = 0
  }
  qc.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [
    ], this.oa++);
    var g = rc(a, b, d, e);
    - 1 < g ? (b = a[g], c || (b.sa = !1))  : (b = new oc(b, this.src, f, !!d, e), b.sa = c, a.push(b));
    return b
  };
  qc.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.g)) return !1;
    var e = this.g[a];
    b = rc(e, b, c, d);
    return - 1 < b ? (pc(e[b]), s.splice.call(e, b, 1), 0 == e.length && (delete this.g[a], this.oa--), !0)  : !1
  };
  function sc(a, b) {
    var c = b.type;
    if (!(c in a.g)) return !1;
    var d = a.g[c],
    e = Ca(d, b),
    f;
    (f = 0 <= e) && s.splice.call(d, e, 1);
    f && (pc(b), 0 == a.g[c].length && (delete a.g[c], a.oa--));
    return f
  }
  qc.prototype.la = function (a) {
    a = a && a.toString();
    var b = 0,
    c;
    for (c in this.g) if (!a || c == a) {
      for (var d = this.g[c], e = 0; e < d.length; e++) ++b,
      pc(d[e]);
      delete this.g[c];
      this.oa--
    }
    return b
  };
  qc.prototype.ha = function (a, b, c, d) {
    a = this.g[a.toString()];
    var e = - 1;
    a && (e = rc(a, b, c, d));
    return - 1 < e ? a[e] : null
  };
  function rc(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.ba && f.N == b && f.ta == !!c && f.xa == d) return e
    }
    return - 1
  };
  var tc = 'closure_lm_' + (1000000 * Math.random() | 0),
  uc = {
  },
  vc = 0;
  function Q(a, b, c, d, e) {
    if (m(b)) {
      for (var f = 0; f < b.length; f++) Q(a, b[f], c, d, e);
      return null
    }
    c = wc(c);
    return mc(a) ? a.ia(b, c, d, e)  : xc(a, b, c, !1, d, e)
  }
  function xc(a, b, c, d, e, f) {
    if (!b) throw Error('Invalid event type');
    var g = !!e,
    k = yc(a);
    k || (a[tc] = k = new qc(a));
    c = k.add(b, c, d, e, f);
    if (c.Ba) return c;
    d = zc();
    c.Ba = d;
    d.src = a;
    d.N = c;
    a.addEventListener ? a.addEventListener(b.toString(), d, g)  : a.attachEvent(Ac(b.toString()), d);
    vc++;
    return c
  }
  function zc() {
    var a = Bc,
    b = gc ? function (c) {
      return a.call(b.src, b.N, c)
    }
     : function (c) {
      c = a.call(b.src, b.N, c);
      if (!c) return c
    };
    return b
  }
  function Cc(a, b, c, d, e) {
    if (m(b)) {
      for (var f = 0; f < b.length; f++) Cc(a, b[f], c, d, e);
      return null
    }
    c = wc(c);
    return mc(a) ? a.ub(b, c, d, e)  : xc(a, b, c, !0, d, e)
  }
  function Dc(a, b, c, d, e) {
    if (m(b)) for (var f = 0; f < b.length; f++) Dc(a, b[f], c, d, e);
     else c = wc(c),
    mc(a) ? a.bb(b, c, d, e)  : a && (a = yc(a)) && (b = a.ha(b, c, !!d, e)) && Ec(b)
  }
  function Ec(a) {
    if ('number' == typeof a || !a || a.ba) return !1;
    var b = a.src;
    if (mc(b)) return sc(b.q, a);
    var c = a.type,
    d = a.Ba;
    b.removeEventListener ? b.removeEventListener(c, d, a.ta)  : b.detachEvent && b.detachEvent(Ac(c), d);
    vc--;
    (c = yc(b)) ? (sc(c, a), 0 == c.oa && (c.src = null, b[tc] = null))  : pc(a);
    return !0
  }
  function Fc(a) {
    if (a) if (mc(a)) a.q && a.q.la(void 0);
     else if (a = yc(a)) {
      var b = 0,
      c;
      for (c in a.g) for (var d = Ga(a.g[c]), e = 0; e < d.length; ++e) Ec(d[e]) && ++b
    }
  }
  function Ac(a) {
    return a in uc ? uc[a] : uc[a] = 'on' + a
  }
  function Gc(a, b, c, d) {
    var e = 1;
    if (a = yc(a)) if (b = a.g[b.toString()]) for (b = Ga(b), a = 0; a < b.length; a++) {
      var f = b[a];
      f && f.ta == c && !f.ba && (e &= !1 !== Hc(f, d))
    }
    return Boolean(e)
  }
  function Hc(a, b) {
    var c = a.N,
    d = a.xa || a.src;
    a.sa && Ec(a);
    return c.call(d, b)
  }
  function Bc(a, b) {
    if (a.ba) return !0;
    if (!gc) {
      var c;
      if (!(c = b)) a: {
        c = [
          'window',
          'event'
        ];
        for (var d = l, e; e = c.shift(); ) if (null != d[e]) d = d[e];
         else {
          c = null;
          break a
        }
        c = d
      }
      e = c;
      c = new P(e, this);
      d = !0;
      if (!(0 > e.keyCode || void 0 != e.returnValue)) {
        a: {
          var f = !1;
          if (0 == e.keyCode) try {
            e.keyCode = - 1;
            break a
          } catch (g) {
            f = !0
          }
          if (f || void 0 == e.returnValue) e.returnValue = !0
        }
        e = [
        ];
        for (f = c.currentTarget; f; f = f.parentNode) e.push(f);
        for (var f = a.type, k = e.length - 1; !c.O && 0 <= k; k--) c.currentTarget = e[k],
        d &= Gc(e[k], f, !0, c);
        for (k = 0; !c.O && k < e.length; k++) c.currentTarget =
        e[k],
        d &= Gc(e[k], f, !1, c)
      }
      return d
    }
    return Hc(a, new P(b, this))
  }
  function yc(a) {
    a = a[tc];
    return a instanceof qc ? a : null
  }
  var Ic = '__closure_events_fn_' + (1000000000 * Math.random() >>> 0);
  function wc(a) {
    return da(a) ? a : a[Ic] || (a[Ic] = function (b) {
      return a.handleEvent(b)
    })
  };
  function Jc(a) {
    N.call(this);
    this.X = a;
    this.b = {
    }
  }
  q(Jc, N);
  var Kc = [
  ];
  h = Jc.prototype;
  h.ia = function (a, b, c, d) {
    m(b) || (b && (Kc[0] = b.toString()), b = Kc);
    for (var e = 0; e < b.length; e++) {
      var f = Q(a, b[e], c || this.handleEvent, d || !1, this.X || this);
      if (!f) break;
      this.b[f.key] = f
    }
    return this
  };
  h.ub = function (a, b, c, d) {
    return Lc(this, a, b, c, d)
  };
  function Lc(a, b, c, d, e, f) {
    if (m(c)) for (var g = 0; g < c.length; g++) Lc(a, b, c[g], d, e, f);
     else {
      b = Cc(b, c, d || a.handleEvent, e, f || a.X || a);
      if (!b) return a;
      a.b[b.key] = b
    }
    return a
  }
  h.bb = function (a, b, c, d, e) {
    if (m(b)) for (var f = 0; f < b.length; f++) this.bb(a, b[f], c, d, e);
     else c = c || this.handleEvent,
    e = e || this.X || this,
    c = wc(c),
    d = !!d,
    b = mc(a) ? a.ha(b, c, d, e)  : a ? (a = yc(a)) ? a.ha(b, c, d, e)  : null : null,
    b && (Ec(b), delete this.b[b.key]);
    return this
  };
  h.la = function () {
    Ja(this.b, Ec);
    this.b = {
    }
  };
  h.d = function () {
    Jc.w.d.call(this);
    this.la()
  };
  h.handleEvent = function () {
    throw Error('EventHandler.handleEvent not implemented');
  };
  function R() {
    N.call(this);
    this.q = new qc(this);
    this.Jb = this
  }
  q(R, N);
  R.prototype[lc] = !0;
  h = R.prototype;
  h.Va = null;
  h.addEventListener = function (a, b, c, d) {
    Q(this, a, b, c, d)
  };
  h.removeEventListener = function (a, b, c, d) {
    Dc(this, a, b, c, d)
  };
  h.dispatchEvent = function (a) {
    var b,
    c = this.Va;
    if (c) for (b = [
    ]; c; c = c.Va) b.push(c);
    var c = this.Jb,
    d = a.type || a;
    if (n(a)) a = new O(a, c);
     else if (a instanceof O) a.target = a.target || c;
     else {
      var e = a;
      a = new O(d, c);
      Na(a, e)
    }
    var e = !0,
    f;
    if (b) for (var g = b.length - 1; !a.O && 0 <= g; g--) f = a.currentTarget = b[g],
    e = Mc(f, d, !0, a) && e;
    a.O || (f = a.currentTarget = c, e = Mc(f, d, !0, a) && e, a.O || (e = Mc(f, d, !1, a) && e));
    if (b) for (g = 0; !a.O && g < b.length; g++) f = a.currentTarget = b[g],
    e = Mc(f, d, !1, a) && e;
    return e
  };
  h.d = function () {
    R.w.d.call(this);
    this.q && this.q.la(void 0);
    this.Va = null
  };
  h.ia = function (a, b, c, d) {
    return this.q.add(String(a), b, !1, c, d)
  };
  h.ub = function (a, b, c, d) {
    return this.q.add(String(a), b, !0, c, d)
  };
  h.bb = function (a, b, c, d) {
    return this.q.remove(String(a), b, c, d)
  };
  function Mc(a, b, c, d) {
    b = a.q.g[String(b)];
    if (!b) return !0;
    b = Ga(b);
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.ba && g.ta == c) {
        var k = g.N,
        w = g.xa || g.src;
        g.sa && sc(a.q, g);
        e = !1 !== k.call(w, d) && e
      }
    }
    return e && !1 != d.zb
  }
  h.ha = function (a, b, c, d) {
    return this.q.ha(String(a), b, c, d)
  };
  function Nc() {
    R.call(this);
    this.v = Oc;
    this.pb = this.startTime = null
  }
  q(Nc, R);
  var Oc = 0;
  Nc.prototype.t = function (a) {
    this.dispatchEvent(a)
  };
  function Pc(a, b, c) {
    N.call(this);
    this.Pa = a;
    this.$b = b || 0;
    this.X = c;
    this.Lb = p(this.Rb, this)
  }
  q(Pc, N);
  h = Pc.prototype;
  h.Y = 0;
  h.d = function () {
    Pc.w.d.call(this);
    this.stop();
    delete this.Pa;
    delete this.X
  };
  h.start = function (a) {
    this.stop();
    var b = this.Lb;
    a = void 0 !== a ? a : this.$b;
    if (!da(b)) if (b && 'function' == typeof b.handleEvent) b = p(b.handleEvent, b);
     else throw Error('Invalid listener argument');
    this.Y = 2147483647 < a ? - 1 : l.setTimeout(b, a || 0)
  };
  h.stop = function () {
    0 != this.Y && l.clearTimeout(this.Y);
    this.Y = 0
  };
  h.Rb = function () {
    this.Y = 0;
    this.Pa && this.Pa.call(this.X)
  };
  var La = {
  },
  Qc = null;
  function Rc(a) {
    a = fa(a);
    delete La[a];
    Ka() && Qc && Qc.stop()
  }
  function Sc() {
    Qc || (Qc = new Pc(function () {
      Tc()
    }, 20));
    var a = Qc;
    0 != a.Y || a.start()
  }
  function Tc() {
    var a = ma();
    Ja(La, function (b) {
      Uc(b, a)
    });
    Ka() || Sc()
  };
  function Vc(a, b, c, d) {
    Nc.call(this);
    if (!m(a) || !m(b)) throw Error('Start and end parameters must be arrays');
    if (a.length != b.length) throw Error('Start and end points must be the same length');
    this.na = a;
    this.Vb = b;
    this.duration = c;
    this.eb = d;
    this.coords = [
    ]
  }
  q(Vc, Nc);
  h = Vc.prototype;
  h.o = 0;
  h.play = function (a) {
    if (a || this.v == Oc) this.o = 0,
    this.coords = this.na;
     else if (1 == this.v) return !1;
    Rc(this);
    this.startTime = a = ma();
    - 1 == this.v && (this.startTime -= this.duration * this.o);
    this.pb = this.startTime + this.duration;
    this.o || this.t('begin');
    this.t('play');
    - 1 == this.v && this.t('resume');
    this.v = 1;
    var b = fa(this);
    b in La || (La[b] = this);
    Sc();
    Uc(this, a);
    return !0
  };
  h.stop = function (a) {
    Rc(this);
    this.v = Oc;
    a && (this.o = 1);
    Wc(this, this.o);
    this.t('stop');
    this.t('end')
  };
  h.d = function () {
    this.v == Oc || this.stop(!1);
    this.t('destroy');
    Vc.w.d.call(this)
  };
  h.nb = function () {
    this.va()
  };
  function Uc(a, b) {
    a.o = (b - a.startTime) / (a.pb - a.startTime);
    1 <= a.o && (a.o = 1);
    Wc(a, a.o);
    1 == a.o ? (a.v = Oc, Rc(a), a.t('finish'), a.t('end'))  : 1 == a.v && a.t('animate')
  }
  function Wc(a, b) {
    da(a.eb) && (b = a.eb(b));
    a.coords = Array(a.na.length);
    for (var c = 0; c < a.na.length; c++) a.coords[c] = (a.Vb[c] - a.na[c]) * b + a.na[c]
  }
  h.t = function (a) {
    this.dispatchEvent(new Xc(a, this))
  };
  function Xc(a, b) {
    O.call(this, a);
    this.coords = b.coords;
    this.x = b.coords[0];
    this.y = b.coords[1];
    this.z = b.coords[2];
    this.duration = b.duration;
    this.o = b.o;
    this.state = b.v
  }
  q(Xc, O);
  function Yc(a) {
    return 1 - Math.pow(1 - a, 3)
  };
  function Zc() {
    return B ? 'Webkit' : A ? 'Moz' : z ? 'ms' : y ? 'O' : null
  };
  function $c(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
  }
  $c.prototype.G = function () {
    return new $c(this.top, this.right, this.bottom, this.left)
  };
  $c.prototype.toString = function () {
    return '(' + this.top + 't, ' + this.right + 'r, ' + this.bottom + 'b, ' + this.left + 'l)'
  };
  $c.prototype.contains = function (a) {
    return this && a ? a instanceof $c ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
  };
  $c.prototype.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
  };
  function S(a, b, c) {
    n(b) ? ad(a, c, b)  : Ja(b, la(ad, a))
  }
  function ad(a, b, c) {
    var d;
    a: if (d = ya(c), void 0 === a.style[d] && (c = Zc() + za(c), void 0 !== a.style[c])) {
      d = c;
      break a
    }
    d && (a.style[d] = b)
  }
  function bd(a, b) {
    var c = Sb(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || '' : ''
  }
  function cd(a, b) {
    return bd(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
  }
  function dd(a) {
    var b;
    try {
      b = a.getBoundingClientRect()
    } catch (c) {
      return {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    }
    z && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
  }
  function pd(a) {
    if (z && !(z && 8 <= mb)) return a.offsetParent;
    var b = Sb(a),
    c = cd(a, 'position'),
    d = 'fixed' == c || 'absolute' == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode) if (c = cd(a, 'position'), d = d && 'static' == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || 'fixed' == c || 'absolute' == c || 'relative' == c)) return a;
    return null
  }
  function qd(a) {
    var b,
    c = Sb(a),
    d = cd(a, 'position'),
    e = A && c.getBoxObjectFor && !a.getBoundingClientRect && 'absolute' == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
    f = new E(0, 0),
    g;
    b = c ? Sb(c)  : document;
    (g = !z || z && 9 <= mb) || (g = 'CSS1Compat' == Ob(b).U.compatMode);
    g = g ? b.documentElement : b.body;
    if (a == g) return f;
    if (a.getBoundingClientRect) b = dd(a),
    a = Ob(c),
    a = Yb(a.U),
    f.x = b.left + a.x,
    f.y = b.top + a.y;
     else if (c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a),
    a = c.getBoxObjectFor(g),
    f.x = b.screenX - a.screenX,
    f.y = b.screenY - a.screenY;
     else {
      b = a;
      do {
        f.x += b.offsetLeft;
        f.y += b.offsetTop;
        b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
        if (B && 'fixed' == cd(b, 'position')) {
          f.x += c.body.scrollLeft;
          f.y += c.body.scrollTop;
          break
        }
        b = b.offsetParent
      } while (b && b != a);
      if (y || B && 'absolute' == d) f.y -= c.body.offsetTop;
      for (b = a; (b = pd(b)) && b != c.body && b != g; ) f.x -= b.scrollLeft,
      y && 'TR' == b.tagName || (f.y -= b.scrollTop)
    }
    return f
  }
  function rd(a) {
    if (1 == a.nodeType) {
      var b;
      if (a.getBoundingClientRect) b = dd(a),
      b = new E(b.left, b.top);
       else {
        b = Ob(a);
        b = Yb(b.U);
        var c = qd(a);
        b = new E(c.x - b.x, c.y - b.y)
      }
      if (A && !C(12)) {
        b: {
          c = ya('transform');
          if (void 0 === a.style[c] && (c = Zc() + za('transform'), void 0 !== a.style[c])) {
            c = (B ? '-webkit' : A ? '-moz' : z ? '-ms' : y ? '-o' : null) + '-transform';
            break b
          }
          c = 'transform'
        }
        a = (a = cd(a, c) || cd(a, 'transform')) ? (a = a.match(sd)) ? new E(parseFloat(a[1]), parseFloat(a[2]))  : new E(0, 0)  : new E(0, 0);
        a = new E(b.x + a.x, b.y + a.y)
      } else a = b;
      return a
    }
    b = da(a.Wb);
    c = a;
    a.targetTouches ? c = a.targetTouches[0] : b && a.j.targetTouches && (c = a.j.targetTouches[0]);
    return new E(c.clientX, c.clientY)
  }
  function td(a) {
    'number' == typeof a && (a = Math.round(a) + 'px');
    return a
  }
  function ud() {
    var a = G('header');
    return vd(a)
  }
  function vd(a) {
    var b = wd;
    if ('none' != cd(a, 'display')) return b(a);
    var c = a.style,
    d = c.display,
    e = c.visibility,
    f = c.position;
    c.visibility = 'hidden';
    c.position = 'absolute';
    c.display = 'inline';
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
  }
  function wd(a) {
    var b = a.offsetWidth,
    c = a.offsetHeight,
    d = B && !b && !c;
    return (void 0 === b || d) && a.getBoundingClientRect ? (a = dd(a), new Nb(a.right - a.left, a.bottom - a.top))  : new Nb(b, c)
  }
  function xd(a) {
    a = a.style;
    'opacity' in a ? a.opacity = 1 : 'MozOpacity' in a ? a.MozOpacity = 1 : 'filter' in a && (a.filter = 1 === '' ? '' : 'alpha(opacity=100)')
  }
  function yd(a, b) {
    var c = a.currentStyle ? a.currentStyle[b] : null,
    d;
    if (c) if (/^\d+px?$/.test(c)) d = parseInt(c, 10);
     else {
      d = a.style.left;
      var e = a.runtimeStyle.left;
      a.runtimeStyle.left = a.currentStyle.left;
      a.style.left = c;
      c = a.style.pixelLeft;
      a.style.left = d;
      a.runtimeStyle.left = e;
      d = c
    } else d = 0;
    return d
  }
  var sd = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
  function zd(a) {
    if (a.classList) return a.classList;
    a = a.className;
    return n(a) && a.match(/\S+/g) || []
  }
  function U(a, b) {
    return a.classList ? a.classList.contains(b)  : v(zd(a), b)
  }
  function V(a, b) {
    a.classList ? a.classList.add(b)  : U(a, b) || (a.className += 0 < a.className.length ? ' ' + b : b)
  }
  function W(a, b) {
    a.classList ? a.classList.remove(b)  : U(a, b) && (a.className = Da(zd(a), function (a) {
      return a != b
    }).join(' '))
  }
  function Ad(a, b, c) {
    U(a, b) && (W(a, b), V(a, c))
  };
  function Bd(a, b, c) {
    a.dataset ? a.dataset[b] = c : a.setAttribute('data-' + String(b).replace(/([A-Z])/g, '-$1').toLowerCase(), c)
  }
  function X(a, b) {
    return a.dataset ? b in a.dataset ? a.dataset[b] : null : a.getAttribute('data-' + String(b).replace(/([A-Z])/g, '-$1').toLowerCase())
  }; /*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

The "New" BSD License:

Copyright (c) 2005-2009, The Dojo Foundation
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
    may be used to endorse or promote products derived from this software
    without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
  var Cd = function () {
    function a(a, c) {
      if (!a) return [];
      if (a.constructor == Array) return a;
      if (!n(a)) return [a];
      if (n(c) && (c = Tb(document, c), !c)) return [];
      c = c || document;
      var e = c.ownerDocument || c.documentElement;
      Aa = c.contentType && 'application/xml' == c.contentType || y && (c.doctype || '[object XMLDocument]' == e.toString()) || !!e && (z ? e.xml : c.xmlVersion || e.xmlVersion);
      return (e = d(a) (c)) && e.ya ? e : b(e)
    }
    function b(a) {
      if (a && a.ya) return a;
      var b = [
      ];
      if (!a || !a.length) return b;
      a[0] && b.push(a[0]);
      if (2 > a.length) return b;
      H++;
      if (z && Aa) {
        var c =
        H + '';
        a[0].setAttribute('_zipIdx', c);
        for (var d = 1, e; e = a[d]; d++) a[d].getAttribute('_zipIdx') != c && b.push(e),
        e.setAttribute('_zipIdx', c)
      } else if (z && a.Pb) try {
        for (d = 1; e = a[d]; d++) qb(e) && b.push(e)
      } catch (f) {
      } else for (a[0] && (a[0]._zipIdx = H), d = 1; e = a[d]; d++) a[d]._zipIdx != H && b.push(e),
      e._zipIdx = H;
      return b
    }
    function c(a, b) {
      if (!b) return 1;
      var c = xe(a);
      return b[c] ? 0 : b[c] = 1
    }
    function d(a, b) {
      if (fd) {
        var c = gd[a];
        if (c && !b) return c
      }
      if (c = hd[a]) return c;
      var c = a.charAt(0),
      f = - 1 == a.indexOf(' ');
      0 <= a.indexOf('#') && f && (b = !0);
      if (!fd ||
      b || - 1 != '>~+'.indexOf(c) || z && - 1 != a.indexOf(':') || id && 0 <= a.indexOf('.') || - 1 != a.indexOf(':contains') || - 1 != a.indexOf('|=')) {
        var g = a.split(/\s*,\s*/);
        return hd[a] = 2 > g.length ? e(a)  : function (a) {
          for (var b = 0, c = [
          ], d; d = g[b++]; ) c = c.concat(e(d) (a));
          return c
        }
      }
      var k = 0 <= '>~+'.indexOf(a.charAt(a.length - 1)) ? a + ' *' : a;
      return gd[a] = function (b) {
        try {
          if (9 != b.nodeType && !f) throw '';
          var c = b.querySelectorAll(k);
          z ? c.Pb = !0 : c.ya = !0;
          return c
        } catch (e) {
          return d(a, !0) (b)
        }
      }
    }
    function e(a) {
      var b = jd(pa(a));
      if (1 == b.length) {
        var c = f(b[0]);
        return function (a) {
          if (a = c(a, [
          ])) a.ya = !0;
          return a
        }
      }
      return function (a) {
        a = Ua(a);
        for (var c, d, e = b.length, ed, g, Qb = 0; Qb < e; Qb++) {
          g = [
          ];
          c = b[Qb];
          d = a.length - 1;
          0 < d && (ed = {
          }, g.ya = !0);
          d = f(c);
          for (var k = 0; c = a[k]; k++) d(c, g, ed);
          if (!g.length) break;
          a = g
        }
        return g
      }
    }
    function f(a) {
      var b = kd[a.aa];
      if (b) return b;
      var c = a.rb,
      c = c ? c.za : '',
      d = I(a, {
        V: 1
      }),
      e = '*' == a.tag,
      f = document.getElementsByClassName;
      if (c) f = {
        V: 1
      },
      e && (f.tag = 1),
      d = I(a, f),
      '+' == c ? b = w(d)  : '~' == c ? b = k(d)  : '>' == c && (b = g(d));
       else if (a.id) d = !a.vb && e ? Oa : I(a, {
        V: 1,
        id: 1
      }),
      b = function (b, c) {
        var e;
        e = Ob(b);
        e = Tb(e.U, a.id);
        var f;
        if ((f = e && d(e)) && !(f = 9 == b.nodeType)) {
          for (f = e.parentNode; f && f != b; ) f = f.parentNode;
          f = !!f
        }
        if (f) return Ua(e, c)
      };
       else if (f && /\{\s*\[native code\]\s*\}/.test(String(f)) && a.A.length && !id) var d = I(a, {
        V: 1,
        A: 1,
        id: 1
      }),
      ye = a.A.join(' '),
      b = function (a, b) {
        for (var c = Ua(0, b), e, f = 0, g = a.getElementsByClassName(ye); e = g[f++]; ) d(e, a) && c.push(e);
        return c
      };
       else e || a.vb ? (d = I(a, {
        V: 1,
        tag: 1,
        id: 1
      }), b = function (b, c) {
        for (var e = Ua(0, c), f, g = 0, we = b.getElementsByTagName(a.Ma()); f = we[g++]; ) d(f, b) && e.push(f);
        return e
      })  : b = function (b, c) {
        for (var d = Ua(0, c), e, f = 0, g = b.getElementsByTagName(a.Ma()); e = g[f++]; ) d.push(e);
        return d
      };
      return kd[a.aa] = b
    }
    function g(a) {
      a = a || Oa;
      return function (b, d, e) {
        for (var f = 0, g = b[ld]; b = g[f++]; ) Va(b) && (!e || c(b, e)) && a(b, f) && d.push(b);
        return d
      }
    }
    function k(a) {
      return function (b, d, e) {
        for (b = b[Wa]; b; ) {
          if (Va(b)) {
            if (e && !c(b, e)) break;
            a(b) && d.push(b)
          }
          b = b[Wa]
        }
        return d
      }
    }
    function w(a) {
      return function (b, d, e) {
        for (; b = b[Wa]; ) if (!rb || qb(b)) {
          e && !c(b, e) || !a(b) || d.push(b);
          break
        }
        return d
      }
    }
    function I(a, b) {
      if (!a) return Oa;
      b = b || {
      };
      var c = null;
      b.V || (c = ba(c, qb));
      b.tag || '*' != a.tag && (c = ba(c, function (b) {
        return b && b.tagName == a.Ma()
      }));
      b.A || u(a.A, function (a, b) {
        var d = new RegExp('(?:^|\\s)' + a + '(?:\\s|$)');
        c = ba(c, function (a) {
          return d.test(a.className)
        });
        c.count = b
      });
      b.P || u(a.P, function (a) {
        var b = a.name;
        Rb[b] && (c = ba(c, Rb[b](b, a.value)))
      });
      b.ra || u(a.ra, function (a) {
        var b,
        d = a.Ia;
        a.type && md[a.type] ? b = md[a.type](d, a.Qa)  : d.length && (b = ze(d));
        b && (c = ba(c, b))
      });
      b.id || a.id && (c = ba(c, function (b) {
        return !!b && b.id == a.id
      }));
      c || 'default' in b || (c =
      Oa);
      return c
    }
    function J(a) {
      return sb(a) % 2
    }
    function T(a) {
      return !(sb(a) % 2)
    }
    function sb(a) {
      var b = a.parentNode,
      c = 0,
      d = b[ld],
      e = a._i || - 1,
      f = b._l || - 1;
      if (!d) return - 1;
      d = d.length;
      if (f == d && 0 <= e && 0 <= f) return e;
      b._l = d;
      e = - 1;
      for (b = b.firstElementChild || b.firstChild; b; b = b[Wa]) Va(b) && (b._i = ++c, a === b && (e = c));
      return e
    }
    function nd(a) {
      for (; a = a[Wa]; ) if (Va(a)) return !1;
      return !0
    }
    function od(a) {
      for (; a = a[Ae]; ) if (Va(a)) return !1;
      return !0
    }
    function Ba(a, b) {
      return a ? 'class' == b ? a.className || '' : 'for' == b ? a.htmlFor || '' : 'style' == b ? a.style.cssText ||
      '' : (Aa ? a.getAttribute(b)  : a.getAttribute(b, 2)) || '' : ''
    }
    function qb(a) {
      return 1 == a.nodeType
    }
    function ba(a, b) {
      return a ? b ? function () {
        return a.apply(window, arguments) && b.apply(window, arguments)
      }
       : a : b
    }
    function jd(a) {
      function b() {
        0 <= I && (r.id = c(I, t).replace(/\\/g, ''), I = - 1);
        if (0 <= J) {
          var a = J == t ? null : c(J, t);
          0 > '>~+'.indexOf(a) ? r.tag = a : r.za = a;
          J = - 1
        }
        0 <= w && (r.A.push(c(w + 1, t).replace(/\\/g, '')), w = - 1)
      }
      function c(b, d) {
        return pa(a.slice(b, d))
      }
      a = 0 <= '>~+'.indexOf(a.slice( - 1)) ? a + ' * ' : a + ' ';
      for (var d = [
      ], e = - 1, f = - 1, g = - 1, k =
      - 1, w = - 1, I = - 1, J = - 1, H = '', K = '', T, t = 0, ba = a.length, r = null, L = null; H = K, K = a.charAt(t), t < ba; t++) '\\' != H && (r || (T = t, r = {
        aa: null,
        P: [
        ],
        ra: [
        ],
        A: [
        ],
        tag: null,
        za: null,
        id: null,
        Ma: function () {
          return Aa ? this.jc : this.tag
        }
      }, J = t), 0 <= e ? ']' == K ? (L.Ia ? L.Qa = c(g || e + 1, t)  : L.Ia = c(e + 1, t), !(e = L.Qa) || '"' != e.charAt(0) && '\'' != e.charAt(0) || (L.Qa = e.slice(1, - 1)), r.ra.push(L), L = null, e = g = - 1)  : '=' == K && (g = 0 <= '|~^$*'.indexOf(H) ? H : '', L.type = g + K, L.Ia = c(e + 1, t - g.length), g = t + 1)  : 0 <= f ? ')' == K && (0 <= k && (L.value = c(f + 1, t)), k = f = - 1)  : '#' == K ? (b(), I = t + 1)  : '.' == K ? (b(), w = t)  : ':' == K ? (b(), k = t)  : '[' == K ? (b(), e = t, L = {
      })  : '(' == K ? (0 <= k && (L = {
        name: c(k + 1, t),
        value: null
      }, r.P.push(L)), f = t)  : ' ' == K && H != K && (b(), 0 <= k && r.P.push({
        name: c(k + 1, t)
      }), r.vb = r.P.length || r.ra.length || r.A.length, r.Bc = r.aa = c(T, t), r.jc = r.tag = r.za ? null : r.tag || '*', r.tag && (r.tag = r.tag.toUpperCase()), d.length && d[d.length - 1].za && (r.rb = d.pop(), r.aa = r.rb.aa + ' ' + r.aa), d.push(r), r = null));
      return d
    }
    function Ua(a, b) {
      var c = b || [];
      a && c.push(a);
      return c
    }
    var id = B && 'BackCompat' == document.compatMode,
    ld = document.firstChild.children ?
    'children' : 'childNodes',
    Aa = !1,
    md = {
      '*=': function (a, b) {
        return function (c) {
          return 0 <= Ba(c, a).indexOf(b)
        }
      },
      '^=': function (a, b) {
        return function (c) {
          return 0 == Ba(c, a).indexOf(b)
        }
      },
      '$=': function (a, b) {
        return function (c) {
          c = ' ' + Ba(c, a);
          return c.lastIndexOf(b) == c.length - b.length
        }
      },
      '~=': function (a, b) {
        var c = ' ' + b + ' ';
        return function (b) {
          return 0 <= (' ' + Ba(b, a) + ' ').indexOf(c)
        }
      },
      '|=': function (a, b) {
        b = ' ' + b;
        return function (c) {
          c = ' ' + Ba(c, a);
          return c == b || 0 == c.indexOf(b + '-')
        }
      },
      '=': function (a, b) {
        return function (c) {
          return Ba(c, a) == b
        }
      }
    },
    rb = 'undefined' == typeof document.firstChild.nextElementSibling,
    Wa = rb ? 'nextSibling' : 'nextElementSibling',
    Ae = rb ? 'previousSibling' : 'previousElementSibling',
    Va = rb ? qb : Oa,
    Rb = {
      checked: function () {
        return function (a) {
          return a.checked || a.attributes.checked
        }
      },
      'first-child': function () {
        return od
      },
      'last-child': function () {
        return nd
      },
      'only-child': function () {
        return function (a) {
          return od(a) && nd(a) ? !0 : !1
        }
      },
      empty: function () {
        return function (a) {
          var b = a.childNodes;
          for (a = a.childNodes.length - 1; 0 <= a; a--) {
            var c = b[a].nodeType;
            if (1 === c || 3 == c) return !1
          }
          return !0
        }
      },
      contains: function (a, b) {
        var c = b.charAt(0);
        if ('"' == c || '\'' == c) b = b.slice(1, - 1);
        return function (a) {
          return 0 <= a.innerHTML.indexOf(b)
        }
      },
      not: function (a, b) {
        var c = jd(b) [0],
        d = {
          V: 1
        };
        '*' != c.tag && (d.tag = 1);
        c.A.length || (d.A = 1);
        var e = I(c, d);
        return function (a) {
          return !e(a)
        }
      },
      'nth-child': function (a, b) {
        if ('odd' == b) return J;
        if ('even' == b) return T;
        if ( - 1 != b.indexOf('n')) {
          var c = b.split('n', 2),
          d = c[0] ? '-' == c[0] ? - 1 : parseInt(c[0], 10)  : 1,
          e = c[1] ? parseInt(c[1], 10)  : 0,
          f = 0,
          g = - 1;
          0 < d ? 0 > e ? e = e % d && d + e %
          d : 0 < e && (e >= d && (f = e - e % d), e %= d)  : 0 > d && (d *= - 1, 0 < e && (g = e, e %= d));
          if (0 < d) return function (a) {
            a = sb(a);
            return a >= f && (0 > g || a <= g) && a % d == e
          };
          b = e
        }
        var k = parseInt(b, 10);
        return function (a) {
          return sb(a) == k
        }
      }
    },
    ze = z ? function (a) {
      var b = a.toLowerCase();
      'class' == b && (a = 'className');
      return function (c) {
        return Aa ? c.getAttribute(a)  : c[a] || c[b]
      }
    }
     : function (a) {
      return function (b) {
        return b && b.getAttribute && b.hasAttribute(a)
      }
    },
    kd = {
    },
    hd = {
    },
    gd = {
    },
    fd = !!document.querySelectorAll && (!B || C('526')),
    H = 0,
    xe = z ? function (a) {
      return Aa ? a.getAttribute('_uid') ||
      a.setAttribute('_uid', ++H) || H : a.uniqueID
    }
     : function (a) {
      return a._uid || (a._uid = ++H)
    };
    a.P = Rb;
    return a
  }();
  na('goog.dom.query', Cd);
  na('goog.dom.query.pseudos', Cd.P);
  function Dd() {
    R.call(this);
    this.Ab = 600;
    this.nc = 1;
    this.oc = Yc;
    this.Bb = new E(0, 0);
    this.La = Yb(document);
    new Ob;
    this.qb = new Jc(this)
  }
  q(Dd, R);
  Dd.prototype.scrollTo = function (a, b) {
    this.La = Yb(document);
    var c = b || this.Bb;
    a = new E(c.x + a.x, c.y + a.y);
    c = new Vc([this.La.x,
    this.La.y], [
      a.x,
      a.y
    ], this.nc * this.Ab, this.oc);
    this.qb.ia(c, [
      'begin',
      'finish',
      'animate'
    ], this.Yb);
    c.play()
  };
  Dd.prototype.Yb = function (a) {
    switch (a.type) {
      case 'begin':
        this.dispatchEvent('b');
        break;
      case 'finish':
        window.scrollTo(a.x, a.y);
        this.dispatchEvent('a');
        a.va();
        break;
      case 'animate':
        window.scrollTo(a.x, a.y)
    }
  };
  function Ed(a) {
    var b = Ub('a', 'gweb-smoothscroll-control', null);
    if (b) for (var c = 0, d; d = b[c]; c++) {
      var e;
      e = Eb(d.href);
      var f = e.L + e.$,
      g = Eb(window.location.hostname + window.location.pathname);
      if (f == g.L + g.$ && e.fa) {
        e = d.href.match(/(#)(.*)/) [2];
        var k = Tb(document, e)
      }
      k && a.qb.ia(d, 'click', a.Xb)
    }
  }
  Dd.prototype.Xb = function (a) {
    a.preventDefault();
    a = a.target;
    var b = ec(a);
    b && (a = b);
    a = a.href.match(/(#)(.*)/) [2];
    b = Tb(document, a);
    Fd(b, !0);
    var c = qd(b);
    this.scrollTo(c, void 0);
    window.location.hash = a;
    Fd(b, !1)
  };
  function Fd(a, b) {
    var c = a.id.match('_temp');
    b != c && (a.id = b ? a.id + '_temp' : a.id.replace('_temp', ''))
  }
  var Gd;
  Gd = function (a, b, c) {
    function d() {
      e.push(Q(a, 'mousedown', function (a) {
        Hd ? Hd = !1 : b.call(c, a)
      }))
    }
    var e = [
    ];
    Modernizr.touch && function () {
      e.push(Q(a, 'touchend', function (a) {
        Hd = !0;
        b.call(c, a)
      }))
    }();
    Id ? d()  : Jd(d);
    return function () {
      for (var a = 0; a < e.length; a++) Ec(e[a])
    }
  };
  function Kd(a) {
    function b() {
      g = + new Date;
      e = null;
      f = a.apply(c, d)
    }
    var c,
    d,
    e,
    f,
    g = 0;
    return function () {
      var k = + new Date,
      w = 10 - (k - g);
      c = this;
      d = arguments;
      0 >= w ? (clearTimeout(e), e = null, g = k, f = a.apply(c, d))  : e || (e = setTimeout(b, w));
      return f
    }
  }
  function Ld(a) {
    var b,
    c = null;
    return function () {
      var d = this,
      e = arguments;
      clearTimeout(c);
      c = setTimeout(function () {
        c = null;
        b = a.apply(d, e)
      }, 200);
      return b
    }
  }
  var Id = !Modernizr.touch,
  Md = !1,
  Md = !1,
  Nd = [
  ],
  Hd = !1;
  function Jd(a) {
    Nd.push(a);
    Md || (Md = !0, Cc(document, 'mousemove', function () {
      Id = !0;
      Md = !1;
      if (0 < Nd.length) for (var a = 0, c; c = Nd[a]; a++) c()
    }))
  }
  var Od = window.isScrolling = !1;
  function Pd(a) {
    a = a || 'hoverable';
    if (Id) {
      V(document.body, a);
      var b = Ld(function () {
        Od = window.isScrolling = !1;
        V(document.body, a)
      });
      Q(window, 'scroll', function () {
        Od || (Od = window.isScrolling = !0, W(document.body, a));
        b()
      })
    } else Jd(function () {
      Pd(a)
    })
  }
  var Qd = window.isTouchMoving = !1;
  function Rd() {
    var a = Ld(function () {
      Qd = window.isTouchMoving = !1
    });
    Q(window, 'touchmove', function () {
      Qd || (Qd = window.isTouchMoving = !0);
      a()
    })
  }
  function Sd(a) {
    u(a, function (a) {
      (a = a.lastChild) && 3 == a.nodeType && (a.nodeValue = a.nodeValue.replace(/\s+([^\s]+\s*)$/g, ' $1'))
    })
  }
  var Td = {
  },
  Y,
  Ud,
  Z,
  Vd;
  function Wd(a) {
    N.call(this);
    if (void 0 != a.previousElementSibling) a = a.previousElementSibling;
     else for (a = a.previousSibling; a && 1 != a.nodeType; ) a = a.previousSibling;
    this.Sa = a;
    this.k = X(this.Sa, Xd);
    G(Yd);
    this.F = cc(this.Sa);
    this.I = document.body;
    G(Zd);
    this.sb = !1;
    U(this.I, $);
    this.ab = [
    ];
    this.kb = [
    ];
    Ta.set(this.k, this)
  }
  q(Wd, N);
  var Zd = 'site-logo-image',
  Yd = 'toggle-nav-closed',
  Xd = 'navName',
  Ta = new Xa;
  Wd.prototype.d = function () {
    Ta.remove(this.k);
    this.F = this.Sa = null;
    u(this.ab, unlistenFunc);
    this.ab.length = 0;
    this.kb.length = 0;
    Wd.w.d.call(this)
  };
  Wd.prototype.resize = function () {
    this.sb && (this.F.style.width = window.innerWidth + 'px', this.F.style.height = window.innerHeight + 'px', this.I.style.width = window.innerWidth + 'px', this.I.style.height = window.innerHeight + 'px')
  };
  Wd.prototype.toggle = function () {
    U(this.F, $d) || (V(this.F, $d), S(this.F, {
      width: window.innerWidth + 'px',
      height: window.innerHeight + 'px',
      overflow: 'hidden'
    }), S(this.I, {
      width: window.innerWidth + 'px',
      height: window.innerHeight + 'px',
      overflow: 'hidden'
    }), Mb(this.I, $, ae))
  };
  Wd.prototype.Ob = function () {
    U(this.F, $d) && (W(this.F, $d), S(this.F, {
      width: '',
      height: '',
      overflow: ''
    }), S(this.I, {
      width: '',
      height: '',
      overflow: ''
    }), this.zc && Mb(this.I, ae, $), this.sb = !1)
  };
  function be() {
    var a = F('js-mobilenav');
    u(a, function (a) {
      new Wd(a)
    });
    a = F('js-mobilenav-toggle');
    u(a, function (a) {
      var c = X(a, 'targetNav');
      c && (c = Ta.get(c), a = Gd(a, p(c.toggle, c)), c.ab.push(a))
    });
    a = F('js-mobilenav-toggle-close');
    u(a, function (a) {
      var c = X(a, 'targetNav');
      c && (c = Ta.get(c), a = Gd(a, p(c.Ob, c)), c.kb.push(a))
    })
  }
  function ce() {
    Sa(function (a) {
      a.resize()
    })
  }
  function de(a) {
    N.call(this);
    this.k = fa(a);
    if ('undefined' === typeof ee.get(this.k)) {
      this.p = a;
      this.Qb = 'true' === X(this.p, fe) ? - 1 : 1;
      a = X(this.p, ge);
      this.Ca = 'undefined' !== typeof a && null !== a ? a : 7;
      a = X(this.p, he);
      if (this.C = 'undefined' !== typeof a && null !== a ? a : !1) {
        a = Xb().height;
        var b = vd(this.p).height;
        this.fb = (a - b) / 2 * 0.68
      }
      this.Ua = X(this.p, 'origin');
      this.cb();
      this.ma = p(this.cb, this);
      this.J = p(this.ic, this);
      Y.on('resize', this.ma);
      Y.on('breakpoint', this.J);
      this.xb();
      ee.set(this.k, this)
    }
  }
  q(de, N);
  var ee = new Xa;
  de.prototype.ic = function () {
    var a = Kd(p(this.xb, this)),
    b = Y.getActiveBreakpoints();
    v(b, 'fullFeatured') ? Q(window, 'scroll', a)  : TweenLite.set(this.p, {
      y: 0
    })
  };
  var fe = 'reverseParallax',
  ge = 'parallaxSpeed',
  he = 'parallaxFade';
  de.prototype.d = function () {
    ee.remove(this.k);
    this.p = null;
    Y.off('resize', this.ma);
    Y.off('breakpoint', this.J);
    de.w.d.call(this)
  };
  de.prototype.cb = function () {
    this.gc = 'undefined' !== typeof this.Ua && null !== this.Ua ? this.Ua : qd(this.p).y;
    vd(this.p)
  };
  de.prototype.xb = function () {
    if (!(0 > Yb(document).y)) {
      this.cb();
      var a = (Yb(document).y - this.gc) / (this.Ca * this.Qb);
      TweenLite.set(this.p, {
        y: a
      });
      this.C && 0 >= a && TweenLite.set(this.p, {
        opacity: (this.fb + a) / this.fb
      })
    }
  };
  function ie() {
    function a(a) {
      return new de(a)
    }
    var b = F('js-parallax-image'),
    c = document.documentElement,
    d = document.body;
    b && U(c, 'csstransforms3d') && !U(d, 'ie-patch') && Ea(b, a)
  }
  function je(a, b) {
    var c = {
      slideClass: 'js-mobile-slide',
      namespace: 'slides',
      width: 980,
      height: 640,
      start: 1,
      navigation: {
        active: !0,
        effect: 'slide'
      },
      pagination: {
        active: !0,
        effect: 'slide'
      },
      play: {
        active: !1,
        effect: 'slide',
        interval: 1000,
        auto: !1,
        swap: !0,
        pauseOnHover: !1,
        restartDelay: 2500
      },
      effect: {
        slide: {
          speed: 0.5
        },
        fade: {
          speed: 0.3,
          crossfade: !0
        }
      },
      callback: {
        loaded: function () {
        },
        start: function () {
        },
        complete: function () {
        }
      }
    };
    b = b || {
    };
    Na(c, b);
    this.a = c;
    this.l = a;
    this.h = this.a[ke];
    this.M()
  }
  var ke = 'namespace',
  le = {
    display: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 0,
    webkitBackfaceVisibility: 'hidden'
  };
  h = je.prototype;
  h.M = function () {
    this.e = F(this.a.slideClass, this.l);
    this.H = !1;
    this.total = this.e.length;
    this.current = this.a.start - 1;
    (this.Ea = 'undefined' !== typeof TouchEvent || void 0 !== window.ontouchstart) && (this.a.effect.slide.speed /= 2);
    S(this.l, 'overflow', 'hidden');
    this.B = M('div', this.h + '-container');
    S(this.B, {
      overflow: 'hidden',
      position: 'relative'
    });
    this.control = M('div', this.h + '-control');
    S(this.control, 'position', 'relative');
    TweenMax.set(this.control, {
      x: 0
    });
    this.l.appendChild(this.B);
    this.B.appendChild(this.control);
    u(this.e, function (a, b) {
      S(a, le);
      TweenMax.set(a, {
        x: 0
      });
      Bd(a, 'index', b);
      V(a, this.a.slideClass + '-' + b);
      var c = ac(a);
      this.control.appendChild(c)
    }, this);
    if (this.Ea) {
      var a = p(function (a) {
        var b = a && a.j && a.j.targetTouches;
        b && (b = b[0], me(this), this.Fb = Number(new Date), this.Eb = b.pageX, this.sc = b.pageY, a.stopPropagation())
      }, this),
      b = p(function (a) {
        var b = a && a.j && a.j.targetTouches;
        b && (b = b[0], this.pc = Math.abs(b.pageX - this.Eb) < Math.abs(b.pageY - this.sc), this.H || this.pc || (a.preventDefault(), me(this), TweenMax.set(this.control, {
          x: b.pageX - this.Eb
        })), a.stopPropagation())
      }, this),
      c = p(function (a) {
        if (a && a.j && a.j.targetTouches) {
          var b = this.B,
          c = rd(this.control),
          b = rd(b),
          c = (new E(c.x - b.x, c.y - b.y)).x;
          c > 0.5 * this.a.width || c > 0.1 * this.a.width && 250 > Number(new Date) - this.Fb ? (this.direction = 'previous', ne(this))  : c < - (0.5 * this.a.width) || c < - (0.1 * this.a.width) && 250 > Number(new Date) - this.Fb ? (this.direction = 'next', ne(this))  : TweenMax.to(this.control, 0.85 * this.a.effect.slide.speed, {
            x: 0,
            ease: Expo.easeOut
          });
          a.stopPropagation()
        }
      }, this);
      Q(this.control, 'touchstart', a);
      Q(this.control, 'touchmove', b);
      Q(this.control, 'touchend', c)
    }
    S(this.l, 'display', 'block');
    TweenMax.set(this.l, {
      autoAlpha: 1
    });
    this.Ea && me(this);
    S(this.e[this.current], {
      display: 'block',
      zIndex: 10
    });
    TweenMax.set(this.e[this.current], {
      autoAlpha: 1
    });
    this.a.navigation.active && (this.Ya = M('a', {
      'class': this.h + '-previous' + this.h + '-navigation',
      href: '#',
      title: 'Previous'
    }), dc(this.Ya, 'Previous'), this.l.appendChild(this.Ya), this.Ta = M('a', {
      'class': this.h + '-next' + this.h + '-navigation',
      href: '#',
      title: 'Next'
    }), dc(this.Ta, 'Next'), this.l.appendChild(this.Ta), Q(this.Ya, 'click', function (a) {
      a.preventDefault();
      this.stop(!0);
      a = this.a.navigation.effect;
      this.direction = 'previous';
      void 0 === a && (a = this.a.navigation.effect);
      'fade' === a ? this.C()  : ne(this)
    }, !1, this), Q(this.Ta, 'click', function (a) {
      a.preventDefault();
      this.stop(!0);
      this.next(this.a.navigation.effect)
    }, !1, this));
    this.a.play.active && (this.r = M('a', {
      'class': this.h + '-play ' + this.h + '-navigation',
      href: '#',
      title: 'Play'
    }), dc(this.r, 'Play'), this.l.appendChild(this.r), this.R = M('a', {
      'class': this.h + '-stop ' + this.h + '-navigation',
      href: '#',
      title: 'Stop'
    }), dc(this.R, 'Stop'), this.l.appendChild(this.R), Q(this.r, 'click', function (a) {
      a.preventDefault();
      this.play(!0)
    }, !1, this), Q(this.R, 'click', function (a) {
      a.preventDefault();
      this.stop(!0)
    }, !1, this));
    if (this.a.pagination.active) {
      this.Z = M('ul', this.h + '-pagination');
      S(this.Z, 'zIndex', 100);
      this.l.appendChild(this.Z);
      for (a = 0; a < this.total; a++) c = M('li', this.h + '-pagination-item'),
      this.Z.appendChild(c),
      b = M('a', this.h + '-pagination-link'),
      b.href = '#',
      dc(b, a + 1),
      Bd(b, 'item', a),
      c.appendChild(b),
      c = p(function (a) {
        a.preventDefault();
        a = parseInt(X(a.currentTarget, 'item'), 10);
        this.stop(!0);
        a += 1;
        a > this.total ? a = this.total : 1 > a && (a = 1);
        if ('number' === typeof a) 'fade' === this.a.pagination.effect ? this.C(a)  : ne(this, a);
         else if ('string' === typeof a) {
          var b;
          'first' === a.toLowerCase() ? b = 0 : 'last' === a.toLowerCase() && (b = this.total);
          'fade' === this.a.pagination.effect ? this.C(b)  : ne(this, b)
        }
      }, this),
      Q(b, 'click', c);
      this.kc = F(this.h + '-pagination-item', this.Z)
    }
    oe(this);
    this.a.play.auto &&
    this.play();
    this.a.callback.loaded(this.a.start)
  };
  function oe(a, b) {
    var c = - 1 < b ? b : a.current,
    d = G('active', a.Z);
    d && W(d, 'active');
    V(a.kc[c], 'active')
  }
  function me(a) {
    var b = a.current + 1;
    b > a.total - 1 && (b = 0);
    S(a.e[b], {
      display: 'block'
    });
    TweenMax.set(a.e[b], {
      x: a.a.width,
      autoAlpha: 1
    })
  }
  function pe(a) {
    var b = p(function (a, b) {
      this.current !== b && (S(a, {
        display: 'none',
        zIndex: 0
      }), TweenMax.set(a, {
        x: 0,
        autoAlpha: 0
      }))
    }, a);
    u(a.e, b)
  }
  h.play = function (a) {
    if (!this.Xa) {
      a && (currentSlide = this.current, this.direction = 'next', 'fade' === this.a.play.effect ? this.C()  : ne(this));
      a = p(function () {
        currentSlide = this.current;
        this.direction = 'next';
        'fade' === this.a.play.effect ? this.C()  : ne(this)
      }, this);
      this.Xa = setInterval(a, this.a.play.interval);
      if (this.a.play.pauseOnHover) {
        Fc(this.B);
        a = p(function () {
          this.stop()
        }, this);
        var b = p(function () {
          if (this.a.play.restartDelay) {
            var a = p(function () {
              this.play(!0)
            }, this);
            this.Cc = setTimeout(a, this.a.play.restartDelay)
          } else this.play(!1)
        }, this);
        Q(this.B, 'mouseover', a);
        Q(this.B, 'mouseout', b)
      }
      this.r && V(this.r, this.h + '-playing');
      this.a.play.swap && this.r && this.R && (S(this.r, 'display', 'none'), S(this.R, 'display', 'block'))
    }
  };
  h.stop = function (a) {
    clearInterval(this.Xa);
    this.a.play.pauseOnHover && a && Fc(this.B);
    this.Xa = null;
    this.r && W(this.r, this.h + '-playing');
    this.a.play.swap && this.r && this.R && (S(this.r, 'display', 'block'), S(this.R, 'display', 'none'))
  };
  h.next = function (a) {
    this.direction = 'next';
    void 0 === a && (a = this.a.navigation.effect);
    'fade' === a ? this.C()  : ne(this)
  };
  function ne(a, b) {
    if (!a.H && b !== a.current + 1) {
      a.H = !0;
      var c = a.current,
      d,
      e,
      f;
      - 1 < b ? (b -= 1, b > c ? (d = 1, e = - a.a.width)  : (d = - 1, e = a.a.width), f = b)  : ('next' === a.direction ? (d = 1, e = - a.a.width)  : (d = - 1, e = a.a.width), f = c + d);
      - 1 === f && (f = a.total - 1);
      f === a.total && (f = 0);
      oe(a, f);
      - 1 < b && pe(a);
      S(a.e[f], {
        display: 'block',
        zIndex: 10
      });
      TweenMax.set(a.e[f], {
        x: d * a.a.width,
        autoAlpha: 1
      });
      a.a.callback.start(c + 1);
      TweenMax.to(a.control, a.a.effect.slide.speed, {
        x: e,
        ease: Expo.easeOut,
        onComplete: function () {
          TweenMax.set(this.control, {
            x: 0
          });
          TweenMax.set(this.e[f], {
            x: 0
          });
          S(this.e[c], {
            display: 'none',
            zIndex: 0
          });
          TweenMax.set(this.e[c], {
            x: 0
          });
          this.current = f;
          this.H = !1;
          pe(this);
          this.Ea && me(this);
          this.a.callback.complete(f + 1)
        },
        onCompleteScope: a
      })
    }
  }
  h.C = function (a) {
    if (!this.H && a !== this.current + 1) {
      this.H = !0;
      var b = this.current,
      c,
      d;
      a ? (a -= 1, d = a > b ? 1 : - 1, c = a)  : (d = 'next' === this.direction ? 1 : - 1, c = b + d);
      - 1 === c && (c = this.total - 1);
      c === this.total && (c = 0);
      oe(this, c);
      pe(this);
      S(this.e[c], 'zIndex', 10);
      this.a.callback.start(b + 1);
      a = this.a.effect.fade.speed;
      TweenMax.to(this.e[c], a, {
        autoAlpha: 0,
        onComplete: function () {
          S(this.e[b], 'zIndex', 0)
        },
        onCompleteScope: this
      });
      TweenMax.to(this.e[c], a, {
        autoAlpha: 1,
        delay: this.a.effect.fade.crossfade ? 0 : a,
        onStart: function () {
          S(this.e[c], 'display', 'block')
        },
        onComplete: function () {
          S(this.e[c], 'zIndex', 10);
          this.H = !1;
          this.current = c;
          this.a.callback.complete(c + 1)
        },
        onStartScope: this,
        onCompleteScope: this
      })
    }
  };
  h.nb = function () {
    this.cc && Ec(p(this.cc, this));
    var a = p(function (a, c) {
      a.removeAttribute('style');
      a.removeAttribute('data-index');
      W(a, this.a.slideClass + '-' + c);
      this.l.appendChild(a)
    }, this);
    u(this.e, a);
    this.l.removeAttribute('style');
    ac(this.Z);
    ac(this.control);
    ac(this.B)
  };
  function qe(a, b, c, d) {
    N.call(this);
    this.Da = a;
    this.Na = b;
    this.K = c;
    this.hc = d;
    U(this.K.i, re) ? this.Ca = 1.5 : this.Ca = 0.9;
    if (b = X(this.Da, se)) this.D = Cd(te + b + ']') [0],
    ue(this),
    b = p(function () {
      this.K.setActive(this.Na)
    }, this),
    this.fc = Gd(a, b);
    (a = F(ve, this.D)) && a.length && (this.K.Zb = !0, this.ua = [
    ].slice.call(a), this.mb = this.ua.slice(0), this.mb.reverse())
  }
  q(qe, N);
  var re = 'devices-tabs',
  se = 'tabTarget',
  ve = 'js-delay',
  te = '[data-tab-name=';
  qe.prototype.d = function () {
    this.K = this.Da = null;
    this.fc();
    qe.w.d.call(this)
  };
  function ue(a) {
    W(a.Da, 'tab-is-active');
    W(a.D, 'tab-is-active');
    TweenLite.set(a.D, {
      autoAlpha: 0
    })
  }
  qe.prototype.show = function (a) {
    Be(this.K, vd(this.D).height);
    V(this.Da, 'tab-is-active');
    V(this.D, 'tab-is-active');
    var b;
    b = 'undefined' === typeof a || !1 === a;
    this.ua || b ? (TweenLite.set(this.D, {
      autoAlpha: 1,
      x: 0
    }), this.ua && !b && (a = this.Na < a, b = 0.1, U(this.K.i, 'js-delay-fast') && (b = 0.05), U(this.K.i, 'js-delay-slow') && (b = 0.25), Ce(this, a, b)))  : (TweenLite.set(this.D, {
      autoAlpha: 1
    }), TweenLite.fromTo(this.D, this.Ca, {
      x: a > this.Na ? - 50 : 50
    }, {
      x: 0,
      ease: Expo.easeOut
    }));
    a = F('js-tab-lazy-load', this.Ka);
    u(a, function (a) {
      a.src || (a.src =
      X(a, 'src'))
    });
    'function' === typeof this.Ac && this.hc()
  };
  function Ce(a, b, c) {
    a = b ? a.mb : a.ua;
    TweenLite.to(a, 0, {
      x: b ? - 100 : 100,
      opacity: 0
    });
    for (b = 0; b < a.length; b++) TweenMax.to(a[b], 0.1, {
      opacity: 1,
      delay: b * c + 0.05
    }, c),
    TweenMax.to(a[b], 0.6, {
      x: 0,
      delay: b * c,
      ease: Expo.easeOut
    })
  }
  function De(a) {
    N.call(this);
    this.i = a;
    this.k = X(this.i, 'tabName');
    this.Ka = G('js-tab-content-container', this.i);
    this.Zb = !1;
    Ee(this);
    this.J = p(function () {
      this.rc = Y.yc('desktop')
    }, this);
    Y.on('breakpointChanged', this.J);
    this.ma = p(this.lc, this);
    Y.on('resize', this.ma);
    Fe.set(this.k, this)
  }
  q(De, N);
  var Fe = new Xa;
  De.prototype.d = function () {
    Fe.remove(this.k);
    this.Ka = this.i = null;
    Y.off('breakpointChanged', this.J);
    Y.off('resize', this.ma);
    u(this.S, function (a) {
      a.va()
    });
    this.S = null;
    De.w.d.call(this)
  };
  function Ee(a) {
    var b = F('js-activate-tab', a.i);
    a.S = Ea(b, function (a, b) {
      return new qe(a, b, this)
    }, a);
    a.setActive(0)
  }
  De.prototype.setActive = function (a) {
    a !== this.T && ('undefined' !== typeof this.T && this.S[this.T] && ue(this.S[this.T]), 'undefined' !== typeof a && this.S[a] && this.S[a].show(this.rc && this.T), this.T = a)
  };
  function Be(a, b) {
    a.Ka.style.height = b + Td.wc
  }
  De.prototype.lc = function () {
    Be(this, vd(this.S[this.T].D).height)
  };
  function Ge() {
    var a = F('js-tabs');
    u(a, function (a) {
      new De(a)
    })
  }
  function He() {
    G(Ie);
    this.ib = F(Je);
    this.gb = F(Ke);
    this.hb = F(Le);
    this.Kb = F(Me);
    Ne(this)
  }
  var Ie = 'js-avatar-container',
  Ke = 'js-together-avatar-one',
  Le = 'js-together-avatar-two',
  Me = 'js-together-avatar-three',
  Je = 'js-together-button';
  function Ne(a) {
    var b = new TimelineLite,
    c = p(function () {
      TweenLite.set(this.ib, {
        css: {
          className: '-=active'
        }
      })
    }, a),
    d = p(function () {
      TweenLite.set(this.ib, {
        css: {
          className: '+=active'
        }
      });
      setTimeout(c, 150)
    }, a);
    b.to(a.gb, 0.3, {
      ease: Quad.easeOut,
      x: '-=150',
      onStart: d
    }, '+=0.5');
    b.fromTo(a.hb, 0.7, {
      opacity: 1,
      scale: 0
    }, {
      ease: Elastic.easeOut,
      easeParams: [
        0.1,
        0.4
      ],
      scale: 1
    });
    b.to([a.gb,
    a.hb], 0.3, {
      ease: Quad.easeOut,
      x: '-=150',
      onStart: d
    });
    b.fromTo(a.Kb, 0.7, {
      opacity: 1,
      scale: 0
    }, {
      ease: Elastic.easeOut,
      easeParams: [
        0.1,
        0.4
      ],
      scale: 1
    })
  }
  function Oe(a, b, c) {
    this.Wa = b;
    this.i = G(Pe, this.Wa);
    this.lb = a || 0;
    this.dc = c;
    this.Ja = G(Qe, this.i);
    this.tc = G(Re, this.i);
    this.k = G(Se, this.i);
    this.pa = X(this.i, Te);
    this.pa = this.pa.split(', ');
    this.ka = X(this.Ja, Ue);
    this.ka = this.ka.split(', ');
    this.Oa = this.pa.length - 1;
    this.Ra = this.ka.length - 1;
    Ve(this, !0)
  }
  var Pe = 'js-typeout',
  Qe = 'js-beam',
  Re = 'js-word',
  Se = 'js-name',
  Te = 'words',
  Ue = 'names';
  function Ve(a, b) {
    var c = a.Oa + 1 === a.pa.length ? 0 : a.Oa + 1,
    d = a.Ra + 1 === a.ka.length ? 0 : a.Ra + 1,
    e = a.pa[c],
    f = a.ka[d],
    g = f.toLowerCase(),
    k = {
      charIndex: 0
    },
    w = 0.1 * e.length;
    typeCompleteTime = p(function () {
      W(this.i, g)
    }, a);
    TweenLite.to(k, w, {
      charIndex: e.length,
      ease: Linear.easeNone,
      delay: b ? 0 : a.lb,
      onStart: function () {
        dc(this.k, f);
        W(this.Ja, 'blink');
        V(this.i, g)
      },
      onUpdate: function () {
        dc(this.tc, e.slice(0, ~~k.charIndex))
      },
      onComplete: function () {
        V(this.Ja, 'blink');
        this.Oa = c;
        this.Ra = d;
        setTimeout(typeCompleteTime, 1000 * this.lb);
        this.dc &&
        Ve(this)
      },
      onStartScope: a,
      onUpdateScope: a,
      onCompleteScope: a
    })
  }
  function We(a) {
    this.wa = a;
    this.k = X(this.wa, Xe);
    this.Nb = X(this.wa, Ye);
    this.Wa = cc(this.wa);
    this.yb = this.Hb = this.Gb = this.Ib = !1;
    this.J = p(function () {
      var a = Y.getActiveBreakpoints();
      v(a, 'fullFeatured') && !this.Ib && (Ze(this), this.Ib = !0)
    }, this);
    Y.on('breakpoint', this.J);
    var b = p(function () {
      this.s.play()
    }, this);
    a = p(function () {
      this.Hb || (this.Hb = !0, this.Gb ? setTimeout(b, 800)  : this.yb = !0)
    }, this);
    Ud.observeElement(this.Wa).on('enter', a)
  }
  var Xe = 'videoName',
  Ye = 'videoClass';
  function Ze(a) {
    a.s = document.createElement('video');
    a.s.className = a.Nb;
    a.s.style.visibility = 'hidden';
    Modernizr.video.webm ? (a.s.src = a.k + '.webm', a.s.type = 'video/webm')  : (a.s.src = a.k + '.mp4', a.s.type = 'video/mp4');
    bc(a.s, a.wa);
    Q(a.s, 'canplaythrough', function () {
      this.s.style.visibility = 'visible';
      this.Gb = !0;
      this.yb && this.s.play()
    }, !1, a)
  }
  function $e() {
    this.qc = G(af);
    this.Sb = G(bf);
    this.Mb = G(cf);
    this.jb = this.Cb = !1;
    this.M()
  }
  var af = 'js-share-trigger',
  bf = 'js-edit-trigger',
  cf = 'js-chat-trigger';
  function df(a) {
    var b = G('js-message-one'),
    c = G('js-message-two');
    TweenLite.to(b, 0.8, {
      scale: '1',
      ease: Elastic.easeOut,
      easeParams: [
        0.1,
        0.4
      ]
    });
    setTimeout(function () {
      TweenLite.fromTo(c, 0.8, {
        scale: 0,
        opacity: 1
      }, {
        scale: 1,
        ease: Elastic.easeOut,
        easeParams: [
          0.1,
          0.4
        ]
      })
    }, 800);
    a.jb = !0
  }
  $e.prototype.M = function () {
    var a = document.documentElement.getAttribute('lang'),
    b = G('js-typeout-one'),
    c = p(function () {
      var a = G('js-share-invite');
      TweenLite.to(a, 0.8, {
        scale: '1',
        ease: Elastic.easeOut,
        easeParams: [
          0.1,
          0.4
        ]
      })
    }, this),
    d = p(function () {
      if (!this.Cb) {
        var a = G('js-typeout-two'),
        b = G('js-typeout-three');
        new Oe(1, a, !1);
        new Oe(1, b, !1);
        this.Cb = !0
      }
    }, this),
    e = p(function () {
      this.jb || df(this)
    }, this);
    'en' === a && new Oe(4, b, !0);
    Gd(this.qc, c);
    Gd(this.Sb, d);
    Gd(this.Mb, e)
  };
  function ef() {
    U(document.body, ff) ? (Pd(), Rd(), gf(), hf(), jf(this), kf(), lf(), mf(), nf(), of(), pf(), qf(this), Z.da && xd(Z.da), Z.qa && xd(Z.qa))  : this.M()
  }
  na('editors.SetUp', ef);
  var $d = 'is-active',
  $ = 'nav-collapsed',
  ae = 'nav-exposed',
  ff = 'for-work';
  ef.prototype.M = function () {
    Pd();
    Rd();
    this.ja = this.Db = !1;
    gf();
    hf();
    jf(this);
    rf(this);
    mf();
    nf();
    of();
    pf();
    sf();
    tf();
    uf();
    new $e;
    Ge();
    be();
    var a = p(function () {
      ce();
      tf();
      sf();
      this.ja && vf()
    }, this);
    Y.on('resize', a);
    this.Za = new Dd;
    this.Za.Ab = 500;
    this.Za.Bb = new E(0, - 40);
    Ed(this.Za);
    Z.da && xd(Z.da);
    Z.qa && xd(Z.qa)
  };
  function gf() {
    var a = document.documentElement;
    Modernizr.mq('only all') || V(a, 'no-mq');
    !/(Chrome)/.exec(navigator.userAgent) && db && V(a, 'android-browser')
  }
  function hf() {
    Z = {
      uc: G('header'),
      da: G('section-intro'),
      qa: G('unfixed-wrapper')
    }
  }
  function jf(a) {
    Y = new ResizeController({
      breakpoints: {
        mobile: {
          max: 767
        },
        tablet: {
          min: 768,
          max: 1043
        },
        fullFeatured: {
          min: 768
        },
        desktop: {
          min: 1044
        }
      }
    });
    a = p(function (a) {
      var c = Y.getActiveBreakpoints();
      v(c, 'tablet');
      v(c, 'mobile') || ie();
      'mobile' !== a[0] || 'enter' !== a[1] || this.ja || (wf(), this.ja = !0);
      'tablet' !== a[0] && 'desktop' !== a[0] || 'enter' !== a[1] || !this.ja || (xf(), this.ja = !1)
    }, a);
    Y.on('breakpoint', a)
  }
  function kf() {
    function a(a) {
      ResponsiveImage.update(a)
    }
    var b = F('js-responsive-image'),
    c = [
    ];
    u(b, function (a) {
      c.push(ResponsiveImage.createFromElement(a))
    });
    Y.on('breakpoint', function () {
      u(c, a)
    })
  }
  function rf(a) {
    yf();
    zf(a);
    Y.on('breakpoint', function () {
      var a = Y.getActiveBreakpoints();
      v(a, 'tablet');
      v(a, 'mobile') || ie()
    })
  }
  function lf() {
    Af();
    Y.on('breakpoint', function () {
      var a = Y.getActiveBreakpoints();
      v(a, 'tablet');
      v(a, 'mobile') || ie()
    })
  }
  function mf() {
    function a(a) {
      var b = X(a, 'href');
      Vb(a, {
        href: b
      })
    }
    var b = hb || eb || cb.vc,
    c = F('js-mobile-download');
    b && u(c, a)
  }
  function nf() {
    var a = Da(Cd('h1,h2,h3,h4,h5,h6,p'), function (a) {
      return !U(a, 'allow-orphan')
    });
    Sd(a)
  }
  function wf() {
    Vd = [
    ];
    var a = F('js-mobile-slides');
    u(a, function (a) {
      Vd.push(new je(a, {
        navigation: {
          active: !1
        },
        custom: {
          fullHeight: !0,
          frontToBack: !1
        }
      }))
    });
    vf()
  }
  function xf() {
    u(Vd, function (a) {
      a.nb()
    })
  }
  function of() {
    var a = F('js-vertical-align');
    u(a, function (a) {
      S(a, 'margin-top', '-' + a.clientHeight / 2 + 'px')
    })
  }
  function pf() {
    var a = F('js-dropdown');
    u(a, function (a) {
      var c = G('js-dropdown-toggle', a),
      d = G('js-dropdown-menu', a);
      Q(c, 'click', function (a) {
        a.preventDefault();
        U(d, 'js-active') ? W(d, 'js-active')  : V(d, 'js-active')
      })
    })
  }
  function yf() {
    var a = G($);
    if ('undefined' !== typeof G($)) {
      Ud = new ScrollController({
        debounceMs: 10
      });
      var b = Xb().height,
      c = ud().height,
      d = G('section-intro-fullscreen');
      Ud.observePosition(b - c).on('before', function () {
        Ad(a, ae, $);
        S(d, {
          display: 'block'
        })
      }).on('after', function () {
        Ad(a, $, ae);
        S(d, {
          display: 'none'
        })
      })
    }
  }
  function Af() {
    var a = G($);
    if ('undefined' !== typeof G($)) {
      Ud = new ScrollController({
        debounceMs: 10
      });
      var b = ud().height;
      Ud.observePosition(b).on('before', function () {
        Ad(a, ae, $)
      }).on('after', function () {
        Ad(a, $, ae)
      })
    }
  }
  function zf(a) {
    var b = G('section-stuffdone'),
    c = parseInt(bd(b, 'height')),
    b = qd(b).y,
    c = c + b;
    a = p(function () {
      this.Db || (new He, this.Db = !0)
    }, a);
    Ud.observePosition(c).on('after', a)
  }
  function sf() {
    var a = F('js-vertical-wrapper');
    u(a, function (a) {
      var c = parseInt(bd(a, 'height'));
      a = G('js-vertical-panel', a);
      c -= a.clientHeight;
      1 < c && S(a, {
        marginTop: c / 2 + 'px'
      })
    })
  }
  function tf() {
    var a = Xb().height;
    ud();
    var b = G('section-intro-fullscreen'),
    c = G('section-photo-intro', b),
    d = document.body;
    b.style.height = td(a);
    c.style.height = td(a);
    S(d, {
      paddingTop: a + 'px'
    })
  }
  function uf() {
    function a(a) {
      new We(a)
    }
    if (!(db || fb || hb || eb) && Modernizr.video && (Modernizr.video.webm || Modernizr.video.h264)) {
      var b = F('js-video');
      u(b, a)
    }
  }
  function qf(a) {
    a = p(function () {
      var a = document.body,
      c = vd(Z.da).height;
      S(a, {
        paddingTop: c + 'px'
      })
    }, a);
    Y.on('resize', a)
  }
  function vf() {
    var a = F('js-mobile-slides');
    u(a, function (a) {
      var c = F('js-tab-padding', a),
      d = F('js-tab-text', a),
      e = G('slides-container', a);
      a = G('slides-control', a);
      var f = [
      ],
      g = [
      ];
      u(d, function (a) {
        a = vd(a).height;
        f.push(a)
      });
      u(c, function (a) {
        var b;
        if (z) {
          b = yd(a, 'paddingLeft');
          var c = yd(a, 'paddingRight'),
          d = yd(a, 'paddingTop');
          a = yd(a, 'paddingBottom');
          b = new $c(d, c, a, b)
        } else b = bd(a, 'paddingLeft'),
        c = bd(a, 'paddingRight'),
        d = bd(a, 'paddingTop'),
        a = bd(a, 'paddingBottom'),
        b = new $c(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
        g.push(b.top)
      });
      c = Math.max.apply(Math, f);
      d = Math.max.apply(Math, g);
      c += d;
      e.style.height = c + 'px';
      a.style.height = c + 'px'
    })
  }
  function Bf(a) {
    this.tb = G(a);
    this.bc = Ub('li', null, this.tb);
    this.Ub = new Jc(this);
    this.M()
  }
  na('editors.ThemesAnimation', Bf);
  Bf.prototype.mc = function () {
    var a = - 1 * rd(document.body).y,
    b = rd(this.tb).y;
    if (a > b) {
      for (a = 0; this.ec = this.bc[a]; a++) V(this.ec, 'forms-theme-display');
      this.Tb.la()
    }
  };
  Bf.prototype.M = function () {
    this.Tb = this.Ub.ia(window, 'scroll', this.mc)
  };
}());
