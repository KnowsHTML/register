# [Knows-HT.ML](https://knows-ht.ml)
Register a subdomain for **knows-ht.ml** today!
## How does it work?
You must create a pull request with a new JSON file within the `domains` folder, the name of it is irrelevant, just make sure it is unique.
It must follow the format provided below.
```jsonc
{
    "name": "The name of the domain, must be unique.",
    "record": {
        "RECORD_TYPE": "VALUE"
    },
    "proxied": true, // Determines if the domain is proxied or not through Cloudflare.
    "ttl": 3600
}
```
### Valid examples
```jsonc
{
    "name": "theuntraceable",
    "record": {
        "CNAME": "https://github.com"
    },
    "proxied": true,
    "ttl": 3600
}
```
```jsonc
{
    "name": "theuntraceable",
    "record": {
        "CNAME": "https://github.com"
    },
    "proxied": false,
    "ttl": 3400
}
```
```jsonc
{
    "name": "fortnite-developers-dont",
    "record": {
        "A": "128.0.0.1"
    },
    "proxied": true,
    "ttl": 1 // Use 1 for automatic TTL provided by Cloudflare.
}
```

### Invalid examples
```jsonc
{
    "name": "theuntraceable" // This lacks the record field.
}
```
```jsonc
{} // This lacks everything.
```
```jsonc
{
    "record": "CNAME" // This lacks the name field, and this isn't a dictionary/Map/Object.
}
```
```jsonc
{
    "name": "hacker",
    "records": {
        "CNAME": "192.168.1.1" // CNAMEs are to point to a domain, not IP.
    }
}
```

You get the point. If your JSON is invalid, the pull request will be closed and I
will hopefully tell you where you went wrong.
## Emails

I've been accepted into Cloudflare's email routing system, so if you would like to have a nice email address, such as `timmy@knows-ht.ml`, contact me on Discord at `The Untraceable#4852` or email me at `theuntraceable@theuntraceable.tech`.

## __Warning__
This is using Freenom, for the free domain, and it's only been registered for a year. This *might* mean that I am unable to keep this domain, Freenom *does* let me renew the domain a few days before it expires. I have made my Cloudflare API key and Github Person Access Token both expire on 5th of August 2023, so I will also need to update that. If you love the project and are up for it, remind me to renew the domain. If it isn't for free, I will have to renew it again, making the domain unavailable, *for a while though*. Whilst writing this I've realised that I still have your data, just not applied it, so I can very easily just reapply them.

I am not responsible for whatever you do on your domain. I am the owner of the root domain, you are the owner of the subdomain. You are responsible, and I am not to blame for **anything at all**.