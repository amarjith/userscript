﻿// ==UserScript==
// @name           Virtonomica: сортировка по региону и имени
// @namespace      semeiskii
// @description    В "Список подразделений" сортирует по выбранным полям
// @author         semeiskii
// @version        1.2
// @include        http://virtonomic*.*/*/main/company/view/*/unit_list
// ==/UserScript==
var doIt = function () {
        var _0xdf84x1 = (typeof (unsafeWindow) != "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64" ? unsafeWindow : top["\x77\x69\x6E\x64\x6F\x77"]);
        $ = _0xdf84x1["\x24"];
        var _0xdf84x2 = _0xdf84x1["\x6C\x6F\x63\x61\x6C\x53\x74\x6F\x72\x61\x67\x65"];
        var _0xdf84x3 = /tmpId-\d+$/;
        var _0xdf84x4 = 0;
        var _0xdf84x5 = [];
        var _0xdf84x6 = ["\x69", "\x69\x74\x65\x6D\x49\x64", "\x63\x6F\x75\x6E\x74\x72\x79\x4E\x61\x6D\x65", "\x72\x65\x67\x69\x6F\x6E\x4E\x61\x6D\x65", "\x63\x69\x74\x79\x4E\x61\x6D\x65", "\x69\x74\x65\x6D\x43\x6C\x61\x73\x73", "\x69\x74\x65\x6D\x4E\x61\x6D\x65", "\x69\x74\x65\x6D\x53\x69\x7A\x65", "\x70\x72\x6F\x64\x75\x63\x74\x73", "\x65\x66\x66\x65\x63\x74"];
        var _0xdf84x7 = ["\u0418\u043D\u0434\u0435\u043A\u0441", "\x49\x44", "Country", "Region", "City", "Class", "Name", "Size", "Products", "Efficiency"];

        function _0xdf84x8(_0xdf84x4, _0xdf84x9, _0xdf84xa, _0xdf84xb, _0xdf84xc, _0xdf84xd, _0xdf84xe, _0xdf84xf, _0xdf84x10, _0xdf84x11, _0xdf84x12) {
            this["\x69"] = _0xdf84x4;
            this["\x69\x74\x65\x6D\x49\x64"] = _0xdf84x9;
            this["\x63\x6F\x75\x6E\x74\x72\x79\x4E\x61\x6D\x65"] = _0xdf84xa;
            this["\x72\x65\x67\x69\x6F\x6E\x4E\x61\x6D\x65"] = _0xdf84xb;
            this["\x63\x69\x74\x79\x4E\x61\x6D\x65"] = _0xdf84xc;
            this["\x69\x74\x65\x6D\x43\x6C\x61\x73\x73"] = _0xdf84xd;
            this["\x69\x74\x65\x6D\x4E\x61\x6D\x65"] = _0xdf84xe;
            this["\x69\x74\x65\x6D\x53\x69\x7A\x65"] = _0xdf84xf;
            this["\x70\x72\x6F\x64\x75\x63\x74\x73"] = _0xdf84x10;
            this["\x65\x66\x66\x65\x63\x74"] = _0xdf84x11;
            this["\x69\x73\x49\x74\x65\x6D"] = _0xdf84x12;
        };

        function _0xdf84x13(_0xdf84x14) {
            return _0xdf84x14["\x72\x65\x67\x69\x6F\x6E\x4E\x61\x6D\x65"] + "\x3A\x20" + _0xdf84x14["\x69\x74\x65\x6D\x4E\x61\x6D\x65"];
        };
        $("\x2E\x75\x6E\x69\x74\x2D\x6C\x69\x73\x74\x20\x3E\x20\x74\x62\x6F\x64\x79\x20\x3E\x20\x74\x72")["\x6E\x6F\x74"]("\x2E\x75\x2D\x74\x68")["\x65\x61\x63\x68"](function () {
            var _0xdf84x15 = $("\x74\x64", this);
            var _0xdf84x9;
            var _0xdf84xa;
            var _0xdf84xb;
            var _0xdf84xc;
            var _0xdf84xd;
            var _0xdf84xe;
            var _0xdf84xf;
            var _0xdf84x10;
            var _0xdf84x11;
            var _0xdf84x12;
            if (_0xdf84x15["\x6C\x65\x6E\x67\x74\x68"] == 6) {
                var _0xdf84x16 = $("\x61", $(_0xdf84x15[1]));
                _0xdf84x9 = _0xdf84x16["\x61\x74\x74\x72"]("\x68\x72\x65\x66");
                _0xdf84x9 = _0xdf84x9["\x73\x75\x62\x73\x74\x72"](_0xdf84x9["\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x4F\x66"]("\x2F") + 1);
                _0xdf84xa = $(_0xdf84x15[0])["\x61\x74\x74\x72"]("\x74\x69\x74\x6C\x65");
                _0xdf84xb = $("\x69", $(_0xdf84x15[0]))["\x74\x65\x78\x74"]()["\x72\x65\x70\x6C\x61\x63\x65"]("\x20", "");
                _0xdf84xc = $("\x62", $(_0xdf84x15[0]))["\x74\x65\x78\x74"]()["\x72\x65\x70\x6C\x61\x63\x65"]("\x20", "");
                _0xdf84xd = $(_0xdf84x15[1])["\x61\x74\x74\x72"]("\x74\x69\x74\x6C\x65");
                _0xdf84xe = _0xdf84x16["\x74\x65\x78\x74"]()["\x72\x65\x70\x6C\x61\x63\x65"]("\x20", "");
                _0xdf84xf = $(_0xdf84x15[3])["\x74\x65\x78\x74"]()["\x72\x65\x70\x6C\x61\x63\x65"]("\x20", "");
                _0xdf84x10 = [];
                var _0xdf84x17 = 0;
                $("\x64\x69\x76", $(_0xdf84x15[4]))["\x65\x61\x63\x68"](function () {
                    if (_0xdf84x17 == 0) {
                        $("\x69\x6D\x67", $(this))["\x65\x61\x63\x68"](function () {
                            var _0xdf84x18 = $(this)["\x61\x74\x74\x72"]("\x73\x72\x63");
                            if (_0xdf84x18["\x69\x6E\x64\x65\x78\x4F\x66"]("\x2F\x70\x72\x6F\x64\x75\x63\x74\x73\x2F") != -1) {
                                var _0xdf84x19 = _0xdf84x18["\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x4F\x66"]("\x2E");
                                var _0xdf84x1a = _0xdf84x18["\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x4F\x66"]("\x2F", _0xdf84x19 - 1);
                                var _0xdf84x1b = _0xdf84x18["\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x4F\x66"]("\x2F", _0xdf84x1a - 1) + 1;
                                _0xdf84x18 = _0xdf84x18["\x73\x75\x62\x73\x74\x72"](_0xdf84x1b, _0xdf84x1a - _0xdf84x1b) + _0xdf84x18["\x73\x75\x62\x73\x74\x72"](_0xdf84x1a + 1, _0xdf84x19 - _0xdf84x1a - 1);
                                _0xdf84x10[_0xdf84x17++] = _0xdf84x18;
                            };
                        });
                    };
                });
                _0xdf84x11 = $(_0xdf84x15[5])["\x74\x65\x78\x74"]()["\x72\x65\x70\x6C\x61\x63\x65"]("\x20", "");
                _0xdf84x12 = 1;
            } else {
                _0xdf84x9 = _0xdf84x5[_0xdf84x4 - 1]["\x69\x74\x65\x6D\x49\x64"] + "\x2D" + _0xdf84x4;
                _0xdf84xa = _0xdf84x5[_0xdf84x4 - 1]["\x63\x6F\x75\x6E\x74\x72\x79\x4E\x61\x6D\x65"];
                _0xdf84xb = _0xdf84x5[_0xdf84x4 - 1]["\x72\x65\x67\x69\x6F\x6E\x4E\x61\x6D\x65"];
                _0xdf84xc = _0xdf84x5[_0xdf84x4 - 1]["\x63\x69\x74\x79\x4E\x61\x6D\x65"];
                _0xdf84xd = _0xdf84x5[_0xdf84x4 - 1]["\x69\x74\x65\x6D\x43\x6C\x61\x73\x73"];
                _0xdf84xe = _0xdf84x5[_0xdf84x4 - 1]["\x69\x74\x65\x6D\x4E\x61\x6D\x65"];
                _0xdf84xf = _0xdf84x5[_0xdf84x4 - 1]["\x69\x74\x65\x6D\x53\x69\x7A\x65"];
                _0xdf84x10 = _0xdf84x5[_0xdf84x4 - 1]["\x70\x72\x6F\x64\x75\x63\x74\x73"];
                _0xdf84x11 = _0xdf84x5[_0xdf84x4 - 1]["\x65\x66\x66\x65\x63\x74"];
                _0xdf84x12 = 0;
            };
            $(this)["\x61\x74\x74\x72"]("\x69\x64", "\x74\x6D\x70\x49\x64\x2D" + _0xdf84x9);
            _0xdf84x5[_0xdf84x4] = new _0xdf84x8(_0xdf84x4, _0xdf84x9, _0xdf84xa, _0xdf84xb, _0xdf84xc, _0xdf84xd, _0xdf84xe, _0xdf84xf, _0xdf84x10, _0xdf84x11, _0xdf84x12);
            _0xdf84x4++;
        });
        var _0xdf84x1c = [0];
        var _0xdf84x1d = _0xdf84x1c;

        function _0xdf84x1e(_0xdf84x1f, _0xdf84x20) {
            var _0xdf84x21;
            var _0xdf84x22;
            for (_0xdf84x21 = 0; _0xdf84x21 < _0xdf84x1d["\x6C\x65\x6E\x67\x74\x68"]; _0xdf84x21++) {
                _0xdf84x22 = _0xdf84x6[_0xdf84x1d[_0xdf84x21]];
                if (_0xdf84x1f[_0xdf84x22] < _0xdf84x20[_0xdf84x22]) {
                    return -1;
                };
                if (_0xdf84x1f[_0xdf84x22] > _0xdf84x20[_0xdf84x22]) {
                    return 1;
                };
            };
            return 0;
        };

        function _0xdf84x23() {
            var _0xdf84x24 = false;
            var _0xdf84x1f, _0xdf84x20;
            do {
                _0xdf84x24 = false;
                for (_0xdf84x4 = 0; _0xdf84x4 < _0xdf84x5["\x6C\x65\x6E\x67\x74\x68"] - 1; _0xdf84x4++) {
                    _0xdf84x1f = _0xdf84x5[_0xdf84x4];
                    _0xdf84x20 = _0xdf84x5[_0xdf84x4 + 1];
                    if (_0xdf84x1e(_0xdf84x1f, _0xdf84x20) > 0) {
                        _0xdf84x5[_0xdf84x4] = _0xdf84x20;
                        _0xdf84x5[_0xdf84x4 + 1] = _0xdf84x1f;
                        _0xdf84x24 = true;
                    };
                };
            } while (_0xdf84x24);;
            for (_0xdf84x4 = _0xdf84x5["\x6C\x65\x6E\x67\x74\x68"] - 1; _0xdf84x4 > 0; _0xdf84x4--) {
                $("\x23\x74\x6D\x70\x49\x64\x2D" + _0xdf84x5[_0xdf84x4]["\x69\x74\x65\x6D\x49\x64"])["\x62\x65\x66\x6F\x72\x65"]($("\x23\x74\x6D\x70\x49\x64\x2D" + _0xdf84x5[_0xdf84x4 - 1]["\x69\x74\x65\x6D\x49\x64"]));
            };
            var _0xdf84x25 = true;
            $("\x2E\x75\x6E\x69\x74\x2D\x6C\x69\x73\x74\x20\x3E\x20\x74\x62\x6F\x64\x79\x20\x3E\x20\x74\x72")["\x6E\x6F\x74"]("\x2E\x75\x2D\x74\x68")["\x65\x61\x63\x68"](function () {
                var _0xdf84x26;
                if (_0xdf84x3["\x74\x65\x73\x74"]($(this)["\x61\x74\x74\x72"]("\x69\x64"))) {
                    _0xdf84x26 = "\x6F";
                    _0xdf84x25 = !_0xdf84x25;
                } else {
                    _0xdf84x26 = "\x6F\x7A\x7A";
                };
                if (_0xdf84x25) {
                    $(this)["\x61\x64\x64\x43\x6C\x61\x73\x73"](_0xdf84x26);
                } else {
                    $(this)["\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73"](_0xdf84x26);
                };
            });
        };

        function _0xdf84x27() {
            for (_0xdf84x4 = 0; _0xdf84x4 < _0xdf84x1d["\x6C\x65\x6E\x67\x74\x68"]; _0xdf84x4++) {
                var _0xdf84x28 = _0xdf84x1d[_0xdf84x4];
                if (_0xdf84x28 != 0) {
                    var _0xdf84x29 = $("\x23\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x2D" + _0xdf84x6[_0xdf84x1d[_0xdf84x4]]);
                    $("\x23\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x2D\x73\x70\x61\x6E")["\x62\x65\x66\x6F\x72\x65"](_0xdf84x29);
                    _0xdf84x29["\x61\x64\x64\x43\x6C\x61\x73\x73"]("\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x45");
                };
            };
        };

        function _0xdf84x2a(_0xdf84x2b) {
            var _0xdf84x2c = _0xdf84x6[_0xdf84x2b];
            var _0xdf84x2d = $("\x23\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x43\x6F\x6E\x74\x61\x69\x6E\x65\x72\x20\x3E\x20\x74\x64");
            var _0xdf84x29 = $("\x23\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x2D" + _0xdf84x2c);
            var _0xdf84x2e = _0xdf84x2d["\x69\x6E\x64\x65\x78"](_0xdf84x29);
            var _0xdf84x2f = _0xdf84x2d["\x69\x6E\x64\x65\x78"]($("\x23\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x2D\x73\x70\x61\x6E"));
            if (_0xdf84x2e > _0xdf84x2f) {
                $("\x23\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x2D\x73\x70\x61\x6E")["\x62\x65\x66\x6F\x72\x65"](_0xdf84x29);
                _0xdf84x29["\x61\x64\x64\x43\x6C\x61\x73\x73"]("\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x45");
                _0xdf84x1d[_0xdf84x1d["\x6C\x65\x6E\x67\x74\x68"] - 1] = _0xdf84x2b;
                _0xdf84x1d[_0xdf84x1d["\x6C\x65\x6E\x67\x74\x68"]] = 0;
            } else {
                $("\x23\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x2D\x73\x70\x61\x6E")["\x61\x66\x74\x65\x72"](_0xdf84x29);
                _0xdf84x29["\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73"]("\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x45");
                for (_0xdf84x4 = 0; _0xdf84x4 < _0xdf84x1d["\x6C\x65\x6E\x67\x74\x68"]; _0xdf84x4++) {
                    if (_0xdf84x1d[_0xdf84x4] == _0xdf84x2b) {
                        break;
                    };
                };
                for (; _0xdf84x4 < _0xdf84x1d["\x6C\x65\x6E\x67\x74\x68"]; _0xdf84x4++) {
                    _0xdf84x1d[_0xdf84x4] = _0xdf84x1d[_0xdf84x4 + 1];
                };
                _0xdf84x1d["\x6C\x65\x6E\x67\x74\x68"]--;
            };
            _0xdf84x2["\x73\x6F\x72\x74\x42\x79\x52\x65\x67\x69\x6F\x6E\x41\x6E\x64\x4E\x61\x6D\x65"] = _0xdf84x1d;
            _0xdf84x23();
        };
        var _0xdf84x2d = $("\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x43\x22\x3E" + "\x3C\x73\x74\x79\x6C\x65\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x2F\x63\x73\x73\x22\x3E" + "\x2E\x75\x6E\x69\x74\x2D\x6C\x69\x73\x74\x20\x23\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x43\x6F\x6E\x74\x61\x69\x6E\x65\x72\x20\x74\x64\x20\x7B\x7D" + "\x2E\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x41\x2C\x20\x2E\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x46\x7B\x63\x75\x72\x73\x6F\x72\x3A\x20\x70\x6F\x69\x6E\x74\x65\x72\x3B\x66\x6F\x6E\x74\x2D\x66\x61\x6D\x69\x6C\x79\x3A\x20\x74\x61\x68\x6F\x6D\x61\x2C\x61\x72\x69\x61\x6C\x2C\x67\x65\x6E\x65\x76\x61\x2C\x68\x65\x6C\x76\x65\x74\x69\x63\x61\x2C\x73\x61\x6E\x73\x2D\x73\x65\x72\x69\x66\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x20\x31\x31\x70\x78\x3B" + "\x20\x20\x6D\x61\x72\x67\x69\x6E\x3A\x20\x32\x70\x78\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x20\x31\x70\x78\x20\x33\x70\x78\x3B\x7D" + "\x2E\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x41\x7B\x62\x6F\x72\x64\x65\x72\x3A\x31\x70\x78\x20\x73\x6F\x6C\x69\x64\x20\x23\x43\x43\x43\x3B\x62\x6F\x72\x64\x65\x72\x2D\x72\x61\x64\x69\x75\x73\x3A\x20\x33\x70\x78\x7D" + "\x2E\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x42\x7B\x62\x6F\x72\x64\x65\x72\x3A\x31\x70\x78\x20\x73\x6F\x6C\x69\x64\x20\x23\x30\x31\x38\x34\x44\x30\x3B\x7D" + "\x2E\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x43\x7B\x62\x6F\x72\x64\x65\x72\x2D\x62\x6F\x74\x74\x6F\x6D\x3A\x31\x70\x78\x20\x73\x6F\x6C\x69\x64\x20\x74\x72\x61\x6E\x73\x70\x61\x72\x65\x6E\x74\x7D" + "\x2E\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x44\x7B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x23\x45\x45\x46\x41\x43\x41\x3B\x62\x6F\x72\x64\x65\x72\x2D\x62\x6F\x74\x74\x6F\x6D\x3A\x31\x70\x78\x20\x73\x6F\x6C\x69\x64\x20\x23\x39\x33\x43\x34\x30\x30\x7D" + "\x2E\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x45\x20\x64\x69\x76\x7B\x62\x6F\x72\x64\x65\x72\x3A\x31\x70\x78\x20\x73\x6F\x6C\x69\x64\x20\x23\x30\x31\x38\x34\x44\x30\x3B\x7D" + "\x3C\x2F\x73\x74\x79\x6C\x65\x3E" + "\x3C\x74\x61\x62\x6C\x65\x20\x63\x65\x6C\x6C\x70\x61\x64\x64\x69\x6E\x67\x3D\x22\x30\x22\x20\x63\x65\x6C\x6C\x73\x70\x61\x63\x69\x6E\x67\x3D\x22\x30\x22\x20\x62\x6F\x72\x64\x65\x72\x3D\x22\x30\x22\x3E\x3C\x74\x72\x20\x69\x64\x3D\x22\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x43\x6F\x6E\x74\x61\x69\x6E\x65\x72\x22\x3E" + "\x3C\x74\x64\x20\x63\x6C\x61\x73\x73\x3D\x22\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x46\x22\x3E\u0053\u006F\u0072\u0074\x20\u0062\u0079\x3A\x3C\x2F\x74\x64\x3E\x3C\x74\x64\x20\x69\x64\x3D\x22\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x2D\x73\x70\x61\x6E\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x46\x22\x3E\x26\x6E\x62\x73\x70\x3B\u004E\u004F\x26\x6E\x62\x73\x70\x3B\x3C\x2F\x74\x64\x3E" + "\x3C\x2F\x74\x72\x3E\x3C\x2F\x74\x61\x62\x6C\x65\x3E" + "\x3C\x2F\x64\x69\x76\x3E");
        _0xdf84x2d["\x68\x6F\x76\x65\x72"](function () {
            $(this)["\x61\x64\x64\x43\x6C\x61\x73\x73"]("\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x44");
        }, function () {
            $(this)["\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73"]("\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x44");
        });
        $("\x2E\x75\x6E\x69\x74\x2D\x74\x6F\x70")["\x61\x66\x74\x65\x72"](_0xdf84x2d);
        for (_0xdf84x4 = 1; _0xdf84x4 < _0xdf84x7["\x6C\x65\x6E\x67\x74\x68"]; _0xdf84x4++) {
            var _0xdf84x30 = $("\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x41\x22\x3E" + _0xdf84x7[_0xdf84x4] + "\x3C\x2F\x64\x69\x76\x3E");
            _0xdf84x30["\x64\x61\x74\x61"]("\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x50\x61\x72\x61\x6D\x49\x6E\x64\x65\x78", _0xdf84x4);
            _0xdf84x30["\x63\x6C\x69\x63\x6B"](function () {
                _0xdf84x2a($(this)["\x64\x61\x74\x61"]("\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x50\x61\x72\x61\x6D\x49\x6E\x64\x65\x78"));
                $(this)["\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73"]("\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x42");
            });
            _0xdf84x30["\x68\x6F\x76\x65\x72"](function () {
                $(this)["\x61\x64\x64\x43\x6C\x61\x73\x73"]("\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x42");
            }, function () {
                $(this)["\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73"]("\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x42");
            });
            var _0xdf84x31 = $("\x3C\x74\x64\x20\x69\x64\x3D\x22\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x2D" + _0xdf84x6[_0xdf84x4] + "\x22\x3E\x3C\x2F\x74\x64\x3E");
            _0xdf84x31["\x61\x70\x70\x65\x6E\x64"](_0xdf84x30);
            $("\x23\x73\x6F\x72\x74\x42\x79\x46\x69\x65\x6C\x64\x73\x43\x6F\x6E\x74\x61\x69\x6E\x65\x72")["\x61\x70\x70\x65\x6E\x64"](_0xdf84x31);
        };
        if (!_0xdf84x2["\x73\x6F\x72\x74\x42\x79\x52\x65\x67\x69\x6F\x6E\x41\x6E\x64\x4E\x61\x6D\x65"]) {
            _0xdf84x2["\x73\x6F\x72\x74\x42\x79\x52\x65\x67\x69\x6F\x6E\x41\x6E\x64\x4E\x61\x6D\x65"] = _0xdf84x1c;
            _0xdf84x1d = _0xdf84x1c;
        } else {
            _0xdf84x1d = _0xdf84x2["\x73\x6F\x72\x74\x42\x79\x52\x65\x67\x69\x6F\x6E\x41\x6E\x64\x4E\x61\x6D\x65"]["\x73\x70\x6C\x69\x74"](/,/);
        };
        if (_0xdf84x1d != _0xdf84x1c) {
            _0xdf84x27();
            _0xdf84x23();
        };
    };
if (window["\x74\x6F\x70"] == window) {
    var script = document["\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74"]("\x73\x63\x72\x69\x70\x74");
    script["\x74\x65\x78\x74\x43\x6F\x6E\x74\x65\x6E\x74"] = "\x28" + doIt.toString() + "\x29\x28\x29\x3B";
    document["\x64\x6F\x63\x75\x6D\x65\x6E\x74\x45\x6C\x65\x6D\x65\x6E\x74"]["\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64"](script);
};