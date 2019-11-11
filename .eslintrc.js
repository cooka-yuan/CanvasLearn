module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    globals: {
        CONFIG_MAP: false,
        CONFIG: false,
        THING: false,
        CMAP: false,
        uino: false,
        axios: false,
        $: false,
        _: false,
        BMap: false,
        BMAP_NORMAL_MAP: false,
        BMAP_HYBRID_MAP: false,
    },
    rules: {
        // 强制 error
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 推荐 warn
        'max-len': ['warn', { 'code': 300 }],
        'vue/html-quotes': 'warn',
        'linebreak-style': ["error", "windows"],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
