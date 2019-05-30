const {
  jsx,
} = require('theme-ui')

const noflash = `
(function() {
  try {
    var mode = localStorage.getItem('theme-ui-color-mode');
    if (!mode) return
    document.body.classList.add('theme-ui-' + mode);
  } catch (e) {
  }
})();
`

exports.onRenderBody = ({
  setPreBodyComponents,
}) => {
  const script = jsx('script', {
    dangerouslySetInnerHTML: {
      __html: noflash
    }
  })
  setPreBodyComponents([ script ])
}
