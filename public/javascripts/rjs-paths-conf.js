var webjars = {
	versions : {
		"backbonejs" : "1.1.2",
		"coffee-script" : "1.9.0",
		"requirejs" : "2.1.15",
		"requirejs-text" : "2.0.10-3",
		"underscorejs" : "1.7.0",
		"bootstrap" : "3.3.2",
		"angularjs" : "1.3.14",
		"jquery" : "1.11.1"
	},
	path : function(webJarId, path) {
		console
				.error('The webjars.path() method of getting a WebJar path has been deprecated.  The RequireJS config in the '
						+ webJarId
						+ ' WebJar may need to be updated.  Please file an issue: http://github.com/webjars/'
						+ webJarId + '/issues/new');
		return [ '/webjars/' + webJarId + '/' + webjars.versions[webJarId]
				+ '/' + path ];
	}
};

var require = {
	callback : function() {
		// Deprecated WebJars RequireJS plugin loader
		define(
				'webjars',
				function() {
					return {
						load : function(name, req, onload, config) {
							if (name.indexOf('.js') >= 0) {
								console
										.warn('Detected a legacy file name ('
												+ name
												+ ') as the thing to load.  Loading via file name is no longer supported so the .js will be dropped in an effort to resolve the module name instead.');
								name = name.replace('.js', '');
							}
							console
									.error('The webjars plugin loader (e.g. webjars!'
											+ name
											+ ') has been deprecated.  The RequireJS config in the '
											+ name
											+ ' WebJar may need to be updated.  Please file an issue: http://github.com/webjars/webjars/issues/new');
							req([ name ], function() {
								onload();
							});
						}
					}
				});

		// All of the WebJar configs
		requirejs.config({
			"paths" : {}
		})
		requirejs
				.config({
					"paths" : {
						"backbone" : [ "/webjars/backbonejs/1.1.2/backbone",
								"backbone" ],
						"backbonejs" : [ "/webjars/backbonejs/1.1.2/backbone",
								"backbone" ]
					},
					"shim" : {
						"backbone" : {
							"deps" : [ "underscore" ],
							"exports" : "Backbone"
						},
						"backbonejs" : {
							"deps" : [ "underscorejs" ],
							"exports" : "Backbone"
						}
					}
				})
		requirejs.config({
			"paths" : {
				"requirejs-text" : [ "/webjars/requirejs-text/2.0.10-3/text",
						"text" ],
				"text" : [ "/webjars/requirejs-text/2.0.10-3/text", "text" ]
			}
		})
		requirejs.config({
			"paths" : {
				"underscore" : [ "/webjars/underscorejs/1.7.0/underscore",
						"underscore" ],
				"underscorejs" : [ "/webjars/underscorejs/1.7.0/underscore",
						"underscore" ]
			},
			"shim" : {
				"underscore" : {
					"exports" : "_"
				},
				"underscorejs" : {
					"exports" : "_"
				}
			}
		})
		requirejs.config({
			"paths" : {
				"bootstrap" : [ "/webjars/bootstrap/3.3.2/js/bootstrap",
						"js/bootstrap" ],
				"bootstrap-css" : [ "/webjars/bootstrap/3.3.2/css/bootstrap",
						"css/bootstrap" ]
			},
			"shim" : {
				"bootstrap" : [ "jquery" ]
			}
		})
		requirejs
				.config({
					"paths" : {
						"angular" : [ "/webjars/angularjs/1.3.14/angular",
								"angular" ],
						"angular-animate" : [
								"/webjars/angularjs/1.3.14/angular-animate",
								"angular-animate" ],
						"angular-aria" : [
								"/webjars/angularjs/1.3.14/angular-aria",
								"angular-aria" ],
						"angular-cookies" : [
								"/webjars/angularjs/1.3.14/angular-cookies",
								"angular-cookies" ],
						"angular-loader" : [
								"/webjars/angularjs/1.3.14/angular-loader",
								"angular-loader" ],
						"angular-messages" : [
								"/webjars/angularjs/1.3.14/angular-messages",
								"angular-messages" ],
						"angular-mocks" : [
								"/webjars/angularjs/1.3.14/angular-mocks",
								"angular-mocks" ],
						"angular-resource" : [
								"/webjars/angularjs/1.3.14/angular-resource",
								"angular-resource" ],
						"angular-route" : [
								"/webjars/angularjs/1.3.14/angular-route",
								"angular-route" ],
						"angular-sanitize" : [
								"/webjars/angularjs/1.3.14/angular-sanitize",
								"angular-sanitize" ],
						"angular-scenario" : [
								"/webjars/angularjs/1.3.14/angular-scenario",
								"angular-scenario" ],
						"angular-touch" : [
								"/webjars/angularjs/1.3.14/angular-touch",
								"angular-touch" ],
						"angular-locale_en-in" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_en-in",
								"i18n/angular-locale_en-in" ],
						"angular-locale_sk-sk" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_sk-sk",
								"i18n/angular-locale_sk-sk" ],
						"angular-locale_en-dsrt-us" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_en-dsrt-us",
								"i18n/angular-locale_en-dsrt-us" ],
						"angular-locale_cs-cz" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_cs-cz",
								"i18n/angular-locale_cs-cz" ],
						"angular-locale_pt-pt" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_pt-pt",
								"i18n/angular-locale_pt-pt" ],
						"angular-locale_ml-in" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ml-in",
								"i18n/angular-locale_ml-in" ],
						"angular-locale_ro-ro" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ro-ro",
								"i18n/angular-locale_ro-ro" ],
						"angular-locale_sr" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_sr",
								"i18n/angular-locale_sr" ],
						"angular-locale_en-ie" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_en-ie",
								"i18n/angular-locale_en-ie" ],
						"angular-locale_hr" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_hr",
								"i18n/angular-locale_hr" ],
						"angular-locale_ko" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ko",
								"i18n/angular-locale_ko" ],
						"angular-locale_sw-tz" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_sw-tz",
								"i18n/angular-locale_sw-tz" ],
						"angular-locale_de-ch" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_de-ch",
								"i18n/angular-locale_de-ch" ],
						"angular-locale_ja" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ja",
								"i18n/angular-locale_ja" ],
						"angular-locale_sq-al" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_sq-al",
								"i18n/angular-locale_sq-al" ],
						"angular-locale_ln" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ln",
								"i18n/angular-locale_ln" ],
						"angular-locale_zh-cn" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_zh-cn",
								"i18n/angular-locale_zh-cn" ],
						"angular-locale_en-zz" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_en-zz",
								"i18n/angular-locale_en-zz" ],
						"angular-locale_en-sg" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_en-sg",
								"i18n/angular-locale_en-sg" ],
						"angular-locale_kn" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_kn",
								"i18n/angular-locale_kn" ],
						"angular-locale_mr-in" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_mr-in",
								"i18n/angular-locale_mr-in" ],
						"angular-locale_mr" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_mr",
								"i18n/angular-locale_mr" ],
						"angular-locale_fil-ph" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_fil-ph",
								"i18n/angular-locale_fil-ph" ],
						"angular-locale_zh-hans" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_zh-hans",
								"i18n/angular-locale_zh-hans" ],
						"angular-locale_am" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_am",
								"i18n/angular-locale_am" ],
						"angular-locale_he-il" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_he-il",
								"i18n/angular-locale_he-il" ],
						"angular-locale_gl" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_gl",
								"i18n/angular-locale_gl" ],
						"angular-locale_en" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_en",
								"i18n/angular-locale_en" ],
						"angular-locale_en-mh" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_en-mh",
								"i18n/angular-locale_en-mh" ],
						"angular-locale_hi" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_hi",
								"i18n/angular-locale_hi" ],
						"angular-locale_ro" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ro",
								"i18n/angular-locale_ro" ],
						"angular-locale_pt" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_pt",
								"i18n/angular-locale_pt" ],
						"angular-locale_hu" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_hu",
								"i18n/angular-locale_hu" ],
						"angular-locale_sl-si" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_sl-si",
								"i18n/angular-locale_sl-si" ],
						"angular-locale_fr-ca" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_fr-ca",
								"i18n/angular-locale_fr-ca" ],
						"angular-locale_fil" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_fil",
								"i18n/angular-locale_fil" ],
						"angular-locale_it" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_it",
								"i18n/angular-locale_it" ],
						"angular-locale_fr-bl" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_fr-bl",
								"i18n/angular-locale_fr-bl" ],
						"angular-locale_fr-gp" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_fr-gp",
								"i18n/angular-locale_fr-gp" ],
						"angular-locale_ms" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ms",
								"i18n/angular-locale_ms" ],
						"angular-locale_sv-se" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_sv-se",
								"i18n/angular-locale_sv-se" ],
						"angular-locale_it-it" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_it-it",
								"i18n/angular-locale_it-it" ],
						"angular-locale_sr-latn-rs" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_sr-latn-rs",
								"i18n/angular-locale_sr-latn-rs" ],
						"angular-locale_ar-eg" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ar-eg",
								"i18n/angular-locale_ar-eg" ],
						"angular-locale_en-vi" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_en-vi",
								"i18n/angular-locale_en-vi" ],
						"angular-locale_vi-vn" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_vi-vn",
								"i18n/angular-locale_vi-vn" ],
						"angular-locale_ja-jp" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ja-jp",
								"i18n/angular-locale_ja-jp" ],
						"angular-locale_ta" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ta",
								"i18n/angular-locale_ta" ],
						"angular-locale_en-iso" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_en-iso",
								"i18n/angular-locale_en-iso" ],
						"angular-locale_en-gu" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_en-gu",
								"i18n/angular-locale_en-gu" ],
						"angular-locale_eu-es" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_eu-es",
								"i18n/angular-locale_eu-es" ],
						"angular-locale_no" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_no",
								"i18n/angular-locale_no" ],
						"angular-locale_hu-hu" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_hu-hu",
								"i18n/angular-locale_hu-hu" ],
						"angular-locale_fr-mf" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_fr-mf",
								"i18n/angular-locale_fr-mf" ],
						"angular-locale_en-um" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_en-um",
								"i18n/angular-locale_en-um" ],
						"angular-locale_gl-es" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_gl-es",
								"i18n/angular-locale_gl-es" ],
						"angular-locale_pl" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_pl",
								"i18n/angular-locale_pl" ],
						"angular-locale_nl-nl" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_nl-nl",
								"i18n/angular-locale_nl-nl" ],
						"angular-locale_et" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_et",
								"i18n/angular-locale_et" ],
						"angular-locale_de-lu" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_de-lu",
								"i18n/angular-locale_de-lu" ],
						"angular-locale_da" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_da",
								"i18n/angular-locale_da" ],
						"angular-locale_zh" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_zh",
								"i18n/angular-locale_zh" ],
						"angular-locale_tr-tr" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_tr-tr",
								"i18n/angular-locale_tr-tr" ],
						"angular-locale_am-et" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_am-et",
								"i18n/angular-locale_am-et" ],
						"angular-locale_te-in" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_te-in",
								"i18n/angular-locale_te-in" ],
						"angular-locale_hi-in" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_hi-in",
								"i18n/angular-locale_hi-in" ],
						"angular-locale_et-ee" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_et-ee",
								"i18n/angular-locale_et-ee" ],
						"angular-locale_tr" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_tr",
								"i18n/angular-locale_tr" ],
						"angular-locale_sk" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_sk",
								"i18n/angular-locale_sk" ],
						"angular-locale_sr-rs" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_sr-rs",
								"i18n/angular-locale_sr-rs" ],
						"angular-locale_lv" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_lv",
								"i18n/angular-locale_lv" ],
						"angular-locale_fa-ir" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_fa-ir",
								"i18n/angular-locale_fa-ir" ],
						"angular-locale_sl" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_sl",
								"i18n/angular-locale_sl" ],
						"angular-locale_el-gr" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_el-gr",
								"i18n/angular-locale_el-gr" ],
						"angular-locale_bn-bd" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_bn-bd",
								"i18n/angular-locale_bn-bd" ],
						"angular-locale_lt-lt" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_lt-lt",
								"i18n/angular-locale_lt-lt" ],
						"angular-locale_sq" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_sq",
								"i18n/angular-locale_sq" ],
						"angular-locale_fr-mq" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_fr-mq",
								"i18n/angular-locale_fr-mq" ],
						"angular-locale_ms-my" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ms-my",
								"i18n/angular-locale_ms-my" ],
						"angular-locale_id" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_id",
								"i18n/angular-locale_id" ],
						"angular-locale_bn" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_bn",
								"i18n/angular-locale_bn" ],
						"angular-locale_hr-hr" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_hr-hr",
								"i18n/angular-locale_hr-hr" ],
						"angular-locale_fr-mc" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_fr-mc",
								"i18n/angular-locale_fr-mc" ],
						"angular-locale_id-id" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_id-id",
								"i18n/angular-locale_id-id" ],
						"angular-locale_es" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_es",
								"i18n/angular-locale_es" ],
						"angular-locale_es-es" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_es-es",
								"i18n/angular-locale_es-es" ],
						"angular-locale_cs" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_cs",
								"i18n/angular-locale_cs" ],
						"angular-locale_zh-hans-cn" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_zh-hans-cn",
								"i18n/angular-locale_zh-hans-cn" ],
						"angular-locale_fr" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_fr",
								"i18n/angular-locale_fr" ],
						"angular-locale_th-th" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_th-th",
								"i18n/angular-locale_th-th" ],
						"angular-locale_te" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_te",
								"i18n/angular-locale_te" ],
						"angular-locale_fa" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_fa",
								"i18n/angular-locale_fa" ],
						"angular-locale_kn-in" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_kn-in",
								"i18n/angular-locale_kn-in" ],
						"angular-locale_or" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_or",
								"i18n/angular-locale_or" ],
						"angular-locale_pt-br" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_pt-br",
								"i18n/angular-locale_pt-br" ],
						"angular-locale_zh-hk" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_zh-hk",
								"i18n/angular-locale_zh-hk" ],
						"angular-locale_gu" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_gu",
								"i18n/angular-locale_gu" ],
						"angular-locale_en-au" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_en-au",
								"i18n/angular-locale_en-au" ],
						"angular-locale_is-is" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_is-is",
								"i18n/angular-locale_is-is" ],
						"angular-locale_en-gb" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_en-gb",
								"i18n/angular-locale_en-gb" ],
						"angular-locale_ln-cd" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ln-cd",
								"i18n/angular-locale_ln-cd" ],
						"angular-locale_mo" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_mo",
								"i18n/angular-locale_mo" ],
						"angular-locale_sw" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_sw",
								"i18n/angular-locale_sw" ],
						"angular-locale_tl" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_tl",
								"i18n/angular-locale_tl" ],
						"angular-locale_mt" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_mt",
								"i18n/angular-locale_mt" ],
						"angular-locale_vi" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_vi",
								"i18n/angular-locale_vi" ],
						"angular-locale_de" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_de",
								"i18n/angular-locale_de" ],
						"angular-locale_mt-mt" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_mt-mt",
								"i18n/angular-locale_mt-mt" ],
						"angular-locale_pl-pl" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_pl-pl",
								"i18n/angular-locale_pl-pl" ],
						"angular-locale_uk-ua" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_uk-ua",
								"i18n/angular-locale_uk-ua" ],
						"angular-locale_gsw-ch" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_gsw-ch",
								"i18n/angular-locale_gsw-ch" ],
						"angular-locale_ca" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ca",
								"i18n/angular-locale_ca" ],
						"angular-locale_tl-ph" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_tl-ph",
								"i18n/angular-locale_tl-ph" ],
						"angular-locale_da-dk" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_da-dk",
								"i18n/angular-locale_da-dk" ],
						"angular-locale_ca-es" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ca-es",
								"i18n/angular-locale_ca-es" ],
						"angular-locale_bg-bg" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_bg-bg",
								"i18n/angular-locale_bg-bg" ],
						"angular-locale_nl" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_nl",
								"i18n/angular-locale_nl" ],
						"angular-locale_or-in" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_or-in",
								"i18n/angular-locale_or-in" ],
						"angular-locale_gu-in" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_gu-in",
								"i18n/angular-locale_gu-in" ],
						"angular-locale_zh-tw" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_zh-tw",
								"i18n/angular-locale_zh-tw" ],
						"angular-locale_bg" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_bg",
								"i18n/angular-locale_bg" ],
						"angular-locale_is" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_is",
								"i18n/angular-locale_is" ],
						"angular-locale_eu" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_eu",
								"i18n/angular-locale_eu" ],
						"angular-locale_el-polyton" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_el-polyton",
								"i18n/angular-locale_el-polyton" ],
						"angular-locale_fr-re" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_fr-re",
								"i18n/angular-locale_fr-re" ],
						"angular-locale_sr-cyrl-rs" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_sr-cyrl-rs",
								"i18n/angular-locale_sr-cyrl-rs" ],
						"angular-locale_lt" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_lt",
								"i18n/angular-locale_lt" ],
						"angular-locale_sv" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_sv",
								"i18n/angular-locale_sv" ],
						"angular-locale_en-za" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_en-za",
								"i18n/angular-locale_en-za" ],
						"angular-locale_ur-pk" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ur-pk",
								"i18n/angular-locale_ur-pk" ],
						"angular-locale_fi" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_fi",
								"i18n/angular-locale_fi" ],
						"angular-locale_he" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_he",
								"i18n/angular-locale_he" ],
						"angular-locale_en-mp" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_en-mp",
								"i18n/angular-locale_en-mp" ],
						"angular-locale_ru-ru" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ru-ru",
								"i18n/angular-locale_ru-ru" ],
						"angular-locale_de-at" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_de-at",
								"i18n/angular-locale_de-at" ],
						"angular-locale_en-as" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_en-as",
								"i18n/angular-locale_en-as" ],
						"angular-locale_gsw" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_gsw",
								"i18n/angular-locale_gsw" ],
						"angular-locale_ko-kr" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ko-kr",
								"i18n/angular-locale_ko-kr" ],
						"angular-locale_de-de" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_de-de",
								"i18n/angular-locale_de-de" ],
						"angular-locale_ru" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ru",
								"i18n/angular-locale_ru" ],
						"angular-locale_iw" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_iw",
								"i18n/angular-locale_iw" ],
						"angular-locale_uk" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_uk",
								"i18n/angular-locale_uk" ],
						"angular-locale_in" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_in",
								"i18n/angular-locale_in" ],
						"angular-locale_en-dsrt" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_en-dsrt",
								"i18n/angular-locale_en-dsrt" ],
						"angular-locale_el" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_el",
								"i18n/angular-locale_el" ],
						"angular-locale_en-us" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_en-us",
								"i18n/angular-locale_en-us" ],
						"angular-locale_fi-fi" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_fi-fi",
								"i18n/angular-locale_fi-fi" ],
						"angular-locale_ar" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ar",
								"i18n/angular-locale_ar" ],
						"angular-locale_de-be" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_de-be",
								"i18n/angular-locale_de-be" ],
						"angular-locale_th" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_th",
								"i18n/angular-locale_th" ],
						"angular-locale_ta-in" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ta-in",
								"i18n/angular-locale_ta-in" ],
						"angular-locale_ml" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ml",
								"i18n/angular-locale_ml" ],
						"angular-locale_lv-lv" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_lv-lv",
								"i18n/angular-locale_lv-lv" ],
						"angular-locale_ur" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_ur",
								"i18n/angular-locale_ur" ],
						"angular-locale_fr-fr" : [
								"/webjars/angularjs/1.3.14/i18n/angular-locale_fr-fr",
								"i18n/angular-locale_fr-fr" ]
					},
					"shim" : {
						"angular" : {
							"exports" : "angular"
						},
						"angular-animate" : [ "angular" ],
						"angular-aria" : [ "angular" ],
						"angular-cookies" : [ "angular" ],
						"angular-loader" : [ "angular" ],
						"angular-messages" : [ "angular" ],
						"angular-mocks" : [ "angular" ],
						"angular-resource" : [ "angular" ],
						"angular-route" : [ "angular" ],
						"angular-sanitize" : [ "angular" ],
						"angular-scenario" : [ "angular" ],
						"angular-touch" : [ "angular" ],
						"angular-locale_en-in" : [ "angular" ],
						"angular-locale_sk-sk" : [ "angular" ],
						"angular-locale_en-dsrt-us" : [ "angular" ],
						"angular-locale_cs-cz" : [ "angular" ],
						"angular-locale_pt-pt" : [ "angular" ],
						"angular-locale_ml-in" : [ "angular" ],
						"angular-locale_ro-ro" : [ "angular" ],
						"angular-locale_sr" : [ "angular" ],
						"angular-locale_en-ie" : [ "angular" ],
						"angular-locale_hr" : [ "angular" ],
						"angular-locale_ko" : [ "angular" ],
						"angular-locale_sw-tz" : [ "angular" ],
						"angular-locale_de-ch" : [ "angular" ],
						"angular-locale_ja" : [ "angular" ],
						"angular-locale_sq-al" : [ "angular" ],
						"angular-locale_ln" : [ "angular" ],
						"angular-locale_zh-cn" : [ "angular" ],
						"angular-locale_en-zz" : [ "angular" ],
						"angular-locale_en-sg" : [ "angular" ],
						"angular-locale_kn" : [ "angular" ],
						"angular-locale_mr-in" : [ "angular" ],
						"angular-locale_mr" : [ "angular" ],
						"angular-locale_fil-ph" : [ "angular" ],
						"angular-locale_zh-hans" : [ "angular" ],
						"angular-locale_am" : [ "angular" ],
						"angular-locale_he-il" : [ "angular" ],
						"angular-locale_gl" : [ "angular" ],
						"angular-locale_en" : [ "angular" ],
						"angular-locale_en-mh" : [ "angular" ],
						"angular-locale_hi" : [ "angular" ],
						"angular-locale_ro" : [ "angular" ],
						"angular-locale_pt" : [ "angular" ],
						"angular-locale_hu" : [ "angular" ],
						"angular-locale_sl-si" : [ "angular" ],
						"angular-locale_fr-ca" : [ "angular" ],
						"angular-locale_fil" : [ "angular" ],
						"angular-locale_it" : [ "angular" ],
						"angular-locale_fr-bl" : [ "angular" ],
						"angular-locale_fr-gp" : [ "angular" ],
						"angular-locale_ms" : [ "angular" ],
						"angular-locale_sv-se" : [ "angular" ],
						"angular-locale_it-it" : [ "angular" ],
						"angular-locale_sr-latn-rs" : [ "angular" ],
						"angular-locale_ar-eg" : [ "angular" ],
						"angular-locale_en-vi" : [ "angular" ],
						"angular-locale_vi-vn" : [ "angular" ],
						"angular-locale_ja-jp" : [ "angular" ],
						"angular-locale_ta" : [ "angular" ],
						"angular-locale_en-iso" : [ "angular" ],
						"angular-locale_en-gu" : [ "angular" ],
						"angular-locale_eu-es" : [ "angular" ],
						"angular-locale_no" : [ "angular" ],
						"angular-locale_hu-hu" : [ "angular" ],
						"angular-locale_fr-mf" : [ "angular" ],
						"angular-locale_en-um" : [ "angular" ],
						"angular-locale_gl-es" : [ "angular" ],
						"angular-locale_pl" : [ "angular" ],
						"angular-locale_nl-nl" : [ "angular" ],
						"angular-locale_et" : [ "angular" ],
						"angular-locale_de-lu" : [ "angular" ],
						"angular-locale_da" : [ "angular" ],
						"angular-locale_zh" : [ "angular" ],
						"angular-locale_tr-tr" : [ "angular" ],
						"angular-locale_am-et" : [ "angular" ],
						"angular-locale_te-in" : [ "angular" ],
						"angular-locale_hi-in" : [ "angular" ],
						"angular-locale_et-ee" : [ "angular" ],
						"angular-locale_tr" : [ "angular" ],
						"angular-locale_sk" : [ "angular" ],
						"angular-locale_sr-rs" : [ "angular" ],
						"angular-locale_lv" : [ "angular" ],
						"angular-locale_fa-ir" : [ "angular" ],
						"angular-locale_sl" : [ "angular" ],
						"angular-locale_el-gr" : [ "angular" ],
						"angular-locale_bn-bd" : [ "angular" ],
						"angular-locale_lt-lt" : [ "angular" ],
						"angular-locale_sq" : [ "angular" ],
						"angular-locale_fr-mq" : [ "angular" ],
						"angular-locale_ms-my" : [ "angular" ],
						"angular-locale_id" : [ "angular" ],
						"angular-locale_bn" : [ "angular" ],
						"angular-locale_hr-hr" : [ "angular" ],
						"angular-locale_fr-mc" : [ "angular" ],
						"angular-locale_id-id" : [ "angular" ],
						"angular-locale_es" : [ "angular" ],
						"angular-locale_es-es" : [ "angular" ],
						"angular-locale_cs" : [ "angular" ],
						"angular-locale_zh-hans-cn" : [ "angular" ],
						"angular-locale_fr" : [ "angular" ],
						"angular-locale_th-th" : [ "angular" ],
						"angular-locale_te" : [ "angular" ],
						"angular-locale_fa" : [ "angular" ],
						"angular-locale_kn-in" : [ "angular" ],
						"angular-locale_or" : [ "angular" ],
						"angular-locale_pt-br" : [ "angular" ],
						"angular-locale_zh-hk" : [ "angular" ],
						"angular-locale_gu" : [ "angular" ],
						"angular-locale_en-au" : [ "angular" ],
						"angular-locale_is-is" : [ "angular" ],
						"angular-locale_en-gb" : [ "angular" ],
						"angular-locale_ln-cd" : [ "angular" ],
						"angular-locale_mo" : [ "angular" ],
						"angular-locale_sw" : [ "angular" ],
						"angular-locale_tl" : [ "angular" ],
						"angular-locale_mt" : [ "angular" ],
						"angular-locale_vi" : [ "angular" ],
						"angular-locale_de" : [ "angular" ],
						"angular-locale_mt-mt" : [ "angular" ],
						"angular-locale_pl-pl" : [ "angular" ],
						"angular-locale_uk-ua" : [ "angular" ],
						"angular-locale_gsw-ch" : [ "angular" ],
						"angular-locale_ca" : [ "angular" ],
						"angular-locale_tl-ph" : [ "angular" ],
						"angular-locale_da-dk" : [ "angular" ],
						"angular-locale_ca-es" : [ "angular" ],
						"angular-locale_bg-bg" : [ "angular" ],
						"angular-locale_nl" : [ "angular" ],
						"angular-locale_or-in" : [ "angular" ],
						"angular-locale_gu-in" : [ "angular" ],
						"angular-locale_zh-tw" : [ "angular" ],
						"angular-locale_bg" : [ "angular" ],
						"angular-locale_is" : [ "angular" ],
						"angular-locale_eu" : [ "angular" ],
						"angular-locale_el-polyton" : [ "angular" ],
						"angular-locale_fr-re" : [ "angular" ],
						"angular-locale_sr-cyrl-rs" : [ "angular" ],
						"angular-locale_lt" : [ "angular" ],
						"angular-locale_sv" : [ "angular" ],
						"angular-locale_en-za" : [ "angular" ],
						"angular-locale_ur-pk" : [ "angular" ],
						"angular-locale_fi" : [ "angular" ],
						"angular-locale_he" : [ "angular" ],
						"angular-locale_en-mp" : [ "angular" ],
						"angular-locale_ru-ru" : [ "angular" ],
						"angular-locale_de-at" : [ "angular" ],
						"angular-locale_en-as" : [ "angular" ],
						"angular-locale_gsw" : [ "angular" ],
						"angular-locale_ko-kr" : [ "angular" ],
						"angular-locale_de-de" : [ "angular" ],
						"angular-locale_ru" : [ "angular" ],
						"angular-locale_iw" : [ "angular" ],
						"angular-locale_uk" : [ "angular" ],
						"angular-locale_in" : [ "angular" ],
						"angular-locale_en-dsrt" : [ "angular" ],
						"angular-locale_el" : [ "angular" ],
						"angular-locale_en-us" : [ "angular" ],
						"angular-locale_fi-fi" : [ "angular" ],
						"angular-locale_ar" : [ "angular" ],
						"angular-locale_de-be" : [ "angular" ],
						"angular-locale_th" : [ "angular" ],
						"angular-locale_ta-in" : [ "angular" ],
						"angular-locale_ml" : [ "angular" ],
						"angular-locale_lv-lv" : [ "angular" ],
						"angular-locale_ur" : [ "angular" ],
						"angular-locale_fr-fr" : [ "angular" ]
					}
				})
		requirejs.config({
			"paths" : {
				"jquery" : [ "/webjars/jquery/1.11.1/jquery", "jquery" ]
			},
			"shim" : {
				"jquery" : {
					"exports" : "$"
				}
			}
		})
	}
}