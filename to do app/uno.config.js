// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: '#f0cfd0',
      'primary-shadow': '#b2aaab',
      secondary: '#1e1fa1'
    },
    fontFamily: {
      sans: ['Arial, Helvetica, sans-serif']
    },
    breakpoints: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'xxl': '1536px',
    }
  },
    // rules:
    //     [
    //       [
    //         /^(mp)(?:-([tblr]))?-(\d+)$/, ([type, direction, value]) => {
    //           const typeMap = {
    //             m: 'margin',
    //             p: 'padding'
    //           };
    //           const dirMap = {
    //             t: 'top',
    //             b: 'bottom',
    //             l: 'left',
    //             r: 'right'
    //           };

    //           if (direction) {
    //             return {[`${typeMap[type]}-${dirMap[direction]}`]: `${(value / 2)}rem`}
    //           } else {
    //             return {[`${typeMap[type]}`]: `${(value / 2)}rem`};
    //           }
    //         }
    //       ],
    //       [
    //         /^(wh)-(\d+)$/, ([type, value]) => {
    //           const typeMap = {
    //             w: 'width',
    //             h: 'height'
    //           };
    //           return {[`${typeMap[type]}`]: `${(value*2)}rem`}
    //         }
    //       ],
    //       [/^text-(.*)$/, ([, c], { theme }) => {
    //         if (theme.colors[c])
    //         return { color: theme.colors[c] }
    //       }],
    //     [/^button-(.*)$/, ([, type]) => {
    //       let backgroundColor;
    //         switch (type) {
    //             case 'confirm':
    //                 backgroundColor = '#55914e';
    //                 break;
    //             case 'cancel':
    //                 backgroundColor = '#cc503f';
    //                 break;
    //             case 'edit':
    //                 backgroundColor = '#5587d9';
    //                 break;
    //             default:
    //                 backgroundColor = 'gray';
    //         }
    //         return {
    //             color: '#f0cfd0',
    //             'text-transform': 'uppercase',
    //             'min-width': '45px',
    //             padding: '15px',
    //             margin: '5px',
    //             border: '1px solid #f0cfd0',
    //             'background-color': '#1e1fa1',
    //         };
    //     }],
    //     ['done', {'text-decoration': 'line-through', color: "#b5b5b5", border: '1px solid #b2aaab', opacity: '0.3'}],
    // ]
})