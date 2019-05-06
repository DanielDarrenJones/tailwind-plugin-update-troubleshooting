const postcss = require('postcss')

module.exports = {
    plugins: [
        function({ addVariant, e }) {
            addVariant('pointer-coarse', ({ container, separator }) => {
                const pointerCoarse = postcss.atRule({ name: 'media', params: '(pointer: coarse)' })
                pointerCoarse.nodes = container.nodes
                container.nodes = [pointerCoarse]
                pointerCoarse.walkRules(rule => {
                    rule.selector = `.${e(`pointer-coarse${separator}${rule.selector.slice(1)}`)}`
                })
            })
            addVariant('pointer-fine', ({ container, separator }) => {
                const pointerFine = postcss.atRule({ name: 'media', params: '(pointer: fine)' })
                pointerFine.nodes = container.nodes
                container.nodes = [pointerFine]
                pointerFine.walkRules(rule => {
                    rule.selector = `.${e(`pointer-fine${separator}${rule.selector.slice(1)}`)}`
                })
            })
            addVariant('pointer-none', ({ container, separator }) => {
                const pointerNone = postcss.atRule({ name: 'media', params: '(pointer: none)' })
                pointerNone.nodes = container.nodes
                container.nodes = [pointerNone]
                pointerNone.walkRules(rule => {
                    rule.selector = `.${e(`pointer-none${separator}${rule.selector.slice(1)}`)}`
                })
            })
            addVariant('hover-hover', ({ container, separator }) => {
                const hoverHover = postcss.atRule({ name: 'media', params: '(hover: hover)' })
                hoverHover.nodes = container.nodes
                container.nodes = [hoverHover]
                hoverHover.walkRules(rule => {
                    rule.selector = `.${e(`hover-hover${separator}${rule.selector.slice(1)}`)}`
                })
            })
            addVariant('hover-none', ({ container, separator }) => {
                const hoverNone = postcss.atRule({ name: 'media', params: '(hover: none)' })
                hoverNone.nodes = container.nodes
                container.nodes = [hoverNone]
                hoverNone.walkRules(rule => {
                    rule.selector = `.${e(`hover-none${separator}${rule.selector.slice(1)}`)}`
                })
            })
        }
    ]
}
