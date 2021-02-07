import $ from 'jquery'

function changeBg(content){
    $(".categoryBg .content").html(content)
}
function typeClassAdd(index) {
    $(".categoryType dd:nth-of-type("+index+")").addClass("typeActive");
}
function typeClassRemove(index) {
    $(".categoryType dd:nth-of-type("+index+")").removeClass("typeActive");
}
function curAdd(index) {
    $(".curList dd:nth-of-type("+index+")").addClass("curItemActive");
}
function curRemove() {
    $(".curList dd").removeClass("curItemActive");
}

export default {
    changeBg,
    typeClassAdd,
    typeClassRemove,
    curAdd,
    curRemove
}
