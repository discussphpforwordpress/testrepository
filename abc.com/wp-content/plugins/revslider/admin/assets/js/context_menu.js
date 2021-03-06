var tpLayerContextMenu = new function () {
    function w(a) {
        var b = 0,
            c = 0;
        if (!a) var a = window.event;
        return a.pageX || a.pageY ? (b = a.pageX, c = a.pageY) : (a.clientX || a.clientY) && (b = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, c = a.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
            x: b,
            y: c
        }
    }

    function x() {
        y(), z(), A(), B()
    }

    function y() {
        document.addEventListener("contextmenu", function (c) {
            h = b.clickInsideElement(c, "slide_layer"), jQuery(h).hasClass("demo_layer") || (h ? (b.setLayerSelected(jQuery(h).data("serial")), c.preventDefault(), a.toggleMenuOn("layer"), H(c)) : (h = b.clickInsideElement(c, "bg_context_listener"), h ? (c.preventDefault(), a.toggleMenuOn("background"), H(c)) : (h = b.clickInsideElement(c, "ignorecontextmenu"), h ? (c.preventDefault(), a.toggleMenuOn(), H(c)) : (h = null, a.toggleMenuOff()))))
        })
    }

    function z() {
        jQuery("body").on("click", function (c) {
            var d = b.clickInsideElement(c, f);
            if (d) c.preventDefault(), J(d);
            else {
                var e = c.which || c.button;
                1 === e && a.toggleMenuOff()
            }
        })
    }

    function A() {
        window.onkeyup = function (b) {
            27 === b.keyCode && a.toggleMenuOff()
        }
    }

    function B() {
        window.onresize = function (b) {
            a.toggleMenuOff()
        }
    }

    function C(a) {
        var b = "rs-icon-layerimage_n";
        switch (a) {
            case "image":
                b = "rs-icon-layerimage_n";
                break;
            case "text":
                b = "rs-icon-layerfont_n";
                break;
            case "button":
                b = "rs-icon-layerbutton_n";
                break;
            case "audio":
                b = "rs-icon-layeraudio_n";
                break;
            case "video":
                b = "rs-icon-layervideo_n";
                break;
            case "svg":
                b = "rs-icon-layersvg_n";
                break;
            case "row":
                b = "rs-icon-layergroup_n";
                break;
            case "column":
                b = "rs-icon-layercolumn_n";
                break;
            case "group":
                b = "rs-icon-layergroup_n"
        }
        return b
    }

    function D(a, b) {
        a ? jQuery(b).removeClass("ctx-td-s-off") : jQuery(b).addClass("ctx-td-s-off")
    }

    function E() {
        jQuery(".not_in_ctx_bg").hide(), jQuery(".not_in_ctx_layer").show();
        var a = jQuery("#ctx_list_of_layers");
        a.html("");
        for (i in b.arrLayers) {
            var c = b.arrLayers[i],
                d = C(c.type);
            a.append('<li class="ctx-dyn-avl-list-item context-menu__item" data-serial="' + c.serial + '"><div class="ctx_item_inner"><div class="context-menu__link" data-serial="' + c.serial + '" data-action="selectonelayer"><i class="' + d + '"></i><span class="cx-layer-name">' + c.alias + "</span></div></div></li>")
        }
    }

    function F() {
        var a = b.getLayer(b.selectedLayerSerial),
            d = a.references.htmlLayer;
        jQuery(".not_in_ctx_bg").show(), jQuery(".not_in_ctx_layer").hide(), jQuery("#cx-selected-layer-name").html(a.alias);
        var e = jQuery("#cx-selected-layer-icon");
        e.attr("class", C(a.type));
        var f = jQuery("#cx-selected-layer-visible"),
            g = jQuery("#cx-selected-layer-locked");
		c.isLayerVisible(d) ? (f.find("i").attr("class", "eg-icon-eye-off"), f.find(".cx-layer-name").html("隐藏层")) : (f.find("i").attr("class", "eg-icon-eye"), f.find(".cx-layer-name").html("显示层")), c.isLayerLocked(d) ? (g.find("i").attr("class", "eg-icon-lock-open"), g.find(".cx-layer-name").html("取消锁定层")) : (g.find("i").attr("class", "eg-icon-lock"), g.find(".cx-layer-name").html("锁定层"));
        var h = jQuery("#ctx_list_of_invisibles"),
            i = jQuery("#ctx_list_of_layers"),
            j = !0;
        h.find(".ctx-dyn-inv-list-item").remove(), i.html("");
        for (q in b.arrLayers) {
            var d = b.arrLayers[q],
                k = C(d.type),
                l = void 0 !== d.references && void 0 !== d.references.htmlLayer ? d.references.htmlLayer : void 0;
            if (void 0 !== l && l.hasClass("currently_not_visible")) {
                var n = j ? "ctx-m-top-divider" : "";
                j = !1, h.append('<li class="ctx-dyn-inv-list-item ' + n + ' context-menu__item"><div class="ctx_item_inner"><div class="context-menu__link" data-serial="' + d.serial + '" data-action="showonelayer"><i class="eg-icon-eye"></i><span class="cx-layer-name">' + d.alias + "</span></div></div></li>")
            }
            i.append('<li class="ctx-dyn-avl-list-item context-menu__item" data-serial="' + d.serial + '"><div class="ctx_item_inner"><div class="context-menu__link" data-serial="' + d.serial + '" data-action="selectonelayer"><i class="' + k + '"></i><span class="cx-layer-name">' + d.alias + "</span></div></div></li>")
        }
        "grid" === a.basealign ? (jQuery("#ctx_gridbased").addClass("selected"), jQuery("#ctx_slidebased").removeClass("selected")) : (jQuery("#ctx_gridbased").removeClass("selected"), jQuery("#ctx_slidebased").addClass("selected")), D(a["resize-full"], "#ctx_autoresponsive"), D(a.resizeme, "#ctx_childrenresponsive"), D(a.responsive_offset, "#ctx_responsiveoffset"), D(a["visible-desktop"], "#ctx_showhideondesktop"), D(a["visible-notebook"], "#ctx_showhideonnotebook"), D(a["visible-tablet"], "#ctx_showhideontablet"), D(a["visible-mobile"], "#ctx_showhideonmobile"), D(a.autolinebreak, "#ctx_linebreak"), D(a.scaleProportional, "#ctx_keepaspect"), a.displaymode || "block" === a.display ? (jQuery("#ctx_displayblock").addClass("selected"), jQuery("#ctx_displayinline").removeClass("selected")) : (jQuery("#ctx_displayblock").removeClass("selected"), jQuery("#ctx_displayinline").addClass("selected")), jQuery("#ctx-list-of-layer-links").data("uniqueid", a.unique_id);
        for (var o = void 0 !== a.groupLink ? a.groupLink : 0, p = jQuery("#ctx-layer-link-type-element-cs"), q = 0; q < 6; q++) p.removeClass("ctx-layer-link-type-" + q);
        p.addClass("ctx-layer-link-type-" + o), jQuery(m).data("current_layer", l);
        var r = "column" === b.getObjLayerType(a.p_uid);
        switch (m.className = "context-menu layer_type_" + a.type + " in_column_" + r, jQuery("#ctx-inheritdesktop").show(), jQuery("#ctx-inheritnotebook").show(), jQuery("#ctx-inherittablet").show(), jQuery("#ctx-inheritmobile").show(), b.getLayout()) {
            case "desktop":
                jQuery("#ctx-inheritdesktop").hide();
                break;
            case "notebook":
                jQuery("#ctx-inheritnotebook").hide();
                break;
            case "tablet":
                jQuery("#ctx-inherittablet").hide();
                break;
            case "mobile":
                jQuery("#ctx-inheritmobile").hide()
        }
    }

    function G() {}

    function H(a) {
        j = w(a), k = j.x, l = j.y;
        var b = jQuery("#viewWrapper").offset(),
            c = jQuery("#divbgholder").offset(),
            d = jQuery(window).scrollTop();
        p = m.offsetWidth + 4, q = m.offsetHeight + 4, u = window.innerWidth, v = window.innerHeight;
        var f = d + v,
            g = 15 + k - b.left,
            h = l - (b.top + 25);
        j.x = k - c.left, j.y = l - c.top, g = g + 250 > u - b.left ? u - (260 + b.left) : g, h = h + 300 + b.top > f ? f - 300 - b.top : h, m.style.left = g + "px", m.style.top = h + "px", g > u - (b.left + 500) ? jQuery("#context-menu-first-ul").addClass("submenustoleft") : jQuery("#context-menu-first-ul").removeClass("submenustoleft"), h + 300 + b.top + 200 > f ? jQuery("#context-menu-first-ul").addClass("submenustobottom") : jQuery("#context-menu-first-ul").removeClass("submenustobottom")
    }

    function I(a) {
        return !jQuery(a).hasClass("ctx-td-s-off")
    }

    function J(d) {
        var g, e = !0,
            f = {},
            h = !1,
            i = !1;
        if ("delegate" === d.getAttribute("data-action")) return void jQuery(document.getElementById(d.getAttribute("data-delegate"))).click();
        switch (d.getAttribute("data-action")) {
            case "delete":
                jQuery("#button_delete_layer").click();
                break;
            case "duplicate":
                jQuery("#button_duplicate_layer").click();
                break;
            case "showhide":
                jQuery("#layer-short-toolbar .quick-layer-view").click();
                break;
            case "lockunlock":
                jQuery("#layer-short-toolbar .quick-layer-lock").click();
                break;
            case "showalllayer":
                b.showAllLayers();
                break;
            case "showonlycurrent":
                b.hideAllLayers(b.selectedLayerSerial);
                break;
            case "showonelayer":
                var k = b.getLayer(jQuery(d).data("serial"));
                c.showLayer(k);
                break;
            case "selectonelayer":
                b.setLayerSelected(jQuery(d).data("serial"));
                break;
            case "autoresponsive":
                e = !1, f["resize-full"] = I(d), f["resize-full"] || (f.resizeme = !1, jQuery("#ctx_childrenresponsive").addClass("ctx-td-s-off")), h = !0;
                break;
            case "childrenresponsive":
                e = !1, f.resizeme = I(d), f.resizeme && (f["resize-full"] = !0, jQuery("#ctx_autoresponsive").removeClass("ctx-td-s-off")), h = !0;
                break;
            case "responsiveoffset":
                e = !1, f.responsive_offset = I(d), h = !0;
                break;
            case "gridbased":
                e = !1, f.basealign = "grid", h = !0;
                break;
            case "slidebased":
                e = !1, f.basealign = "slide", h = !0;
                break;
            case "nothing":
                e = !1;
                break;
            case "linebreak":
                e = !1, jQuery("#layer_auto_line_break")[0].checked ? jQuery("#layer_auto_line_break")[0].checked = !1 : jQuery("#layer_auto_line_break")[0].checked = !0, b.clickOnAutoLineBreak();
                break;
            case "displayblock":
                e = !1, f.displaymode = !0, f.display = "block", h = !0, g = jQuery(m).data("current_layer"), i = !0;
                break;
            case "displayinline":
                e = !1, f.displaymode = !1, f.display = "inline-block", h = !0, g = jQuery(m).data("current_layer"), i = !0;
                break;
            case "advancedcss":
                jQuery("#advanced-css-layer").click();
                break;
            case "resetsize":
                jQuery("#reset-scale").click();
                break;
            case "aspectratio":
                e = !1, jQuery("#layer_proportional_scale")[0].checked ? (jQuery("#layer_proportional_scale")[0].checked = !1, jQuery("#ctx_keepaspect").addClass("ctx-td-s-off")) : (jQuery("#layer_proportional_scale")[0].checked = !0, jQuery("#ctx_keepaspect").removeClass("ctx-td-s-off")), f.scaleProportional = jQuery("#layer_proportional_scale")[0].checked, h = !0;
                break;
            case "copystyle":
                e = !1;
                var l = b.getLayer(b.selectedLayerSerial);
                a.stylecache = jQuery.extend(!0, {}, l), UniteAdminRev.showInfo({
                    type: "success",
                    content: "Layer Style Successfull Copied to Clipboard",
                    hidedelay: 3
                });
                break;
            case "pastestyle":
                e = !1;
                var l = b.getLayer(b.selectedLayerSerial);
                jQuery.isEmptyObject(a.stylecache) === !1 ? (f.deformation = a.stylecache.deformation, f["deformation-hover"] = a.stylecache["deformation-hover"], f.display = a.stylecache.display, f.displaymode = a.stylecache.displaymode, f.margin = a.stylecache.margin, f.autolinebreak = a.stylecache.autolinebreak, f.padding = a.stylecache.padding, f.whitespace = a.stylecache.whitespace, f.static_styles = a.stylecache.static_styles, f["2d_rotation"] = a.stylecache["2d_rotation"], f["image-size"] = a.stylecache["image-size"], h = !0, g = l.references.htmlLayer, i = !0) : UniteAdminRev.showInfo({
                    type: "warning",
                    content: "No Style saved to Clipboard",
                    hidedelay: 3
                });
                break;
            case "inheritfromdesktop":
            case "inheritfromnotebook":
            case "inheritfromtablet":
            case "inheritfrommobile":
                var l = b.getLayer(b.selectedLayerSerial),
                    n = d.getAttribute("data-size"),
                    f = {};
                f.static_styles = {}, f.static_styles.color = {}, f.static_styles["font-size"] = {}, f.static_styles["line-height"] = {}, f.static_styles["font-weight"] = {}, f.padding = {}, f.margin = {}, f.max_height = {}, f.max_width = {}, f.scaleX = {}, f.scaleY = {}, f["text-align"] = {}, f.vieo_width = {}, f.video_height = {}, f.whitespace = {}, f.static_styles = b.setVal(f.static_styles, "color", b.getVal(l.static_styles, "color", n), !1), f.static_styles = b.setVal(f.static_styles, "font-size", b.getVal(l.static_styles, "font-size", n), !1), f.static_styles = b.setVal(f.static_styles, "line-height", b.getVal(l.static_styles, "line-height", n), !1), f.static_styles = b.setVal(f.static_styles, "font-weight", b.getVal(l.static_styles, "font-weight", n), !1), f = b.setVal(f, "padding", b.getVal(l, "padding", n), !1), f = b.setVal(f, "margin", b.getVal(l, "margin", n), !1), f = b.setVal(f, "max_height", b.getVal(l, "max_height", n), !1), f = b.setVal(f, "max_width", b.getVal(l, "max_width", n), !1), f = b.setVal(f, "scaleX", b.getVal(l, "scaleX", n), !1), f = b.setVal(f, "scaleY", b.getVal(l, "scaleY", n), !1), f = b.setVal(f, "text-align", b.getVal(l, "text-align", n), !1), f = b.setVal(f, "vieo_width", b.getVal(l, "vieo_width", n), !1), f = b.setVal(f, "video_height", b.getVal(l, "video_height", n), !1), f = b.setVal(f, "whitespace", b.getVal(l, "whitespace", n), !1), h = !0, g = l.references.htmlLayer, i = !0;
                break;
            case "showhideondesktop":
                e = !1, f["visible-desktop"] = I(d), h = !0;
                break;
            case "showhideonnotebook":
                e = !1, f["visible-notebook"] = I(d), h = !0;
                break;
            case "showhideontablet":
                e = !1, f["visible-tablet"] = I(d), h = !0;
                break;
            case "showhideonmobile":
                e = !1, f["visible-mobile"] = I(d), h = !0;
                break;
            case "grouplinkchange":
                e = !1, f.groupLink = d.getAttribute("data-linktype");
                for (var l = b.getLayer(b.selectedLayerSerial), o = l.references.sorttable.layer.find(".layer-link-type-element-cs").first(), p = jQuery("#ctx-layer-link-type-element-cs"), q = 0; q < 6; q++) o.removeClass("layer-link-type-" + q), p.removeClass("ctx-layer-link-type-" + q);
                o.addClass("layer-link-type-" + f.groupLink), p.addClass("ctx-layer-link-type-" + f.groupLink);
                break;
            case "addtextlayer":
                b.nextNewLayerToPosition(j), jQuery("#button_add_layer").click();
                break;
            case "addimagelayer":
                b.nextNewLayerToPosition(j), jQuery("#button_add_layer_image").click();
                break;
            case "addaudiolayer":
                b.nextNewLayerToPosition(j), jQuery("#button_add_layer_audio").click();
                break;
            case "addvideolayer":
                b.nextNewLayerToPosition(j), jQuery("#button_add_layer_video").click();
                break;
            case "addbuttonlayer":
                b.nextNewLayerToPosition(j), jQuery("#button_add_layer_button").click();
                break;
            case "addshapelayer":
                b.nextNewLayerToPosition(j), jQuery("#button_add_layer_shape").click();
                break;
            case "addobjectlayer":
                b.nextNewLayerToPosition(j), jQuery("#button_add_layer_svg").click()
        }
        jQuery.isEmptyObject(f) === !1 && b.updateLayer(b.selectedLayerSerial, f), h && b.updateLayerFormFields(b.selectedLayerSerial), i && c.rebuildLayerIdle(g), e && a.toggleMenuOff()
    }
    var h, j, k, l, m, n, p, q, u, v, a = this,
        b = new Object,
        c = new Object,
        f = "context-menu__link",
        o = 0;
    a.stylecache = {}, a.init = function () {
        b = UniteLayersRev, c = tpLayerTimelinesRev, m = document.querySelector("#context-menu"), n = m.querySelectorAll(".context-menu__item"), x(), jQuery(".context-submenu").perfectScrollbar({
            wheelPropagation: !1,
            suppressScrollX: !0
        }), jQuery(".context-submenu").each(function () {
            jQuery(this).on("mouseenter", function () {
                jQuery(this).perfectScrollbar("update")
            })
        }), jQuery("body").on("mouseenter", ".ctx-dyn-avl-list-item", function () {
            jQuery(".layer_due_list_element_selected").removeClass("layer_due_list_element_selected"), jQuery("#slide_layer_" + jQuery(this).data("serial")).addClass("layer_due_list_element_selected")
        }), jQuery("body").on("mouseleave", ".ctx-dyn-avl-list-item", function () {
            jQuery(".layer_due_list_element_selected").removeClass("layer_due_list_element_selected")
        }), jQuery("body").on("click", ".ctx-td-switcher", function () {
            var a = jQuery(this);
            a.toggleClass("ctx-td-s-off")
        }), jQuery("body").on("click", ".ctx-td-option-selector", function () {
            var a = jQuery(this);
            a.parent().find(".selected").removeClass("selected"), a.addClass("selected")
        })
    }, a.toggleMenuOn = function (a) {
        punchgs.TweenLite.fromTo(m, .2, {
            x: 10,
            autoAlpha: 0
        }, {
            x: 0,
            autoAlpha: 1,
            display: "block",
            ease: punchgs.Power2.easeInOut,
            delay: .2
        }), 1 !== o && (o = 1), "layer" === a ? b.selectedLayerSerial != -1 ? F() : G() : "background" === a && E()
    }, a.toggleMenuOff = function () {
        0 !== o && (o = 0, punchgs.TweenLite.to(m, .2, {
            y: 25,
            autoAlpha: 0
        }))
    }
};
