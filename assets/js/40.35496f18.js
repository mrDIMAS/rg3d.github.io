(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{317:function(e,t,a){"use strict";a.r(t);var n=a(15),i=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Fyrox is a Rust game engine with lots of out-of-box game-ready features and a full-featured editor. This\nweek was mostly dedicated to adding small new features and fixes that improves the workflow and makes it\nless frustrating.")]),e._v(" "),t("h2",{attrs:{id:"particle-system-preview-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#particle-system-preview-mode"}},[e._v("#")]),e._v(" Particle System Preview Mode")]),e._v(" "),t("p",[t("img",{attrs:{src:"/assets/twif9/particle_system.gif",alt:"particle system"}})]),e._v(" "),t("p",[e._v("Particle Systems now does not update in the editor by default, only when selected. This saves CPU\nresources when editing large scenes and removes visual clutter. Also there's a new panel that allows you\nto control preview behavior of particle systems (play, pause or stop).")]),e._v(" "),t("h2",{attrs:{id:"animation-signals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#animation-signals"}},[e._v("#")]),e._v(" Animation Signals")]),e._v(" "),t("p",[t("img",{attrs:{src:"/assets/twif9/anim_editor.png",alt:"anim editor"}})]),e._v(" "),t("p",[e._v("It is now possible to select animation signals on the time ruler and edit their properties such as name,\nid, location, state (enabled or disabled). The properties are edited via standard editor's Inspector.")]),e._v(" "),t("h2",{attrs:{id:"absm-editor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#absm-editor"}},[e._v("#")]),e._v(" ABSM Editor")]),e._v(" "),t("p",[e._v("Animation Blending State Machine editor now allows you to delete animation layers. Previously it was\npossible only to add animation layers.")]),e._v(" "),t("h2",{attrs:{id:"reflection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reflection"}},[e._v("#")]),e._v(" Reflection")]),e._v(" "),t("p",[t("code",[e._v("Reflect")]),e._v(" trait is now based on "),t("code",[e._v("Debug")]),e._v(" trait ("),t("code",[e._v("pub trait Reflect: Debug { .. }")]),e._v("), so it is now possible\nprinting any values that implement both traits by having just "),t("code",[e._v("&dyn Reflect")]),e._v(". This functionality is\nextensively used in the "),t("code",[e._v("Inspector")]),e._v(" widget to copy values of fields as their string representation.")]),e._v(" "),t("h2",{attrs:{id:"copy-value-as-string-for-inspector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copy-value-as-string-for-inspector"}},[e._v("#")]),e._v(" "),t("code",[e._v("Copy Value as String")]),e._v(" for Inspector")]),e._v(" "),t("p",[t("code",[e._v("Inspector")]),e._v(" widget now allows you to copy property value as string. It uses the changes in the reflection\nsystem described in the section above. It is very useful for extracting data from fields that does not\nhave any editable fields. For example you can copy contents of an array use it somewhere. To use the\nfunctionality, right-click on a property in the Inspector and click "),t("code",[e._v("Copy Value as String")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"other"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[e._v("#")]),e._v(" Other")]),e._v(" "),t("p",[e._v("Fixed selection issues in ABSM and Animation editors, fixed crash when trying to add a new layer into an\nempty ABSM. Fixed crash when trying to add a signal in the animation player. Animation events now also\ncontains animation the signal name, not just its id - this makes it easier to use animation events.")]),e._v(" "),t("h2",{attrs:{id:"what-s-next"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[e._v("#")]),e._v(" What's next?")]),e._v(" "),t("p",[e._v("Fyrox 0.29 will be released at the end of the next week (8th of January) and the upcoming release requires\na lot of testing of the new and old functionality, which is currently happening in\n"),t("a",{attrs:{href:"https://github.com/mrDIMAS/StationIapetus",target:"_blank",rel:"noopener noreferrer"}},[e._v("Station Iapetus"),t("OutboundLink")],1),e._v(" game. The new release will also add new chapters\nto the "),t("a",{attrs:{href:"https://fyrox-book.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("book"),t("OutboundLink")],1),e._v('. The next TWiF will be release only on 15th of January, because\n8th of January will be "occupied" by the release notes for Fyrox 0.29.')]),e._v(" "),t("h2",{attrs:{id:"full-list-of-changes-in-random-order"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-list-of-changes-in-random-order"}},[e._v("#")]),e._v(" Full List of Changes in Random Order")]),e._v(" "),t("ul",[t("li",[e._v("Update only selected particle systems in the editor")]),e._v(" "),t("li",[e._v("Added particle system preview control panel")]),e._v(" "),t("li",[e._v("Fixed selection issues in ABSM and Animation editors")]),e._v(" "),t("li",[e._v("Fixed crash when trying to add a new layer into an empty ABSM")]),e._v(" "),t("li",[e._v("Ability to remove layers in ABSM editor")]),e._v(" "),t("li",[e._v("Ability to edit animation signals in animation editor")]),e._v(" "),t("li",[e._v("Added "),t("code",[e._v("UuidEditor")]),e._v(" and respective property editor for Inspector")]),e._v(" "),t("li",[e._v("Fixed crash when trying to add a signal in the animation player")]),e._v(" "),t("li",[e._v("Restrict "),t("code",[e._v("Reflect")]),e._v(" trait on "),t("code",[e._v("Debug")])]),e._v(" "),t("li",[e._v("Wrap clipboard into "),t("code",[e._v("RefCell")])]),e._v(" "),t("li",[e._v("Optional ability to "),t("code",[e._v("Copy Value as String")]),e._v(" for properties in "),t("code",[e._v("Inspector")]),e._v(" widget")]),e._v(" "),t("li",[e._v("Pass animation signal name to animation event - makes much easier to respond to multiple animation events\nwith the same name)")]),e._v(" "),t("li",[e._v("Ability to maximize UI windows.")]),e._v(" "),t("li",[e._v("Rename "),t("code",[e._v("Animation::events")]),e._v(" -> "),t("code",[e._v("Animation::take_events")])]),e._v(" "),t("li",[e._v("Fixed recent files list in the editor (now it correctly remembers saved scene)")])]),e._v(" "),t("h2",{attrs:{id:"support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#support"}},[e._v("#")]),e._v(" Support")]),e._v(" "),t("p",[e._v("If you want to support the development of the project, click one of the links below. Preferable way is to use\n"),t("a",{attrs:{href:"https://boosty.to/fyrox",target:"_blank",rel:"noopener noreferrer"}},[e._v("Boosty"),t("OutboundLink")],1),e._v(" - this way the money will be available for the development immediately.\nAlternatively you can can use "),t("a",{attrs:{href:"https://www.patreon.com/mrdimas",target:"_blank",rel:"noopener noreferrer"}},[e._v("Patreon"),t("OutboundLink")],1),e._v(", but in this case the money will\nbe on-hold for unknown period of time ("),t("a",{attrs:{href:"https://github.com/FyroxEngine/Fyrox/issues/363",target:"_blank",rel:"noopener noreferrer"}},[e._v("details are here"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("p",[e._v("Also, you can help by fixing one of the "),t("a",{attrs:{href:"https://github.com/FyroxEngine/Fyrox/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22",target:"_blank",rel:"noopener noreferrer"}},[e._v('"good first issues" '),t("OutboundLink")],1),e._v(",\nadding a desired feature to the engine, or making a contribution to the "),t("a",{attrs:{href:"https://github.com/fyrox-book",target:"_blank",rel:"noopener noreferrer"}},[e._v("book"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=i.exports}}]);