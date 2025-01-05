function formatText(command, value = null) {
  document.execCommand(command, false, value);
}

function applyColor(command, color) {
  formatText(command, color);
}

function applyFontFamily(font) {
  formatText('fontName', font);
}

function applyFontSize(size) {
  formatText('fontSize', size);
}