/**
 * @return {undefined}
 */
function Variant() {
  /**
   * @return {undefined}
   */
  function onload() {
    $(".viu").html($("#veu").html());
    win = $("#veu");
    $col = $(".viu");
    name = "undefined" !== $("body").attr("mrv_namespace") ? $("body").attr("mrv_namespace") : "mrv_variant.default";
    selector = $("body").attr("mrv_contentTarget") ? $("#veu " + $("body").attr("mrv_contentTarget")) : win;
    object = $("body").attr("mrv_contentTarget") ? $(".viu " + $("body").attr("mrv_contentTarget")) : $col;
    self = $("body").attr("mrv_navTarget") ? $("#veu " + $("body").attr("mrv_navTarget")) : selector;
    mrv_pageNavTarget = $("body").attr("mrv_navTarget") ? $(".viu " + $("body").attr("mrv_navTarget")) : object;
    tmp = $("body").attr("mrv_footerTarget") ? $("#veu " + $("body").attr("mrv_footerTarget")) : selector;
    iteratee = $("body").attr("mrv_footerTarget") ? $(".viu " + $("body").attr("mrv_footerTarget")) : object;
  }
  /**
   * @return {undefined}
   */
  function resize() {
    var meterPos;
    $(".vhv").css("height", $(window).height());
    /** @type {number} */
    meterPos = $(".vlv").height() - $(".vlv .vlq").height() - $(".vlv .vls").height() - $(".vlv .vlw").height() - 2 * $(".vlv .vho").height() - $(".vac").height() - 64;
    $(".vem").css("max-height", meterPos);
    /** @type {number} */
    var propsCss = $(window).height() - $(".vem").outerHeight(false) - $(".vlv .vls").height() - $(".vlz").height() - 9;
    $(".vgm").css("height", propsCss);
    /** @type {number} */
    var previous_width = $(window).height() - $(".vlo .vls").height() - $(".vlo .vlq").height() - $(".vgc").height() - 32;
    $(".vfw").css("max-height", previous_width);
    draggable();
  }
  /**
   * @param {string} name
   * @return {undefined}
   */
  function check(name) {
    var ga;
    var content;
    var reset = $("#" + name).find("section, header, footer").clone();
    var val = replace($(reset));
    if (tmp.selector != selector.selector) {
      $(reset).addClass(name + "-" + val).appendTo(selector);
    } else {
      ga = $(selector).find("footer");
      if (ga.length) {
        $(reset).addClass(name + "-" + val).insertBefore(ga);
      } else {
        $(reset).addClass(name + "-" + val).appendTo(selector);
      }
    }
    $(".vem").append('<div class="vaa data-vfs="' + name + '" vbq="' + name + "-" + val + '"><div class="vab"><span class="vir" contenteditable="true">' + $("#" + name).attr("vbr") + '</span></div><i class="vca variant-icon variant-close-circle" vbq="' + name + "-" + val + '"></i></div>');
    editableChanged();
    parse();
    done(name + "-" + val);
    resize();
    content = $(".vem");
    layoutMapHeight = content[0].scrollHeight;
    content.animate({
      scrollTop : layoutMapHeight
    }, 480);
  }
  /**
   * @param {string} next
   * @param {string} range
   * @return {undefined}
   */
  function fn(next, range) {
    if ($("#veu nav, .viu nav").remove(), "vir" == range) {
      var parent = $("#" + next).clone();
      $(parent).find("script.options").remove();
      self.prepend(parent.html());
      self.find("nav").addClass("vir").attr("nav-id", next);
      replace(self.find("nav"));
      run(next);
    }
    if ("vhz" == range) {
      parent = createElement($("#vbn [via=" + next + "]").get(0), true);
      self.prepend(parent);
      run($("#vbn [via=" + next + "]").attr("nav-id"));
    }
    parse();
    done();
  }
  /**
   * @param {string} target
   * @param {string} opt_reverse
   * @return {undefined}
   */
  function select(target, opt_reverse) {
    if ($("#veu footer").remove(), "vir" == opt_reverse) {
      var html = $("#" + target).html();
      tmp.append(html);
      tmp.find("footer").addClass("vir");
      replace(tmp.find("footer"));
    }
    if ("vhz" == opt_reverse) {
      html = createElement($("#vbl [vhy=" + target + "]").get(0), true);
      tmp.append(html);
    }
    parse();
    done();
  }
  /**
   * @return {undefined}
   */
  function link() {
    var $el = $(object.selector);
    var target = $(selector.selector);
    var set = $el.find("footer");
    var i = target.find("footer");
    $(".vem .vaa").each(function() {
      var index = $(this).attr("vbq");
      var record = target.find("." + index);
      var label = record.clone();
      var child = target.find("[vik=" + index + "]");
      var view = child.clone();
      child.remove();
      if (i.length) {
        view.insertBefore(i);
      } else {
        view.appendTo(target);
      }
      record.remove();
      if (i.length) {
        label.insertBefore(i);
      } else {
        label.appendTo(target);
      }
      record = $el.find("." + index);
      label = record.clone();
      child = $el.find("[vik=" + index + "]");
      view = child.clone();
      child.remove();
      if (set.length) {
        view.insertBefore(set);
      } else {
        view.appendTo($el);
      }
      record.remove();
      if (set.length) {
        label.insertBefore(set);
      } else {
        label.appendTo($el);
      }
    });
    parse();
    done();
  }
  /**
   * @param {?} elem
   * @return {?}
   */
  function replace(elem) {
    /** @type {number} */
    var slen2 = (new Date).getTime();
    /** @type {string} */
    var d = "vjs-" + slen2;
    return $(elem).is("section, nav, header, footer, .divider-background") && ($(elem).is("[vic") || ($(elem).attr("vic", d), $(elem).addClass(d))), $(elem).find("p, span, a, h1, h2, h3, h4, h5, h6, strong, em, ul, li, div, i, img, section, header, figure, video, iframe, input, textarea, blockquote, figcaption, tbody, tr, td, th, form, label, address").not(".vog, [vic]").each(function(i) {
      /** @type {string} */
      var classes = d + "-" + i;
      $(this).attr("vic", classes);
      $(this).addClass(classes);
      if (!$(this).is("nav, nav li, .slides > li, .slides .owl-item > li, ul, div, i, img, section, header, figure, .veo, video, iframe, input, textarea, form, tbody, tr, td, .vjx")) {
        $(this).addClass("vir");
        $(this).attr("contenteditable", "true");
      }
      if ($(this).is("span, a, strong, em, i")) {
        if (0 === $(this).parent().text().replace($(this).text(), "").replace(/\s/g, "").length) {
          $(this).parent().removeAttr("contenteditable");
        }
      } else {
        $(this).parent().removeAttr("contenteditable");
      }
    }), slen2;
  }
  /**
   * @param {string} data
   * @return {undefined}
   */
  function done(data) {
    /**
     * @param {string} name
     * @return {undefined}
     */
    function test(name) {
      /** @type {string} */
      var v = ".viu";
      if ("undefined" != typeof name) {
        /** @type {string} */
        v = ".viu " + name;
      }
      $(v).find("[no-src]").each(function() {
        $(this).attr("src", $(this).attr("no-src")).removeAttr("no-src");
      });
    }
    var verticalScrollPos = $(".viu").get(0).scrollTop;
    $(".viu " + $("body").attr("mrv_contentTarget"));
    $(".viu").empty().html($("#veu").html());
    setTimeout(function() {
      if ("undefined" == typeof mr) {
        test();
        reInit(".viu");
      } else {
        test();
        mr.documentReady(mr.setContext(".viu"));
        mr.windowLoad(mr.setContext(".viu"));
      }
      click();
      _set_navigation();
      compile();
      $(".viu .embedded-video-holder").each(function() {
        $(this).addClass("vju");
      });
      onSuccess();
      $(".viu").get(0).scrollTop = verticalScrollPos;
      $(".viu .vnx").trigger("mouseenter");
    }, 100);
  }
  /**
   * @param {?} string
   * @return {?}
   */
  function trim(string) {
    return String(string).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  /**
   * @return {undefined}
   */
  function _listMdFiles() {
    $(".global-vfr").modal({
      autoResize : true,
      overlayClose : true,
      opacity : 0,
      overlayCss : {
        "background-color" : "#3e3e3e"
      },
      closeClass : "vex",
      /**
       * @return {undefined}
       */
      onShow : function() {
        setTimeout(function() {
          $(".simplemodal-container").addClass("vko");
          $(".simplemodal-overlay").addClass("vko");
        }, 100);
        resize();
      },
      /**
       * @return {undefined}
       */
      onClose : function() {
        setTimeout(function() {
          $.modal.close();
          resize();
        }, 300);
        $(".simplemodal-container").removeClass("vko");
        $(".simplemodal-overlay").removeClass("vko");
      }
    });
  }
  /**
   * @param {?} failing_message
   * @return {undefined}
   */
  function report(failing_message) {
    $(".vfc").modal({
      autoResize : true,
      overlayClose : true,
      opacity : 0,
      overlayCss : {
        "background-color" : "#3e3e3e"
      },
      closeClass : "vex",
      /**
       * @return {undefined}
       */
      onShow : function() {
        $(".vga").val("");
        setTimeout(function() {
          $(".simplemodal-container").addClass("vko");
          $(".simplemodal-overlay").addClass("vko");
        }, 100);
        resize();
      },
      /**
       * @return {undefined}
       */
      onClose : function() {
        setTimeout(function() {
          $.modal.close();
          resize();
        }, 300);
        $(".simplemodal-container").removeClass("vko");
        $(".simplemodal-overlay").removeClass("vko");
      }
    });
  }
  /**
   * @return {undefined}
   */
  function evaluate() {
    var dataName;
    /** @type {number} */
    var queueHooks = (new Date).getTime();
    /** @type {string} */
    var key = "via-" + queueHooks;
    var newValue = $(".vgb").val();
    $(".vfj").closest(".vho").find(".vly").text(newValue);
    $(".vgb").val("");
    $("#veu nav").removeClass("vir").addClass("vhz").addClass(key).attr("via", key).attr("vio", newValue);
    $(".viu nav").removeClass("vir").addClass("vhz").addClass(key).attr("via", key).attr("vio", newValue);
    $("#vbn").append($("#veu nav").clone());
    dataName = $("#vbn").html();
    $.localStorage(name + ".vbo", dataName);
    f($("." + key));
  }
  /**
   * @param {?} ctx
   * @return {undefined}
   */
  function f(ctx) {
    $(".vfj").append('<li class="vfi" nav-id="' + $(ctx).attr("via") + '" vit="vhz">' + $(ctx).attr("vio") + '<span class="vby oi" data-glyph="x"></span></li>');
  }
  /**
   * @return {undefined}
   */
  function trigger() {
    $("#vbn").append($.localStorage(name + ".vbo"));
    $("#vbn nav").each(function() {
      f($(this));
    });
  }
  /**
   * @return {undefined}
   */
  function each() {
    var $field = $(".viu nav");
    var v = $field.attr("via");
    $("#veu ." + v).html($field.html()).attr("class", $field.attr("class"));
    $("#vbn ." + v).html($field.html()).attr("class", $field.attr("class"));
    $("#vbn .vjb").removeClass("vjb");
    $.localStorage(name + ".vbo", $("#vbn").html());
  }
  /**
   * @return {undefined}
   */
  function Init() {
    var $html = $(".viu footer");
    var errorClass = $html.attr("vhy");
    $("#veu ." + errorClass).html($html.html());
    $("#vbl ." + errorClass).html($html.html());
    $("#vbl .vjb").removeClass("vjb");
    $.localStorage(name + ".vbm", $("#vbl").html());
  }
  /**
   * @param {?} wanted
   * @return {undefined}
   */
  function expect(wanted) {
    $(".vfb").modal({
      autoResize : true,
      overlayClose : true,
      opacity : 0,
      overlayCss : {
        "background-color" : "#3e3e3e"
      },
      closeClass : "vex",
      /**
       * @return {undefined}
       */
      onShow : function() {
        $(".vfy").val("");
        setTimeout(function() {
          $(".simplemodal-container").addClass("vko");
          $(".simplemodal-overlay").addClass("vko");
        }, 100);
        resize();
      },
      /**
       * @return {undefined}
       */
      onClose : function() {
        setTimeout(function() {
          $.modal.close();
          resize();
        }, 300);
        $(".simplemodal-container").removeClass("vko");
        $(".simplemodal-overlay").removeClass("vko");
      }
    });
  }
  /**
   * @return {undefined}
   */
  function find() {
    var dataName;
    /** @type {number} */
    var queueHooks = (new Date).getTime();
    /** @type {string} */
    var key = "vhy-" + queueHooks;
    var newValue = $(".vfz").val();
    $(".vdm").closest(".vho").find(".vly").text(newValue);
    $(".vfz").val("");
    $("#veu footer").removeClass("vir").addClass("vhz").addClass(key).attr("vhy", key).attr("vie", newValue);
    $(".viu footer").removeClass("vir").addClass("vhz").addClass(key).attr("vhy", key).attr("vie", newValue);
    $("#vbl").append($("#veu footer").clone());
    dataName = $("#vbl").html();
    $.localStorage(name + ".vbm", dataName);
    addButton($("." + key));
  }
  /**
   * @param {?} button
   * @return {undefined}
   */
  function addButton(button) {
    $(".vdm").append('<li class="vdl" vid="' + $(button).attr("vhy") + '" vdn="' + $(button).attr("vhy") + '" vit="vhz">' + $(button).attr("vie") + '<span class="vbx oi" data-glyph="x"></span></li>');
  }
  /**
   * @return {undefined}
   */
  function attach() {
    $("#vbl").append($.localStorage(name + ".vbm"));
    $("#vbl footer").each(function() {
      addButton($(this));
    });
  }
  /**
   * @return {undefined}
   */
  function toggleClass() {
    $(".vjq").removeClass("vgq");
    $(".vad").toggleClass("vgq");
  }
  /**
   * @param {string} result
   * @return {undefined}
   */
  function after(result) {
    $(".vcw").modal({
      autoResize : true,
      overlayClose : true,
      opacity : 0,
      overlayCss : {
        "background-color" : "#3e3e3e"
      },
      closeClass : "vex",
      /**
       * @return {undefined}
       */
      onShow : function() {
        $(".vgp").addClass("vih");
        var divSpan = $("." + result);
        if (divSpan.hasClass("ven")) {
          $(".vcq").text("for Lightbox Image");
        } else {
          show();
        }
        $(".vcu").val($("." + result).attr("href").replace("../img/", "img/"));
        $(".vcv").val(result);
        $(".vcz").removeAttr("selected");
        if ("undefined" != typeof $("." + result).attr("target")) {
          $(".vcy").val($("." + result).attr("target"));
        } else {
          $(".vcy").val("_self");
        }
        setTimeout(function() {
          $(".simplemodal-container").addClass("vko");
          $(".simplemodal-overlay").addClass("vko");
        }, 100);
        resize();
      },
      /**
       * @return {undefined}
       */
      onClose : function() {
        setTimeout(function() {
          $.modal.close();
          resize();
        }, 300);
        $(".simplemodal-container").removeClass("vko");
        $(".simplemodal-overlay").removeClass("vko");
      }
    });
  }
  /**
   * @param {string} result
   * @return {undefined}
   */
  function close(result) {
    $(".vcl").modal({
      autoResize : true,
      overlayClose : true,
      opacity : 0,
      overlayCss : {
        "background-color" : "#3e3e3e"
      },
      closeClass : "vex",
      /**
       * @return {undefined}
       */
      onShow : function() {
        $(".vdx").html($("#vdp").html());
        $(".vcp").attr("src", $("." + result).attr("src"));
        $(".vcm .veb").text($("." + result).get(0).naturalWidth + "x" + $("." + result).get(0).naturalHeight + " pixels");
        $(".vco").val($("." + result).attr("src").replace("../img/", "img/"));
        $(".vck").val(result);
        $(".vcf").val($("." + result).attr("alt"));
        $(".vdx .vdy").each(function(el) {
          // Dealing with the upload images.
          el = $(this).find("img").get(0);
          var script = $(this).find(".vec");
          script.text(el.naturalWidth + "x" + el.naturalHeight);
        });
        setTimeout(function() {
          $(".simplemodal-container").addClass("vko");
          $(".simplemodal-overlay").addClass("vko");
        }, 100);
        resize();
      },
      /**
       * @return {undefined}
       */
      onClose : function() {
        setTimeout(function() {
          html();
          $.modal.close();
          resize();
        }, 300);
        $(".simplemodal-container").removeClass("vko");
        $(".simplemodal-overlay").removeClass("vko");
      }
    });
  }
  /**
   * @param {?} coords
   * @return {undefined}
   */
  function preset(coords) {
    $(".vcd").modal({
      autoResize : true,
      overlayClose : true,
      opacity : 0,
      minHeight : 620,
      overlayCss : {
        "background-color" : "#3e3e3e"
      },
      closeClass : "vex",
      /**
       * @return {undefined}
       */
      onShow : function() {
        $("#vgo").val(coords);
        setTimeout(function() {
          $(".simplemodal-container").addClass("vko");
          $(".simplemodal-overlay").addClass("vko");
        }, 100);
        filter();
        resize();
      },
      /**
       * @return {undefined}
       */
      onClose : function() {
        setTimeout(function() {
          $.modal.close();
          resize();
        }, 300);
        $(".simplemodal-container").removeClass("vko");
        $(".simplemodal-overlay").removeClass("vko");
      }
    });
  }
  /**
   * @param {string} value
   * @return {undefined}
   */
  function setAttribute(value) {
    $(".vde").modal({
      autoResize : true,
      overlayClose : true,
      opacity : 0,
      overlayCss : {
        "background-color" : "#3e3e3e"
      },
      closeClass : "vex",
      /**
       * @return {undefined}
       */
      onShow : function() {
        $(".vdd").val(value);
        $(".vda").val($("." + value + ' > source[type="video/mp4"]').attr("src").replace("../video/", "video/"));
        $(".vdg").val($("." + value + ' > source[type="video/webm"]').attr("src").replace("../video/", "video/"));
        $(".vdb").val($("." + value + ' > source[type="video/ogg"]').attr("src").replace("../video/", "video/"));
        setTimeout(function() {
          $(".simplemodal-container").addClass("vko");
          $(".simplemodal-overlay").addClass("vko");
        }, 100);
        resize();
      },
      /**
       * @return {undefined}
       */
      onClose : function() {
        setTimeout(function() {
          $.modal.close();
          resize();
        }, 300);
        $(".simplemodal-container").removeClass("vko");
        $(".simplemodal-overlay").removeClass("vko");
      }
    });
  }
  /**
   * @param {?} index
   * @return {undefined}
   */
  function end(index) {
    $(".vph").modal({
      autoResize : true,
      overlayClose : true,
      opacity : 0,
      overlayCss : {
        "background-color" : "#3e3e3e"
      },
      closeClass : "vex",
      /**
       * @return {undefined}
       */
      onShow : function() {
        $(".vpj").val(index);
        setTimeout(function() {
          $(".simplemodal-container").addClass("vko");
          $(".simplemodal-overlay").addClass("vko");
        }, 100);
        resize();
      },
      /**
       * @return {undefined}
       */
      onClose : function() {
        setTimeout(function() {
          $.modal.close();
          resize();
        }, 300);
        $(".simplemodal-container").removeClass("vko");
        $(".simplemodal-overlay").removeClass("vko");
      }
    });
  }
  /**
   * @return {undefined}
   */
  function showAboutInfo() {
    $(".vge").modal({
      autoResize : true,
      overlayClose : true,
      opacity : 0,
      overlayCss : {
        "background-color" : "#3e3e3e"
      },
      closeClass : "vex",
      /**
       * @return {undefined}
       */
      onShow : function() {
        $(".vgf").val("");
        setTimeout(function() {
          $(".simplemodal-container").addClass("vko");
          $(".simplemodal-overlay").addClass("vko");
        }, 100);
        resize();
      },
      /**
       * @return {undefined}
       */
      onClose : function() {
        setTimeout(function() {
          $.modal.close();
          resize();
        }, 300);
        $(".simplemodal-container").removeClass("vko");
        $(".simplemodal-overlay").removeClass("vko");
      }
    });
  }
  /**
   * @param {Object} x
   * @param {string} module
   * @return {undefined}
   */
  function error(x, module) {
    x = "undefined" != typeof x ? x : "";
    module = "undefined" != typeof module ? module : "";
    $(".vag").text(x);
    $(".vae").html(module);
    $(".vaf").modal({
      autoResize : true,
      overlayClose : true,
      opacity : 0,
      overlayCss : {
        "background-color" : "#3e3e3e"
      },
      closeClass : "vex",
      /**
       * @return {undefined}
       */
      onShow : function() {
        setTimeout(function() {
          $(".simplemodal-container").addClass("vko");
          $(".simplemodal-overlay").addClass("vko");
        }, 100);
        resize();
      },
      /**
       * @return {undefined}
       */
      onClose : function() {
        setTimeout(function() {
          $.modal.close();
          resize();
        }, 300);
        $(".simplemodal-container").removeClass("vko");
        $(".simplemodal-overlay").removeClass("vko");
      }
    });
  }
  /**
   * @param {string} obj
   * @param {string} x
   * @param {Object} y
   * @param {number} d
   * @return {undefined}
   */
  function get(obj, x, y, d) {
    var heading;
    x = "undefined" != typeof x ? x : false;
    var id = "undefined" != typeof obj && "" !== obj ? obj : "";
    /** @type {number} */
    d = "undefined" != typeof d ? parseInt(d) : 5E3;
    y = "undefined" != typeof y ? y : "";
    var activePage = $("body div.variant-notification-container-mrv");
    var element = $("<div>").addClass("variant-notification-mrv");
    /** @type {number} */
    var port = (new Date).getTime();
    /** @type {string} */
    var name = "notification-" + port;
    if (!$("div.variant-notification-container-mrv").length) {
      $("body").append($('<div class="variant-notification-container-mrv"></div>'));
      /** @type {string} */
      activePage = "body div.variant-notification-container-mrv";
    }
    if (x) {
      heading = $('<span class="oi">').attr("data-glyph", x);
      element.append(heading);
    }
    element.append("<span>" + id + "</span>");
    element.addClass(name).addClass("vhr");
    element.addClass(y);
    $(activePage).append(element);
    setTimeout(function() {
      $(".variant-notification-mrv." + name).fadeOut(700, function() {
        $(this).remove();
      });
    }, d);
  }
  /**
   * @param {?} e
   * @param {Object} init
   * @param {boolean} recurring
   * @return {undefined}
   */
  function refresh(e, init, recurring) {
    var element;
    var oldPagerPosition;
    var newBlockId;
    var flag;
    var self = init || e.data("vip");
    element = $(e).find(self.selector + "[" + self.attribute + "]").length ? $("#veu " + $(e).attr("vic")).find(self.selector + "[" + self.attribute + "]") : $("#veu ." + $(e).attr("vic"));
    newBlockId = "undefined" != typeof self.modalInputIcon ? self.modalInputIcon : "pencil";
    flag = "undefined" != typeof self.refresh ? self.refresh : "false";
    oldPagerPosition = element.attr(self.attribute);
    $(".vbk").text(self.modalTitle);
    $(".vbh").text(self.modalIntro);
    $(".vbf").text(self.modalInputLabel);
    $(".vkh").attr("data-glyph", newBlockId);
    $(".vbg").val(oldPagerPosition);
    $(".vbe").val($(element).attr("vic")).attr("vnn", flag);
    $(".vbc").val(self.attribute);
    $(".vbk").text(self.modalTitle);
    if ("string" != typeof recurring && recurring === true) {
      label();
    } else {
      if ($(e).is("section, header")) {
        $(".vgk").text(self.buttonText).attr("data-glyph", newBlockId).removeClass("vih");
      } else {
        $(".vdh").text(self.buttonText).attr("data-glyph", newBlockId).removeClass("vih");
      }
    }
  }
  /**
   * @return {undefined}
   */
  function label() {
    $(".vbi").modal({
      autoResize : true,
      overlayClose : true,
      opacity : 0,
      overlayCss : {
        "background-color" : "#3e3e3e"
      },
      closeClass : "vex",
      /**
       * @return {undefined}
       */
      onShow : function() {
        setTimeout(function() {
          $(".simplemodal-container").addClass("vko");
          $(".simplemodal-overlay").addClass("vko");
        }, 100);
        resize();
      },
      /**
       * @return {undefined}
       */
      onClose : function() {
        setTimeout(function() {
          $.modal.close();
          resize();
        }, 300);
        $(".simplemodal-container").removeClass("vko");
        $(".simplemodal-overlay").removeClass("vko");
      }
    });
  }
  /**
   * @return {undefined}
   */
  function success() {
    var target = $("#veu ." + $(".vbe").val());
    var img = $(".vbg").val();
    var tag = $(".vbc").val();
    $(target).closest("[data-vip]").data("vip");
    if (-1 !== img.indexOf("<")) {
      if (!!$(img).is("iframe")) {
        if (!("src" !== tag && ("no-src" !== tag && "data-src" !== tag))) {
          img = $(img).attr("src");
          if ("//" === img.substring(0, 2)) {
            /** @type {string} */
            img = "https:" + img;
          }
          if (-1 !== img.indexOf("youtube.com")) {
            img += "?showinfo=0&rel=0&modestbranding=1";
            if (target.hasClass("youtube-bg-iframe")) {
              img += "&enablejsapi=1&autoplay=1&controls=0&loop=1&iv_load_policy=3";
            }
          }
          if (-1 !== img.indexOf("vimeo.com")) {
            img += "?badge=0&title=0&byline=0";
          }
        }
      }
    }
    if ($(target).is("iframe") && "no-src" == tag) {
      $(target).attr(tag, img);
      $(".viu ." + $(".vbe").val()).attr("src", img);
    } else {
      $(target).attr(tag, img);
      $(".viu ." + $(".vbe").val()).attr(tag, img);
    }
    parse();
    if ("true" === $(".vbe").attr("vnn")) {
      done(target.attr("vic"));
    }
    $(".vbe").removeAttr("refresh");
  }
  /**
   * @param {string} i
   * @return {?}
   */
  function next(i) {
    var html;
    var slider;
    var tp;
    var style;
    return $("#veu ." + i).attr("vht") ? i = "parent" == $("#veu ." + i).attr("vht") ? $("#veu ." + i).parent().attr("vic") : $("#veu ." + i).closest($("#veu ." + i).attr("vht")).attr("vic") : $("#veu ." + i).closest(".vpe").length && (i = $("#veu ." + i).closest(".vpe").attr("vic")), html = $(".viu ." + i).not("ul.slides .clone ." + i).clone(), slider = $("#veu ." + i).clone(), tp = (new Date).getTime(), style = "vjs-" + tp, html.find(".vnw").remove(), html.attr("vic", style), slider.attr("vic", 
    style), html.alterClass("vjs-*", ""), slider.alterClass("vjs-*", ""), html.addClass(style), slider.addClass(style), html.find("p, span, a, h1, h2, h3, h4, h5, h6, strong, em, ul, li, div, i, img, iframe, blockquote, figcaption, tbody, tr, td, th, form, label, address").each(function(i) {
      /** @type {string} */
      var classes = "vjs-" + tp + "-" + i;
      $(this).attr("vic", classes);
      $(this).alterClass("vjs-*", "");
      $(this).addClass(classes);
    }), slider.find("p, span, a, h1, h2, h3, h4, h5, h6, strong, em, ul, li, div, i, img, iframe, blockquote, figcaption, tbody, tr, td, th, form, label, address").each(function(i) {
      /** @type {string} */
      var classes = "vjs-" + tp + "-" + i;
      $(this).attr("vic", classes);
      $(this).alterClass("vjs-*", "");
      $(this).addClass(classes);
    }), html.addClass("vpf").insertAfter($(".viu ." + i)), slider.insertAfter($("#veu ." + i)), slider.insertAfter($("#vbn ." + i)), parse(), $(".vhw").hide(), $("#veu ." + i).is(target) ? void done(i) : void $(".viu ." + i).parents().each(function() {
      return $(this).is(sel) ? (done(i), false) : void 0;
    });
  }
  /**
   * @param {string} s
   * @param {boolean} keepData
   * @return {undefined}
   */
  function remove(s, keepData) {
    var c = "undefined" != typeof keepData ? keepData : false;
    var cursor = $(".viu ." + s).parents();
    /** @type {boolean} */
    var e = $("#veu ." + s).is(target) ? true : false;
    if ($("#veu ." + s).attr("vht")) {
      s = "parent" == $("#veu ." + s).attr("vht") ? $("#veu ." + s).parent().attr("vic") : $("#veu ." + s).closest($("#veu ." + s).attr("vht")).attr("vic");
    } else {
      if ($("#veu ." + s).closest(".vpe").length) {
        s = $("#veu ." + s).closest(".vpe").attr("vic");
      }
    }
    if ($("#veu ." + s).attr("vjw")) {
      also = $("#veu ." + s).closest("nav, section, header, footer").find($("#veu ." + s).attr("vjw")).attr("vic");
    } else {
      /** @type {string} */
      also = s;
    }
    if (c === true) {
      $(".viu ." + s).remove();
      $("#veu ." + s).remove();
    }
    if ($(".vdv").length) {
      $(".viu ." + s + ", .viu ." + also).addClass("vjb").removeClass("vjm");
      $("#veu ." + s + ", #veu ." + also).addClass("vjb").removeClass("vjm");
    } else {
      $(".viu ." + s + ", .viu ." + also).addClass("vib").removeClass("vjm");
      $("#veu ." + s + ", #veu ." + also).addClass("vib").removeClass("vjm");
    }
    if (e) {
      done(s);
    } else {
      cursor.each(function() {
        return $(this).is(sel) ? (done(s), false) : void 0;
      });
    }
    parse();
    $(".vhw").hide();
  }
  /**
   * @param {string} e
   * @return {undefined}
   */
  function build(e) {
    var handle = $("#veu ." + e);
    var h = $(".viu ." + e);
    var fragment = $("#veu ." + _build(handle));
    var results = $(".viu ." + _build(h));
    if (!handle.is(":first-child")) {
      handle.detach().insertBefore(fragment);
      h.detach().find(".vnw").remove();
      h.insertBefore(results);
      if (handle.is(target)) {
        done(e);
      } else {
        h.parents().each(function() {
          return $(this).is(sel) ? (done(e), false) : void 0;
        });
      }
    }
  }
  /**
   * @param {string} e
   * @return {undefined}
   */
  function stop(e) {
    var $el = $("#veu ." + e);
    var el = $(".viu ." + e);
    var zeroSizedNbsp = $el.next();
    var t = el.next();
    if (!$el.is(":last-child")) {
      $el.detach().insertAfter(zeroSizedNbsp);
      el.detach().find(".vnw").remove();
      el.insertAfter(t);
      if ($el.is(target)) {
        done(e);
      } else {
        el.parents().each(function() {
          return $(this).is(sel) ? (done(e), false) : void 0;
        });
      }
    }
  }
  /**
   * @param {?} el
   * @return {?}
   */
  function activate(el) {
    if ($(el).siblings().length) {
      return void $(el).remove();
    }
    if ($(el).parent().length) {
      var failuresLink = $(el).parent();
      return $(el).remove(), activate(failuresLink);
    }
  }
  /**
   * @return {undefined}
   */
  function handle() {
    var $this = $("." + $(".vcv").val());
    var src = $(".vcu").val();
    var _tmp = $(".vcy").val();
    if ($this.hasClass("ven")) {
      if ($this.find("img[alt]").length) {
        $this.attr("data-title", $this.find("img").attr("alt"));
      }
      if ("img/" == src.substring(0, 4)) {
        src = src.replace("../img/", "img/");
      }
    }
    $this.removeClass("inner-link").attr("href", src).attr("target", _tmp);
    if (-1 != src.indexOf("#")) {
      $this.addClass("inner-link");
    }
    parse();
  }
  /**
   * @return {undefined}
   */
  function process() {
    var src = $(".vco").val();
    var $this = $("." + $(".vck").val());
    refreshTarget = $(".vck").val();
    if ("img/" == src.substring(0, 4)) {
      src = src.replace("../img/", "img/");
    }
    $this.attr("src", src);
    $this.attr("alt", $(".vcf").val());
    if ($this.closest("a.ven").length) {
      $this.closest("a.ven").attr("data-title", $this.attr("alt")).attr("href", src);
    }
    if ($this.is(".background-image, .background-image-holder img")) {
      done(refreshTarget);
    } else {
      if ($this.parents().find(sel).length) {
        done(refreshTarget);
      }
    }
    parse();
  }
  /**
   * @return {undefined}
   */
  function finished() {
    var p = $(".vda").val();
    var content = $(".vdg").val();
    var label = $(".vdb").val();
    var $e = $("." + $(".vdd").val());
    var pdataCur = $(".vdd").val();
    if (p.length) {
      if ("video/" == p.substring(0, 6)) {
        p = p.replace("video/", "../video/");
      }
    }
    if (content.length) {
      if ("video/" == content.substring(0, 6)) {
        content = content.replace("video/", "../video/");
      }
    }
    if (label.length) {
      if ("video/" == label.substring(0, 6)) {
        label = label.replace("video/", "../video/");
      }
    }
    $e.find('source[type="video/mp4"]').attr("src", p);
    $e.find('source[type="video/webm"]').attr("src", content);
    $e.find('source[type="video/ogg"]').attr("src", label);
    done(pdataCur);
    parse();
  }
  /**
   * @return {?}
   */
  function runTest() {
    var n;
    var div = $("<div>").append($(".vpi").val());
    var el = $("#veu").find("." + $(".vpj").val());
    var match = el.closest("section");
    /** @type {string} */
    var optsData = "";
    /** @type {null} */
    var fn = null;
    /** @type {null} */
    var $e = null;
    return $(formIds).each(function(dataAndEvents, unused) {
      optsData += (dataAndEvents > 0 ? ", " : " ") + unused.name;
    }), $(div).find("form[action]:first").length ? ($e = $(div).find("form[action]:first"), $(formIds).each(function(dataAndEvents, evt) {
      return $e.attr("action").toLowerCase().includes(evt.action) ? (fn = evt.handler, false) : void 0;
    }), fn ? (n = fn(div, el), n ? (n.insertBefore(el), remove(el.attr("vic")), replace(match), done(el.attr("vic")), true) : false) : (get("Please use an embed code from: " + optsData + ".", "warning", null, 7E3), false)) : (get("No valid form found in your embed code.", "warning"), false);
  }
  /**
   * @param {?} context
   * @param {Object} target
   * @return {?}
   */
  function render(context, target) {
    var $e = $(context).find("form[action]:first");
    var t = $("<form></form>");
    /** @type {boolean} */
    var e = false;
    /** @type {boolean} */
    var container = false;
    /** @type {null} */
    var c = null;
    /** @type {null} */
    var o = null;
    /** @type {boolean} */
    var i = false;
    /** @type {null} */
    var record = null;
    /** @type {null} */
    var panel = null;
    /** @type {null} */
    var l = null;
    /** @type {null} */
    var a = null;
    /** @type {null} */
    var j = null;
    return panel = target.find('input[type="text"]:first').parent(), panel.is('[class*="col-sm-"], [class*="col-md-"]') && (l = true, c = $("<div>").addClass(panel.attr("class")).alterClass("vjs-*", "")), target.find('[class*="col-"] [type="submit"]').length && (a = true, o = $("<div>").addClass(target.find('[type="submit"]').parent().attr("class")).alterClass("vjs-*", "")), target.find("div.input-with-icon").length && (container = $("<div>").addClass("input-with-icon"), panel = target.find("div.input-with-icon").parent(), 
    panel.is('[class*="col-sm-"], [class*="col-md-"]') && (j = true, c = $("<div>").addClass(panel.attr("class")).alterClass("vjs-*", ""), container.wrap(c)), record = target.find("div.input-with-icon:first i"), record.clone().appendTo(container), container.children().removeAttr("vic"), container.children().alterClass("vjs-*", ""), container.find("input").remove(), e = true), target.is(".form--merge") && (i = true, $e.find('input[type="email"], input[type="text"]').not('[tabindex="-1"]').length > 
    1) ? (get('The form you are embedding will not fit. Use "Super Slim" form instead.', "warning"), null) : (t.attr("class", target.attr("class")), t.alterClass("vjs-*", ""), t.attr("action", $e.attr("action")), $e.find("input, textarea, select").length ? ($e.find("label, input, textarea").each(function() {
      var element = $(this);
      /** @type {null} */
      var template = null;
      /** @type {null} */
      var frag = null;
      /** @type {null} */
      var input = null;
      if (element.parent().is('[aria-hidden="true"]')) {
        element.removeAttr("id");
        template = element.parent().clone();
        template.appendTo(t);
        t.find('[aria-hidden="true"]').addClass("hidden");
      } else {
        if (e === true) {
          if (element.is('input[type="text"], input[type="email"]')) {
            template = container.clone();
            frag = template.find("i:first");
            $e.find('label[for="' + element.attr("id") + '"]').insertBefore(frag);
            element.insertAfter(frag);
            if (1 == j) {
              c.clone().append(template).appendTo(t);
            } else {
              template.appendTo(t);
            }
          } else {
            if (element.is("label")) {
              if (t.find('.input-with-icon input[id="' + element.attr("for") + '"]')) {
                return true;
              }
            } else {
              if (element.is('[type="submit"]')) {
                input = element.clone();
                if (i) {
                  input.attr("class", target.find('[type="submit"]').attr("class"));
                  input.alterClass("validate-*", "");
                  input.alterClass("vjs-*", "");
                }
                if (1 == a) {
                  o.clone().append(input.removeAttr("id")).appendTo(t);
                } else {
                  input.removeAttr("id").appendTo(t);
                }
              }
            }
          }
        } else {
          input = element.clone();
          if (i) {
            if (element.is('[type="submit"]')) {
              input.attr("class", target.find('[type="submit"]').attr("class"));
            } else {
              input.attr("class", target.find('input[type="' + input.attr("type") + '"]').attr("class"));
            }
            input.alterClass("validate-*", "");
            input.alterClass("vjs-*", "");
          }
          if (1 == l) {
            c.clone().append(input.removeAttr("id")).appendTo(t);
          } else {
            input.removeAttr("id").appendTo(t);
          }
        }
      }
    }), t) : (get("No valid form elements found in the provided embed code.", "warning"), null));
  }
  /**
   * @param {?} val
   * @param {Object} $el
   * @return {?}
   */
  function update(val, $el) {
    var $e = $(val).find("form[action]:first");
    var t = $("<form></form>");
    /** @type {boolean} */
    var e = false;
    /** @type {boolean} */
    var container = false;
    /** @type {null} */
    var c = null;
    /** @type {null} */
    var o = null;
    /** @type {boolean} */
    var i = false;
    /** @type {null} */
    var record = null;
    /** @type {null} */
    var panel = null;
    /** @type {null} */
    var l = null;
    /** @type {null} */
    var a = null;
    /** @type {null} */
    var j = null;
    return panel = $el.find('input[type="text"]:first').parent(), panel.is('[class*="col-sm-"], [class*="col-md-"]') && (l = true, c = $("<div>").addClass(panel.attr("class")).alterClass("vjs-*", "")), $el.find('[class*="col-"] [type="submit"]').length && (a = true, o = $("<div>").addClass($el.find('[type="submit"]').parent().attr("class")).alterClass("vjs-*", "")), $el.find("div.input-with-icon").length && (container = $("<div>").addClass("input-with-icon"), panel = $el.find("div.input-with-icon").parent(), 
    panel.is('[class*="col-sm-"], [class*="col-md-"]') && (j = true, c = $("<div>").addClass(panel.attr("class")).alterClass("vjs-*", ""), container.wrap(c)), record = $el.find("div.input-with-icon:first i"), record.clone().appendTo(container), container.children().removeAttr("vic"), container.children().alterClass("vjs-*", ""), container.find("input").remove(), e = true), $el.is(".form--merge") && (i = true, $e.find('input[type="email"], input[type="text"]').not('[tabindex="-1"]').length > 1) ? 
    (get("The form you are embedding will not fit. Use a single field instead.", "warning"), null) : (t.attr("class", $el.attr("class")), t.alterClass("vjs-*", ""), t.removeAttr("vic"), t.attr("action", $e.attr("action")), $e.find("input, textarea, select").length ? ($e.find('label, input, textarea, button[type="submit"]').each(function() {
      var element = $(this);
      /** @type {null} */
      var template = null;
      /** @type {null} */
      var frag = null;
      /** @type {null} */
      var input = null;
      if (element.parent().is('[aria-hidden="true"]')) {
        element.removeAttr("id");
        template = element.parent().clone();
        template.appendTo(t);
        t.find('[aria-hidden="true"]').addClass("hidden");
      } else {
        if (e === true) {
          if (element.is('input[type="text"], input[type="email"]')) {
            template = container.clone();
            frag = template.find("i:first");
            $e.find('label[for="' + element.attr("id") + '"]').insertBefore(frag);
            element.insertAfter(frag);
            if (1 == j) {
              c.clone().append(template).appendTo(t);
            } else {
              template.appendTo(t);
            }
          } else {
            if (element.is("label")) {
              if (t.find('.input-with-icon input[id="' + element.attr("for") + '"]')) {
                return true;
              }
            } else {
              if (element.is('[type="submit"]')) {
                input = element.clone();
                if (i) {
                  input.attr("class", $el.find('[type="submit"]').attr("class"));
                  input.alterClass("validate-*", "");
                  input.alterClass("vjs-*", "");
                }
                if (1 == a) {
                  o.clone().append(input.removeAttr("id")).appendTo(t);
                } else {
                  input.removeAttr("id").appendTo(t);
                }
              }
            }
          }
        } else {
          input = element.clone();
          if (i) {
            if (element.is('[type="submit"]')) {
              input.attr("class", $el.find('[type="submit"]').attr("class"));
            } else {
              input.attr("class", $el.find('input[type="' + input.attr("type") + '"]').attr("class"));
            }
            input.alterClass("validate-*", "");
            input.alterClass("vjs-*", "");
          }
          if (1 == l) {
            c.clone().append(input.removeAttr("id")).appendTo(t);
          } else {
            input.removeAttr("id").appendTo(t);
          }
        }
      }
    }), t) : (get("No valid form elements found in the provided embed code.", "warning"), null));
  }
  /**
   * @param {Event} evt
   * @return {undefined}
   * This is our file viewer.
   */
  function nav(evt) {
    var _k;
    var file;
    var elem;
    var files = evt.target.files;
    elem = $(".vdx .vmh").first();
    if (elem.children().length > elem.next(".vdx .vmh").children().length) {
      elem = elem.next(".vdx .vmh");
    }
    if (elem.children().length > elem.next(".vdx .vmh").children().length) {
      elem = elem.next(".vdx .vmh");
    }
    /** @type {number} */
    _k = 0;
    for (;file = files[_k];_k++) {
      if (!$('#vdp [vis="' + file.name + '"]').length) {
        $('#vdp [vis="' + file.name + '"]').remove();
        $(elem).append('<div class="vdy"><img class="vcj" src="img/' + file.name + '" vis="' + file.name + '" onerror="window.mr_variant.chooserImageError(this)"/><span class="vjn"></span><span class="vec"></span></div>');
      }
      elem = $(elem).is(".vdx .vmh:last") ? $(".vdx .vmh:first") : $(elem).next(".vdx .vmh");
    }
    html();
  }
  /**
   * @return {undefined}
   */
  function finish() {
    var navTabs = $("<div />").addClass("vmh");
    var $rootElement = $("<div />").addClass("vmh");
    var ul = $("<div />").addClass("vmh");
    /** @type {string} */
    var li = "";
    // Need to fetch from a url so we can load images from the page
    // if ($.localStorage(name + ".gallery.images")) {
    //   $("#vdp").html($.localStorage(name + ".gallery.images"));
    //   $("#vdp div").each(function() {
    //     if (!$(this).find("img").length) {
    //       $(this).remove();
    //     }
    //     if ($(this).hasClass("no-image")) {
    //       $(this).remove();
    //     }
    //   });
    // } else {
      var asserterNames = $(".vdz").attr("vbv").split(",");
      asserterNames.forEach(function(dataAndEvents, deepDataAndEvents) {
        /** @type {string} */
        li = '<div class="vdy"><img class="vcj" delay-src="/assets/images/uploads/' + dataAndEvents + '" vis="' + dataAndEvents + '" onerror="window.mr_variant.defaultImageError(this)"/><span class="vec"></span></div>';
        if (deepDataAndEvents % 3 === 0) {
          ul.append(li);
        } else {
          if (deepDataAndEvents % 2 === 0) {
            $rootElement.append(li);
          } else {
            navTabs.append(li);
          }
        }
        $("#vdp").append(navTabs).append($rootElement).append(ul);
      });
    // }
  }
  /**
   * @return {undefined}
   */
  function html() {
    $.localStorage(name + ".gallery.images", $(".vdx").html());
    $("#vdp").html($(".vdx").html());
  }
  /**
   * @param {?} context
   * @return {undefined}
   */
  function display(context) {
    var icon = $(context).find("img");
    icon.attr("src", "");
    icon.attr("src", "img/" + icon.attr("vis"));
    icon.css("display", "inline");
    $(context).removeClass("no-image");
    $(context).find(".vjn, .vec").html("");
  }
  /**
   * @return {?}
   */
  function handler() {
    var asserterNames;
    /** @type {string} */
    var htmlString = "";
    var form = $('<ul class="voj">');
    var html = $('<ul class="variant-icon-sets-mrv">');
    if ($("#voi").length) {
      try {
        return asserterNames = JSON.parse($("#voi").html()).iconPacks, asserterNames.forEach(function(data) {
          form.append($("<li><span>" + data.name + "</span></li>"));
          /** @type {string} */
          htmlString = '<li class="vou"><span class="vot">' + data.name + '</span> <span class="vom">' + data.icons.length + ' icons </span><span class="voo"><a target="_blank" href="' + data.url + '">more info</a></span></li>';
          htmlString += '<li class="vov">';
          data.icons.forEach(function(m3) {
            htmlString += '<div class="vam" von="' + m3.toLowerCase().replace(data.iconPrefix, "") + '"><i class="icon ' + data.iconClass + " " + m3 + '" icon-class="' + data.iconClass + " " + m3 + '" title="' + m3 + '"></i></div>';
          });
          htmlString += "</li>";
          html.append(htmlString);
        }), $(form).find("li:first").addClass("vhr"), $(html).find("li.vou:first, li.vov:first").addClass("vhr"), $(".vce").html("").append(form).append(html), asserterNames;
      } catch (e) {
        return JSON.parse('{"iconPacks":[]}');
      }
    }
  }
  /**
   * @return {?}
   */
  function parseTemplate() {
    var dynamicCSS;
    if ($("#vpb").length) {
      try {
        return dynamicCSS = JSON.parse($("#vpb").html()).dynamicCSS;
      } catch (b) {
        return[];
      }
    }
  }
  /**
   * @return {?}
   */
  function tick() {
    var dynamicScripts;
    if ($("#vpa").length) {
      try {
        return dynamicScripts = JSON.parse($("#vpa").html()).dynamicScripts;
      } catch (b) {
        return[];
      }
    }
  }
  /**
   * @return {undefined}
   */
  function _init() {
    var testSubject = $(".vgm");
    /** @type {string} */
    var escaped = "";
    var content = $(".vgi");
    /** @type {string} */
    var postBody = "";
    $("#vgg .vim").each(function(dataAndEvents) {
      var icons;
      var inputsPlugin = $(this);
      var asserterNames = inputsPlugin.attr("vbp").split(",");
      /** @type {string} */
      var optsData = "";
      asserterNames.forEach(function(existingFn) {
        if (-1 == postBody.indexOf(existingFn)) {
          postBody += '<div class="vgh" vbp="' + existingFn + '">' + existingFn + "</div>";
        }
      });
      icons = inputsPlugin.attr("icons");
      if ("undefined" != typeof icons) {
        if (icons !== false) {
          icons = inputsPlugin.attr("icons").split(",");
          icons.forEach(function(dataAndEvents) {
            optsData += '<img class="vgj" src="img/' + dataAndEvents + '.png" />';
          });
        }
      }
      escaped += '<div class="vgl" vbp="' + $(this).attr("vbp") + '" vgv="' + $(this).attr("id") + '"><img delay-src="img/sections/' + $(this).attr("id") + '.jpg"/>' + optsData + '<span class="vjl">' + $(this).attr("vbr") + "</span></div>";
    });
    testSubject.html(escaped);
    content.append(postBody);
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function initialize(name) {
    var elem = $("." + name);
    if ($(elem).is("p , div, span, figure, article, img")) {
      if ($(elem).is('[class*="medium-"]') || $(elem).parent().is('div [class*="medium-"]')) {
        if ($(elem).parent().is('div [class*="medium-"]') && (elem = $(elem).parent()), !$(elem).hasClass("medium-12")) {
          if (elem.hasClass("medium-11")) {
            return void elem.removeClass("medium-11").addClass("medium-12");
          }
          if (elem.hasClass("medium-10")) {
            return void elem.removeClass("medium-10").addClass("medium-11");
          }
          if (elem.hasClass("medium-9")) {
            return void elem.removeClass("medium-9").addClass("medium-10");
          }
          if (elem.hasClass("medium-8")) {
            return void elem.removeClass("medium-8").addClass("medium-9");
          }
          if (elem.hasClass("medium-7")) {
            return void elem.removeClass("medium-7").addClass("medium-8");
          }
          if (elem.hasClass("medium-6")) {
            return void elem.removeClass("medium-6").addClass("medium-7");
          }
          if (elem.hasClass("medium-5")) {
            return void elem.removeClass("medium-5").addClass("medium-6");
          }
          if (elem.hasClass("medium-4")) {
            return void elem.removeClass("medium-4").addClass("medium-5");
          }
          if (elem.hasClass("medium-3")) {
            return void elem.removeClass("medium-3").addClass("medium-4");
          }
          if (elem.hasClass("medium-2")) {
            return void elem.removeClass("medium-2").addClass("medium-3");
          }
          if (elem.hasClass("medium-1")) {
            return void elem.removeClass("medium-1").addClass("medium-2");
          }
        }
      } else {
        if ($(elem).is('[class*="col-xs-"]:not([class*="col-md-"])') || $(elem).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])')) {
          if ($(elem).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])') && (elem = $(elem).parent()), !$(elem).hasClass("col-xs-12")) {
            if (elem.hasClass("col-xs-11")) {
              return void elem.removeClass("col-xs-11").addClass("col-xs-12");
            }
            if (elem.hasClass("col-xs-10")) {
              return void elem.removeClass("col-xs-10").addClass("col-xs-11");
            }
            if (elem.hasClass("col-xs-9")) {
              return void elem.removeClass("col-xs-9").addClass("col-xs-10");
            }
            if (elem.hasClass("col-xs-8")) {
              return void elem.removeClass("col-xs-8").addClass("col-xs-9");
            }
            if (elem.hasClass("col-xs-7")) {
              return void elem.removeClass("col-xs-7").addClass("col-xs-8");
            }
            if (elem.hasClass("col-xs-6")) {
              return void elem.removeClass("col-xs-6").addClass("col-xs-7");
            }
            if (elem.hasClass("col-xs-5")) {
              return void elem.removeClass("col-xs-5").addClass("col-xs-6");
            }
            if (elem.hasClass("col-xs-4")) {
              return void elem.removeClass("col-xs-4").addClass("col-xs-5");
            }
            if (elem.hasClass("col-xs-3")) {
              return void elem.removeClass("col-xs-3").addClass("col-xs-4");
            }
            if (elem.hasClass("col-xs-2")) {
              return void elem.removeClass("col-xs-2").addClass("col-xs-3");
            }
            if (elem.hasClass("col-xs-1")) {
              return void elem.removeClass("col-xs-1").addClass("col-xs-2");
            }
          }
        } else {
          if ($(elem).is('[class*="col-sm-"]:not([class*="col-md-"])') || $(elem).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])')) {
            if ($(elem).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])') && (elem = $(elem).parent()), !$(elem).hasClass("col-sm-12")) {
              if (elem.hasClass("col-sm-11")) {
                return void elem.removeClass("col-sm-11").addClass("col-sm-12");
              }
              if (elem.hasClass("col-sm-10")) {
                return void elem.removeClass("col-sm-10").addClass("col-sm-11");
              }
              if (elem.hasClass("col-sm-9")) {
                return void elem.removeClass("col-sm-9").addClass("col-sm-10");
              }
              if (elem.hasClass("col-sm-8")) {
                return void elem.removeClass("col-sm-8").addClass("col-sm-9");
              }
              if (elem.hasClass("col-sm-7")) {
                return void elem.removeClass("col-sm-7").addClass("col-sm-8");
              }
              if (elem.hasClass("col-sm-6")) {
                return void elem.removeClass("col-sm-6").addClass("col-sm-7");
              }
              if (elem.hasClass("col-sm-5")) {
                return void elem.removeClass("col-sm-5").addClass("col-sm-6");
              }
              if (elem.hasClass("col-sm-4")) {
                return void elem.removeClass("col-sm-4").addClass("col-sm-5");
              }
              if (elem.hasClass("col-sm-3")) {
                return void elem.removeClass("col-sm-3").addClass("col-sm-4");
              }
              if (elem.hasClass("col-sm-2")) {
                return void elem.removeClass("col-sm-2").addClass("col-sm-3");
              }
              if (elem.hasClass("col-sm-1")) {
                return void elem.removeClass("col-sm-1").addClass("col-sm-2");
              }
            }
          } else {
            if (($(elem).is('[class*="col-md-"]') || $(elem).parent().is('div [class*="col-md-"]')) && ($(elem).parent().is('div [class*="col-md-"]') && (elem = $(elem).parent()), !$(elem).hasClass("col-md-12"))) {
              if (elem.hasClass("col-md-11")) {
                return void elem.removeClass("col-md-11").addClass("col-md-12");
              }
              if (elem.hasClass("col-md-10")) {
                return void elem.removeClass("col-md-10").addClass("col-md-11");
              }
              if (elem.hasClass("col-md-9")) {
                return void elem.removeClass("col-md-9").addClass("col-md-10");
              }
              if (elem.hasClass("col-md-8")) {
                return void elem.removeClass("col-md-8").addClass("col-md-9");
              }
              if (elem.hasClass("col-md-7")) {
                return void elem.removeClass("col-md-7").addClass("col-md-8");
              }
              if (elem.hasClass("col-md-6")) {
                return void elem.removeClass("col-md-6").addClass("col-md-7");
              }
              if (elem.hasClass("col-md-5")) {
                return void elem.removeClass("col-md-5").addClass("col-md-6");
              }
              if (elem.hasClass("col-md-4")) {
                return void elem.removeClass("col-md-4").addClass("col-md-5");
              }
              if (elem.hasClass("col-md-3")) {
                return void elem.removeClass("col-md-3").addClass("col-md-4");
              }
              if (elem.hasClass("col-md-2")) {
                return void elem.removeClass("col-md-2").addClass("col-md-3");
              }
              if (elem.hasClass("col-md-1")) {
                return void elem.removeClass("col-md-1").addClass("col-md-2");
              }
            }
          }
        }
      }
    }
    parse();
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function addClass(name) {
    var elem = $("." + name);
    if ($(elem).is("p , div, span, figure, article, img")) {
      if ($(elem).is('[class*="medium-"]') || $(elem).parent().is('div [class*="medium-"]')) {
        if ($(elem).parent().is('div [class*="medium-"]') && (elem = $(elem).parent()), !$(elem).hasClass("medium-1")) {
          if (elem.hasClass("medium-12")) {
            return void elem.removeClass("medium-12").addClass("medium-11");
          }
          if (elem.hasClass("medium-11")) {
            return void elem.removeClass("medium-11").addClass("medium-10");
          }
          if (elem.hasClass("medium-10")) {
            return void elem.removeClass("medium-10").addClass("medium-9");
          }
          if (elem.hasClass("medium-9")) {
            return void elem.removeClass("medium-9").addClass("medium-8");
          }
          if (elem.hasClass("medium-8")) {
            return void elem.removeClass("medium-8").addClass("medium-7");
          }
          if (elem.hasClass("medium-7")) {
            return void elem.removeClass("medium-7").addClass("medium-6");
          }
          if (elem.hasClass("medium-6")) {
            return void elem.removeClass("medium-6").addClass("medium-5");
          }
          if (elem.hasClass("medium-5")) {
            return void elem.removeClass("medium-5").addClass("medium-4");
          }
          if (elem.hasClass("medium-4")) {
            return void elem.removeClass("medium-4").addClass("medium-3");
          }
          if (elem.hasClass("medium-3")) {
            return void elem.removeClass("medium-3").addClass("medium-2");
          }
          if (elem.hasClass("medium-2")) {
            return void elem.removeClass("medium-2").addClass("medium-1");
          }
        }
      } else {
        if ($(elem).is('[class*="col-xs-"]:not([class*="col-md-"])') || $(elem).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])')) {
          if ($(elem).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])') && (elem = $(elem).parent()), !$(elem).hasClass("col-xs-1")) {
            if (elem.hasClass("col-xs-12")) {
              return void elem.removeClass("col-xs-12").addClass("col-xs-11");
            }
            if (elem.hasClass("col-xs-11")) {
              return void elem.removeClass("col-xs-11").addClass("col-xs-10");
            }
            if (elem.hasClass("col-xs-10")) {
              return void elem.removeClass("col-xs-10").addClass("col-xs-9");
            }
            if (elem.hasClass("col-xs-9")) {
              return void elem.removeClass("col-xs-9").addClass("col-xs-8");
            }
            if (elem.hasClass("col-xs-8")) {
              return void elem.removeClass("col-xs-8").addClass("col-xs-7");
            }
            if (elem.hasClass("col-xs-7")) {
              return void elem.removeClass("col-xs-7").addClass("col-xs-6");
            }
            if (elem.hasClass("col-xs-6")) {
              return void elem.removeClass("col-xs-6").addClass("col-xs-5");
            }
            if (elem.hasClass("col-xs-5")) {
              return void elem.removeClass("col-xs-5").addClass("col-xs-4");
            }
            if (elem.hasClass("col-xs-4")) {
              return void elem.removeClass("col-xs-4").addClass("col-xs-3");
            }
            if (elem.hasClass("col-xs-3")) {
              return void elem.removeClass("col-xs-3").addClass("col-xs-2");
            }
            if (elem.hasClass("col-xs-2")) {
              return void elem.removeClass("col-xs-2").addClass("col-xs-1");
            }
          }
        } else {
          if ($(elem).is('[class*="col-sm-"]:not([class*="col-md-"])') || $(elem).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])')) {
            if ($(elem).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])') && (elem = $(elem).parent()), !$(elem).hasClass("col-sm-1")) {
              if (elem.hasClass("col-sm-12")) {
                return void elem.removeClass("col-sm-12").addClass("col-sm-11");
              }
              if (elem.hasClass("col-sm-11")) {
                return void elem.removeClass("col-sm-11").addClass("col-sm-10");
              }
              if (elem.hasClass("col-sm-10")) {
                return void elem.removeClass("col-sm-10").addClass("col-sm-9");
              }
              if (elem.hasClass("col-sm-9")) {
                return void elem.removeClass("col-sm-9").addClass("col-sm-8");
              }
              if (elem.hasClass("col-sm-8")) {
                return void elem.removeClass("col-sm-8").addClass("col-sm-7");
              }
              if (elem.hasClass("col-sm-7")) {
                return void elem.removeClass("col-sm-7").addClass("col-sm-6");
              }
              if (elem.hasClass("col-sm-6")) {
                return void elem.removeClass("col-sm-6").addClass("col-sm-5");
              }
              if (elem.hasClass("col-sm-5")) {
                return void elem.removeClass("col-sm-5").addClass("col-sm-4");
              }
              if (elem.hasClass("col-sm-4")) {
                return void elem.removeClass("col-sm-4").addClass("col-sm-3");
              }
              if (elem.hasClass("col-sm-3")) {
                return void elem.removeClass("col-sm-3").addClass("col-sm-2");
              }
              if (elem.hasClass("col-sm-2")) {
                return void elem.removeClass("col-sm-2").addClass("col-sm-1");
              }
            }
          } else {
            if (($(elem).is('[class*="col-md-"]') || $(elem).parent().is('div [class*="col-md-"]')) && ($(elem).parent().is('div [class*="col-md-"]') && (elem = $(elem).parent()), !$(elem).hasClass("col-md-1"))) {
              if (elem.hasClass("col-md-12")) {
                return void elem.removeClass("col-md-12").addClass("col-md-11");
              }
              if (elem.hasClass("col-md-11")) {
                return void elem.removeClass("col-md-11").addClass("col-md-10");
              }
              if (elem.hasClass("col-md-10")) {
                return void elem.removeClass("col-md-10").addClass("col-md-9");
              }
              if (elem.hasClass("col-md-9")) {
                return void elem.removeClass("col-md-9").addClass("col-md-8");
              }
              if (elem.hasClass("col-md-8")) {
                return void elem.removeClass("col-md-8").addClass("col-md-7");
              }
              if (elem.hasClass("col-md-7")) {
                return void elem.removeClass("col-md-7").addClass("col-md-6");
              }
              if (elem.hasClass("col-md-6")) {
                return void elem.removeClass("col-md-6").addClass("col-md-5");
              }
              if (elem.hasClass("col-md-5")) {
                return void elem.removeClass("col-md-5").addClass("col-md-4");
              }
              if (elem.hasClass("col-md-4")) {
                return void elem.removeClass("col-md-4").addClass("col-md-3");
              }
              if (elem.hasClass("col-md-3")) {
                return void elem.removeClass("col-md-3").addClass("col-md-2");
              }
              if (elem.hasClass("col-md-2")) {
                return void elem.removeClass("col-md-2").addClass("col-md-1");
              }
            }
          }
        }
      }
    }
    parse();
  }
  /**
   * @param {?} el
   * @return {undefined}
   */
  function destroy(el) {
    var elem;
    var component;
    var link;
    if ($("[vik=" + $(el).parent().parent().attr("vbq") + "]").length) {
      component = $("[vik=" + $(el).parent().parent().attr("vbq") + "]").attr("id");
      link = $('.viu[href="#' + $("[vik=" + $(el).parent().parent().attr("vbq") + "]").attr("id") + '"], #veu [href="#' + $("[vik=" + $(el).parent().parent().attr("vbq") + "]").attr("id") + '"]');
      link.attr("href", "#" + log($(el).text()));
      each();
      $("[vik=" + $(el).parent().parent().attr("vbq") + "]").attr("id", log($(el).text())).attr("vij", $(el).text());
    } else {
      elem = $("." + $(el).parent().parent().attr("vbq"));
      elem.before('<a id="' + log($(el).text()) + '" class="in-page-link" vij="' + $(el).text() + '" vik="' + $(el).parent().parent().attr("vbq") + '"></a>');
    }
  }
  /**
   * @param {string} str
   * @return {?}
   */
  function log(str) {
    return str.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-");
  }
  /**
   * @return {undefined}
   */
  function show() {
    $(".vgp").addClass("vih");
    var others = $(selector).find(".in-page-link");
    if (others.length) {
      /** @type {string} */
      output = '<option value="">Select an in-page navigation link</option>';
      others.each(function() {
        var $e = $(this);
        output += '<option value="#' + $e.attr("id") + '">' + $e.attr("vij") + "</option>";
      });
      $(".veh").html(output);
      $(".vgp").removeClass("vih");
    }
  }
  /**
   * @return {undefined}
   */
  function parse() {
    var type = $.localStorage(name + ".vhh");
    $(".vhe").addClass("vih");
    each();
    Init();
    if ($.localStorage(name + ".vhh")) {
      $.localStorage(name + ".state.veu." + type, $("#veu").html());
      $.localStorage(name + ".state.vem." + type, $(".vem").html());
      $.localStorage(name + ".vhj." + type, $(".vei").text());
      $.localStorage(name + ".vhf." + type, $(".vay").attr("vhx"));
      $.localStorage(name + "vmp." + type, $(".vms").attr("vmr"));
      $.localStorage(name + ".vkp." + type, "undefined" != typeof $("#vkk").attr("class") ? $("#vkk").attr("class") : " ");
    } else {
      $.localStorage(name + ".state.veu", $("#veu").html());
      $.localStorage(name + ".state.vem", $(".vem").html());
      $.localStorage(name + ".vhj", $(".vei").text());
      $.localStorage(name + ".vhf", $(".vay").attr("vhx"));
      $.localStorage(name + "vmp", $(".vms").attr("vmr"));
      $.localStorage(name + ".vkp", "undefined" != typeof $("#vkk").attr("class") ? $("#vkk").attr("class") : " ");
    }
  }
  /**
   * @return {undefined}
   */
  function create() {
    /** @type {number} */
    var viy_ = (new Date).getTime();
    newStateName = $(".vgf").val();
    /** @type {string} */
    stateID = "viy-" + viy_;
    $("#vhl").append('<li class="viy" viy="' + stateID + '" vjh="' + newStateName + '" page-title="' + $(".vei").text() + '"></li>');
    notify(newStateName, stateID);
    $('#vhl [viy="' + $.localStorage(name + ".vhh") + '"]').attr("page-title", $(".vei").text());
    $.localStorage(name + ".vhk", $("#vhl").html());
    $.localStorage(name + ".state.veu." + stateID, $("#veu").html());
    $.localStorage(name + ".state.vem." + stateID, $(".vem").html());
    $.localStorage(name + ".vhj." + stateID, $(".vei").text());
    $.localStorage(name + ".vhf." + stateID, $(".vay").attr("vhx"));
    $.localStorage(name + "vmp." + stateID, $(".vms").attr("vmr"));
    $.localStorage(name + ".vkp." + stateID, $("#vkk").attr("class"));
    $.localStorage(name + ".vhh", stateID);
    $.localStorage(name + ".vhg", newStateName);
    $(".vcr").text(newStateName).removeClass("vih");
  }
  /**
   * @param {string} name
   * @param {string} key
   * @return {undefined}
   */
  function notify(name, key) {
    $(".vfw").prepend('<div class="ves" vjh="' + name + '" state-id="' + key + '"><span class="oi vdj" data-glyph="data-transfer-download"></span><span class="vfx">' + name + '</span><span class="vbz oi" data-glyph="x"></span></div>');
    if (ub) {
      $(".vdj").remove();
    }
  }
  /**
   * @param {string} wait
   * @param {Object} message
   * @return {undefined}
   */
  function ready(wait, message) {
    $(".vei").removeClass("vlx");
    $(".vhe").addClass("vih");
    var direction;
    var extra = "undefined" != typeof wait ? wait : "";
    message = "undefined" != typeof message ? message : "";
    var title = $.localStorage(name + ".vhj");
    if ("" == extra) {
      extra = $.localStorage(name + ".vhh");
      message = $.localStorage(name + ".vhg");
    }
    /** @type {string} */
    stateHTML = ".state.veu." + extra;
    /** @type {string} */
    direction = ".state.vem." + extra;
    /** @type {string} */
    colourScheme = ".vhf." + extra;
    /** @type {string} */
    fontOption = "vmp." + extra;
    /** @type {string} */
    bodyClasses = ".vkp." + extra;
    if ($('#vhl [viy="' + extra + '"]').attr("page-title")) {
      title = $('#vhl [viy="' + extra + '"]').attr("page-title");
    } else {
      $(".vei").text("Edit title tag");
      /** @type {string} */
      document.title = "Variant HTML Builder by Medium Rare";
    }
    $.localStorage(name + ".vhh", extra);
    $.localStorage(name + ".vhg", message);
    if (!extra) {
      /** @type {string} */
      stateHTML = ".state.veu";
      /** @type {string} */
      direction = ".state.vem";
      /** @type {string} */
      colourScheme = ".vhf";
      /** @type {string} */
      fontOption = "vmp";
      /** @type {string} */
      bodyClasses = ".vkp";
      title = $.localStorage(name + ".vhj");
    }
    if ($.localStorage(name + stateHTML)) {
      message = message ? message : "Unnamed page";
      $(".vcr").text(message).removeClass("vih");
      $(".vei").text(title);
      document.title = title;
      $("#veu").html($.localStorage(name + stateHTML));
      $(".vem").html($.localStorage(name + direction));
      postLink($.localStorage(name + bodyClasses));
      clean($.localStorage(name + colourScheme), false);
      normalize($.localStorage(name + fontOption), false);
      editableChanged();
      onload();
      run();
      done();
    }
    if ($(".vem").find(".vaa").length) {
      $(".vem").removeClass("empty-vem");
    } else {
      $(".vem").addClass("empty-vem");
    }
  }
  /**
   * @param {string} callback
   * @return {?}
   */
  function test(callback) {
    var title;
    var masterHtml;
    var layoutMap;
    var generatedColumn;
    var undef;
    var r20;
    var zip = new JSZip;
    /** @type {Array} */
    var saveQueue = [];
    /** @type {Date} */
    var now = new Date;
    return $("#vhl .viy").length ? ("all" == callback ? ($("#vhl .viy").each(function() {
      saveQueue.push($(this).attr("viy"));
    }), title = "variant-exported-" + log(now.toDateString())) : saveQueue.push(callback), saveQueue.forEach(function(type, dataAndEvents) {
      masterHtml = $.localStorage(name + ".state.veu." + type);
      layoutMap = $.localStorage(name + ".state.vem." + type);
      colourScheme = $.localStorage(name + ".vhf." + type);
      fontOption = $.localStorage(name + "vmp." + type);
      bodyClasses = $.localStorage(name + ".vkp." + type);
      pageName = $('#vhl [viy="' + type + '"]').attr("vjh");
      pageTitle = $('#vhl [viy="' + type + '"]').attr("page-title");
      pageTitle = "undefined" != typeof pageTitle ? pageTitle : "";
      generatedColumn = {
        stateID : type,
        templateName : name,
        pageName : pageName,
        pageTitle : pageTitle,
        colourScheme : colourScheme,
        fontOption : fontOption,
        bodyClasses : bodyClasses,
        layoutMap : layoutMap,
        masterHtml : masterHtml
      };
      /** @type {string} */
      undef = JSON.stringify(generatedColumn);
      zip.file(log(pageName) + "-" + now.getTime() + ".page", undef);
    }), zip.file(name + ".navs", $("#vbn").html()), zip.file(name + ".footers", $("#vbl").html()), "all" != callback && (title = log(pageName)), r20 = zip.generate({
      type : "blob",
      compression : "deflate"
    }), void saveAs(r20, title + ".variant")) : void error("Export .variant file", "There is nothing to export.<br /><br />Save at least one page before exporting.");
  }
  /**
   * @param {?} e
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  function loadScript(e, dataAndEvents) {
    var input;
    var point = "undefined" != typeof e.target ? e.target.files : e;
    /** @type {string} */
    var data = "";
    /** @type {boolean} */
    dataAndEvents = 1 == dataAndEvents ? true : false;
    /** @type {number} */
    var i = 0;
    for (;input = point[i];i++) {
      /** @type {FileReader} */
      var reader = new FileReader;
      reader.onload = function(s) {
        return function(ev) {
          try {
            var that = new JSZip(ev.target.result);
            /** @type {string} */
            var f = '<span class="vjl">Imported the following:</span>';
            /** @type {string} */
            excludedHead = '<span class="vjl">Excluded these:</span>';
            /** @type {string} */
            fileNames = "<ul>";
            /** @type {string} */
            excluded = "<ul>";
            $.each(that.files, function(dataAndEvents, file) {
              var r;
              var m;
              if (file.name == name + ".navs") {
                r = file.asText().trim();
                r = $('<div id="variant-temp-navs-mrv" />').html(r);
                $(r).find("nav").each(function() {
                  if ($('#vbn [via="' + $(this).attr("via") + '"]').length) {
                    excluded += "<li>Nav - " + $(this).attr("vio") + " (already exists)</li>";
                  } else {
                    f($(this));
                    $("#vbn").append($(this));
                    $.localStorage(name + ".vbo", $("#vbn").html());
                    fileNames += "<li>Nav - " + $(this).attr("vio") + "</li>";
                  }
                });
              } else {
                if (file.name == name + ".footers") {
                  footers = file.asText().trim();
                  footers = $('<div id="vjj" />').html(footers);
                  $(footers).find("footer").each(function() {
                    if ($('#vbl [vhy="' + $(this).attr("vhy") + '"]').length) {
                      excluded += "<li>Footer - " + $(this).attr("vie") + " (already exists)</li>";
                    } else {
                      addButton($(this));
                      $("#vbl").append($(this));
                      $.localStorage(name + ".custom-footers", $("#vbl").html());
                      fileNames += "<li>Footer - " + $(this).attr("vie") + "</li>";
                    }
                  });
                } else {
                  /** @type {*} */
                  m = JSON.parse(file.asText());
                  if (m.templateName == name) {
                    if ($('#vhl [viy="' + m.stateID + '"]').length) {
                      excluded += "<li>Page - " + m.pageName + " (already exists)</li>";
                    } else {
                      fileNames += "<li>Page - " + m.pageName + "</li>";
                      stateID = m.stateID;
                      $("#vhl").append('<li class="viy" viy="' + m.stateID + '" vjh="' + m.pageName + '" page-title="' + m.pageTitle + '"></li>');
                      notify(m.pageName, m.stateID);
                      $.localStorage(name + ".state.veu." + stateID, m.masterHtml);
                      $.localStorage(name + ".state.vem." + stateID, m.layoutMap);
                      $.localStorage(name + ".vhf." + stateID, m.colourScheme);
                      $.localStorage(name + "vmp." + stateID, m.fontOption);
                      $.localStorage(name + ".vkp." + stateID, m.bodyClasses);
                    }
                  } else {
                    excluded += "<li>Page - " + m.pageName + " (not designed for this template)</li>";
                  }
                  data = {
                    id : m.stateID,
                    name : m.pageName
                  };
                }
              }
            });
            $.localStorage(name + ".vhk", $("#vhl").html());
            fileNames += "</ul>";
            excluded += "</ul>";
            if ("<ul></ul>" != fileNames) {
              /** @type {string} */
              fileNames = f + fileNames;
            }
            if ("<ul></ul>" != excluded) {
              /** @type {string} */
              excluded = excludedHead + excluded;
            }
            if (dataAndEvents) {
              $(".vhe").remove();
              ready(data.id, data.name);
            } else {
              error("Import", fileNames + "<br />" + excluded);
            }
            setTimeout(function() {
              if ($(".vfw").find(".ves").length) {
                $(".vfw").removeClass("empty-vfw");
              } else {
                $(".vfw").addClass("empty-vfw");
              }
            }, 100);
          } catch (ex) {
            error("Page Import Error", "Error reading " + s.name + " : <br /><br />" + ex.message);
          }
        };
      }(input);
      reader.readAsArrayBuffer(input);
    }
    $(".vef").val("");
  }
  /**
   * @return {undefined}
   */
  function updateContent() {
    $("#vhl").html($.localStorage(name + ".vhk"));
    $("#vhl li").each(function() {
      notify($(this).attr("vjh"), $(this).attr("viy"));
    });
  }
  /**
   * @return {undefined}
   */
  function draggable() {
    $("#simplemodal-container").draggable({
      handle : ".vfa"
    });
  }
  /**
   * @return {undefined}
   */
  function compile() {
    $(".viu section, .viu header, .viu footer").each(function() {
      var name = "." + $(this).attr("vic");
      $(this).find("div.row, .vjd").not(".masonry, .voz").sortable({
        items : "> div:not('.voh')",
        cancel : "[contenteditable], nav, input, textarea, .vnw, .voz",
        scroll : true,
        opacity : 1,
        zIndex : 999999,
        forcePlaceholderSize : true,
        forceHelperSize : false,
        cursor : "move",
        connectWith : name + " div.row, " + name + " .vjd",
        /**
         * @param {?} event
         * @param {?} ui
         * @return {?}
         */
        helper : function(event, ui) {
          var set = ui.children();
          var element = ui.clone();
          return element.children().each(function(index) {
            $(this).width(set.eq(index).width());
          }), element.css("box-shadow", "0px 7px 30px 0px rgba(50, 50, 50, 0.5)"), element.removeClass("vdw").css("border", "none !important"), element;
        },
        appendTo : ".viu",
        placeholder : "vje",
        tolerance : "pointer",
        revert : "300",
        /**
         * @param {?} allBindingsAccessor
         * @param {Object} ui
         * @return {undefined}
         */
        update : function(allBindingsAccessor, ui) {
          var errorClass;
          var gid;
          var item;
          var f;
          errorClass = ui.item.attr("vic");
          item = ui.item;
          gid = $(".viu ." + errorClass).next().attr("vic");
          parentID = ui.item.parent().attr("vic");
          f = ui.item.parent();
          if (ui.item.is(":last-child")) {
            $("#veu ." + errorClass).detach().appendTo("#veu ." + parentID);
          } else {
            $("#veu ." + errorClass).detach().insertBefore("#veu ." + gid);
          }
          parse();
        },
        /**
         * @param {?} ui
         * @param {?} onFailed
         * @return {undefined}
         */
        start : function(ui, onFailed) {
        }
      });
    });
    $(".viu table > tbody").not(".voz").each(function() {
      var regions = "." + $(this).attr("vic");
      $(this).sortable({
        items : " > tr",
        cancel : "[contenteditable], .vnw, .voz",
        scroll : true,
        opacity : 1,
        zIndex : 999999,
        forcePlaceholderSize : true,
        forceHelperSize : false,
        cursor : "move",
        connectWith : regions,
        /**
         * @param {?} event
         * @param {Object} row
         * @return {?}
         */
        helper : function(event, row) {
          var set = (row.closest("table").clone(), row.children());
          var element = row.clone();
          return element.children().each(function(index) {
            $(this).width(set.eq(index).width());
          }), element.css("box-shadow", "0px 7px 30px 0px rgba(50, 50, 50, 0.5)").removeClass("vdw").addClass("vnz").css("border", "none !important").css("transition: all 0s ease !important"), element;
        },
        appendTo : "parent",
        placeholder : "",
        tolerance : "pointer",
        revert : "100",
        /**
         * @param {?} allBindingsAccessor
         * @param {Object} ui
         * @return {undefined}
         */
        update : function(allBindingsAccessor, ui) {
          var errorClass;
          var gid;
          var item;
          var f;
          errorClass = ui.item.attr("vic");
          item = ui.item;
          gid = $(".viu ." + errorClass).next().attr("vic");
          parentID = ui.item.parent().attr("vic");
          f = ui.item.parent();
          if (ui.item.is(":last-child")) {
            $("#veu ." + errorClass).detach().appendTo("#veu ." + parentID);
          } else {
            $("#veu ." + errorClass).detach().insertBefore("#veu ." + gid);
          }
          parse();
        },
        /**
         * @param {?} onFailed
         * @param {Object} ui
         * @return {undefined}
         */
        start : function(onFailed, ui) {
          ui.placeholder.children().each(function() {
          });
          ui.placeholder.appendTo(ui.placeholder.parent().parent());
        }
      });
    });
    $(".viu nav").each(function() {
      "." + $(this).attr("vic");
      $(this).find(".vjd").not(".voz").sortable({
        items : "> li",
        cancel : "[contenteditable], .subnav li, .vnw, .voz",
        scroll : true,
        opacity : 1,
        zIndex : 999999,
        forcePlaceholderSize : true,
        forceHelperSize : true,
        cursor : "move",
        helper : "clone",
        appendTo : ".viu nav:first",
        placeholder : "vje",
        tolerance : "pointer",
        revert : "300",
        /**
         * @param {?} allBindingsAccessor
         * @param {Object} ui
         * @return {undefined}
         */
        update : function(allBindingsAccessor, ui) {
          var errorClass;
          var gid;
          var item;
          var f;
          errorClass = ui.item.attr("vic");
          item = ui.item;
          gid = $(".viu ." + errorClass).next().attr("vic");
          parentID = ui.item.parent().attr("vic");
          f = ui.item.parent();
          if (ui.item.is(":last-child")) {
            $("#veu ." + errorClass).detach().appendTo("#veu ." + parentID);
          } else {
            $("#veu ." + errorClass).detach().insertBefore("#veu ." + gid);
          }
          parse();
        },
        /**
         * @param {?} onFailed
         * @param {?} ui
         * @return {undefined}
         */
        start : function(onFailed, ui) {
          ui.helper.css("box-shadow", "0px 7px 30px 0px rgba(50, 50, 50, 0.5)");
          ui.helper.removeClass("vdw").css("border", "none !important");
        }
      });
    });
  }
  /**
   * @return {undefined}
   */
  function editableChanged() {
    $(".vem").sortable({
      items : "> .vaa",
      revert : false,
      cursor : "move",
      opacity : 0.7,
      delay : 150,
      cancel : "[contenteditable]",
      /**
       * @return {undefined}
       */
      update : function() {
        link();
      }
    });
  }
  /**
   * @return {undefined}
   */
  function callback() {
    var data;
    try {
      /** @type {*} */
      data = JSON.parse($(".vaz").html());
      $(".vho").eq(2).removeClass("vih");
      emit("Original", data.original.colours, "theme");
      $(".vay").attr("viq", data.original.originalFileName + ".css").attr("vhx", data.original.originalFileName + ".css");
      $(data.schemes).each(function() {
        emit(this.name, this.colours, "theme-" + this.name);
        addLink("theme-" + this.name.toLowerCase() + ".css");
      });
      $(".viw").remove();
      $(".vnb").removeClass("empty-vmd");
    } catch (b) {
      return;
    }
  }
  /**
   * @return {undefined}
   */
  function _load() {
    var message;
    try {
      /** @type {*} */
      message = JSON.parse($(".vmq").html());
      $(".vmy").removeClass("vih");
      $(".vmz").text(message.title);
      wrap(message.originalSet);
      $(message.optionalSets).each(function() {
        wrap(this);
      });
      $(".vnb").removeClass("empty-vmd");
    } catch (b) {
      return;
    }
  }
  /**
   * @param {string} type
   * @param {Array} data
   * @param {string} evt
   * @return {undefined}
   */
  function emit(type, data, evt) {
    var base;
    /** @type {string} */
    var post = "";
    /** @type {string} */
    var key = type + ": ";
    /** @type {number} */
    var g = 100 / data.length;
    $(data).each(function(deepDataAndEvents, dataAndEvents) {
      post += '<div class="vax" style="width: ' + g + "%; background-color: " + dataAndEvents + '"></div>';
      key += " " + dataAndEvents;
    });
    /** @type {string} */
    base = '<li title="' + key + '" class="vhu" viz="' + evt.toLowerCase() + '.css">';
    $(".vay").append(base + post + "</li>");
  }
  /**
   * @param {Object} options
   * @return {undefined}
   */
  function wrap(options) {
    var css = $("<li>").addClass("vmv").attr("vmw", options.setName);
    if (options.css.length > 0) {
      css.attr("vmo", options.css);
    } else {
      css.attr("vmo", "vir");
    }
    $(options.fonts).each(function() {
      css.append($("<img>").attr("src", "img/fonts/" + log(this.fontName) + ".png"));
    });
    $(".vms").append(css);
  }
  /**
   * @param {?} item
   * @param {string} recurring
   * @return {undefined}
   */
  function clean(item, recurring) {
    try {
      /** @type {*} */
      colourSchemes = JSON.parse($(".vaz").html());
      var v = item;
      var ret = $('[href*="' + $(".vay").attr("vhx") + '"]').attr("href");
      var rreturn = $(".vay").attr("vhx");
      v = ret.replace(rreturn, v);
      $('[href*="' + $(".vay").attr("vhx") + '"]').attr("href", v);
      $(".vay").attr("vhx", item);
      if (1 == recurring) {
        parse();
      }
    } catch (f) {
    }
  }
  /**
   * @param {string} path
   * @param {string} recurring
   * @return {undefined}
   */
  function normalize(path, recurring) {
    try {
      var c = (JSON.parse($(".vmq").html()), $("[vmw=" + path + "]").attr("vmo"));
      $("head link.vmx").remove();
      $("head").append('<link class="vmx" href="' + c + '" rel="stylesheet" type="text/css">').append('<link class="vmx" href="../css/font-' + log(path) + '.css" rel="stylesheet" type="text/css">');
      $(".vms").attr("vmr", path);
      $(".vmv.vhr").removeClass("vhr");
      $('.vmv[vmw="' + path + '"]').addClass("vhr");
      if (1 == recurring) {
        parse();
      }
    } catch (d) {
    }
  }
  /**
   * @param {string} url
   * @return {undefined}
   */
  function addLink(url) {
    $("head").append('<link class="viw" href="theme/css/' + url + '" rel="alternate stylesheet" type="text/css" media="all">');
  }
  /**
   * @return {undefined}
   */
  function click() {
    $(".vjy").unbind("click").click(function() {
      return false;
    });
  }
  /**
   * @return {undefined}
   */
  function _set_navigation() {
    $(".viu form").unbind("submit").bind("submit", function(ev) {
      return ev.stopPropagation && ev.stopPropagation(), ev.returnValue = false, false;
    });
    $('.viu button[type="submit"]').unbind("click").bind("click", function(ev) {
      return ev.stopPropagation && ev.stopPropagation(), ev.returnValue = false, false;
    });
  }
  /**
   * @return {undefined}
   */
  function onError() {
    try {
      /** @type {*} */
      var config = JSON.parse($("#vkk").html());
      $("<div>").addClass("vkq").append('<div class="vlq"><span>Page Options</span></div>').append('<div class="vmd"><ul class="vkx"></ul></div>').appendTo(".vmb");
      if ($.isArray(config.options)) {
        $(config.options).each(function() {
          setup(this, ".vkx", "body, #vkk", true);
        });
      } else {
        setup(config.options, ".vkx", "body, #vkk", true);
      }
    } catch (b) {
      return;
    }
  }
  /**
   * @param {string} fn
   * @return {undefined}
   */
  function run(fn) {
    if (!arguments.length) {
      fn = $("#veu nav").attr("nav-id");
    }
    $(".vmm").closest(".vkq").remove();
    try {
      /** @type {*} */
      var config = JSON.parse($("#" + fn + " script.options").html());
      $("<div>").addClass("vkq").append('<div class="vlq"><span>Nav Options</span></div>').append('<div class="vmd"><ul class="vmm"></ul></div>').appendTo(".vmb");
      if ($.isArray(config.options)) {
        $(config.options).each(function(dataAndEvents, opts) {
          var failureMessage = "undefined" != typeof opts.target ? opts.target : "";
          setup(opts, ".vmm", mrv_pageNavTarget.selector + " nav " + failureMessage + ", " + self.selector + " nav " + failureMessage, true);
        });
      } else {
        var failureMessage = "undefined" != typeof config.options.target ? config.options.target : "";
        setup(config.options, ".vmm", mrv_pageNavTarget.selector + " nav  " + failureMessage + ", " + self.selector + " nav  " + failureMessage, true);
      }
    } catch (d) {
      return;
    }
  }
  Dropzone.autoDiscover = false;

  $(function() {
      var myDropzone = new Dropzone("#drop_zone");
      myDropzone.on("complete", function(file) {
        parse();
      });
  });
  /**
   * @return {?}
   */
  function number() {
    try {
      return JSON.parse($("#voy").html());
    } catch (a) {
      return JSON.parse('{"options":[]}');
    }
  }
  /**
   * @param {string} s
   * @param {number} dataAndEvents
   * @return {undefined}
   */
  function redraw(s, dataAndEvents) {
    var until;
    var target = $("." + s);
    /** @type {string} */
    var tab = "";
    /** @type {number} */
    dataAndEvents = dataAndEvents;
    a.options.forEach(function(opts) {
      until = opts.disposableSelector || opts.selector;
      if ("undefined" != typeof opts.closest) {
        target = $("." + $(target).closest(opts.closest).attr("vic"));
      }
      if ("undefined" != typeof opts.menu) {
        /** @type {string} */
        tab = "." + opts.menu;
      }
      if ($(target).is(until)) {
        setup(opts, ".vnc" + tab, target.selector, true);
        if ("undefined" != typeof dataAndEvents) {
          if (1 == dataAndEvents) {
            $(".vnc" + tab).removeClass("vih");
          }
        }
      }
    });
  }
  /**
   * @return {?}
   */
  function displayWindowSize() {
    try {
      return JSON.parse($("#vnd").html());
    } catch (a) {
      return JSON.parse('{"options":[]}');
    }
  }
  /**
   * @param {string} type
   * @return {undefined}
   */
  function reset(type) {
    var e = $("." + type);
    $("ul.vnc li").remove();
    $(elem.options).each(function() {
      if (e.is(this.selector)) {
        refresh(e, this);
      }
    });
  }
  /**
   * @param {string} selector
   * @return {undefined}
   */
  function init(selector) {
    var body;
    var $rootElement;
    var parent;
    var viewElem;
    var frame;
    /** @type {number} */
    var p1 = 0;
    /** @type {number} */
    var value = 0;
    /** @type {number} */
    var p2 = 0;
    var $el = $(".viu ." + selector);
    var locked = $el.attr("vic");
    var otherElementRect = $el.position();
    var parentRect = $el.offset();
    /** @type {number} */
    var width = Math.max($(".viu nav:nth-of-type(1)").outerHeight(true), $(".viu nav .nav-bar:nth-of-type(1)").outerHeight(true), $(".viu .nav-container:nth-of-type(1)").outerHeight(true));
    var oldPosition = $(".viu nav").css("position");
    var key = $(".viu nav .nav-bar").css("position");
    var $slide = $(".viu");
    var scrollLeft = $el.width();
    var thumbWidth = ($(window).width(), $(window).height());
    /** @type {number} */
    var w = width / thumbWidth;
    /** @type {number} */
    var val = 0;
    /** @type {number} */
    var fontSize = Math.round(parentRect.left + scrollLeft - 14);
    /** @type {number} */
    width = w > 0.9 ? 0 : width;
    if (!$.find('.viu .vne[vnt="' + locked + '"]').length) {
      $(".viu .vne").remove();
      body = $('<div class="vne" />');
      if (!$el.is(":first-child")) {
        if (!("absolute" != oldPosition && ("fixed" != oldPosition && ("fixed" != key && "absolute" != key)))) {
          /** @type {number} */
          width = 0;
        }
      }
      body.css("top", Math.round(otherElementRect.top + 10 + width));
      body.attr("vnt", locked);
      $rootElement = $("<ul></ul>");
      $rootElement.append('<li class="vni"><span class="vnm oi" data-glyph="cog"></span><ul class="vnc utility"></ul></li>');
      a.options.forEach(function(handler) {
        if ($el.is(handler.selector)) {
          p1++;
        }
      });
      elem.options.forEach(function(options) {
        if (1 === $el.find(options.selector).length && "true" == options.sectionControl) {
          parent = construct(options, false, $el.find(options.selector).first().attr("vic"));
          $rootElement.append(parent);
          fontSize -= 48;
          val += 48;
          value++;
        } else {
          if ($el.is(options.selector)) {
            if ("true" == options.sectionControl) {
              parent = construct(options, false, $el.attr("vic"));
              $rootElement.append(parent);
              fontSize -= 48;
              val += 48;
              value++;
            }
          }
        }
      });
      viewElem = $el.find(".background-image-holder > img:not(.lightbox-gallery-mrv img, .voh img ,ul.slides .background-image-holder > img):first");
      if (1 == viewElem.length) {
        $rootElement.append(load(viewElem.attr("vic"), false, "li", "vni"));
        fontSize -= 48;
        val += 48;
        p2++;
      }
      if (1 == $el.find("img").length) {
        if (1 == $el.find("img:not(.background-image-holder > img, ul.slides > li img, ul.slides .owl-item > li img)").length) {
          $rootElement.append(load($el.find("img:not(.background-image-holder > img, ul.slides > li img, ul.slides .owl-item > li img):first").attr("vic"), false, "li", "vni"));
          fontSize -= 48;
          val += 48;
          p2++;
        } else {
          viewElem = $el.find("img:not(.background-image-holder > img, ul.slides > li img, ul.slides .owl-item > li img)").each(function() {
            if (!$(this).parent().is(".background-image-holder")) {
              if (!("absolute" != $(this).css("position"))) {
                if (!$(this).hasClass("vib")) {
                  $rootElement.append(load($(this).attr("vic"), false, "li", "vni"));
                  fontSize -= 48;
                  val += 48;
                  p2++;
                }
              }
            }
          });
        }
      } else {
        $el.find("img:not(.background-image-holder > img, ul.slides > li img, ul.slides .owl-item > li img)").each(function() {
          if ("absolute" == $(this).css("position")) {
            if (!$(this).parents().find("[data-address], .masonry").length) {
              $rootElement.append(load($(this).attr("vic"), false, "li", "vni"));
              fontSize -= 48;
              val += 48;
              p2++;
            }
          }
        });
      }
      if (1 === $el.find("video").length) {
        frame = $el.find("video");
        $rootElement.append(bind(frame.attr("vic"), false));
        fontSize -= 48;
        val += 48;
        p2++;
      }
      if (1 === $el.find("form[action]:not(.vib)").length) {
        $(formIds).each(function(dataAndEvents, err) {
          return $el.find("form").attr("action").toLowerCase().includes(err.action) ? (form = $el.find('form[action*="' + err.action + '"]:first'), $rootElement.append(bindEvents(form.attr("vic"), false)), fontSize -= 48, val += 48, p2++, false) : void 0;
        });
      }
      if (p1 + value > 0) {
        body.append($rootElement);
        fontSize -= 48;
        val += 48;
      }
      if (p1 + value + p2 > 0) {
        body.css("width", val).css("left", fontSize).attr("data-left", fontSize);
        body.addClass("vnj").appendTo($slide);
        redraw(selector);
      }
    }
  }
  /**
   * @param {Object} options
   * @param {boolean} children
   * @param {?} path
   * @return {?}
   */
  function construct(options, children, path) {
    var form;
    var pencil = options.modalInputIcon || "pencil";
    return form = $("<li />"), form.addClass("vno"), form.append('<span class="oi" data-glyph="' + pencil + '"></span><span class="vnp">' + options.buttonText + "</span>"), form.data("vnq", options), form.attr("vnr", path), form.attr("title", options.buttonText), children === false ? form : void $(children).append(form);
  }
  /**
   * @param {Object} options
   * @param {string} selector
   * @param {string} item
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  function setup(options, selector, item, dataAndEvents) {
    var desc;
    var on = "undefined" != typeof dataAndEvents ? dataAndEvents : false;
    item = "undefined" != typeof item ? item : false;
    /** @type {string} */
    var action = "on" == options.initial ? "on" : "off";
    var $linkWrapper = $("<li>");
    var $link = $("<div>");
    /** @type {string} */
    var selected = "";
    return desc = "undefined" != typeof options.refresh && "true" == options.refresh ? "refresh" : "", $linkWrapper.addClass("vmk"), options.title && $linkWrapper.append("<span>" + options.title + "</span>"), "choice" == options.type && ("on" == action && (1 == on && $(item).addClass(options["class"])), $link.addClass("vky").attr("optionalclass", options["class"]).attr("classtarget", item), $link.append('<div class="vks choice-button-on ' + desc + " " + ("on" == action && on === true ? "vkr" : "") + 
    ($(item).hasClass(options["class"]) && on !== true ? "vkr" : "") + '">' + options.onText + "</div>"), $link.append('<div class="vks choice-button-off ' + desc + " " + ("off" == action && on === true ? "vkr" : "") + ($(item).hasClass(options["class"]) || on === true ? "" : "vkr") + '">' + options.offText + "</div>"), $linkWrapper.append($link)), "toggle" == options.type && ("on" == action && (1 == on && $(classtarget).addClass(options["class"])), selected = "on" == action && on === true ? " vku" : 
    "", selected = "auto" === options.initial && $(item).hasClass(options["class"]) ? " vku" : selected, $link.addClass("vkz").attr("optionalclass", options["class"]).attr("classtarget", item), $link.append('<span class="oi" data-glyph="' + options.icon + '"></span><span>' + options.text + "</span>"), $link.append('<div class="vkt' + selected + " " + desc + '"><div class="vmi"></div></div>'), $linkWrapper.append($link)), "multi" == options.type && ($link.addClass("vmj").attr("classtarget", item), 
    $.each(options.classes, function(dataAndEvents, script) {
      $link.append('<div class="vkv ' + desc + " " + (options.initial == dataAndEvents + 1 && on === true ? "vkw" : "") + '" optionalclass="' + ("" !== script["class"] ? script["class"] : " ") + '">' + script.text + "</div>");
    }), $linkWrapper.append($link)), "undefined" != typeof options.submenu && ($(selector).find('li.vnk[submenu-name="' + options.submenu + '"]').length || $(selector).append('<li class="vnk" submenu-name="' + options.submenu + '"><span class="vnl">' + options.submenu + "</span><ul></ul></li>"), selector = $(selector).find('li.vnk[submenu-name="' + options.submenu + '"] ul')), selector === false ? $linkWrapper : void $(selector).append($linkWrapper);
  }
  /**
   * @param {string} name
   * @param {boolean} mayParseLabeledStatementInstead
   * @param {string} opts
   * @param {string} val
   * @return {?}
   */
  function load(name, mayParseLabeledStatementInstead, opts, val) {
    var node;
    var child;
    /** @type {string} */
    var suiteView = "undefined" != typeof opts && ("string" == typeof opts && "" !== opts) ? opts : "div";
    /** @type {string} */
    var value = "undefined" != typeof val && ("string" == typeof val && "" !== val) ? val : "";
    var el = mayParseLabeledStatementInstead !== false ? $(".viu ." + mayParseLabeledStatementInstead) : false;
    var item = el ? el.outerWidth() : null;
    /** @type {string} */
    var mh = "10px";
    /** @type {boolean} */
    var l = el && "img" === (el.prop("tagName").length === 0 ? (el.prop("tagName").toLowerCase() ? true : false) : false);
    /** @type {boolean} */
    var m = el && "absolute" === el.css("position") ? true : false;
    node = add("image", "Edit Image", suiteView, value);
    var current = $('<div class="vnu"></div>');
    var markup = $('<div class="vnw"></div>');
    if ($(node).unbind("click").bind("click", function(ev) {
      return close($("." + name).attr("vic")), ev.stopPropagation && ev.stopPropagation(), ev.returnValue = false, false;
    }).attr("vof", $("." + name).attr("vic")), 100 >= item && (mh = "2px"), mayParseLabeledStatementInstead !== false) {
      if (l) {
        return m ? true : (child = el.parent(), el.parent().is(".vnu") || (child = current, "" !== el.css("float") && child.css("float", el.css("float")), "" !== el.css("padding") ? child.css("padding", el.css("padding")) : ("" !== el.css("padding-left") && (child.css("padding-left", el.css("padding-left")), el.css("padding-left", "0px")), "" !== el.css("padding-right") && (child.css("padding-right", el.css("padding-right")), el.css("padding-right", "0px"))), "" !== el.css("margin-right") && (child.css("margin-right", 
        el.css("margin-right")), el.css("margin-right", "0px")), "" !== el.css("margin-left") && (child.css("margin-left", el.css("margin-left")), el.css("margin-left", "0px")), el.hasClass("pull-right") && child.addClass("pull-right"), el.hasClass("pull-left") && child.addClass("pull-left"), child.css("max-width", item), el.wrap(child)), $(markup).css("padding", mh).css("width", el.innerWidth()).append(node), el.parent().append(markup), true);
      }
      $(markup).css("padding", mh).css("width", item).append(node);
      el.append(markup);
    }
    return mayParseLabeledStatementInstead === false ? node : void 0;
  }
  /**
   * @param {string} obj
   * @param {boolean} recurring
   * @return {?}
   */
  function bind(obj, recurring) {
    var el;
    var $win = $(".viu ." + recurring);
    $win.width();
    return el = add("video", "Edit Video"), $(el).unbind("click").bind("click", function(ev) {
      return setAttribute($("." + obj).attr("vic")), ev.stopPropagation && ev.stopPropagation(), ev.returnValue = false, false;
    }).attr("vof", $("." + obj).attr("vic")), recurring === false ? el : void 0;
  }
  /**
   * @param {string} el
   * @param {Object} type
   * @return {?}
   */
  function bindEvents(el, type) {
    var doc;
    $(".viu ." + type);
    return doc = add("envelope-closed", "Edit Form", "li"), $(doc).unbind("click").bind("click", function(ev) {
      return end($("." + el).attr("vic")), ev.stopPropagation && ev.stopPropagation(), ev.returnValue = false, false;
    }).attr("vof", $("." + el).attr("vic")), type === false ? doc : void 0;
  }
  /**
   * @param {string} index
   * @return {undefined}
   */
  function start(index) {
    var container;
    var $select;
    var el = $(".viu ul.slides." + index);
    var body = $(el).parents(".slider");
    var nItems = el.parents(".slider[data-items]").length ? el.parents(".slider[data-items]").attr("data-items") : 0;
    var m = nItems > 1 ? el.find(".owl-item.active").length : 0;
    var oldPosition = $(".viu nav").css("position");
    navBarPosition = $(".viu nav .nav-bar").css("position");
    numSlides = el.find(" > li, .owl-item > li").not(".clone").length;
    /** @type {boolean} */
    owlPagingButtons = body.length && (m > 1 && numSlides > m) ? true : false;
    /** @type {number} */
    offsetTop = 0;
    if (!("absolute" != oldPosition && ("fixed" != oldPosition && ("absolute" != navBarPosition && "fixed" != navBarPosition)))) {
      if (!!el.closest("section").is(".viu section:nth-of-type(1), .viu header:nth-of-type(1)")) {
        /** @type {number} */
        offsetTop = Math.max($(".viu nav").outerHeight(true), $(".viu .nav-container").outerHeight(true), $(".viu nav .nav-bar").outerHeight(true));
      }
    }
    el.find(" > li, .owl-item > li").not(".clone").each(function(dataAndEvents) {
      var toolbar;
      var input;
      var div = $(this);
      /** @type {string} */
      var container = "";
      /** @type {string} */
      var param = "";
      /** @type {string} */
      var cont = "";
      /** @type {string} */
      var value = "";
      /** @type {string} */
      var before = "";
      toolbar = $('<div class="vnw"></div>');
      toolbar.css("top", offsetTop + 10);
      if (!el.find("img").length) {
        toolbar.addClass("vny");
      }
      if (el.find("li > p, li > span").length) {
        toolbar.addClass("vny");
      }
      if (!div.find(".vnv").length) {
        if (numSlides > 1) {
          container = add("arrow-thick-left", "Show Previous Slide");
          $(container).unbind("click").bind("click", function(ev) {
            try {
              el.parent().flexslider("prev");
            } catch (b) {
            }
            try {
              el.closest(".slider").flexslider("prev");
            } catch (b) {
            }
            try {
              el.trigger("prev.owl.carousel");
            } catch (b) {
            }
            return ev.stopPropagation && ev.stopPropagation(), ev.returnValue = false, false;
          });
          param = add("arrow-thick-right", "Show next Slide");
          $(param).unbind("click").bind("click", function(ev) {
            try {
              el.parent().flexslider("next");
            } catch (b) {
            }
            try {
              el.closest(".slider").flexslider("next");
            } catch (b) {
            }
            try {
              el.trigger("next.owl.carousel");
            } catch (b) {
            }
            return ev.stopPropagation && ev.stopPropagation(), ev.returnValue = false, false;
          });
          cont = add("minus", "Delete Slide");
          $(cont).unbind("click").bind("click", function(ev) {
            return remove(div.attr("vic"), true), ev.stopPropagation && ev.stopPropagation(), ev.returnValue = false, false;
          });
        }
        input = add("plus", "Clone Slide");
        $(input).unbind("click").bind("click", function(ev) {
          return next(div.attr("vic")), ev.stopPropagation && ev.stopPropagation(), ev.returnValue = false, false;
        });
        if (div.find(" > div.background-image-holder img").length) {
          value = load(div.find(" > div.background-image-holder img").attr("vic"), false);
        }
        if (1 == div.find("img").length) {
          value = load(div.find("img").attr("vic"), false);
        }
        if (1 == div.find("video").length) {
          before = bind(div.find("video").attr("vic"), false);
        }
        toolbar.append(container).append(cont).append(value).append(before).append(input).append(param);
        div.prepend(toolbar);
      }
    });
    if (owlPagingButtons) {
      $select = $('<div class="vob vnw"></div>');
      prevSlideButton = add("arrow-thick-left", "Show Previous Slide");
      $(prevSlideButton).unbind("click").bind("click", function(ev) {
        try {
          el.trigger("prev.owl.carousel");
        } catch (b) {
        }
        return ev.stopPropagation && ev.stopPropagation(), ev.returnValue = false, false;
      }).appendTo($select);
      container = $('<div class="voc vnw"></div>');
      nextSlideButton = add("arrow-thick-right", "Show next Slide");
      $(nextSlideButton).unbind("click").bind("click", function(ev) {
        try {
          el.trigger("next.owl.carousel");
        } catch (b) {
        }
        return ev.stopPropagation && ev.stopPropagation(), ev.returnValue = false, false;
      }).appendTo(container);
      body.prepend(container).prepend($select);
    }
  }
  /**
   * @param {string} value
   * @param {string} title
   * @param {string} obj
   * @param {string} val
   * @return {?}
   */
  function add(value, title, obj, val) {
    var $col;
    /** @type {string} */
    var toAct = "string" == typeof obj && "" !== obj ? obj : "div";
    /** @type {string} */
    var failureMessage = "undefined" != typeof val && ("string" == typeof val && "" !== val) ? val + " " : "";
    return $col = $("<" + toAct + ' data-glyph="' + value + '" class="' + failureMessage + 'oi vnv" title="' + title + '"></' + toAct + ">");
  }
  /**
   * @param {Object} settings
   * @param {boolean} offset
   * @param {?} src
   * @return {?}
   */
  function populate(settings, offset, src) {
    var $img;
    var pencil = settings.modalInputIcon || "pencil";
    return $img = $('<div data-glyph="' + pencil + '" class="oi vnv" title="' + settings.buttonText + '"></div>'), $img.addClass("vno"), $img.data("vnq", settings), $img.attr("vnr", src), offset === false ? $img : void $(offset).append($img);
  }
  /**
   * @param {Object} classes
   * @return {undefined}
   */
  function postLink(classes) {
    classes = "undefined" != typeof classes ? classes : "";
    $("#vkk").removeAttr("class").addClass(classes);
    $("body").addClass(classes);
    $(".vkx .vky").each(function() {
      $(this).find(".vks").removeClass("vkr");
      if (-1 !== classes.indexOf($(this).attr("optionalclass"))) {
        $(this).find(".choice-button-on").addClass("vkr");
      } else {
        $(this).find(".choice-button-off").addClass("vkr");
        $("body").removeClass($(this).attr("optionalclass"));
      }
    });
    $(".vkx .vkz").each(function() {
      $(this).find(".vkt").removeClass("vku");
      if (-1 !== classes.indexOf($(this).attr("optionalclass"))) {
        $(this).find(".vkt").addClass("vku");
      } else {
        $("body").removeClass($(this).attr("optionalclass"));
      }
    });
    $(".vkx .vkv").removeClass("vkw");
    $('.vkx .vkv[optionalclass=" "]').addClass("vkw");
    $(".vkx .vkv").each(function() {
      if (-1 !== classes.indexOf($(this).attr("optionalclass")) && " " !== $(this).attr("optionalclass")) {
        $(this).addClass("vkw");
        $('.vkx .vkv[optionalclass=" "]').removeClass("vkw");
      } else {
        $("body").removeClass($(this).attr("optionalclass"));
      }
    });
  }
  /**
   * @param {string} html
   * @param {string} val
   * @return {?}
   */
  function format(html, val) {
    var uHostName = html.replace(/(\r\n|\n|\r)/gm, ",");
    var asserterNames = uHostName.split(",");
    /** @type {boolean} */
    var enabled = false;
    /** @type {string} */
    var text = html;
    return val = " " == val ? "" : val, -1 === html.indexOf("[optional-body-classes]") ? html : (asserterNames.forEach(function(whitespace) {
      if (-1 !== whitespace.indexOf("[optional-body-classes]")) {
        if ("" != val) {
          if (-1 !== whitespace.indexOf('class="')) {
            /** @type {string} */
            text = String(html).replace("[optional-body-classes]", val);
            /** @type {boolean} */
            enabled = true;
          } else {
            /** @type {string} */
            text = String(html).replace("[optional-body-classes]", 'class="' + val + '"');
            /** @type {boolean} */
            enabled = true;
          }
        } else {
          /** @type {string} */
          text = String(html).replace(" [optional-body-classes]", "");
          /** @type {string} */
          text = String(text).replace("[optional-body-classes]", "");
          /** @type {boolean} */
          enabled = true;
        }
      }
    }), enabled ? text : void 0);
  }
  /**
   * @param {string} value
   * @param {string} x
   * @return {?}
   */
  function set(value, x) {
    var tokenizeEvaluate;
    /** @type {string} */
    var text = value;
    /** @type {string} */
    var optsData = "";
    return "undefined" != typeof x && (x.length > 0 && ("vir" !== $('.vmv[vmw="' + x + '"]').attr("vmo") && (optsData = $('.vmv[vmw="' + x + '"]').attr("vmo"), tokenizeEvaluate = '&#13;&#10;        &lt;link href="' + optsData + '" rel="stylesheet" type="text/css"&gt;&#13;&#10;', tokenizeEvaluate += '        &lt;link href="css/font-' + log(x) + '.css" rel="stylesheet" type="text/css"&gt;&#13;&#10;    &lt;/head&gt;\n', text = text.replace(/\t\&lt;\/head\&gt;/g, tokenizeEvaluate), text = text.replace(/[\s]*\&lt;\/head\&gt;/g, 
    tokenizeEvaluate)))), text;
  }
  /**
   * @return {undefined}
   */
  function onSuccess() {
    if (void 0 != window.mr_parallax) {
      setTimeout(window.mr_parallax.profileParallaxElements, 100);
      if (void 0 != window.mr_parallax.callback) {
        $(".viu .parallax").each(function() {
          window.mr_parallax.callback(this);
        });
      }
    }
  }
  /**
   * @return {undefined}
   */
  function transition() {
    if ($.localStorage(name + ".vhh")) {
      $(".vet span").html("Load " + $.localStorage(name + ".vhg"));
      $(".vhe").removeClass("vih");
    } else {
      if ($.localStorage(name + ".state.veu")) {
        $(".vet span").removeClass("vih");
        $(".vhe").removeClass("vih");
      } else {
        $(".vhd").removeClass("vih");
      }
    }
    if (ub) {
      $(".vah, .vdi, .vgy").remove();
    }
  }
  /**
   * @return {undefined}
   */
  function getBlob() {
    var demo = getParam("demo");
    if (null !== demo) {
      /** @type {XMLHttpRequest} */
      var req = new XMLHttpRequest;
      req.open("GET", "../demos/" + demo + ".variant", true);
      /** @type {string} */
      req.responseType = "blob";
      /**
       * @param {?} e
       * @return {undefined}
       */
      req.onload = function(e) {
        /** @type {Array} */
        var def = [req.response];
        loadScript(def, true);
      };
      /**
       * @param {?} er
       * @return {undefined}
       */
      req.onerror = function(er) {
        error("Could not load specified demo file.");
      };
      req.send();
    }
  }
  /**
   * @param {string} el
   * @return {undefined}
   */
  function draw(el) {
    $(".vce").addClass("variant-filtered-mrv");
    $(".vcd ul.variant-icon-sets-mrv div.vam").addClass("vih");
    $(".vcd ul.variant-icon-sets-mrv div.vam span.vor").remove();
    $('.vcd ul.variant-icon-sets-mrv div.vam[von*="' + el + '"]').each(function() {
      choosableIcon = $(this);
      choosableIcon.append('<span class="vor">' + choosableIcon.attr("von").replace(el, "<strong>" + el + "</strong>") + "</span>");
      choosableIcon.removeClass("vih");
    });
    filter();
  }
  /**
   * @return {undefined}
   */
  function clear() {
    $(".vce").removeClass("variant-filtered-mrv");
    $(".vcd .variant-icon-sets-mrv li div.vam.vih").removeClass("vih");
    $(".vok").val("");
    $(".vcd .vol").addClass("vih");
    $(".vcd ul.variant-icon-sets-mrv div.vam span.vor").remove();
    filter();
  }
  /**
   * @return {undefined}
   */
  function filter() {
    var min;
    /** @type {boolean} */
    var b = true;
    $(".vow").remove();
    $(".vcd ul.variant-icon-sets-mrv li.vov").each(function(index, dataAndEvents) {
      min = $(this).find("div.vam:not(.vih)").length;
      if (0 == min) {
        $(this).addClass("vih").prev().addClass("vih");
      } else {
        if (min > 70) {
          $(".vce").addClass("variant-scroll-shadow-mrv");
        } else {
          $(".vce").removeClass("variant-scroll-shadow-mrv");
        }
        $(this).removeClass("vih").prev().removeClass("vih");
        /** @type {boolean} */
        b = false;
      }
      $(".vcd .variant-icon-sets-mrv li span.vom").eq(index).text(min + " icon" + (min > 1 ? "s" : "") + " " + ("" !== $(".vok").val() ? "found" : "in this pack") + " ");
    });
    if (b) {
      $(".vce").append('<span class="vow">None Found</span>');
      $(".vce").removeClass("variant-scroll-shadow-mrv");
    }
  }
  /**
   * @param {string} c
   * @param {?} name
   * @param {?} value
   * @return {?}
   */
  function removeClass(c, name, value) {
    var target;
    var sourceContainer;
    var desc;
    var domain;
    var url;
    /** @type {string} */
    var requestUrl = c;
    return asserterNames.forEach(function(options, dataAndEvents) {
      target = $("<textarea>").append(name).append(value);
      sourceContainer = $("<div>").html(target.text());
      requestUrl = requestUrl.replace("\n        " + options.headString.replace(/&quot;/g, '"') + "\n", "\n");
      requestUrl = requestUrl.replace(options.headString.replace(/&quot;/g, '"') + "\n", "");
      /** @type {string} */
      domain = "undefined" != typeof options.iconClass && "" !== options.iconClass ? 'i[class*="' + options.iconClass + '"]' : "";
      /** @type {string} */
      url = "undefined" != typeof options.iconPrefix && "" !== options.iconPrefix ? ("" !== domain ? "," : "") + 'i[class*="' + options.iconPrefix + '"]' : "";
      /** @type {string} */
      desc = "undefined" != typeof options.requiredBy && "" !== options.requiredBy ? (domain + url !== "" ? "," : "") + options.requiredBy : "";
      if ($(sourceContainer).find(domain + url + desc).length) {
        requestUrl = requestUrl.replace("\n        &lt;link ", "\n        " + options.headString + "\n        &lt;link ");
      }
    }), requestUrl;
  }
  /**
   * @param {string} context
   * @param {?} element
   * @param {?} key
   * @return {?}
   */
  function linkFn(context, element, key) {
    var script;
    var sourceContainer;
    /** @type {string} */
    var head = context;
    return failures.forEach(function(op, dataAndEvents) {
      script = $("<textarea>").append(element).append(key);
      sourceContainer = $("<div>").html(script.text());
      if (!$(sourceContainer).find(op.requiredBy).length) {
        head = head.replace(op.styleRef, "\n").replace(/\n[ ]+\n/g, "");
      }
    }), head;
  }
  /**
   * @param {?} obj
   * @param {?} val
   * @param {string} value
   * @return {?}
   */
  function save(obj, val, value) {
    var target;
    var sourceContainer;
    /** @type {string} */
    var tmp = value;
    return assertions.forEach(function(m, dataAndEvents) {
      target = $("<textarea>").append(val).append(value);
      sourceContainer = $("<div>").html(target.text());
      if (!$(sourceContainer).find(m.requiredBy).length) {
        tmp = tmp.replace(m.scriptRef, "\n").replace(/\n[ ]+\n/g, "");
      }
    }), tmp;
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function getParam(name) {
    return decodeURIComponent(((new RegExp("[?|&]" + name + "=([^&;]+?)(&|#|;|$)")).exec(location.search) || [, ""])[1].replace(/\+/g, "%20")) || null;
  }
  /**
   * @param {Element} $e
   * @param {string} exports
   * @return {?}
   */
  function makeProblem($e, exports) {
    var value = $e.attr("vic");
    var sel = "undefined" != typeof exports ? exports : "";
    var radio = $e.parent().children(sel).not(".vib, .vjb").first().attr("vic");
    return value === radio ? true : false;
  }
  /**
   * @param {Element} data
   * @param {string} x
   * @return {?}
   */
  function sort(data, x) {
    var value = data.attr("vic");
    var sel = "undefined" != typeof x ? x : "";
    var radio = data.parent().children(sel).not(".vib, .vjb").last().attr("vic");
    return value === radio ? true : false;
  }
  /**
   * @param {Element} node
   * @return {?}
   */
  function _build(node) {
    var context = node.attr("vic");
    var set = node.parent().children().not(".vib, .vjb");
    var n = set.index(node);
    var root = n > 0 ? set.eq(n - 1).attr("vic") : context;
    return root;
  }
  /**
   * @param {Node} template
   * @param {Object} dataAndEvents
   * @return {?}
   */
  function createElement(template, dataAndEvents) {
    if (!template || !template.tagName) {
      return "";
    }
    var content;
    var endPos;
    /** @type {Element} */
    var el = document.createElement("div");
    return el.appendChild(template.cloneNode(false)), content = el.innerHTML, dataAndEvents && (endPos = content.indexOf(">") + 1, content = content.substring(0, endPos) + template.innerHTML + content.substring(endPos)), el = null, content;
  }
  /**
   * @param {Event} deepDataAndEvents
   * @return {?}
   */
  function replaceText(deepDataAndEvents) {
    if (window.getSelection) {
      deepDataAndEvents.stopPropagation();
      /** @type {(Selection|null)} */
      var selection = window.getSelection();
      /** @type {(Range|null)} */
      var range = selection.getRangeAt(0);
      /** @type {Element} */
      var node = document.createElement("br");
      return range.deleteContents(), range.insertNode(node), range.setStartAfter(node), range.setEndAfter(node), range.collapse(false), selection.removeAllRanges(), selection.addRange(range), false;
    }
    return true;
  }
  /**
   * @param {Event} event
   * @return {?}
   */
  function handleClick(event) {
    if (window.getSelection) {
      event.stopPropagation();
      /** @type {(Selection|null)} */
      var selection = window.getSelection();
      /** @type {(Range|null)} */
      var range = selection.getRangeAt(0);
      /** @type {Text} */
      var node = document.createTextNode(" ");
      return range.deleteContents(), range.insertNode(node), range.setStartAfter(node), range.setEndAfter(node), range.collapse(false), selection.removeAllRanges(), selection.addRange(range), false;
    }
    return true;
  }
  var asserterNames;
  var failures;
  var assertions;
  var a;
  var elem;
  var aDate;
  var win;
  var $col;
  var name;
  var selector;
  var object;
  var self;
  var tmp;
  var iteratee;
  /** @type {string} */
  var node = "";
  /** @type {string} */
  var target = ".vnn, ul.slides > li, ul.slides .owl-item > li , .masonry .project, .accordion li, .accordion, .masonry__item";
  /** @type {string} */
  var sel = ".vnn, .grid-layout, .tabbed-content, .tabs";
  /** @type {Array} */
  var formIds = [{
    name : "Campaign Monitor",
    action : "createsend.com",
    /** @type {function (?, Object): ?} */
    handler : update
  }, {
    name : "MailChimp",
    action : "list-manage.com",
    /** @type {function (?, Object): ?} */
    handler : render
  }];
  /** @type {boolean} */
  var ub = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0;
  onload();
  /** @type {boolean} */
  this.removeIconButtons = true;
  $(document).bind("mouseup", function(e) {
    if (!$(e.target).closest(".vnc, .vnj").length) {
      if (1 === e.which) {
        $(".vhw").hide();
        $(".vni").removeClass("vhr");
      }
    }
  });
  $(document).ready(function() {
    /**
     * @param {string} response
     * @param {string} parts
     * @param {string} key
     * @param {string} value
     * @return {?}
     */
    function parse(response, parts, key, value) {
      var obj;
      var source;
      var camelKey;
      var html;
      var ret;
      /** @type {string} */
      var element = response;
      /** @type {string} */
      var klass = "";
      return a.options && a.options.forEach(function(err) {
        if ("undefined" != typeof err.disposableSelector) {
          klass = klass + " " + err.disposableSelector.replace(".", "");
        }
      }), element.find("h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty, a:empty, p:empty, span:empty, li:empty, em:empty, strong:empty, blockquote:empty, figcaption:empty, table:empty, label:empty").not(".in-page-link").addClass("vib"), element.find(".vib, .vjb").each(function() {
        activate($(this));
      }), element.find("div.row:not(:has(>div, >p, >h1, >h2, >h3, >h4, >h5, >h6, >span, >ul, >li, >strong, >em, >a, >i, >img, >figure, >video, >iframe, >form, >input, >textarea, >blockquote, >figcaption, >table, >form, >label, >address))").remove(), element.find(".vjd:not(:has(>div, >p, >h1, >h2, >h3, >h4, >h5, >h6, >span, >ul, >li, >strong, >em, >a, >i, >img, >figure, >video, >iframe, >form, >input, >textarea, >blockquote, >figcaption, >table, >form, >label, >address))").remove(), $(element).find("p, span, li, ul, h1, h2, h3, h4, h5, h6, nav, header, footer, strong, em, a, section, div, i, img, figure, video, iframe, form, input, textarea, blockquote, figcaption, tbody, tr, td, th, label, address").removeClass("vjm vjb").removeClass("vhz").removeClass("vir").alterClass("vjs-*", 
      "").alterClass("variant-*", "").removeClass("vjd").removeClass("voz").removeClass("viv").removeClass("lightbox-gallery-mrv").removeClass("veo").removeClass("vlk").removeClass("ven").removeClass("vjy").removeClass("vdw").removeAttr("vic").removeClass("vjx").removeClass("vog").removeClass("voh").removeAttr("vij").removeAttr("vik").removeAttr("contenteditable").removeAttr("data-vip").removeAttr("vli").removeAttr("vht").removeAttr("vjw").removeAttr("vii").removeAttr("style").removeAttr("nav-id").removeClass("ui-sortable").removeClass(klass).removeClass("vns").removeClass("vnx").removeClass("vpd").removeClass("vnn").removeClass("vpe"), 
      $(element).find("nav").alterClass("via-*", "").removeAttr("via").removeAttr("vio").removeAttr("style"), $(element).find("footer").alterClass("vhy-*", "").removeAttr("vhy").removeAttr("vie"), $(element).find('*[class=""]').removeAttr("class"), obj = $("#vji").html(), obj = String(obj).replace("[title]", parts), $("[vhx]").length && (obj = String(obj).replace($("[viq]").attr("viq"), $("[vhx]").attr("vhx"))), ret = format(obj, value), obj = ret ? ret : obj, obj = set(obj, key), source = $(element).html().replace(/\n/g, 
      "\n\t\t").replace(/\n\n/g, "\n").replace(/\n\t\t><section/g, ">\n\t\t\t<section").replace(/\n\t\t<header/g, "\n\t\t\t<header").replace(/\t\t\t<\/header></g, "\t\t\t</header>\n\t\t\t<").replace(/\t\t\t<\/section></g, "\t\t\t</section>\n\t\t\t<").replace(/<\/a><section/g, "</a>\n\t\t\t\n\t\t\t<section").replace(/<\/a><header/g, "</a>\n\t\t\t\n\t\t\t<header").replace(/<\/section>\n\t\t\t<a/g, "</section>\n\t\t\t\n\t\t\t<a").replace(/<\/header>\n\t\t\t<a/g, "</header>\n\t\t\t\n\t\t\t<a").replace(/\t\t\t<\/section>\n\t\t\t<\/div>/g, 
      "\t\t\t</section>\n\t\t</div>").replace(/\t\t\t<\/header>\n\t\t\t<\/div>/g, "\t\t\t</header>\n\t\t</div>").replace(/\t\t\t<\/header>\n\t\t\t<section/g, "\t\t\t</header>\n\t\t\t\n\t\t\t<section").replace(/\t\t\t<\/section>\n\t\t\t<header/g, "\t\t\t</section>\n\t\t\t\n\t\t\t<header").replace(/\t\t\t<\/section>\n\t\t\t<section/g, "\t\t\t</section>\n\t\t\t\n\t\t\t<section").replace(/\t\t\t<\/header>\n\t\t\t<header/g, "\t\t\t</header>\n\t\t\t\n\t\t\t<header"), source = trim(source), camelKey = $("#vif").html(), 
      obj = removeClass(obj, source, camelKey), obj = linkFn(obj, source, camelKey), camelKey = save(obj, source, camelKey), html = String(obj + source + camelKey), html = String(html).replace(/\.\.\/img\//g, "img/").replace(/\.\.\/video\//g, "video/").replace(/delay-src/g, "src").replace(/no-src/g, "src");
    }
    $(window).resize(resize);
    resize();
    _init();
    finish();
    asserterNames = handler();
    failures = parseTemplate();
    assertions = tick();
    updateContent();
    trigger();
    attach();
    callback();
    _load();
    onError();
    a = number();
    elem = displayWindowSize();
    if (-1 != navigator.userAgent.indexOf("NT 6.")) {
      $("head").append("<style>::-webkit-scrollbar { width: 8px; background-color: rgba(0,0,0,0); -webkit-border-radius: 100px; } ::-webkit-scrollbar-thumb:vertical { background: rgba(0,0,0,0.3); -webkit-border-radius: 100px; } </style>");
    }
    /** @type {Date} */
    aDate = new Date;
    $(".vkg").text(aDate.getFullYear());
    $(".vgw").click(function() {
      $(".vkm").toggleClass("vme");
      $(".vgw").toggleClass("vmg");
    });
    $(".viu").click(function() {
      $(".vjq").removeClass("vgq");
    });
    $(".vjq .vex").click(function() {
      $(this).closest(".vjq").removeClass("vgq");
    });
    $(".vjc").mouseenter(function() {
      $(".vkm").removeClass("vjz");
    });
    $(".vlf li").click(function() {
      $(".vlf li").removeClass("vhr");
      $(this).addClass("vhr");
      var a = $(this).index() + 1;
      $(".vlp").removeClass("vhr");
      $(".vlp:nth-child(" + a + ")").addClass("vhr");
    });
    $(".vet").click(function() {
      $(".vet").addClass("vih");
      ready();
    });
    $(".vhd").click(function() {
      $.localStorage(name + ".vhh", "");
      $.localStorage(name + ".vhg", "");
      $(".vhe").addClass("vih");
      $(".vac").trigger("click");
      $(".vkm").addClass("vjz");
    });
    $(".vac").click(function() {
      toggleClass();
      $(".vgm").click();
      $(".vlv").toggleClass("vmf");
      $(".vlv").find(".vho").removeClass("vhr");
      resize();
    });
    $(".vma").click(function() {
      $(".vgi").toggleClass("vhr");
      $(this).toggleClass("vhr");
    });
    $(".vgh").click(function() {
      $(".vgi").removeClass("vhr");
      $(".vma").removeClass("vhr");
    });
    $(".vlm").click(function() {
      _listMdFiles();
    });
    $(".vev").each(function() {
      var a = ($(this).data("vjt"), $(this).attr("id"));
      $(".vfj").append('<li class="vfi" nav-id="' + a + '" vit="vir">' + $(this).attr("data-vjt") + "</li>");
    });
    $("#vdk .vim").each(function() {
      var vbr = $(this).attr("vbr");
      var targetNode = $(this).attr("id");
      $(".vdm").append('<li class="vdl" vid="' + targetNode + '" vit="vir">' + vbr + "</li>");
    });
    $(".vei").on("blur keyup paste input", function() {
      document.title = $(this).text();
      if ($.localStorage(name + ".vhh")) {
        $('#vhl [viy="' + $.localStorage(name + ".vhh") + '"]').attr("page-title", $(this).text());
        $.localStorage(name + ".vhk", $("#vhl").html());
      } else {
        $.localStorage(name + ".vhj", $(this).text());
      }
      parse();
    });
    $(document).on("click focus blur keyup paste input", ".vei.vlx", function() {
      $.localStorage(name + ".vhh", "");
      $.localStorage(name + ".vhg", "");
      $(".vhe").addClass("vih");
      $(this).removeClass("vlx");
    });
    $(".vgk").click(label);
    $(".vdh").click(label);
    $(".vga").on("click", function() {
      evaluate();
      $.modal.close();
    });
    $(".vgb").keyup(function(event) {
      if (13 === event.keyCode) {
        if ("" != $(".vgb").val()) {
          evaluate();
          $.modal.close();
        }
      }
    });
    $(".vfy").on("click", function() {
      if ("" != $(".vfz").val()) {
        find();
        $.modal.close();
      }
    });
    $(".vfz").keyup(function(event) {
      if (13 === event.keyCode) {
        if ("" != $(".vfz").val()) {
          find();
          $.modal.close();
        }
      }
    });
    $(".vgf").keyup(function(event) {
      if (13 === event.keyCode) {
        if ("" != $(".vgf").val()) {
          create();
          $.modal.close();
        }
      }
    });
    $(".vgd").on("click", function() {
      if ("" != $(".vgf").val()) {
        create();
        $.modal.close();
      }
    });
    if ($(".vfw").find(".ves").length) {
      $(".vfw").removeClass("empty-vfw");
    }
    $(".vcx").on("click", function() {
      handle();
      $.modal.close();
    });
    $(".vcu").keyup(function(event) {
      if (13 === event.keyCode) {
        if ("" != $(".vcu").val()) {
          handle();
          $.modal.close();
        }
      }
    });
    $(".veh").change(function(dataAndEvents) {
      $(".vcu").val($(this).val());
    });
    $(".vcn").on("click", function() {
      process();
      $.modal.close();
    });
    $(".vbj").on("click", function() {
      success();
      $.modal.close();
    });
    $(".vbg").keyup(function(event) {
      if (13 === event.keyCode) {
        success();
        $.modal.close();
      }
    });
    $(".vdf").on("click", function() {
      finished();
      $.modal.close();
    });
    $(".vpk").on("click", function() {
      if (runTest() === true) {
        $.modal.close();
      }
    });
    $(".vco, .vcf").keyup(function(event) {
      if (13 === event.keyCode) {
        process();
        $.modal.close();
      }
    });
    $(".vco").get(0).addEventListener("drop", function(e) {
      e.stopPropagation();
      e.preventDefault();
      var url = e.dataTransfer.getData("URL");
      $(".vco").val(url);
      $(".vcp").attr("src", url);
    }, false);
    $(".vcp").get(0).addEventListener("drop", function(e) {
      e.stopPropagation();
      e.preventDefault();
      var url = e.dataTransfer.getData("URL");
      $(".vco").val(url);
      $(".vcp").attr("src", url);
    }, false);
    $(".vco").get(0).addEventListener("dragover", function(event) {
      event.preventDefault();
      event.stopPropagation();
    }, false);
    $(".vda, .vdg, .vdb").keyup(function(event) {
      if (13 === event.keyCode) {
        finished();
        $.modal.close();
      }
    });
    $(".vho span").click(function() {
      $(this).closest(".vho").toggleClass("vhr");
      setTimeout(function() {
        resize();
      }, 301);
    });
    $(".vgc").click(function() {
      showAboutInfo();
      $(".vfw").removeClass("empty-vfw");
    });
    $(".ved").click(function() {
      $(".vef").focus().trigger("click");
    });
    $(".vef").change(function(completeEvent) {
      if ("variant" == $(this).val().split(".").pop()) {
        loadScript(completeEvent);
      } else {
        error("Please select a .variant file", "Variant cannot import plain HTML files. <br /><br />You can import .variant files that have been exported from Variant here, or by someone else.");
      }
    });
    $(".vdi").click(function() {
      test("all");
    });
    $(".vfo").click(function() {
      $(".vmm").closest(".vkq").remove();
      $("#veu nav").remove();
      $(".viu nav").remove();
      $(this).closest(".vho").removeClass("vhr");
      var pauseText = $(this).text();
      $(this).closest(".vho").find(".vly").text(pauseText);
      resize();
      onSuccess();
      parse();
      done();
    });
    $(".vfl").click(function() {
      $("#veu footer").remove();
      $(".viu footer").remove();
      $(this).closest(".vho").removeClass("vhr");
      var pauseText = $(this).text();
      $(this).closest(".vho").find(".vly").text(pauseText);
      resize();
      onSuccess();
      parse();
      done();
    });
    $(document).on("click", ".vgr", function() {
      $(".vib").toggleClass("vib vjb");
      $(this).toggleClass("vhr vdv vgr");
    });
    $(document).on("click", ".vdv", function() {
      $(".vjb").toggleClass("vib vjb");
      $(this).toggleClass("vgr vdv vhr");
    });
    $(".vhp").click(function() {
      $(".vdz,.vcl").toggleClass("vhr");
    });
    $(".vcp").click(function() {
      $(".vhp").trigger("click");
    });
    // Matches to nav(etv) to get files.
    $(".vch").change(function(err) {
      nav(err);
    });
    $(".vee").click(function() {
      $(".vch").focus().trigger("click");
    });
    try {
      $.isFunction(parse);
    } catch (f) {
      $(".vml").removeClass("vih");
      $(".vdq, .vah, .vgy").click(function() {
        error("Demo Only", 'Getting HTML in the demo is disabled.<br /><br />You may export your page in a .variant file and import it when you <a href="#" target="_blank">purchase the full version</a>.');
      });
    }
    $(".vek").remove();

    // This is what gives us our HTML Output
    $(".vdq").click(function() {
      var response = $("#veu").clone();
      /** @type {string} */
      var path = document.title;
      var part = $(".vms").attr("vmr"); // Getting font undefined.
      var val = "undefined" != typeof $("#vkk").attr("class") ? $("#vkk").attr("class") : ""; // Getting page options
      output = parse(response, path, part, val);
      // Create our page
      $.ajax({
        url: 'http://rebeccacs.com/blog/create.php',
        type: 'post',
        //{"name": "this", "title": "test"}
        data: {'content': output, 'title': path},
        success: function(data, status) {
          console.log(data);
        },
        error: function(xhr, desc, err) {
          console.log(xhr);
          console.log("Details: " + desc + "\nError:" + err);
        }
      }); // end ajax call
    });
    $(".vgy").click(function() {
      var blob;
      /** @type {string} */
      var errStr = "";
      /** @type {string} */
      var buffer = "";
      errStr = $.localStorage(name + ".vhg");
      errStr = "undefined" != typeof $.localStorage(name + ".vhg") ? $.localStorage(name + ".vhg") : "page";
      buffer = $(".vfu").val();
      /** @type {Blob} */
      blob = new Blob([buffer], {
        type : "text/plain;charset=utf-8"
      });
      saveAs(blob, log(errStr) + ".html");
    });
    $(".vah").click(function() {
      var variant_exported_;
      var r20;
      var zip = new JSZip;
      /** @type {Array} */
      var failures = [];
      /** @type {Date} */
      var earliestStartDate = new Date;
      return $("#vhl .viy").length ? ($("#vhl .viy").each(function() {
        failures.push($(this).attr("viy"));
      }), variant_exported_ = "variant-exported-" + log(earliestStartDate.toDateString()), failures.forEach(function(type, dataAndEvents) {
        var field;
        var value;
        var index;
        var val;
        var inputEl;
        var data;
        var parts;
        /** @type {Date} */
        earliestStartDate = new Date;
        data = $('#vhl [viy="' + type + '"]').attr("vjh");
        parts = $('#vhl [viy="' + type + '"]').attr("page-title");
        index = "undefined" != typeof $.localStorage(name + "vmp." + type) ? $.localStorage(name + "vmp." + type) : "";
        val = "undefined" != typeof $.localStorage(name + ".vkp." + type) ? $.localStorage(name + ".vkp." + type) : "";
        field = $.localStorage(name + ".state.veu." + type);
        value = $('<div id="vjk" />').html(field);
        inputEl = $('<textarea id="variant-temp-textarea-mrv" />').append(parse(value, parts, index, val));
        /** @type {string} */
        data = 1 == $('#vhl [vjh="' + data + '"]').length ? log(data) + ".html" : log(data) + "-" + earliestStartDate.getTime() + ".html";
        zip.file(data, inputEl.val());
      }), r20 = zip.generate({
        type : "blob",
        compression : "deflate"
      }), void saveAs(r20, "html-pages-" + log(earliestStartDate.toDateString()) + ".zip")) : void error("Export HTML", "There was nothing to export.<br /><br />Save at least one page before exporting.");
    });
    $(".vap").click(function() {
      $('.vfj [vit="vhz"]').remove();
      $("#vbn").html("");
      $.localStorage(name + ".vbo", "");
      $(".vap").html("Cleared").removeClass("val").addClass("vak");
      setTimeout(function() {
        $(".vap").html("Clear Navs").removeClass("vak").addClass("val");
      }, 1500);
    });
    $(".vao").click(function() {
      $('.vdm [vit="vhz"]').remove();
      $.localStorage(name + ".vbm", "");
      $(".vao").html("Cleared").removeClass("val").addClass("vak");
      setTimeout(function() {
        $(".vao").html("Clear Footers").removeClass("vak").addClass("val");
      }, 1500);
    });
    $(".vaq").click(function() {
      var selfObj;
      $("#vhl li").each(function() {
        var selfObj;
        var val = $(this).attr("viy");
        selfObj = $.localStorage.io(name + ".state.veu." + val);
        selfObj.remove();
        selfObj = $.localStorage.io(name + ".state.vem." + val);
        selfObj.remove();
        $(this).remove();
      });
      $(".vfw div").remove();
      $(".vfw").addClass("empty-vfw");
      selfObj = $.localStorage.io(name + ".state.veu");
      selfObj.remove();
      selfObj = $.localStorage.io(name + ".state.vem");
      selfObj.remove();
      selfObj = $.localStorage.io(name + ".vhj");
      selfObj.remove();
      selfObj = $.localStorage.io(name + ".vhh");
      selfObj.remove();
      selfObj = $.localStorage.io(name + ".vhg");
      selfObj.remove();
      selfObj = $.localStorage.io(name + ".vhk");
      selfObj.remove();
      $(".vaq").html("Cleared").removeClass("val").addClass("vak");
      setTimeout(function() {
        $(".vaq").html("Clear Pages").removeClass("vak").addClass("val");
      }, 1500);
    });
    $(".vpc").click(function() {
      $.localStorage(name + ".gallery.images", "");
      setTimeout(function() {
        $(".vpc").html("Rebooting").removeClass("vak").addClass("val");
        window.location.reload();
      }, 1500);
    });
    $(".van").click(function() {
      $(".vfw div").remove();
      $("#vhl li").remove();
      window.localStorage.clear();
      $(".van").html("Cleared").removeClass("val").addClass("vak");
      setTimeout(function() {
        $(".van").html("Rebooting").removeClass("vak").addClass("val");
        window.location.reload();
      }, 1500);
    });
    $("img").on("dragstart", function(types) {
      types.preventDefault();
    });
    $(document).on("submit", ".viu form", function(ev) {
      return ev.preventDefault ? ev.preventDefault() : ev.returnValue = false, false;
    });
    $(document).on("click", ".vgh", function() {
      if ($(".vgh").removeClass("vhr"), $(this).addClass("vhr"), "*" == $(this).attr("vbp")) {
        return $(".vgl").removeClass("vih"), void $(".vma span").text("All");
      }
      $(".vgl").addClass("vih");
      $('.vgl[vbp*="' + $(this).attr("vbp") + '"]').removeClass("vih");
      var pauseText = $(this).text();
      $(".vma span").text(pauseText);
      resize();
    });
    $(document).on("click", ".vby", function() {
      var errorClass = $(this).parent().attr("nav-id");
      $(this).parent().remove();
      $("." + errorClass).remove();
      each();
    });
    $(document).on("click", ".vbx", function() {
      var vid = $(this).parent().attr("vid");
      $(this).parent().remove();
      $("." + vid).remove();
      Init();
    });
    $(document).on("click", ".ves", function() {
      ready($(this).attr("state-id"), $(this).attr("vjh"));
    });
    $(document).on("click", ".vdj", function() {
      return test($(this).parent().attr("state-id")), false;
    });
    $(document).on("click", ".vfi", function() {
      fn($(this).attr("nav-id"), $(this).attr("vit"));
      $(this).closest(".vho").removeClass("vhr");
      var pauseText = $(this).text();
      $(this).closest(".vho").find(".vly").text(pauseText);
    });
    $(document).on("click", ".vdl", function() {
      select($(this).attr("vid"), $(this).attr("vit"));
      $(this).closest(".vho").removeClass("vhr");
      $(".vhe").addClass("vih");
      var pauseText = $(this).text();
      $(this).closest(".vho").find(".vly").text(pauseText);
    });
    $(document).on("click", ".vca", function() {
      var errorClass = $(this).attr("vbq");
      $("#veu ." + errorClass).remove();
      $(".viu ." + errorClass).remove();
      $("[vik=" + errorClass + "]").remove();
      $(this).parent().remove();
      done();
      if ($(".vem").find(".vaa").length) {
        $(".vem").removeClass("empty-vem");
      } else {
        $(".vem").addClass("empty-vem");
      }
      $(".viu .vnj").remove();
      resize();
      onSuccess();
    });
    $(document).on("click", ".vfg", function() {
      var $this = $("." + $(".viu nav").attr("vic"));
      $(".vev").each(function() {
        var asserterNames = $(this).data("vff");
        asserterNames.forEach(function(o) {
          $this.removeClass(o.className);
        });
      });
      $this.addClass($(this).attr("nav-class"));
      parse();
      done();
    });
    $(document).on("blur keyup paste input", ".viu [contenteditable], .viu strong", function(e) {
      if ("paste" == e.type) {
        e.preventDefault();
        var link = (e.originalEvent || e).clipboardData.getData("text/plain").replace(/\n/g, "<br>");
        document.execCommand("insertHtml", false, link);
      }
      if ($(this).children().length) {
        if ("" === $(this).html()) {
          $(this).html("&nbsp;");
        }
      } else {
        if ("" === $(this).text()) {
          $(this).text(" ");
        }
      }
      $("#veu ." + $(this).attr("vic")).html($(this).html());
      parse();
    });
    $(document).on("keydown", ".viu [contenteditable]", function(deepDataAndEvents) {
      return 13 === deepDataAndEvents.keyCode ? replaceText(deepDataAndEvents) ? true : false : void 0;
    });
    $(document).on("keydown", '.viu [type="submit"]', function(event) {
      return 32 === event.keyCode ? handleClick(event) ? true : false : void 0;
    });
    $(document).on("blur keyup paste input", ".vir", function() {
      $(this).removeClass("vir").addClass("vhz");
    });
    $(document).on("keyup paste input", "nav.vir", function() {
      report($(this));
    });
    $(document).on("keyup paste input", ".vaa span", function(event) {
      return 13 === event.keyCode ? (event.stopPropagation(), false) : (destroy($(this)), true);
    });
    $(document).on("keydown", ".vaa span", function(event) {
      return 13 === event.keyCode ? (event.stopPropagation(), false) : void 0;
    });
    $(document).on("keyup paste input", "nav.vhz", function() {
      each();
    });
    $(document).on("keyup paste input", ".vgb", function() {
      if ("" != $(this).val()) {
        $(".vga").removeClass("vih");
      } else {
        $(".vga").addClass("vih");
      }
    });
    $(document).on("keyup paste input", "footer.vir", function() {
      expect($(this));
    });
    $(document).on("keyup paste input", "footer.vhz", function() {
      Init();
    });
    $(document).on("keyup paste input", ".vfz", function() {
      if ("" != $(this).val()) {
        $(".vfy").show();
      } else {
        $(".vfy").hide();
      }
    });
    $(document).on("keyup paste input", ".vgf", function() {
      if ("" != $(this).val()) {
        $(".vgd").removeClass("vih");
      } else {
        $(".vgd").addClass("vih");
      }
    });
    $(".viu").on("mouseenter", "p , span, a, h1, h2, h3, h4, h5, h6, strong, em, li, ul, div, i, img, input, textarea, blockquote, figcaption, td, th, label, address", function() {
      $(this).addClass("vdw");
    });
    $(".viu").on("mouseleave", "p , span, a, h1, h2, h3, h4, h5, h6, strong, em, li, ul, div, i, img, input, textarea, blockquote, figcaption, td, th, .vnu, label, address", function() {
      $(this).removeClass("vdw");
    });
    $(".viu").on("mouseenter", "section, header, footer", function() {
      init($(this).attr("vic"));
    });
    $(document).on("mouseenter", '[vic] [class*="medium-"]', function(dataAndEvents) {
      node = $(this).attr("vic");
    });
    $(document).on("mouseenter", '[vic] [class*="col-md-"]', function(dataAndEvents) {
      node = $(this).attr("vic");
    });
    $(document).on("mouseenter", '[vic] [class*="col-sm-"]:not([class*="col-md-"])', function(dataAndEvents) {
      node = $(this).attr("vic");
    });
    $(document).on("mouseenter", '[vic] [class*="col-xs-"]:not([class*="col-md-"])', function(dataAndEvents) {
      node = $(this).attr("vic");
    });
    $(document).on("keyup", document, function(e) {
      if (node.length) {
        if (e.ctrlKey) {
          if (219 === e.keyCode) {
            addClass(node);
          }
          if (221 === e.keyCode) {
            initialize(node);
          }
        }
      }
    });
    $(document).on("click", "a.vjx", function(ev) {
      return ev.preventDefault ? ev.preventDefault() : ev.returnValue = false, false;
    });
    $(document).on("mouseenter", ".viu img:not(.viu .slides > li > img, .viu .slides .owl-item img, .voh img, ul.flickr-feed img )", function(dataAndEvents) {
      if (!$('[vof="' + $(this).attr("vic") + '"]').length) {
        load($(this).attr("vic"), $(this).attr("vic"));
      }
    });
    $(document).on("mouseenter", '.viu div[class*="col-"]', function(dataAndEvents) {
      var $e = $(this);
      $e.find(".image-holder, .background-image-holder:not(.voh .background-image-holder, .viu .slides > li > img, .viu .slides .owl-item img, .viu .slides > li > .background-image-holder, .viu .slides .owl-item > li > .background-image-holder, .viu section > .background-image-holder, .viu header > .background-image-holder, .viu footer > .background-image-holder)").each(function() {
        var $el = $(this);
        if ($el.closest('div[class*="col-"]').find("div.hover-state").length && !$el.closest('div[class*="col-"]').find("div.hover-state").find(".vnv").length) {
          if (!$('[vof="' + $el.find("img").attr("vic") + '"]').length) {
            load($el.find("img").attr("vic"), $el.closest('div[class*="col-"]').find(".hover-state").attr("vic"));
          }
        } else {
          if (!$el.find(".vnv").length) {
            if (!$('[vof="' + $el.find("img").attr("vic") + '"]').length) {
              load($el.find("img").attr("vic"), $el.attr("vic"));
            }
          }
        }
      });
    });
    $(document).on("mouseenter", ".viu .embed-video-container:not(.voh .embed-video-container, .viu .slides > li > .embed-video-container), .viu .media-embed-container:not(.voh .media-embed-container, .viu .slides > li > .media-embed-container)", function() {
      var tabContent = $('<div class="vnw"></div>');
      var el = $(this).find("iframe");
      elem.options.forEach(function(settings) {
        if (el.is(settings.selector)) {
          attributeButton = populate(settings, false, el.attr("vic"));
          tabContent.append(attributeButton);
        }
      });
      el.closest(".embed-video-container, .media-embed-container").append(tabContent);
    });
    $(document).on("mouseenter", ".viu .local-video-container video:not(.voh .local-video-container video, .viu .slides > li > .local-video-container video, .viu .slides .owl-item > li > .local-video-container video)", function() {
      var $rootElement = $(this).closest(".local-video-container").find(".vnw").length ? $(this).closest(".local-video-container").find(".vnw") : $('<div class="vnw"></div>');
      var $field = $(this);
      if (!$rootElement.find('[vof="' + $field.attr("vic") + '"]').length) {
        editVideoButton = bind($field.attr("vic"), false);
        $rootElement.append(editVideoButton);
        $field.closest(".local-video-container").append($rootElement);
      }
    });
    $(document).on("mouseenter", ".viu ul.slides:not(.vjx)", function(dataAndEvents) {
      var $this = $(this);
      try {
        $this.parent().flexslider("pause");
      } catch (c) {
      }
      try {
        $this.closest(".slider").flexslider("pause");
      } catch (c) {
      }
      try {
        $this.trigger("stop.owl.autoplay");
      } catch (c) {
      }
      $this.addClass("paused");
      $("#veu .vnx").removeClass("vnx");
      start($this.attr("vic"));
      $("#veu ." + $this.attr("vic")).addClass("vnx");
    });
    $(document).on("mouseleave", ".viu ul.slides.paused:not(.vjx)", function(dataAndEvents) {
      var t = $(this);
      try {
        t.parent().flexslider("play");
      } catch (c) {
      }
      try {
        t.closest(".slider").flexslider("play");
      } catch (c) {
      }
      t.removeClass("paused");
    });
    $(document).on("mouseleave", '.viu .vnu, .viu div[class*="col-"], .viu .embed-video-container, .viu .local-video-container, .viu .media-embed-container, .viu ul.slides, .viu .slider, .viu .voh', function(dataAndEvents) {
      if (window.mr_variant.removeIconButtons === true) {
        $(this).find(".vnw").remove();
      }
    });
    $(document).on("mouseenter", ".viu .voh:not(.vib, .vjb)", function(dataAndEvents) {
      var div;
      var input;
      var node;
      var param;
      /** @type {string} */
      var el = "";
      var $e = $(".viu ." + $(this).attr("vic"));
      /** @type {boolean} */
      var h = $e.parent().find(".voh").not(".vjb , .vib").length > 1 ? true : false;
      var off = makeProblem($e, ".voh");
      var sorted = sort($e, ".voh");
      div = $('<div class="vnw"></div>');
      if (h) {
        if (!off) {
          param = add("arrow-thick-left", "Sort Previous");
          $(param).unbind("click").bind("click", function(ev) {
            return build($e.attr("vic"), true), ev.stopPropagation && ev.stopPropagation(), ev.returnValue = false, false;
          });
          div.append(param);
        }
      }
      if (h) {
        input = add("minus", "Delete");
        $(input).unbind("click").bind("click", function(ev) {
          return remove($e.attr("vic"), $e.is(".variant-permanent-delete-mrv")), ev.stopPropagation && ev.stopPropagation(), ev.returnValue = false, false;
        });
        div.append(input);
      }
      moleculeImages = $e.find("img:not(.vib)");
      moleculeImages.each(function() {
        var inputsPlugin = $(this);
        div.append(load(inputsPlugin.attr("vic"), false));
      });
      elem.options.forEach(function(settings) {
        if ($e.is(settings.selector)) {
          attributeButton = populate(settings, false, $e.attr("vic"));
          div.append(attributeButton);
        }
        if ($e.find(settings.selector).length) {
          attributeButton = populate(settings, false, $e.find(settings.selector).first().attr("vic"));
          div.append(attributeButton);
        }
      });
      node = add("plus", "Clone");
      $(node).unbind("click").bind("click", function(ev) {
        return next($e.attr("vic"), true), ev.stopPropagation && ev.stopPropagation(), ev.returnValue = false, false;
      });
      div.append(node);
      if (h) {
        if (!sorted) {
          el = add("arrow-thick-right", "Sort Next");
          $(el).unbind("click").bind("click", function(ev) {
            return stop($e.attr("vic"), true), ev.stopPropagation && ev.stopPropagation(), ev.returnValue = false, false;
          });
          div.append(el);
        }
      }
      $e.append(div);
    });
    $(document).on("click", ".vni", function() {
      $(this).toggleClass("vhr");
    });
    $(document).on("contextmenu", ".vni", function(event) {
      event.stopPropagation();
      $(this).trigger("click");
    });
    $(document).on("contextmenu", "[vic]", function(e) {
      if (e.shiftKey) {
        return true;
      }
      $(".vaw").removeClass("vih");
      $(".vcg").text("Edit Image");
      $(".vct").text("Edit Link");
      $(".vfq").addClass("vih");
      var i;
      var j;
      var last;
      var Nav;
      var expectationResult;
      var name;
      var self;
      var left;
      var top;
      var a = $("#veu ." + $(this).attr("vic"));
      $(a).closest("section");
      return htmlTags = {
        SECTION : "Section",
        LI : "List Item",
        H1 : "Heading",
        H2 : "Heading",
        H3 : "Heading",
        H4 : "Heading",
        H5 : "Heading",
        H6 : "Heading",
        P : "Paragraph",
        SPAN : "Span",
        UL : "Unordered List",
        DIV : "Div",
        IMG : "Image",
        STRONG : "Strong Text",
        EM : "Emphasised Text",
        I : "Icon",
        A : "Link",
        INPUT : "Input",
        BLOCKQUOTE : "Quote",
        FIGCAPTION : "Caption",
        TD : "Teble Cell",
        TH : "Table Heading",
        FORM : "Form",
        ADDRESS : "Address"
      }, $(".vau").text(htmlTags[a.get(0).tagName]).removeClass("vih"), $(a).data("vip") ? refresh(a, false, false) : $(a).closest("[data-vip]").length && refresh($(a).closest("[data-vip]"), false, false), reset($(this).attr("vic")), a.is("p , span, h1, h2, h3, h4, h5, h6, strong, em, li:not(ul.slides > li, ul.slides .owl-item > li), ul, div, blockquote, figcaption, address") && ($(".var").unbind("click").bind("click", function() {
        next(a.attr("vic"));
      }), $(".vbw").unbind("click").bind("click", function() {
        remove(a.attr("vic"));
      })), a.is("a") && ($(".vct").removeClass("vih"), $(".vct").unbind("click").bind("click", function() {
        after(a.attr("vic"));
      }), $(".var").unbind("click").bind("click", function() {
        next(a.attr("vic"));
      }), $(".vbw").unbind("click").bind("click", function() {
        remove(a.attr("vic"));
      })), a.closest("a").length && ($(".vct").removeClass("vih"), a.closest("a").hasClass("ven") && ($(".vau").text("Lightbox Thumbnail"), $(".vct").text("Edit Lightbox Link"), $(".vcg").text("Edit Thumbnail Image")), expectationResult = a.closest("a").attr("vic"), $(".vct").unbind("click").bind("click", function() {
        after(expectationResult);
      })), a.closest("section, header").find(".video-wrapper").children("video").length && (a.is(".overlay") && ($(".vau").text("Video Background"), $(".var").addClass("vih"), $(".vbw").addClass("vih")), video = a.closest("section, header").find(".video-wrapper").children("video"), $(".vdc").removeClass("vih"), $(".vdc").unbind("click").bind("click", function() {
        setAttribute($(video).attr("vic"));
      }), a.closest("section, header").find(".background-image-holder").children(".background-image").length && ($(".vcg").text("Edit Poster Image"), $(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
        close(a.closest("section, header").find(".background-image-holder").children(".background-image").attr("vic"));
      })), a.closest(".divider-background").find(".background-image").length && ($(".vcg").text("Edit Poster Image"), $(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
        close(a.closest(".divider-background").find(".background-image").attr("vic"));
      }))), a.closest(".slides li").find(".video-wrapper").children("video").length && (a.is(".overlay") && ($(".vau").text("Video Slide Background"), $(".var").addClass("vih"), $(".vbw").addClass("vih")), video = a.closest(".slides li").find(".video-wrapper").children("video"), $(".vcg").text("Edit Poster Image"), $(".vdc").removeClass("vih"), $(".vdc").unbind("click").bind("click", function() {
        setAttribute($(video).attr("vic"));
      })), a.closest("video").length && ($(".vau").text("Video"), $(".var").addClass("vih"), $(".vbw").addClass("vih"), video = a.closest("video"), $(".vdc").removeClass("vih"), $(".vdc").unbind("click").bind("click", function() {
        setAttribute($(video).attr("vic"));
      })), a.closest(".slides li").find(".video-wrapper").children("video").length && (a.closest(".slides li").find(".background-image-holder").children(".background-image").length && ($(".vcg").text("Edit Poster Image"), $(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
        close(a.closest(".slides li").find(".background-image-holder").children(".background-image").attr("vic"));
      }))), a.is("p , div, span, figure, article, img") && (a.closest('[class*="medium-"]').length && (closestElement = a.closest('[class*="medium-"]'), closestElement.hasClass("medium-12") || ($(".veg").removeClass("vih"), $(".veg").unbind("click").bind("click", function() {
        initialize(closestElement.attr("vic"));
      })), closestElement.hasClass("medium-1") || ($(".vbt").removeClass("vih"), $(".vbt").unbind("click").bind("click", function() {
        addClass(closestElement.attr("vic"));
      }))), a.parent().is('div [class*="medium-"]') && (a.parent().hasClass("medium-1") || ($(".vbt").removeClass("vih"), $(".vbt").unbind("click").bind("click", function() {
        addClass(a.attr("vic"));
      })), a.parent().hasClass("medium-12") || ($(".veg").removeClass("vih"), $(".veg").unbind("click").bind("click", function() {
        initialize(a.attr("vic"));
      }))), a.closest('[class*="col-md-"]').length && (closestElement = a.closest('[class*="col-md-"]'), closestElement.hasClass("col-md-12") || ($(".veg").removeClass("vih"), $(".veg").unbind("click").bind("click", function() {
        initialize(closestElement.attr("vic"));
      })), closestElement.hasClass("col-md-1") || ($(".vbt").removeClass("vih"), $(".vbt").unbind("click").bind("click", function() {
        addClass(closestElement.attr("vic"));
      }))), a.closest('[class*="col-sm-"]:not([class*="col-md-"])').length && (closestElement = a.closest('[class*="col-sm-"]:not([class*="col-md-"])'), closestElement.hasClass("col-sm-12") || ($(".veg").removeClass("vih"), $(".veg").unbind("click").bind("click", function() {
        initialize(closestElement.attr("vic"));
      })), closestElement.hasClass("col-sm-1") || ($(".vbt").removeClass("vih"), $(".vbt").unbind("click").bind("click", function() {
        addClass(closestElement.attr("vic"));
      }))), a.closest('[class*="col-xs-"]:not([class*="col-md-"])').length && (closestElement = a.closest('[class*="col-xs-"]:not([class*="col-md-"])'), closestElement.hasClass("col-xs-12") || ($(".veg").removeClass("vih"), $(".veg").unbind("click").bind("click", function() {
        initialize(closestElement.attr("vic"));
      })), closestElement.hasClass("col-xs-1") || ($(".vbt").removeClass("vih"), $(".vbt").unbind("click").bind("click", function() {
        addClass(closestElement.attr("vic"));
      })))), a.is(".cover-wrapper, .hover-state") && (i = a.closest("figure").find("img").get(0), j = a.closest("a").first(), $(i).is("img") && ($(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
        close($(i).attr("vic"));
      })), a.closest("figure").length && (name = a.closest("figure").attr("vic"), name.length && ($(".var").unbind("click").bind("click", function() {
        next(name);
      }), $(".vbw").unbind("click").bind("click", function() {
        remove(name);
      })))), (a.parents("nav").length || a.is("nav")) && (a.is("nav") ? (Nav = a.attr("nav-id"), $(".vau").text("Nav"), $(".vaw").addClass("vih")) : (Nav = a.closest("nav").attr("nav-id"), $(".vau").text("Nav > " + $(".vau").text())), $(".vfe").removeClass("vih"), $(".vfg[nav-id=" + Nav + "]").each(function() {
        if (!$(".viu nav").hasClass($(this).attr("nav-class"))) {
          $(this).removeClass("vih");
        }
      }), $(".vhw .vaw").not(".vih").length || $(".vfe .vfm").removeClass("vih")), a.closest(".hover-background").length && (i = a.closest("section").find(".hover-background .background-image").get(0), $(i).is("img") && ($(".vcg").text("Edit Background Image").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
        close($(i).attr("vic"));
      })), $(a).closest(".hover-background").find(".foreground-image-holder .background-image").each(function(arg) {
        var s = arg + 1;
        var inputsPlugin = $(this);
        newButton = $(".vcg").clone();
        newButton.removeClass("vcg").addClass("vkd edit-foreground-" + s);
        newButton.text("Edit Layer " + s + " Image");
        $(this).attr("src");
        newButton.unbind("click").bind("click", function() {
          close(inputsPlugin.attr("vic"));
        });
        newButton.insertBefore($(".vcg"));
      })), a.is("i") && ($(".vau").text("Icon"), $(".vcc").removeClass("vih"), $(".vcc").unbind("click").bind("click", function() {
        preset(a.attr("vic"));
      }), $(".var").unbind("click").bind("click", function() {
        next(a.attr("vic"));
      }), $(".vbw").unbind("click").bind("click", function() {
        remove(a.attr("vic"));
      })), a.is("img") && ($(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
        close(a.attr("vic"));
      }), $(".var").unbind("click").bind("click", function() {
        next(a.attr("vic"));
      }), $(".vbw").unbind("click").bind("click", function() {
        remove(a.attr("vic"));
      })), a.is("section") && ($(".vau").text("Section"), $(".var").unbind("click").addClass("vih"), $(".vbw").unbind("click").addClass("vih")), a.is("header") && ($(".vau").text("Section"), $(".var").unbind("click").addClass("vih"), $(".vbw").unbind("click").addClass("vih")), a.closest(".veo").length && (last = $(a).closest(".veo"), i = $(a).closest(".veo").find("img"), $(".vcg").removeClass("vih"), $(".vcg").unbind("click").bind("click", function() {
        close(i.attr("vic"));
      }), $(".var").removeClass("vih").unbind("click").bind("click", function() {
        next(last.attr("vic"));
      }), $(".vbw").removeClass("vih").unbind("click").bind("click", function() {
        remove(last.attr("vic"));
      })), a.hasClass("vns") && $(".var").unbind("click").addClass("vih"), redraw($(this).attr("vic"), true), self = $("body > .vhw"), self.find(".vaw:not(.vih)").length ? (left = $(window).width(), top = $(window).height(), e.pageX + self.outerWidth() > left ? self.css("left", left - self.outerWidth()) : self.css("left", e.pageX), e.pageY + self.outerHeight() > top ? self.css("top", top - self.outerHeight()) : self.css("top", e.pageY), resize(), self.show()) : self.hide(), false;
    });
    $(document).on("click", ".vkd", function() {
      $(".vkd").remove();
    });
    $(document).on("click", ".vjb", function() {
      $(this).removeClass("vjb vib").addClass("vjm");
      $("#veu ." + $(this).attr("vic")).removeClass("vjb vib").addClass("vjm");
      if ($(this).attr("vjw")) {
        also = $(this).closest("nav, header, section, footer").find($(this).attr("vjw")).attr("vic");
        $(".viu ." + also).removeClass("vjb vib").addClass("vjm");
        $("#veu ." + also).removeClass("vjb vib").addClass("vjm");
      }
      each();
      Init();
      parse();
    });
    $(document).on("click", ".vcj", function() {
      var el = $(this).get(0);
      $(".vco").val($(this).attr("src").replace("../img/", "img/"));
      $(".vcp").attr("src", $(this).attr("src"));
      $(".veb").text(el.naturalWidth + "x" + el.naturalHeight + " pixels");
      $(".vdz,.vcl").toggleClass("vhr");
    });
    $(document).on("click", ".vgl", function() {
      var $field = $(this);
      if ($field.hasClass("catch-double-click")) {
        $(".vad").toggleClass("vhr");
      } else {
        $field.addClass("catch-double-click");
        setTimeout(function() {
          $field.removeClass("catch-double-click");
        }, 300);
        check($(this).attr("vgv"));
      }
      $(".vem").removeClass("empty-vem");
      resize();
    });
    $(document).on("click", ".no-image", function() {
      display(this);
    });
    $(document).on("click", ".vav", function() {
      $(".vhw").hide();
    });
    $(document).on("keyup paste input", ".vcd .vok", function() {
      var failuresLink = $(".vcd .vok").val();
      if ("" !== failuresLink) {
        draw(failuresLink);
        $(".vcd .vol").removeClass("vih");
      } else {
        clear();
      }
    });
    $(document).on("click", ".voj li:not(.vhr)", function() {
      var $slide = $(this);
      $(".voj li.vhr, .variant-icon-sets-mrv li.vhr").removeClass("vhr");
      $slide.addClass("vhr");
      $(".variant-icon-sets-mrv li.vou").eq($slide.index()).addClass("vhr");
      $(".variant-icon-sets-mrv li.vov").eq($slide.index()).addClass("vhr");
    });
    $(document).on("click", ".vcd .vol", function() {
      clear();
    });
    $(document).on("click", ".viu i", function() {
      var $field = $(this);
      if ($field.hasClass("catch-double-click")) {
        preset($field.attr("vic"));
      } else {
        $field.addClass("catch-double-click");
        setTimeout(function() {
          $field.removeClass("catch-double-click");
        }, 300);
      }
    });
    $(document).on("click", ".viu a, .viu nav a", function() {
      var $field = $(this);
      return $field.hasClass("catch-double-click") ? after($field.attr("vic")) : ($field.addClass("catch-double-click"), setTimeout(function() {
        $field.removeClass("catch-double-click");
      }, 300)), false;
    });
    $(document).on("click", ".viu img", function() {
      var $field = $(this);
      if ($field.hasClass("catch-double-click")) {
        close($field.attr("vic"));
      } else {
        $field.addClass("catch-double-click");
        setTimeout(function() {
          $field.removeClass("catch-double-click");
        }, 300);
      }
    });
    $(document).on("click", "div.vam", function() {
      var self = $("." + $("#vgo").val());
      var bc = $(this).find("i");
      if (self.hasClass("icon-large")) {
        self.addClass("keep-large-icon").removeClass("icon-large");
      }
      if (self.hasClass("icon-lg")) {
        self.addClass("keep-lg-icon").removeClass("icon-lg");
      }
      if (self.hasClass("icon--lg")) {
        self.addClass("keep--lg-icon").removeClass("icon--lg");
      }
      if (self.hasClass("icon-sm")) {
        self.addClass("keep-sm-icon").removeClass("icon-sm");
      }
      if (self.hasClass("icon--sm")) {
        self.addClass("keep--sm-icon").removeClass("icon--sm");
      }
      asserterNames.forEach(function(item) {
        self.alterClass(item.iconPrefix + "*", "");
        self.removeClass(item.iconClass);
      });
      self.addClass(bc.attr("icon-class"));
      if (self.hasClass("keep-large-icon")) {
        self.removeClass("keep-large-icon").addClass("icon-large");
      }
      if (self.hasClass("keep-lg-icon")) {
        self.removeClass("keep-lg-icon").addClass("icon-lg");
      }
      if (self.hasClass("keep--lg-icon")) {
        self.removeClass("keep--lg-icon").addClass("icon--lg");
      }
      if (self.hasClass("keep-sm-icon")) {
        self.removeClass("keep-sm-icon").addClass("icon-sm");
      }
      if (self.hasClass("keep--sm-icon")) {
        self.removeClass("keep--sm-icon").addClass("icon--sm");
      }
      filter();
      parse();
    });
    $(document).on("click", ".vbz", function() {
      var selfObj;
      var val = $(this).parent().attr("state-id");
      return val == $.localStorage(name + ".vhh") && ($(".vet").addClass("vih"), $.localStorage(name + ".vhh", ""), $.localStorage(name + ".vhg", "")), $("#vhl [viy=" + val + "]").remove(), $.localStorage(name + ".vhk", $("#vhl").html()), setTimeout(function() {
        if ($(".vfw").find(".ves").length) {
          $(".vfw").removeClass("empty-vfw");
        } else {
          $(".vfw").addClass("empty-vfw");
        }
      }, 50), selfObj = $.localStorage.io(name + ".state.veu." + val), selfObj.remove(), selfObj = $.localStorage.io(name + ".state.vem." + val), selfObj.remove(), $(this).parent().remove(), false;
    });
    $(document).on("click", ".vhu", function() {
      clean($(this).attr("viz"), true);
    });
    $(document).on("click", ".vmv", function() {
      normalize($(this).attr("vmw"), true);
    });
    $(document).on("click", ".vks", function() {
      if (!$(this).hasClass("vkr")) {
        var activeClassName = $(this).parent().attr("optionalclass");
        var e = $(this).parent().attr("classtarget");
        $(this).parent().find(".vks").toggleClass("vkr");
        if ($(this).hasClass("choice-button-on")) {
          $(e).addClass(activeClassName);
        } else {
          $(e).removeClass(activeClassName);
        }
      }
      $(e).each(function() {
        if ("" == $(this).attr("class")) {
          $(this).removeAttr("class");
        }
      });
      if ($(this).hasClass("refresh")) {
        done(e);
      }
      parse();
    });
    $(document).on("click", ".vkt", function(event) {
      var activeClassName = $(this).parent().attr("optionalClass");
      var e = $(this).parent().attr("classtarget");
      /** @type {string} */
      var optsData = "";
      event.stopPropagation();
      if ($(this).hasClass("vku")) {
        $(e).removeClass(activeClassName);
        /** @type {boolean} */
        optsData = false;
      } else {
        $(e).addClass(activeClassName);
        /** @type {boolean} */
        optsData = true;
      }
      $(this).toggleClass("vku");
      $(e).each(function() {
        if ("" == $(this).attr("class")) {
          $(this).removeAttr("class");
        }
      });
      if ($(this).hasClass("refresh")) {
        done(e);
      }
      if ("parallax" == activeClassName) {
        onSuccess();
        if ("undefined" != typeof window.mr_parallax) {
          window.mr_parallax.callback(e);
        }
      }
      if ("scroll-assist" == activeClassName) {
        if ("undefined" != typeof window.mr_parallax) {
          /** @type {string} */
          window.mr_parallax.mr_scrollAssist = optsData;
        }
      }
      parse();
    });
    $(document).on("click", ".vkv", function() {
      if (!$(this).hasClass("vkr")) {
        var activeClassName = $(this).attr("optionalclass");
        var errors = $(this).parent().attr("classtarget");
        removeClass = $(this).parent().find(".vkv.vkw").attr("optionalclass");
        $(this).parent().find(".vkv").removeClass("vkw");
        $(this).addClass("vkw");
        $(errors).removeClass(removeClass).addClass(activeClassName);
      }
      $(errors).each(function() {
        if ("" == $(this).attr("class")) {
          $(this).removeAttr("class");
        }
      });
      parse();
      if ($(this).hasClass("refresh")) {
        done(errors);
      }
    });
    $(document).on("click", ".vno", function() {
      refresh("." + $(this).attr("vnr"), $(this).data("vnq"), true);
    });
  });
  $(window).load(function() {
    /** @type {string} */
    var userAgent = window.navigator.userAgent;
    /** @type {number} */
    var c = userAgent.indexOf("MSIE ");
    /** @type {number} */
    var d = 0;
    if (c > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) {
      $("#if-ie").removeClass("vih");
      /** @type {number} */
      d = 1;
    }
    if (0 == d) {
      setTimeout(function() {
        $(".vhc").addClass("vba");
        $(".vhv").removeClass("vba");
        setTimeout(function() {
          $(".vhc").remove();
          transition();
          resize();
        }, 300);
      }, 100);
    }
    $("[delay-src]").each(function(dataAndEvents, deepDataAndEvents) {
      $(this).attr("src", $(this).attr("delay-src")).removeAttr("delay-src");
    });
    asserterNames.forEach(function(first) {
      var i = first.headString;
      i = i.replace("href=&quot;assets/css/", 'href="theme/css/').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"');
      $("head").prepend(i);
    });
    getBlob();
  });
  /**
   * @param {?} v
   * @return {undefined}
   */
  this.chooserImageError = function(v) {
    $(v).parent().addClass("no-image");
    $(v).parent().find(".vjn").html("Copy <strong>" + $(v).attr("vis") + "</strong> to your img folder then click here to refresh.");
    $(v).css("display", "none");
  };
  /**
   * @param {?} item
   * @return {undefined}
   */
  this.defaultImageError = function(item) {
    $(item).parent().remove();
    $(item).remove();
  };
  /**
   * @return {?}
   */
  $.fn.focusEnd = function() {
    $(this).focus();
    var data_user = $("<span />").appendTo($(this));
    var node = data_user.get(0);
    /** @type {null} */
    var range = null;
    /** @type {null} */
    var selection = null;
    return document.selection ? (range = document.body.createTextRange(), range.moveToElementText(node), range.select()) : window.getSelection && (range = document.createRange(), range.selectNode(node), selection = window.getSelection(), selection.removeAllRanges(), selection.addRange(range)), data_user.remove(), this;
  };
}
/**
 * @return {undefined}
 */
