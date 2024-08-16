// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
    rules: [
        [/^button-(.*)$/, ([, type]) => {
            let backgroundColor;
            switch (type) {
                case 'confirm':
                    backgroundColor = '#55914e';
                    break;
                case 'cancel':
                    backgroundColor = '#cc503f';
                    break;
                case 'edit':
                    backgroundColor = '#5587d9';
                    break;
                default:
                    backgroundColor = 'gray';
            }
            return {
                color: '#f0cfd0',
                'text-transform': 'uppercase',
                'min-width': '45px',
                padding: '15px',
                margin: '5px',
                border: '1px solid #f0cfd0',
                'background-color': '#1e1fa1',
            };
        }],
        ['done', {'text-decoration': 'line-through', color: "#b5b5b5", border: '1px solid #b2aaab', opacity: '0.3'}],
    ]
})