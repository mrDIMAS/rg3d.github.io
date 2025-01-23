(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{308:function(t,e,a){"use strict";a.r(e);var s=a(15),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("This post starts a series of weekly progress reports in development of Fyrox Game Engine. Fyrox is a Rust\ngame engine with lots of out-of-box game-ready features and a full-featured editor. This progress report is a\nbit special, because it will cover everything that happened in the engine from the\n"),e("a",{attrs:{href:"https://fyrox.rs/blog/post/feature-highlights-0-28/",target:"_blank",rel:"noopener noreferrer"}},[t._v("previous major release"),e("OutboundLink")],1),t._v(" which happened almost 4 weeks\nago. You can consider this post as a monthly progress report if you like. The list of changes is quite big, so\nlet's get started.")]),t._v(" "),e("h2",{attrs:{id:"node-selector-widget"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-selector-widget"}},[t._v("#")]),t._v(" Node Selector Widget")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/twif1/node_selector.png",alt:"node selector"}})]),t._v(" "),e("p",[t._v("Node selector helps you to select a node in scene, it could be a node for "),e("code",[t._v("Handle<Node>")]),t._v(" fields in your script,\nor a node for some further actions (see below). You can find a node by its name, confirm or cancel selection via\nrespective buttons.")]),t._v(" "),e("h2",{attrs:{id:"property-selector-widget"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#property-selector-widget"}},[t._v("#")]),t._v(" Property Selector Widget")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/twif1/property_selector.png",alt:"property selector"}})]),t._v(" "),e("p",[t._v("Property selector allows you to select a property path from any object that implements "),e("code",[t._v("Reflect")]),t._v(" trait, it's\nmain usage is in new animation editor. The path then can be used to set a new value for a property the path\nleads to. The selector allows you to find a property by its name, config or cancel selection via respective\nbuttons.")]),t._v(" "),e("h2",{attrs:{id:"animation-system-improvements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#animation-system-improvements"}},[t._v("#")]),t._v(" Animation System Improvements")]),t._v(" "),e("p",[t._v("For a long time, animation system in the engine was capable to animate only position, rotation, and scale of\nscene nodes. Now its changed - you can animate pretty much any numeric property using a functional curve to\ndescribe complex laws of change for the property. Such functionality is done via reflection. To be efficient,\nthe engine uses special bindings for position, rotation, and scale.")]),t._v(" "),e("p",[t._v("As part of the animation system improvements, new "),e("code",[t._v("Animation")]),t._v(" asset was added. It contains list of tracks that\nare bound to some properties of a specific set of scene nodes.")]),t._v(" "),e("p",[t._v("The animation system will be improved/changed some more to work seamlessly with the new animation editor (see\nbelow).")]),t._v(" "),e("h2",{attrs:{id:"animation-editor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#animation-editor"}},[t._v("#")]),t._v(" Animation Editor")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/twif1/animation_editor.png",alt:"animation editor"}})]),t._v(" "),e("p",[t._v("Fyrox 0.29 will have its own animation editor, that will help you to animate arbitrary numeric properties of\nscene nodes, including data in scripts. The screenshot above shows its current state, it is far from completion,\nbut it already has basic functionality. On the left side there is a list of tracks, each track represents animation\nof a single property (it could position, rotation, scale or any arbitrary numeric property). On the right side\nthere is a curve editor that shows how the value change over time.")]),t._v(" "),e("h2",{attrs:{id:"sprite-sheet-editor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sprite-sheet-editor"}},[t._v("#")]),t._v(" Sprite Sheet Editor")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/twif1/sprite_sheet_editor.png",alt:"sprite sheet editor"}})]),t._v(" "),e("p",[t._v("Sprite sheet editor should help you to select desired frames for animation based on a series of frames, packed\ninto a single texture. Such animations are used in many 2D games, they're very cheap and quite easy to create.")]),t._v(" "),e("p",[t._v("In action the editor looks like so:")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/twif1/sprite_sheet.gif",alt:"sprite sheet editor in action"}})]),t._v(" "),e("h2",{attrs:{id:"scene-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scene-settings"}},[t._v("#")]),t._v(" Scene Settings")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/twif1/scene_settings.png",alt:"scene settings"}})]),t._v(" "),e("p",[t._v("It is now possible to edit scene settings, which includes physics (2D and 3D) integration parameters, ambient\nlighting color, whether the scene is enabled or not and some more.")]),t._v(" "),e("h2",{attrs:{id:"validation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[t._v("#")]),t._v(" Validation")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/twif1/validation.png",alt:"validation"}})]),t._v(" "),e("p",[t._v("The engine now validates scene nodes for invalid uses, it checks for most common mistakes, like:")]),t._v(" "),e("ul",[e("li",[t._v("Using a rigid body without a collider and vice versa.")]),t._v(" "),e("li",[t._v("Using a joint with invalid attached bodies (or not set).")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/twif1/validation.gif",alt:"validation in action"}})]),t._v(" "),e("p",[t._v("The list of check will be improved in the future, currently it should help you to use the engine is a correct way.")]),t._v(" "),e("h2",{attrs:{id:"reflection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reflection"}},[t._v("#")]),t._v(" Reflection")]),t._v(" "),e("p",[e("code",[t._v("Inspect")]),t._v(" trait's functionality was merged into "),e("code",[t._v("Reflect")]),t._v(" trait, it is now possible to query fields metadata while\niterating over its fields:")]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("fyrox"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("core"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("reflect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("prelude"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[derive(Reflect)]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Foo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[reflect(\n        description = "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A bar property. This attribute will be show in tooltip for the property in the Inspector"')]),t._v(",\n        display_name = "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),t._v(",\n        min_value = 0.0,\n        max_value = 100.0\n    )]")]),t._v("\n    bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[reflect(description = "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Some other property."')]),t._v(")]")]),t._v("\n    baz"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("iterate_properties")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        bar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        baz"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("to_owned")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("field"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" field_info"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fields")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("iter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fields_info")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Field name: {}\\nDescription: {}\\nValue: {:?}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            field_info"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" field_info"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("description"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" field\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"book"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#book"}},[t._v("#")]),t._v(" Book")]),t._v(" "),e("p",[t._v("The book has some improvements as well - the main one is a chapter about\n"),e("a",{attrs:{href:"https://fyrox-book.github.io/scene/camera_node.html#picking",target:"_blank",rel:"noopener noreferrer"}},[t._v("camera picking"),e("OutboundLink")],1),t._v(" (a way to select an object\nby mouse in a scene).")]),t._v(" "),e("h2",{attrs:{id:"full-list-of-changes-in-random-order"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-list-of-changes-in-random-order"}},[t._v("#")]),t._v(" Full List of Changes in Random Order")]),t._v(" "),e("ul",[e("li",[t._v("Fixed potential crash when joint was initialized earlier than connected rigid bodies.")]),t._v(" "),e("li",[t._v("Model instantiation scaling now used for prefab preview.")]),t._v(" "),e("li",[t._v("Fixed lots of potential sources of panic in perspective and ortho projections.")]),t._v(" "),e("li",[t._v("Fixed editor's camera movement speed setting for 3D mode.")]),t._v(" "),e("li",[t._v('Standard "two-side" shader - useful for foliage and grass (kudos to '),e("a",{attrs:{href:"https://github.com/IceGuye",target:"_blank",rel:"noopener noreferrer"}},[t._v("IceGuye"),e("OutboundLink")],1),t._v(").")]),t._v(" "),e("li",[t._v("Sprite sheet editor")]),t._v(" "),e("li",[t._v("Support for "),e("code",[t._v("Vector(2/3/4)<f32/f64/u8/i8/u16/i16/u32/i32/u64/i64>")]),t._v(" types in serializer.")]),t._v(" "),e("li",[t._v("Sprite sheet animation now uses frames coordinates instead of explicit uv rectangles for each frame.")]),t._v(" "),e("li",[t._v("Sprite sheet animation now has a texture associated with it.")]),t._v(" "),e("li",[t._v("Fixed reflection fallback in case of missing field setter.")]),t._v(" "),e("li",[t._v("Ability to set uv rect for Image widget")]),t._v(" "),e("li",[t._v("Scene settings window for the editor - gives you an ability to edit scene settings: change\nphysics integration parameters, ambient lighting color, various flags, etc.")]),t._v(" "),e("li",[t._v("Prevent crash when adding a new surface to a Mesh node in the editor")]),t._v(" "),e("li",[t._v("Fixed directory/file duplicates in file browser widget when double-clicking on an item.")]),t._v(" "),e("li",[t._v("Show use count for materials in Inspector")]),t._v(" "),e("li",[t._v("Replace "),e("code",[t._v("Arc<Mutex<Material>>")]),t._v(" with "),e("code",[t._v("SharedMaterial")]),t._v(" new-type.")]),t._v(" "),e("li",[t._v("Ability to assign a unique copy of a material to an object.")]),t._v(" "),e("li",[t._v("Replace "),e("code",[t._v("Arc<Mutex<Material>>")]),t._v(" with "),e("code",[t._v("SurfaceSharedData")])]),t._v(" "),e("li",[t._v("Clear collections before deserialization")]),t._v(" "),e("li",[t._v("Property inheritance for collections")]),t._v(" "),e("li",[t._v("Fixed incorrect material replacement when loading a scene with an FBX with custom materials.")]),t._v(" "),e("li",[t._v("Added Blender material slots names in FBX loader")]),t._v(" "),e("li",[t._v("Access to "),e("code",[t._v("procedural")]),t._v(" flag for "),e("code",[t._v("SurfaceData")])]),t._v(" "),e("li",[t._v("Ability to set penalty for vertices in A* pathfinder (kudos to "),e("a",{attrs:{href:"https://github.com/Cordain",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cordain"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("li",[t._v("Property editor for mesh's surface data.")]),t._v(" "),e("li",[t._v("Validation for scene nodes\n"),e("ul",[e("li",[t._v("Helps to find invalid cases like:")]),t._v(" "),e("li",[t._v("Missing joint bodies or invalid types of bodies (i.e. use 2d rigid body for 3d joint)")]),t._v(" "),e("li",[t._v("Wrongly attached colliders (not being a child of a rigid body)")]),t._v(" "),e("li",[t._v("Shows small exclamation mark if there's something wrong with a node")])])]),t._v(" "),e("li",[t._v("Share tooltip across widgets on clone")]),t._v(" "),e("li",[t._v("Fixed color picker: brightness-saturation grid wasn't visible")]),t._v(" "),e("li",[t._v("Added support for Collider intersection check (kudos to "),e("a",{attrs:{href:"https://github.com/ThomasHauth",target:"_blank",rel:"noopener noreferrer"}},[t._v("ThomasHauth"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("li",[t._v("Animation resource.")]),t._v(" "),e("li",[t._v("Animation system refactoring\n"),e("ul",[e("li",[t._v("Use curves for numeric properties.")]),t._v(" "),e("li",[t._v("Ability to animate arbitrary numeric properties via reflection.")])])]),t._v(" "),e("li",[t._v("Prevent crash in case of invalid node handle in animation")]),t._v(" "),e("li",[e("code",[t._v("Curve::value_at")]),t._v(" optimization - 2x performance improvement of using binary search for spans.")]),t._v(" "),e("li",[e("code",[t._v("Curve::add_key")]),t._v(" optimized insertion using binary search.")]),t._v(" "),e("li",[t._v("Node Selector widget - allows you to pick a node from a scene.")]),t._v(" "),e("li",[t._v("Merge "),e("code",[t._v("Inspect")]),t._v(" trait functionality into "),e("code",[t._v("Reflect")]),t._v(" trait - it is now possible to obtain fields metadata\nwhile iterating over them.")]),t._v(" "),e("li",[t._v("Property Selector widget - allows you to pick a property path from an object that supports "),e("code",[t._v("Reflect")]),t._v(" trait.")]),t._v(" "),e("li",[e("code",[t._v("Reflect")]),t._v(" implementation for "),e("code",[t._v("Uuid")])]),t._v(" "),e("li",[e("code",[t._v("fyrox::gui::utils::make_cross")]),t._v(" - small helper to create a vector image of a cross")]),t._v(" "),e("li",[e("code",[t._v("FieldInfo::type_name")]),t._v(" - allows to get type name of a field without using unstable\n"),e("code",[t._v("std::any::type_name_of_val")])])]),t._v(" "),e("h2",{attrs:{id:"support"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#support"}},[t._v("#")]),t._v(" Support")]),t._v(" "),e("p",[t._v("If you want to support the development of the project, click one of the links below. Preferable way is to use\n"),e("a",{attrs:{href:"https://boosty.to/fyrox",target:"_blank",rel:"noopener noreferrer"}},[t._v("Boosty"),e("OutboundLink")],1),t._v(" - this way the money will be available for the development immediately.\nAlternatively you can can use "),e("a",{attrs:{href:"https://www.patreon.com/mrdimas",target:"_blank",rel:"noopener noreferrer"}},[t._v("Patreon"),e("OutboundLink")],1),t._v(", but in this case the money will\nbe on-hold for unknown period of time ("),e("a",{attrs:{href:"https://github.com/FyroxEngine/Fyrox/issues/363",target:"_blank",rel:"noopener noreferrer"}},[t._v("details are here"),e("OutboundLink")],1),t._v(").")]),t._v(" "),e("p",[t._v("Also, you can help by fixing one of the "),e("a",{attrs:{href:"https://github.com/FyroxEngine/Fyrox/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22",target:"_blank",rel:"noopener noreferrer"}},[t._v('"good first issues" '),e("OutboundLink")],1),t._v(",\nadding a desired feature to the engine, or making a contribution to the "),e("a",{attrs:{href:"https://github.com/fyrox-book",target:"_blank",rel:"noopener noreferrer"}},[t._v("book"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);