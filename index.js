let netlify_proj = document.getElementById("netlify_project");
let git_proj = document.getElementById("github_project");
let netlify_proj_block = document.getElementById("netlify_block");
let git_proj_block = document.getElementById("git_block");
netlify_proj.onmouseover = function () {
    change_color_in_netlify()
}
netlify_proj.onmouseout = function () {
    change_color_out_netlify()
}
git_proj.onmouseover = function () {
    change_color_in_git()
}
git_proj.onmouseout = function () {
    change_color_out_git()
}

function change_color_in_netlify() {
    netlify_proj_block.style.backgroundColor = "black";
    // netlify_proj_block.style.border = "2px solid white";
}
function change_color_out_netlify() {
    netlify_proj_block.style.backgroundColor = "white";
    netlify_proj_block.style.border = "none";
}
function change_color_in_git() {
    git_proj_block.style.backgroundColor = "black";
    // git_proj_block.style.border = "2px solid #a1e8ff";
}
function change_color_out_git() {
    git_proj_block.style.backgroundColor = "rgb(0,80,255)";
    git_proj_block.style.border = "none";
}


let iit_kgp_wrap = document.getElementById("iit_kgp_wrap");
let iit_kgp = document.getElementById("iit_kgp");

iit_kgp_wrap.onmouseover = function() {
    zoom_in_iit_kgp()
}
iit_kgp_wrap.onmouseout = function() {
    zoom_out_iit_kgp()
}

function zoom_in_iit_kgp() {
    iit_kgp.style.transform = "scale(1.2, 1.2)";
}
function zoom_out_iit_kgp() {
    iit_kgp.style.transform = "scale(1,1)";
}
let lang_wrap = document.getElementById("language_wrap");
let lang = document.getElementById("language");

lang_wrap.onmouseover = function() {
    zoom_in_lang()
}
lang_wrap.onmouseout = function() {
    zoom_out_lang()
}

function zoom_in_lang() {
    lang.style.transform = "scale(1.2, 1.2)";
}
function zoom_out_lang() {
    lang.style.transform = "scale(1,1)";
}

let version_wrap = document.getElementById("version_wrap");
let version = document.getElementById("version");

version_wrap.onmouseover = function() {
    zoom_in_version()
}
version_wrap.onmouseout = function() {
    zoom_out_version()
}

function zoom_in_version() {
    version.style.transform = "scale(1.2, 1.2)";
}
function zoom_out_version() {
    version.style.transform = "scale(1,1)";
}



