var REG_NONE = NewRegistrar('none', 'NONE');    // No registrar.
var R53 = NewDnsProvider('r53_kimmoahokas', 'ROUTE53');

DEFAULTS(
    DnsProvider(R53),
    NAMESERVER_TTL('2d'), // I'm not plannign to change DNS service often
    DefaultTTL("24h") // Most of my zones don't change often
)

// Registered in https://www.domainkeskus.com/
D('kimia.fi', REG_NONE,
    MX('@', 10, 'mx-1.rightbox.com.'),
    MX('@', 10, 'mx-2.rightbox.com.'),
    MX('@', 10, 'mx-3.rightbox.com.'),
    TXT('@', 'v=spf1 include:pobox.com'),
    TXT('@', 'MS=ms69677192'),
    TXT('2016-12.pbsmtp._domainkey', 'v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC169hpRZzPAYhsbmJNYnvLwuixV0Kx1YkRQN/BzoFx5mT2Qg8OMAUgtOj2eW4CTtGPV6HyrfyqDNScXWzdxEXgVBDY3caHcOEcvCkFv2FWKEMYlwQvKrAPliegbchWbF9H6tDZ5VI/7bTtR8S2+Q2Y1Wl7/mvHh2sjQrRypKubVwIDAQAB'),

    // GitHub pages apex domain A records
    A('@', '185.199.108.153'),
    A('@', '185.199.109.153'),
    A('@', '185.199.110.153'),
    A('@', '185.199.111.153'),
    CNAME('www', 'kimmoahokas.github.io.'),

    TXT('_keybase', 'keybase-site-verification=GDZO7TRY6QYle_HbwBpAeMcXK1j_eDVC2SDSXKNzWu0'),

    R53_ALIAS('s3','A', 'd3jcyql5s4o6hf.cloudfront.net.', R53_ZONE('Z2FDTNDATAQYW2')),

    // mgmt network
    A('fw.mgmt', '10.0.1.1'),
    A('sw-1.mgmt','10.0.1.2'),
    A('unifi-1.mgmt', '10.0.1.4'),
);
