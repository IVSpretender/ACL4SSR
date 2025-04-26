// 需要排除的节点名称正则
const excludeRegexStr = "^(?!.*(webshare|免费)).*";
const excludeRegex = new RegExp(excludeRegexStr, "u");

const userRules = [
  // 用户自定义规则，优先级最高
  "PROCESS-NAME,qbittorrent.exe,DIRECT",
  "DOMAIN-SUFFIX,injections.adguard.org,DIRECT",
  "DOMAIN-SUFFIX,ibm.com,IBM",
  "DOMAIN-SUFFIX,gstatic.com,PROXY",
  "DOMAIN-SUFFIX,recaptcha.net,PROXY",
]
// 用户自定义分组，配合用户自定义规则使用
const userSelectorNames = ["IBM"]
// webshare节点
const webshareNodeList= 
    [
      {
        "name": "webshare name",
        "server": "0.0.0.0", //链式代理ip
        "port": 1, //链式代理端口
        "type": "socks5",
        "username": "username1", //链式代理账号
        "password": "password1", //链式代理密码
        "tls": false,
        "skip-cert-verify": true,
        // "udp": true
      },
    ]
const ruleProviders = {
  // "Ipv6": {
  //   "type": "http",
  //   "format": "yaml",
  //   "interval": 86400,
  //   "behavior": "classical",
  //   "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/Ipv6.txt",
  //   "path": "./ruleset/tnnevol/Ipv6.yaml"
  // },
  "LocalAreaNetwork": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/LocalAreaNetwork.txt",
    "path": "./ruleset/tnnevol/LocalAreaNetwork.yaml"
  },
  "BanAD": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/BanAD.txt",
    "path": "./ruleset/tnnevol/BanAD.yaml"
  },
  "BanProgramAD": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/BanProgramAD.txt",
    "path": "./ruleset/tnnevol/BanProgramAD.yaml"
  },
  // "GoogleFCM": {
  //   "type": "http",
  //   "format": "yaml",
  //   "interval": 86400,
  //   "behavior": "classical",
  //   "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/GoogleFCM.txt",
  //   "path": "./ruleset/tnnevol/GoogleFCM.yaml"
  // },
  // "Bing": {
  //   "type": "http",
  //   "format": "yaml",
  //   "interval": 86400,
  //   "behavior": "classical",
  //   "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/Bing.txt",
  //   "path": "./ruleset/tnnevol/Bing.yaml"
  // },
  "OneDrive": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/OneDrive.txt",
    "path": "./ruleset/tnnevol/OneDrive.yaml"
  },
  "Microsoft": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/Microsoft.txt",
    "path": "./ruleset/tnnevol/Microsoft.yaml"
  },
  // "Apple": {
  //   "type": "http",
  //   "format": "yaml",
  //   "interval": 86400,
  //   "behavior": "classical",
  //   "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/Apple.txt",
  //   "path": "./ruleset/tnnevol/Apple.yaml"
  // },
  "Telegram": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/Telegram.txt",
    "path": "./ruleset/tnnevol/Telegram.yaml"
  },
  "OpenAi": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/OpenAi.txt",
    "path": "./ruleset/tnnevol/OpenAi.yaml"
  },
  // "NetEaseMusic": {
  //   "type": "http",
  //   "format": "yaml",
  //   "interval": 86400,
  //   "behavior": "classical",
  //   "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/NetEaseMusic.txt",
  //   "path": "./ruleset/tnnevol/NetEaseMusic.yaml"
  // },
  "Games": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/Games.txt",
    "path": "./ruleset/tnnevol/Games.yaml"
  },
  // "YouTube": {
  //   "type": "http",
  //   "format": "yaml",
  //   "interval": 86400,
  //   "behavior": "classical",
  //   "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/YouTube.txt",
  //   "path": "./ruleset/tnnevol/YouTube.yaml"
  // },
  // "Netflix": {
  //   "type": "http",
  //   "format": "yaml",
  //   "interval": 86400,
  //   "behavior": "classical",
  //   "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/Netflix.txt",
  //   "path": "./ruleset/tnnevol/Netflix.yaml"
  // },
  // "Bahamut": {
  //   "type": "http",
  //   "format": "yaml",
  //   "interval": 86400,
  //   "behavior": "classical",
  //   "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/Bahamut.txt",
  //   "path": "./ruleset/tnnevol/Bahamut.yaml"
  // },
  // "Bilibili": {
  //   "type": "http",
  //   "format": "yaml",
  //   "interval": 86400,
  //   "behavior": "classical",
  //   "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/Bilibili.txt",
  //   "path": "./ruleset/tnnevol/Bilibili.yaml"
  // },
  "ChinaMedia": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/ChinaMedia.txt",
    "path": "./ruleset/tnnevol/ChinaMedia.yaml"
  },
  // "ProxyMedia": {
  //   "type": "http",
  //   "format": "yaml",
  //   "interval": 86400,
  //   "behavior": "classical",
  //   "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/ProxyMedia.txt",
  //   "path": "./ruleset/tnnevol/ProxyMedia.yaml"
  // },
  "ProxyGFWlist": {
    "type": "http",
    "format": "yaml",
    "interval": 86400,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/tnnevol/ACL4SSR/refs/heads/master/ClashVerge/dist/clash-rules/acl4ssr-online-full/ProxyGFWlist.txt",
    "path": "./ruleset/tnnevol/ProxyGFWlist.yaml"
  }
};

