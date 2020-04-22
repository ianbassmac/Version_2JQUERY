//source: https://www.youtube.com/watch?v=FX1xb1cim7E
//source: https://github.com/Simonwep/pickr
var highlight_color;

// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'monolith', // or 'monolith', or 'nano'
    position: 'middle-start',

    swatches: [
        '#00FDFF',
        '#00F900',
        '#FF40FF',
        '#FF9300',
        '#FFFB00',
        '#FF85FF'
    ],

    components: {

        // Main components
        preview: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

pickr.on('init', instance => {
    console.log('init', instance);
}).on('hide', instance => {
    console.log('hide', instance);
}).on('show', (color, instance) => {
    console.log('show', color, instance);
}).on('save', (color, instance) => {
    console.log('save', color, instance);
}).on('clear', instance => {
    console.log('clear', instance);
}).on('change', (color, instance) => {
    console.log('change', color, instance);
    highlight_color = color;
    $('.hover').css('background-color',highlight_color);
}).on('changestop', instance => {
    console.log('changestop', instance);
}).on('cancel', instance => {
    console.log('cancel', instance);
}).on('swatchselect', (color, instance) => {
    console.log('swatchselect', color, instance);
});











