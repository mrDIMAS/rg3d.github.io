(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{320:function(e,t,i){"use strict";i.r(t);var a=i(15),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Fyrox is an "),t("a",{attrs:{href:"https://github.com/FyroxEngine/Fyrox",target:"_blank",rel:"noopener noreferrer"}},[e._v("open-source"),t("OutboundLink")],1),e._v(" Rust game engine with lots of out-of-box\ngame-ready features and a full-featured editor. This week was mostly dedicated to adding some new features\nand fixing existing functionality.")]),e._v(" "),t("h2",{attrs:{id:"ability-to-animate-material-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ability-to-animate-material-properties"}},[e._v("#")]),e._v(" Ability to Animate Material Properties")]),e._v(" "),t("p",[e._v("It is now possible to animate properties of any material, it adds a lot of control for various visual\neffects that use custom shaders. Animation editor is now able to bind to material properties, making\nsomething like this possible:")]),e._v(" "),t("p",[t("img",{attrs:{src:"/assets/twif12/material_animation.gif",alt:"material animation"}})]),e._v(" "),t("p",[e._v("This can be applied to pretty much any numeric shader uniform, which adds an ability to create any kinds\nof visual effects.")]),e._v(" "),t("h2",{attrs:{id:"reflection-improvements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reflection-improvements"}},[e._v("#")]),e._v(" Reflection Improvements")]),e._v(" "),t("p",[e._v("Reflection now supports hash maps. This functionality was added to have an ability to animate properties\nof materials via engine's animation system (see the gif above). This was a pretty easy change, but it\nadded more flexibility to the reflection system. The next improvement will be an ability to clone\n"),t("code",[e._v("dyn Reflect")]),e._v(" values to add an ability to copy-paste properties in the Inspector.")]),e._v(" "),t("h2",{attrs:{id:"audio-improvements-in-the-editor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#audio-improvements-in-the-editor"}},[e._v("#")]),e._v(" Audio Improvements in the Editor")]),e._v(" "),t("p",[e._v("Sound management in the editor now much more predictable and convenient. Previously, any sound in Playing\nstate would immediately start playing after you load a scene in the editor, making pretty much impossible\nto create sound effects. It is now fixed, every sound is now not updating until you start previewing it.\nThis can be done in a new audio preview panel:")]),e._v(" "),t("p",[t("img",{attrs:{src:"/assets/twif12/audio.png",alt:"audio preview panel"}}),e._v(".")]),e._v(" "),t("p",[e._v("To activate it, all you need to do is to select a Sound node. Then you need to click on "),t("code",[e._v("Preview")]),e._v(" checkbox\nand the sound will start playing. Any changes made in this panel will not be recorded in the scene, you\ncan play with the sound as you want to.")]),e._v(" "),t("h2",{attrs:{id:"automatic-resource-handle-restoration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#automatic-resource-handle-restoration"}},[e._v("#")]),e._v(" Automatic Resource Handle Restoration")]),e._v(" "),t("p",[e._v("When the engine saves a scene that has resource handles, those handles saves only path to resources, not\nthe actual content. When loading the same scene, the engine re-loads all resources, but all handles scattered\naround must be restored manually to point to actual resource data. This is now fixed, the engine will use\nreflection to iterate over each field of every scene node and restore the handles.")]),e._v(" "),t("h2",{attrs:{id:"other"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[e._v("#")]),e._v(" Other")]),e._v(" "),t("p",[e._v("Fixed terrain editing in the editor; its material property is now exposed in the Inspector. Terrains geometry\nis now update immediately when doing changes to the height map.")]),e._v(" "),t("p",[e._v("It is now possible to fetch standard shader names. Sound nodes now have validation, which check if a sound source\nhas missing sound buffer.")]),e._v(" "),t("p",[e._v("It is now possible to force the engine to create unique materials when instantiating a prefab.")]),e._v(" "),t("h2",{attrs:{id:"full-list-of-changes-in-random-order"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-list-of-changes-in-random-order"}},[e._v("#")]),e._v(" Full List of Changes in Random Order")]),e._v(" "),t("ul",[t("li",[e._v("Reflection for hash maps")]),e._v(" "),t("li",[e._v("Fixed "),t("code",[e._v("Debug")]),e._v(" trait implementation for "),t("code",[e._v("ImmutableString")])]),e._v(" "),t("li",[e._v("Expose material properties for reflection")]),e._v(" "),t("li",[e._v("Added support for hash maps in property selector")]),e._v(" "),t("li",[e._v("Ability to ignore some type when doing property inheritance")]),e._v(" "),t("li",[e._v("Reflection-based resource handle mapping")]),e._v(" "),t("li",[e._v("Access to terrain material via reflection")]),e._v(" "),t("li",[e._v("Immediate geometry rebuild for terrain instead of deferred.")]),e._v(" "),t("li",[e._v("Print texture resource name when failed to create its gpu representation.")]),e._v(" "),t("li",[e._v("Removed a possibility to create a deadlock in resource manager")]),e._v(" "),t("li",[e._v("Provided access to standard shader names")]),e._v(" "),t("li",[e._v("Ability to set pre-generated particles in particle systems")]),e._v(" "),t("li",[e._v("Fixed deadlock when selecting object's property in animation editor")]),e._v(" "),t("li",[e._v("Fixed crash when previewing a scene with a root node with limited lifetime")]),e._v(" "),t("li",[e._v("Ability to partially update global properties of an hierarchy of nodes")]),e._v(" "),t("li",[e._v("Audio preview panel")]),e._v(" "),t("li",[e._v("Prevent sounds from playing in the editor on their own.")]),e._v(" "),t("li",[e._v("Validation for sound node")]),e._v(" "),t("li",[e._v("Ability to get unique material instances when cloning a surface")]),e._v(" "),t("li",[e._v("Added "),t("code",[e._v("Model::instantiate_at")]),e._v(" method.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);