const rules = [
    ...userRules,
    ...[
  // "RULE-SET,Ipv6,🔗 Ipv6",
  "RULE-SET,LocalAreaNetwork,🎯 全球直连",
  "RULE-SET,BanAD,🛑 广告拦截",
  "RULE-SET,BanProgramAD,🍃 应用净化",
  // "RULE-SET,GoogleFCM,📢 谷歌FCM",
  // "RULE-SET,Bing,Ⓜ️ 微软Bing",
  "RULE-SET,OneDrive,Ⓜ️ 微软云盘",
  "RULE-SET,Microsoft,Ⓜ️ 微软服务",
  // "RULE-SET,Apple,🍎 苹果服务",
  "RULE-SET,Telegram,📲 电报消息",
  "RULE-SET,OpenAi,💬 OpenAi",
  // "RULE-SET,NetEaseMusic,🎶 网易音乐",
  "RULE-SET,Games,🎮 游戏平台",
  // "RULE-SET,YouTube,📹 油管视频",
  // "RULE-SET,Netflix,🎥 奈飞视频",
  // "RULE-SET,Bahamut,📺 巴哈姆特",
  // "RULE-SET,Bilibili,📺 哔哩哔哩",
  "RULE-SET,ChinaMedia,🌏 国内媒体",
  // "RULE-SET,ProxyMedia,🌍 国外媒体",
  "RULE-SET,ProxyGFWlist,PROXY"
],
    // 其他规则
    ...[],
    "GEOIP,LAN,🎯 全球直连,no-resolve",
    "GEOIP,CN,🎯 全球直连,no-resolve",
    "MATCH,🐟 漏网之鱼"
];

// 代理组通用配置
const groupBaseOption = {
  "interval": 300,
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};

// 获取符合正则表达式的代理组
function getProxiesByRegex(proxies, regex, concatProxies = []) {
  return [
    ...proxies
      .filter((e) => regex.test(e.name) && excludeRegex.test(e.name))
      .map((e) => e.name),
    ...concatProxies,
  ];
}

