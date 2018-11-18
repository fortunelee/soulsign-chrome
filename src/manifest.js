module.exports = {
    name: '魂签',
    version: '1.0.3',
    description: '自动签到',
    author: 'inu1255',
    manifest_version: 2,
    icons: { '16': 'icons/16.png', '48': 'icons/48.png', '128': 'icons/128.png' },
    permissions: [
        '<all_urls>',
        '*://*/*',
        'tabs',
        'cookies',
        'background',
        'contextMenus',
        'unlimitedStorage',
        'storage',
        'notifications',
        'identity',
        'identity.email',
        'webRequest',
        'webRequestBlocking'
    ],
    browser_action: {
        default_title: '魂签',
        default_popup: 'pages/popup.html'
    },
    background: {
        persistent: true,
        page: 'pages/background.html'
    },
    //   devtools_page: 'pages/devtools.html',
    options_page: 'pages/options.html',
    // content_scripts: [{
    //     js: ['js/inject.js'],
    //     run_at: 'document_end',
    //     matches: ['<all_urls>'],
    //     all_frames: true
    // }],
    content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'",
    // web_accessible_resources: ['panel.html', 'js/content.js']
};