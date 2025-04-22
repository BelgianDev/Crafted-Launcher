{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "Crafted Launcher Dev Shell";

  buildInputs = with pkgs; [
    # SDK
    nodejs_22
    rustup

    # Tauri Dependencies
    webkitgtk_4_1
    gtk3
    cairo
    gdk-pixbuf
    glib
    dbus
    openssl_3
    librsvg
    curl
    wget
    pkg-config
    dbus
    openssl_3
    libsoup
  ];

  shellHook = ''
    export WEBKIT_DISABLE_DMABUF_RENDERER=1
  '';
}