function main(config) {
    webshareNodeList.forEach(node => {
      config.proxies.push(node);
    });
    // 狮城地区
    const SingaporeRegex = /新加坡|坡|狮城|SG|Singapore/u;
    const SingaporeProxies = getProxiesByRegex(config.proxies, SingaporeRegex);

    // 日本地区
    const JapanRegex = /日本|川日|东京|大阪|泉日|埼玉|沪日|深日|JP|Japan|Tokyo/u;
    const JapanProxies = getProxiesByRegex(config.proxies, JapanRegex);

    // 美国地区
    const AmericaRegex =
        /美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|US|United States/u;
    const AmericaProxies = getProxiesByRegex(config.proxies, AmericaRegex);

    // 台湾地区
    const TaiwanRegex = /台|新北|彰化|TW|Taiwan/u;
    const TaiwanProxies = getProxiesByRegex(config.proxies, TaiwanRegex);

    // 🇭🇰 香港节点
    const HongKongRegex = /港|HK|hk|Hong Kong|HongKong|hongkong|Hongkong|🇭🇰/u;
    const HongKongProxies = getProxiesByRegex(config.proxies, HongKongRegex);

    // 🇺🇲 美国节点
    const US = {
        ...groupBaseOption,
        name: "🇺🇲 美国节点",
        type: "url-test",
        tolerance: 30,
        proxies: AmericaProxies,
    };

    // 🇭🇰 香港节点
    const HongKong = {
        ...groupBaseOption,
        name: "🇭🇰 香港节点",
        type: "url-test",
        tolerance: 30,
        proxies: HongKongProxies,
    };

    // 🇨🇳 台湾节点
    const Taiwan = {
        ...groupBaseOption,
        name: "🇨🇳 台湾节点",
        type: "url-test",
        tolerance: 30,
        proxies: TaiwanProxies,
    };

    // 🇯🇵 日本节点
    const Japan = {
        ...groupBaseOption,
        name: "🇯🇵 日本节点",
        type: "url-test",
        tolerance: 30,
        proxies: JapanProxies,
    };

    // 🇸🇬 狮城节点
    const Singapore = {
        ...groupBaseOption,
        name: "🇸🇬 狮城节点",
        type: "url-test",
        tolerance: 30,
        proxies: SingaporeProxies,
    };

    // 所有区域节点
    const allAreaGroup = [HongKong, Taiwan, US, Japan, Singapore]
        .filter((point) => {
            return point.proxies.length > 0;
        })
    const allAreaProxiesNames = allAreaGroup
        .map((point) => point.name);

    // 通用的节点组
    const commonProxies = [
        "PROXY",
        // "♻️ 自动选择",
        // "🚀 手动切换",
        // "故障转移",
        // "负载均衡(散列)",
        // "负载均衡(轮询)",
        ...allAreaProxiesNames,
        "DIRECT",
    ];

    // // 🎶 网易音乐
    // const NetEaseRegex = /网易|音乐|解锁|Music|NetEase/u;
    // const NetEaseProxies = getProxiesByRegex(config.proxies, NetEaseRegex, [
    //     "DIRECT",
    //     "PROXY",
    //     "♻️ 自动选择",
    // ]);

    // // 🎥 奈飞节点
    // const NetflixRegex = /NF|奈飞|解锁|Netflix|NETFLIX|Media/u;
    // const NetflixProxies = getProxiesByRegex(config.proxies, NetflixRegex, [
    //     "DIRECT",
    //     "REJECT"
    // ]);


    // 覆盖原配置中DNS配置
    config["dns"] = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "ipv6": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    "+.lan",
    "+.local",
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    "localhost.work.weixin.qq.com"
  ],
  "default-nameserver": [
    "223.5.5.5",
    "119.29.29.29",
    "1.1.1.1",
    "8.8.8.8"
  ],
  "nameserver": [
    "https://dns.alidns.com/dns-query",
    "https://doh.pub/dns-query",
    "https://doh.360.cn/dns-query",
    "https://1.1.1.1/dns-query",
    "https://1.0.0.1/dns-query",
    "https://208.67.222.222/dns-query",
    "https://208.67.220.220/dns-query",
    "https://194.242.2.2/dns-query",
    "https://194.242.2.3/dns-query"
  ],
  "proxy-server-nameserver": [
    "https://dns.alidns.com/dns-query",
    "https://doh.pub/dns-query",
    "https://doh.360.cn/dns-query",
    "https://1.1.1.1/dns-query",
    "https://1.0.0.1/dns-query",
    "https://208.67.222.222/dns-query",
    "https://208.67.220.220/dns-query",
    "https://194.242.2.2/dns-query",
    "https://194.242.2.3/dns-query"
  ],
  "nameserver-policy": {
    "geosite:private,cn,geolocation-cn": [
      "https://dns.alidns.com/dns-query",
      "https://doh.pub/dns-query",
      "https://doh.360.cn/dns-query"
    ],
    "geosite:google,youtube,telegram,gfw,geolocation-!cn": [
      "https://1.1.1.1/dns-query",
      "https://1.0.0.1/dns-query",
      "https://208.67.222.222/dns-query",
      "https://208.67.220.220/dns-query",
      "https://194.242.2.2/dns-query",
      "https://194.242.2.3/dns-query"
    ]
  }
};
    // 覆盖原配置中的规则
    config["rule-providers"] = ruleProviders;
    config["rules"] = rules;
    
    
    config["proxy-groups"] = [
        {
            ...groupBaseOption,
            name: "PROXY",
            type: "select",
            proxies: [
              "🚀 手动切换",
              "链式代理",
              "♻️ 自动选择",
              ...allAreaProxiesNames,
            ],
        },
        // {
        //     ...groupBaseOption,
        //     name: "🔗 Ipv6",
        //     type: "select",
        //     filter: excludeRegexStr,
        //     "include-all": true,
        // },
        {
            ...groupBaseOption,
            name: "🚀 手动切换",
            type: "select",
            filter: excludeRegexStr,
            "include-all": true,
        },
        {
            ...groupBaseOption,
            name: "♻️ 自动选择",
            type: "url-test",
            tolerance: 100,
            filter: excludeRegexStr,
            "include-all": true,
        },
        // {
        //     ...groupBaseOption,
        //     name: "故障转移",
        //     type: "fallback",
        //     filter: excludeRegexStr,
        //     "include-all": true,
        //     icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/ambulance.svg",
        // },
        // {
        //     ...groupBaseOption,
        //     name: "负载均衡(散列)",
        //     type: "load-balance",
        //     strategy: "consistent-hashing",
        //     filter: excludeRegexStr,
        //     "include-all": true,
        //     icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/merry_go.svg",
        // },
        // {
        //     ...groupBaseOption,
        //     name: "负载均衡(轮询)",
        //     type: "load-balance",
        //     strategy: "round-robin",
        //     filter: excludeRegexStr,
        //     "include-all": true,
        //     icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/balance.svg",
        // },
        {
            ...groupBaseOption,
            url: "https://chatgpt.com",
            "expected-status": "200",
            name: "💬 OpenAi",
            type: "select",
            "include-all": true,
            filter: excludeRegexStr,
        },
        {
          ...groupBaseOption,
          name: "🎮 游戏平台",
          type: "select",
          "include-all": true,
          filter: excludeRegexStr,
        },
        {
          ...groupBaseOption,
          name: "链式前置",
          type: "select",
          "include-all": true,
          filter: excludeRegexStr,
        },
        {
          ...groupBaseOption,
          name: "链式落地",
          type: "select",
          proxies: webshareNodeList.map(node => node.name),
        },
        {
          name: "链式代理",
          type: "relay",
          proxies: ["链式前置", "链式落地"],
        },
        ...[
            ...userSelectorNames,
            "📲 电报消息",
            // "📹 油管视频",
            // "🌍 国外媒体",
            "🌏 国内媒体",
            // "📢 谷歌FCM",
            // "Ⓜ️ 微软Bing",
            "Ⓜ️ 微软云盘",
            "Ⓜ️ 微软服务",
            // "🍎 苹果服务",
            "🐟 漏网之鱼",
            ...[]
        ].map((name) => ({
            ...groupBaseOption,
            name,
            type: "select",
            proxies: commonProxies
        })),
        // {
        //     ...groupBaseOption,
        //     name: "🎥 奈飞视频",
        //     type: "select",
        //     proxies: ["🎥 奈飞节点", ...commonProxies],
        // },
        // {
        //     ...groupBaseOption,
        //     name: "🎥 奈飞节点",
        //     type: "select",
        //     proxies: NetflixProxies,
        // },
        // {
        //     ...groupBaseOption,
        //     name: "📺 巴哈姆特",
        //     type: "select",
        //     proxies: commonProxies,
        // },
        // {
        //     ...groupBaseOption,
        //     name: "📺 哔哩哔哩",
        //     type: "select",
        //     proxies: ["DIRECT", ...allAreaProxiesNames],
        // },
        // {
        //     ...groupBaseOption,
        //     name: "🎶 网易音乐",
        //     type: "select",
        //     proxies: NetEaseProxies,
        // },
        {
            ...groupBaseOption,
            name: "🎯 全球直连",
            type: "select",
            proxies: ["DIRECT", "PROXY", "♻️ 自动选择"],
        },
        {
            ...groupBaseOption,
            name: "🛑 广告拦截",
            type: "select",
            proxies: ["REJECT", "DIRECT"],
        },
        {
            ...groupBaseOption,
            name: "🍃 应用净化",
            type: "select",
            proxies: ["REJECT", "DIRECT"],
        },
        ...allAreaGroup
    ];


    return config;
}
  