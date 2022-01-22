const currentUrlString = window.location.href

if (currentUrlString.includes("youtube.com")) {
    let url = new URL(currentUrlString)

    if (url.pathname === "/watch") {
        url.protocol = "youtube:"
        
        window.location.assign(url.toString())
    }
}
