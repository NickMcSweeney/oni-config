
import * as React from "react"
import * as Oni from "oni-api"

export const activate = (oni: Oni.Plugin.Api) => {
    console.log("config activated")

    // Input
    //
    // Add input bindings here:
    //
    // oni.input.bind("<c-enter>", () => console.log("Control+Enter was pressed"))

    //
    // Or remove the default bindings here by uncommenting the below line:
    //
    // oni.input.unbind("<c-p>")

}

export const deactivate = (oni: Oni.Plugin.Api) => {
    console.log("config deactivated")
}

export const configuration = {
    //add custom config here, such as

    "ui.colorscheme": "gruvbox_dark",

    "oni.useDefaultConfig": true,
    //"oni.bookmarks": ["~/Documents"],
    "oni.loadInitVim": "~/.config/nvim/init.vim",
    "editor.fontSize": "14px",
    //"editor.fontFamily": "inconsolata,"
    "editor.textMateHighlighting.enabled": true,

    // UI customizations
    "ui.animations.enabled": true,
    "ui.fontSmoothing": "auto",

    // Language Support
    // VUE
    "language.vue.languageServer.command":"vls"
    // JAVA
//     "language.java.languageServer.command": "java",
//     "language.java.languageServer.arguments": [
//         "-Declipse.application=org.eclipse.jdt.ls.core.id1",
//         "-Dosgi.bundles.defaultStartLevel=4",
//         "-Declipse.product=org.eclipse.jdt.ls.core.product",
//         "-Dlog.protocol=true",
//         "-Dlog.level=NONE",
//         "-noverify",
//         "-Xmx1G",
//         "-jar",
//         "/usr/share/java/jdtls/plugins/org.eclipse.equinox.launcher_1.5.0.v20180207-1446.jar",
//         "-configuration",
//         "/usr/share/java/jdtls/config_linux",
//         "-data"
//     ],
//     "language.java.languageServer.rootFiles": ["pom.xml"],
    // PYTHON
    // python-language-server
}
