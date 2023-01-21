(this.webpackJsonpreact = this.webpackJsonpreact || []).push([[0], {42(e, t, a) {}, 43(e, t, a) {
	'use strict'; a.r(t); let n; let i; let r; let s; let c; let l; let u; const o = a(0); const d = a.n(o); const j = a(17); const p = a(25); const f = a(12); const b = a(2); const m = a(18); const v = a(24); const O = a(26); const h = a(23); const x = a(1); const g = (function (e) {
		new Object(O.a)(a, e); const t = new Object(h.a)(a); function a(e) {
			let n; return new Object(m.a)(this, a), (n = t.call(this, e)).state = {id: e.id || '', name: e.name, type: e.type || 'text', value: e.value || '', editClassName: e.editClassName, field: e.field || '', edit: !1, key: e.key}, n;
		}

		return new Object(v.a)(a, [{key: 'edit', value() {
			this.setState({edit: !1 !== this.state.edit});
		}}, {key: 'render', value() {
			const e = this; return !0 === this.state.edit && new Object(x.jsx)('input', {name: this.state.name, type: this.state.type, value: this.state.value, className: this.state.editClassName, autoFocus: !0, onFocus(t) {
				const a = t.target.value; t.target.value = '', t.target.value = a, e.setState({backup: e.state.value});
			}, onChange(t) {
				e.setState({value: t.target.value});
			}, onBlur(t) {
				e.setState({edit: !1, value: e.state.backup});
			}, onKeyUp(t) {
				if (t.key === 'Escape' && e.setState({edit: !1, value: e.state.backup}), t.key === 'Enter') {
					if (t.target.value) {
						return e.setState({edit: !1, value: e.state.value}), void e.props.updateUserField(e.state.id, e.state.field, e.state.value);
					}

 e.setState({edit: !1, value: e.state.backup}), e.props.updateUserField(e.state.id, e.state.field, e.state.backup);
				}
			}}, this.state.key) || new Object(x.jsx)('span', {onClick(t) {
				e.setState({edit: !0 !== e.state.edit});
			}, children: this.state.value});
		}}]), a;
	})(d.a.Component); const y = a(3); const k = a(7); const N = y.a.div(n || (n = new Object(b.a)(['\n  font-size: 0.9rem;\n  padding: 0.5rem 0.75rem;\n  text-align: center;\n']))); const F = new Object(y.a)(N)(i || (i = new Object(b.a)(['\n  font-weight: 700;\n  font-size: 1.25rem;\n']))); const w = new Object(y.a)(N)(r || (r = new Object(b.a)(['\n  color: gray;\n']))); const C = y.a.img(s || (s = new Object(b.a)(['\n  margin: 0.5rem 0;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n']))); const U = function (e) {
		const t = e.key; const a = e.className; const n = e.updateUserField; const i = e.user; const r = i.cell; const s = i.location; const c = s.city; const l = s.state; const u = s.country; const o = i.name; const d = o.first; const j = o.last; const p = i.email; const f = i.picture.large; const b = i.nat; const m = i.login.uuid; const v = d && j ? ''.concat(d, ' ').concat(j) : ''; const O = p || ''; return new Object(x.jsxs)('div', {className: a, children: [new Object(x.jsx)(C, {src: f, alt: 'Girl in a jacket'}), new Object(x.jsx)(F, {children: new Object(x.jsx)(g, {id: m, editClassName: 'form-control', value: v, field: 'name', updateUserField: n}, t)}), new Object(x.jsx)(w, {children: u === 'United States' ? new Object(x.jsxs)(x.Fragment, {children: [new Object(x.jsx)(g, {id: m, field: 'city', editClassName: 'form-control', value: c, updateUserField: n}, t), ', ', new Object(x.jsx)(g, {id: m, field: 'state', editClassName: 'form-control', value: l, updateUserField: n}, t)]}) : new Object(x.jsxs)(x.Fragment, {children: [new Object(x.jsx)(g, {id: m, field: 'city', editClassName: 'form-control', value: c, updateUserField: n}, t), ', ', new Object(x.jsx)(g, {id: m, field: 'country', editClassName: 'form-control', value: u, updateUserField: n}, t)]})}), new Object(x.jsx)(w, {children: new Object(x.jsx)(g, {id: m, editClassName: 'form-control', value: (function () {
			const e = b || null; const t = new Object(k.phone)(r, {country: e}).phoneNumber; return t || r;
		})(), field: 'cell', updateUserField: n}, t)}), new Object(x.jsx)(w, {children: new Object(x.jsx)(g, {id: m, editClassName: 'form-control', value: O, field: 'email', updateUserField: n}, t)})]});
	};

	const S = a(45); const z = new Object(y.a)(U)(c || (c = new Object(b.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 16rem;\n  padding: 0.5rem 0;\n  width: 20%;\n  margin: 10px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border-radius: 5%;\n']))); const E = function (e) {
		const t = e.className; const a = e.users; const n = e.input; const i = e.updateUserField; const r = function (e) {
			let t; let a; let i; let r; let s; const c = function (e) {
				return e.toLowerCase();
			};

			const l = function (e) {
				let t = n.toLowerCase(); return e.includes(t);
			};

			const u = l(c((t = e.name) === null || void 0 === t ? void 0 : t.first)); const o = l(c((a = e.name) === null || void 0 === a ? void 0 : a.last)); const d = l(c((i = e.location) === null || void 0 === i ? void 0 : i.city)); const j = l(c((r = e.location) === null || void 0 === r ? void 0 : r.country)); const p = l(c((s = e.location) === null || void 0 === s ? void 0 : s.state)); const f = l(c(e.email)); const b = l(c(e.cell.replace(/[^a-z\d]/gi, ''))); return u || o || d || j || p || f || b;
		};

		const s = function () {
			return (n ? a.filter(r) : a).map((e => new Object(x.jsx)(z, {user: e, updateUserField: i}, new Object(S.a)())));
		};

		return new Object(x.jsx)('div', {className: t, children: new Object(x.jsx)(s, {})});
	};

	const B = (a(42), a(11)); const J = a(22); function L() {
		return Reflect.apply(L = new Object(J.a)(new Object(B.a)().mark((function e() {
			let t; return new Object(B.a)().wrap((e => {
				for (;;) {
					switch (e.prev = e.next) {
						case 0: { return e.next = 2, fetch('https://randomuser.me/api/?results=100');
						}

						case 2: { return t = e.sent, e.next = 5, t.json();
						}

						case 5: { return e.abrupt('return', e.sent);
						}

						case 6: case 'end': { return e.stop();
						}
					}
				}
			}), e);
		}))), this, arguments);
	}

	const A = new Object(y.a)(E)(l || (l = new Object(b.a)(['\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-left: 6rem;\n  margin-top: 6rem;\n']))); const G = y.a.input(u || (u = new Object(b.a)(['\n  display: flex;\n  flex-direction: column;\n  width: 75%;\n  margin: 10rem auto 0 auto;\n  font-size: 2rem;\n  border-radius: 0.5rem;\n  border: 1px solid lightgray;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n']))); const I = function () {
		const e = new Object(o.useState)([]); const t = new Object(f.a)(e, 2); const a = t[0]; const n = t[1]; const i = new Object(o.useState)(''); const r = new Object(f.a)(i, 2); const s = r[0]; const c = r[1]; new Object(o.useEffect)((() => {
			let e = !0; return (function () {
				return Reflect.apply(L, this, arguments);
			})().then((t => {
				e && n(t.results);
			})), function () {
				return e = !1;
			};
		}), []); return new Object(x.jsxs)('div', {className: 'App', children: [new Object(x.jsx)(G, {type: 'text', id: 'search', name: 'search', value: s, onChange(e) {
			return (function (e) {
				c(e.target.value);
			})(e);
		}}), new Object(x.jsx)(A, {users: a, input: s, updateUserField(e, t, i) {
			const r = a.find((t => t.login.uuid === e)); if ((t === 'city' || t === 'state' || t === 'country') && (r.location[t] = i), t === 'name') {
				const s = i.split(' '); const c = new Object(p.a)(s); const l = c[0]; const u = c.slice(1); r[t].first = l, r[t].last = u.join(' ');
			}

			if (t === 'cell') {
				const o = new Object(k.phone)(i, {country: r.nat}).phoneNumber; r[t] = o || i;
			}

			t === 'email' && (r[t] = i); const d = a.map((t => t.login.uuid === e ? r : t)); n(d);
		}})]});
	};

	const K = document.querySelector('#root'); new Object(j.createRoot)(K).render(new Object(x.jsx)(o.StrictMode, {children: new Object(x.jsx)(I, {})}));
}}, [[43, 1, 2]]]);
// # sourceMappingURL=main.b62ef799.chunk.js.map
