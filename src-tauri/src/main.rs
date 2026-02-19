// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::sync::Mutex;

// O estado que queremos compartilhar
struct Profile {
    nome_usuario: Mutex<String>
}


fn main() {
    coflinho_lib::run();
}