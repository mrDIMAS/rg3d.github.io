(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{312:function(e,n,t){"use strict";t.r(n);var i=t(15),a=Object(i.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Fyrox is a Rust game engine with lots of out-of-box game-ready features and a full-featured editor. The engine\nnow supports animation layers in animation blending state machines, it is also possible to add signals to an\nanimation from the editor.")]),e._v(" "),n("h2",{attrs:{id:"animation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#animation"}},[e._v("#")]),e._v(" Animation")]),e._v(" "),n("p",[n("img",{attrs:{src:"/assets/twif6/anim_editor.gif",alt:"absm editor"}})]),e._v(" "),n("p",[e._v("Animation blending state machine now support multiple layers. What does that mean? On the gif above you can see\nthe example of a machine with two layers: one for upper body and one for lower body. Each layer is has its own\nstate machine inside and all layers blends into a final animation which is then applied to a model. Such layering\nallows you to animate parts of models independently. For example lower layer can contain running and idling\nanimations, upper layer in its turn contains animations for aiming, running, idling. In such configuration you\ncan get any combination of animations: running while aiming, idling while aiming, etc. This is how the animation\nworks in most of modern games.")]),e._v(" "),n("p",[e._v('To animate only specific nodes (bones in most cases), all you need to do is to specify layer mask. Layer mask is\nsimply a hash set that allows the engine to quickly understand whether or not it is needed to animate a node. Layer\nmask contains handles of nodes that won\'t be animated, it is just a sort of black-list. To fill a layer mask, you\nneed to click on "sink" icon and select all the nodes that needs to be excluded from the layer.')]),e._v(" "),n("p",[n("img",{attrs:{src:"/assets/twif6/signals.png",alt:"signals"}})]),e._v(" "),n("p",[e._v('Ability to add signals to animations is another important feature. A signal is just a "tag" with some time position\non the timeline. When playback time steps over a signal, it emits an event with the id of the signal. After that\nyou can process all the signals in your code and do some specific action. For example you can create signals for\nfootsteps sound in a walking animation, or create signals on which you\'ll apply damage to an enemy in some melee\nanimation.')]),e._v(" "),n("p",[e._v("There's also some quality-of-life improvements - models imported from FBX files will not have "),n("code",[e._v("Animation Player")]),e._v(" node\nif there's no actual animation in an FBX file.")]),e._v(" "),n("h2",{attrs:{id:"other"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[e._v("#")]),e._v(" Other")]),e._v(" "),n("p",[n("code",[e._v("DropDownList")]),e._v(" widget now correctly updates preview for selected item when changing its items. Previously you'd have\nold preview for new items.")]),e._v(" "),n("p",[e._v("It is now possible to serialize "),n("code",[e._v("HashSet")]),e._v(" using standard engine's serializer.")]),e._v(" "),n("h2",{attrs:{id:"full-list-of-changes-in-random-order"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#full-list-of-changes-in-random-order"}},[e._v("#")]),e._v(" Full List of Changes in Random Order")]),e._v(" "),n("ul",[n("li",[e._v("Remove link with external resources for animations")]),e._v(" "),n("li",[e._v("Reworked animation signals - replaced numeric ids with UUIDs, added name, more management\nmethods")]),e._v(" "),n("li",[e._v("Ability to add animation signals on the time ruler in the animation editor")]),e._v(" "),n("li",[e._v("Ability to drag and remove animation signals")]),e._v(" "),n("li",[e._v("Do not create animation player when importing FBX without any key frames.")]),e._v(" "),n("li",[e._v("Update selected item of drop down list when changing its items.")]),e._v(" "),n("li",[e._v("Ability to enable/disable animation tracks in the animation editor.")]),e._v(" "),n("li",[e._v("Enable/disable "),n("code",[e._v("OK")]),e._v(" button in the node selector widget if selection is valid or not.")]),e._v(" "),n("li",[e._v("Removed unused "),n("code",[e._v("AnimationMachineContainer")])]),e._v(" "),n("li",[e._v("Refactored animation blending state machine to support multiple animation layers.")]),e._v(" "),n("li",[e._v("Layer masks - allows you to enable or disable animation for a set of nodes.")]),e._v(" "),n("li",[e._v("Implemented "),n("code",[e._v("Visit")]),e._v(" trait for "),n("code",[e._v("HashSet")])])]),e._v(" "),n("h2",{attrs:{id:"support"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#support"}},[e._v("#")]),e._v(" Support")]),e._v(" "),n("p",[e._v("If you want to support the development of the project, click one of the links below. Preferable way is to use\n"),n("a",{attrs:{href:"https://boosty.to/fyrox",target:"_blank",rel:"noopener noreferrer"}},[e._v("Boosty"),n("OutboundLink")],1),e._v(" - this way the money will be available for the development immediately.\nAlternatively you can can use "),n("a",{attrs:{href:"https://www.patreon.com/mrdimas",target:"_blank",rel:"noopener noreferrer"}},[e._v("Patreon"),n("OutboundLink")],1),e._v(", but in this case the money will\nbe on-hold for unknown period of time ("),n("a",{attrs:{href:"https://github.com/FyroxEngine/Fyrox/issues/363",target:"_blank",rel:"noopener noreferrer"}},[e._v("details are here"),n("OutboundLink")],1),e._v(").")]),e._v(" "),n("p",[e._v("Also, you can help by fixing one of the "),n("a",{attrs:{href:"https://github.com/FyroxEngine/Fyrox/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22",target:"_blank",rel:"noopener noreferrer"}},[e._v('"good first issues" '),n("OutboundLink")],1),e._v(",\nadding a desired feature to the engine, or making a contribution to the "),n("a",{attrs:{href:"https://github.com/fyrox-book",target:"_blank",rel:"noopener noreferrer"}},[e._v("book"),n("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=a.exports}}]);