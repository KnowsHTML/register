addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const body = await request.json()
    const addedFile = body["head_commit"]["added"][0]

    if(!addedFile.endsWith(".json")) return new Response("Not a JSON file", {
        status: 400
    })

    const config =  {
        headers: {
            "Authorization": "token TOKEN", // The token must have the permissions to read the public repo if public
            "Accept": "application/vnd.github.v3.object",
            "User-Agent": "/GITHUB_USER"
        }
    }
    const contents = await fetch(`https://api.github.com/repos/OWNER/REPO_NAME/contents/${addedFile}`, config)

    if(contents.status == 404) return new Response("File not found", {
        status: 404
    })

    const encodedFileContents = JSON.parse(await contents.text()).content // This is encoded with base64
    const decodedFileContents = atob(encodedFileContents) // This is now decoded
    const payload = JSON.parse(decodedFileContents)
    // Now payload is an Object

    const data = {
            type: Object.keys(payload.records)[0], // The configs records first key name
            name: payload.name,
            content: Object.values(payload.records)[0], // The configs records first value
            ttl: payload.ttl,
            proxied: payload.proxied == undefined ? true : payload.proxied
        }

    const dnsRecord = await fetch("https://api.cloudflare.com/client/v4/zones/ZONE_ID/dns_records", {
        method: "POST",
        headers: {
            "Authorization": "Bearer TOKEN",
            "Content-Type": "application/json"
        },
        data: data
    })
    return new Response(JSON.stringify(await dnsRecord.json()))
}

/*
This does not work on .cf, .ga, .gq, .ml, or .tk TLDs.
*/