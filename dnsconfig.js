var REG_NONE = NewRegistrar('none', 'NONE');    // No registrar.
var R53 = NewDnsProvider('r53_kimmoahokas', 'ROUTE53');

DEFAULTS(
    DnsProvider(R53),
    NAMESERVER_TTL('2d') // I'm not plannign to change DNS service often
    // DefaultTTL("24h") // Most of my zones don't change often
)

// Registered in https://www.domainkeskus.com/
D('kimia.fi', REG_NONE,
    NO_PURGE, // In the testing phase don't delete existing records

    // GitHub pages apex domain A records
    A('@', '185.199.108.153'), 
    A('@', '185.199.109.153'), 
    A('@', '185.199.110.153'), 
    A('@', '185.199.111.153'),
    CNAME('www', 'kimmoahokas.github.io.')
);