function findStrings() {
  /** @type {string} */
  var out = "";
  /** @type {number} */
  var b = 0;
  /** @type {string} */
  var params = String(Variant);
  /** @type {number} */
  var i = 0;
  /** @type {number} */
  var l = params.length;
  for (;l > i;i++) {
    if ("'" == params[i]) {
      out += params[i];
      if (0 == b) {
        /** @type {number} */
        b = 1;
      } else {
        out += ",";
        /** @type {number} */
        b = 0;
      }
    } else {
      if (1 == b) {
        out += params[i];
      }
    }
  }
  /** @type {Array.<string>} */
  var bProperties = out.split(",");
  allStringsSorted = bProperties.sort();
}
window.mr_variant = new Variant;
/**
 * @param {Array} items
 * @return {?}
 */
var removeDuplicatesInPlace = function(items) {
  var i;
  var idx;
  var item;
  var e;
  /** @type {number} */
  i = items.length - 1;
  for (;i >= 0;i--) {
    item = items[i];
    /** @type {boolean} */
    e = false;
    /** @type {number} */
    idx = i - 1;
    for (;!e && idx >= 0;idx--) {
      if (item === items[idx]) {
        if (i !== idx) {
          items.splice(i, 1);
        }
        /** @type {boolean} */
        e = true;
      }
    }
  }
  return items;
};
