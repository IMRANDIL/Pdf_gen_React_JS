﻿import { jsPDF } from "jspdf"
export default function addCustomFont() {
var callAddFont = function () {
this.addFileToVFS('NotoSansDevanagari-VariableFont_wdth,wght-normal.ttf', font);
this.addFont('NotoSansDevanagari-VariableFont_wdth,wght-normal.ttf', 'NotoSansDevanagari-VariableFont_wdth,wght', 'normal');
};
jsPDF.API.events.push(['addFonts', callAddFont])
}