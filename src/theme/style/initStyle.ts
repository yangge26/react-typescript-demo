export const initStyle = (function () {
    const styleElement = document.createElement('style')
    document.head.appendChild(styleElement)

    window.onresize = function () {
        init()
    }

    function init() {
        const maxWidth = (window.innerWidth - 222 - 72)
        const maxHeight = (window.innerHeight - 64 - 32 - 5 - 40 - 34 - 64)
        styleElement.innerHTML = `
        .search-panel .ant-table-body {
            max-width: ${maxWidth}px
        }
        .ant-card-body,
        .ant-table-body {
            max-width: ${maxWidth}px
        }
        .iframe-panel {
            position: relative;
            width: ${maxWidth}px;
            height: ${maxHeight}px;
        }
        .iframe-panel .iframe {
            width: 100%;
            height: 100%;
            border: 0;
        }
        `
    }

    init()
})()